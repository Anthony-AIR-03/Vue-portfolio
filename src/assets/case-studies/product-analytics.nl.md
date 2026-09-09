# Product Analytics — controleerbaar, privacy-first, self-hosted

> Een case study over de eerste opgeleverde module van Telumera, Product Analytics (backlog-mijlpalen
> M01.1 tot en met M01.8). Geschreven nadat de module end-to-end live ging tegen een echt domein
> (`anthony-air.nl` → `telumera.nl`) op 2026-09-03.

## Het probleem

Elk gangbaar webanalyse-tool dwingt een keuze af: privacy-schendende standaardinstellingen (cross-site
tracking, fingerprinting, datadeling met advertentienetwerken), of een verzameling smalle
single-purpose-tools, of cijfers die je op goed geloof moet aannemen omdat er geen manier is om te zien
wat eruit is gefilterd en waarom. De Product Analytics-module van Telumera is gebouwd om te toetsen of
een self-hosted, modulair alternatief op alle drie tegelijk een echt antwoord kon geven — eerst voor één
echte site, `anthony-air.nl`, met de bedoeling het later te veralgemenen.

De eigenlijke stelling van de module is niet "nauwkeurigere analytics". Het is het **Accuracy Principle**:
*elk cijfer moet herleidbaar zijn tot wat er daadwerkelijk is verzameld en wat eruit is gefilterd en
waarom* — geen schijnprecisie. Concreet betekent dat: elke metriek die deze module rapporteert wordt
geleverd mét de gedocumenteerde definitie, de tellingen van ruwe versus verwerkte events, de
duplicaat/bot-classificatie (gemarkeerd, nooit stilzwijgend weggegooid), de sampling-status en de
privacyconfiguratie erachter. Die randvoorwaarde heeft bijna elke niet-triviale beslissing hieronder
gevormd — het is geen compliance-voetnoot, het is de ontwerpopdracht.

## Architectuur, en de beslissingen die vooraf niet vanzelfsprekend waren

De module is werkelijk een ander soort service afhankelijk van waar je in de pipeline kijkt, en die vorm
is op elke stap bewust gekozen in plaats van overal terug te vallen op één patroon:

**Event Collector — het enige publieke, niet-geauthenticeerde oppervlak.** De collector bezit bewust
helemaal geen persistente data: het is het enige endpoint op het hele platform dat verkeer van een
anonieme browser moet accepteren, dus is het bewust dun gehouden — valideren, bufferen, publiceren,
vergeten. Geaccepteerde events komen terecht in een in-memory begrensde wachtrij die door een
achtergrondservice wordt leeggemaakt in plaats van een synchrone publish per request, waarmee de
ingestion-latency wordt losgekoppeld van de publish-latency, tegen de geaccepteerde prijs van een
mogelijk verloren event bij een crash tussen accepteren en publiceren. Die afweging wordt benoemd, niet
verborgen.

**Analytics Service — waar de echte state leeft, en waarom het geen streaming materialized view is.** Er
bestond nergens in deze codebase een ClickHouse materialized-view- of streaming-aggregatiepatroon vóór
deze module, en het is hier ook niet gebruikt: een inactiviteitsgat van 30 minuten definieert een
sessiegrens, en een view die op inserts triggert kan structureel niet weten of een later event nog bij
een al afgesloten sessie hoort. In plaats daarvan worden sessies en de vijf dagelijkse rollup-tabellen
periodiek *herberekend* vanaf een watermark (een kleine Postgres-controletabel) die achterloopt op "nu"
met een veiligheidsbuffer — het afhandelen van late events is geen apart mechanisme dat er achteraf op is
geschroefd, het is een direct gevolg van dit ene ontwerp: een laat event voor een sessie die dagen
geleden is afgesloten maakt die sessie op de volgende tick gewoon vuil, ongeacht de leeftijd.

**De volgorde van idempotentie-marker versus ClickHouse-write is een benoemde afweging, geen
vergissing.** De Postgres-idempotentie-marker committeert *vóór* de ClickHouse-write, niet erna en niet
in één transactie — de twee stores kunnen er geen delen. Dat accepteert zeldzaam eventverlies bij een
crash tussen de twee writes, in ruil voor de garantie dat retries een metriek nooit dubbel tellen. Gezien
het eigenlijke doel van de module — voorkomen dat retry-duplicaten cijfers opblazen — werd dat als de
juiste kant beoordeeld om op te dwalen, en er bestaat een reconciliatierapport-tool specifiek om een
eventueel gat zichtbaar te maken in plaats van stil te houden.

**Device/browser/OS-classificatie bestaat uit met de hand geschreven substring-heuristiek, geen
fingerprinting-library.** Het privacy-dreigingsmodel vraagt om "begrensde categorieën… geen volledige
fingerprint-strings met hoge entropie" — een echte UA-parsing-library zou tegen die eis in werken, niet
ernaartoe, dus de classifier blijft bewust grof.

**GeoIP is een lokale database-lookup, nooit een aanroep naar een externe API.** De lookup leest een
lokale country-database in MaxMind-formaat in-process, gesleuteld op een *al afgekapt* IP, en slaat
alleen de ISO-landcode op — er bestaat nergens in het analytics-schema een IP-kolom, wat een sterkere
garantie is dan "we bewaren het niet volgens beleid": er is geen kolom die een toekomstige wijziging per
ongeluk kan gaan vullen.

**De live-bezoekersprojectie is expliciet de zwakste metriek in het systeem, en zegt dat hardop.** Het
op Redis gebaseerde live-paneel van 5 minuten wordt nooit gepersisteerd, nooit gereconcilieerd en voedt
nooit een sessie, een rollup of het reconciliatierapport — het is "ongeveer wie er nu is",
gedocumenteerd als structureel anders dan elk ander cijfer dat het dashboard toont, juist zodat niemand
het voor zo'n cijfer aanziet.

## Privacy door constructie, niet door beleid

De standaard bezoekers-identifier wordt server-side per event berekend —
`hash(siteId + dailySalt + truncatedIp + userAgent)` — met een salt die elke 24 uur roteert. Dat is een
echte, benoemde beperking: bezoekersretentie over dagen heen is in de standaardmodus structureel niet
beschikbaar, niet slechts uitgeschakeld. Een site-eigenaar die het nodig heeft kan kiezen voor een
persistente, consent-gestuurde identifier — maar dat is een expliciete configuratiekeuze, nooit een
stille standaard. Het vastleggen van query-strings werkt alleen op allowlist-basis (`utm_*` standaard),
met een denylist-vangnet voor alles wat op een token of credential lijkt, ongeacht de allowlist-status.
Ruwe events hebben een TTL van 90 dagen die op schemaniveau in ClickHouse wordt afgedwongen; aggregaten
hebben een ondergrens voor het aantal bezoekers (5 unieke bezoekers) waaronder een rollup-rij wordt
gemarkeerd als `is_below_privacy_floor` — geschreven en bevraagbaar, nooit stilzwijgend verborgen,
dezelfde conventie "gemarkeerd, niet verwijderd" die op bot-verkeer wordt toegepast.

## Wat er stukging — en hoe het werd gevangen

De eigen filosofie van de module — "controleerbaar, niet alleen beweerd te werken" — is gedurende de hele
ontwikkeling op zichzelf toegepast: bijna elke mijlpaal is geverifieerd tegen een echt draaiende stack,
niet alleen gecompileerd, en die discipline is wat de bugs hieronder daadwerkelijk aan het licht bracht.
Geen enkele hiervan zou zijn gevangen door een build-stap of een type-checker.

- **Een ClickHouse-fout "aggregate function found inside another aggregate function"** — door een alias
  uit een buitenste `SELECT` te hergebruiken in een tweede expressie in dezelfde lijst — werd alleen
  gevonden door de aggregatiequery's rechtstreeks tegen een live ClickHouse-instantie te draaien vóór ze
  in C# te schrijven, een praktijk die vanaf M01.5 op elke rollup-query in de module is toegepast.
- **Een TTL-cast-bug**: een TTL toepassen op een `DateTime64`-kolom in ClickHouse 24.8 mislukt
  regelrecht zonder een expliciete `toDateTime()`-cast — onzichtbaar tot het werd getest tegen de echte
  engineversie die in gebruik is.
- **Een al bestaande integratietest die nooit echt slaagde.** Een helper voor het tellen van rijen riep
  `JsonNode.GetValue<int>()` aan op een ClickHouse `count()`-resultaat, dat ClickHouse's outputformaat
  tussen aanhalingstekens zet als een JSON-*string* (het is `UInt64`) — een exception, geen stil verkeerd
  antwoord. Het voor het eerst samen draaien van de *hele* integratiesuite, in plaats van mijlpaal voor
  mijlpaal, is wat het aan het licht bracht.
- **De fallback van de bounce rate bij een nulperiode ervoor was 100%, niet 0%.** De allereerste week van
  een verse site toonde "Bounce rate ↓ 0,0% t.o.v. vorige periode" — de vorige waarde van één metriek
  tegen nul controleren ving "geen eerdere data" voor de bounce rate specifiek nooit, omdat
  `1 - engagedRate` bij 0% engaged 100% bounce is. Alleen gevonden door het echte dashboard in een echte
  browser tegen echte data te bedienen, opgelost door de delta van elke kaart af te laten hangen van
  `previous.sessions > 0` in plaats van een nulcontrole per metriek.
- **De user-agent-stylesheet van een native `<dialog>` overschrijft stilzwijgend de auteurs-CSS.** De
  glossary-drawer werd tegen de linkerrand vastgezet ondanks `right-0` in de eigen classes, omdat de
  top-layer-UA-stylesheet van de dialog `inset: 0` zet (inclusief `left: 0`), wat `right-0` alleen niet
  opheft.
- **Dapr-sidecars losgekoppeld door een gedeeltelijke container-recreate.** Een app-container alleen
  opnieuw aanmaken (zonder de bijbehorende Dapr-sidecar) laat de sidecar gebonden aan een dode
  network-namespace — `localhost:3500` weigert dan binnen de nieuwe container en elke Dapr-aanroep
  mislukt. Vroeg in de module voor het eerst geraakt, de volgende keer *meteen herkend* in plaats van
  vanaf nul opnieuw uitgezocht, en uiteindelijk permanent gesloten door de deploy-workflow alle vijf
  Dapr-sidecars na elke deploy te laten force-recreaten — precies deze bug is wat het hele dashboard
  "Couldn't load" liet tonen en het live-paneel offline liet gaan bij de allereerste NAS-deploy.
- **Helemaal geen CORS-afhandeling in de Event Collector**, pas gevonden na het allereerste echte
  browserverkeer vanaf `anthony-air.nl` — elke eerdere test van de collector was server-naar-server
  geweest, dus een cross-origin-preflight had simpelweg nergens heen te gaan. Opgelost met een
  *dynamisch* CORS-beleid per request dat afgaat op de eigen geregistreerde toegestane origins van elke
  site (bewust niet de vaste origin-lijst die de gateway en analytics-service gebruiken, omdat de
  collector multi-tenant is). De fix die het aanvankelijk opleverde crashte bij het opstarten (de
  CORS-services waren nooit geregistreerd) — een dependency-injection-fout die een build niet kan
  vangen, alleen een echte deploy kon dat.
- **GeoIP stilzwijgend nooit geïnstalleerd**, ondanks een eerdere notitie die beweerde van wel —
  herleid tot een verkeerd geplakte licentiesleutel in het productie-env-bestand, onzichtbaar tot het
  Geography-tabblad tegen echt verkeer werd gecontroleerd en de opstart-log van de analytics-service
  zelf ("geen database") daadwerkelijk werd gelezen.
- **De acquisitie-uitsplitsing was alleen UTM**, dus echt niet-campagneverkeer (LinkedIn, Google,
  direct) toonde een kanaal met een lege bron-kolom — geen bug in strikte zin, maar een gat dat pas
  zichtbaar was zodra er echt referrer-verkeer bestond om het bloot te leggen. Opgelost door een
  referrer-host-dimensie toe te voegen, afgeleid van het referrer-domein van de sessie.

De rode draad: type-checking, linting en unit-tests vingen echte problemen, maar de bugs die een bezoeker
daadwerkelijk zouden hebben bereikt — het CORS-gat, de GeoIP-misconfiguratie, de bounce-rate-fallback,
het loskoppelen van de sidecars — werden alleen gevonden door de echte pipeline tegen echt verkeer te
draaien en de daadwerkelijke output te lezen, niet door de code te inspecteren die het had moeten
produceren.

## Huidige status

Sinds 2026-09-03 is de module end-to-end live: `telumera.nl` (dashboard, gateway, analytics / live hub en
event collector, elk op een eigen subdomein achter een Cloudflare Tunnel en een reverse proxy) bedient
een echte workspace en site, `anthony-air.nl` is voorzien van de tracking-SDK, en echt page-view-verkeer
stroomt vanaf de portfolio via de collector het dashboard in — overview, pagina's, de traffic-grafiek,
het live-bezoekerspaneel, geografie en de acquisitie-bron-uitsplitsing weerspiegelen allemaal echte
bezoeken. Deploys zijn volledig geautomatiseerd: een push naar `main` bouwt container-images en rolt ze
uit naar de NAS via een dedicated self-hosted runner, met health checks die een geslaagde uitrol
bewaken.

Twee verificatiestappen die nog openstonden zijn nu afgerond, beide echt uitgevoerd tegen de live NAS
(2026-09-05):

- **Synthetisch acceptatieverkeer.** Zes gescripte journeys raakten de live `collect.telumera.nl` — een
  engaged sessie, een bounce, een bot-user-agent, een dubbel event-id, een misvormd event (26
  properties boven de limiet van 25 van de validator) en een onbekend site-token — en elke gaf precies de
  verwachte collector-respons terug. Het reconciliatierapport voor dezelfde datum toonde **Accepted =
  Processed = Stored = 8**, een perfecte reconciliatie zonder verloren events tussen de collector en
  ClickHouse. De run leverde ook één leerzame false-positive op: alle 8 events, niet alleen de bewuste
  "bot"-journey, kwamen terug gemarkeerd als bot. De oorzaak lag in het test-tool, niet in de pipeline —
  de bot-detector behandelt een ontbrekende User-Agent-header als een botsignaal (een bewuste,
  gedocumenteerde heuristiek), en het verkeers-tool zet alleen een UA op zijn ene bewuste bot-journey,
  dus elke andere journey zag er voor de classifier identiek bot-achtig uit. Echt browserverkeer draagt
  altijd een echte UA, en daarom kwam dit tijdens eerdere live-verificaties nooit naar boven. Met de
  pipeline bevestigd schoon is de tracking-snippet van `anthony-air.nl` van `staging` naar `production`
  omgezet.
- **Back-up en restore.** Een back-upscript (een dump per database, elke ClickHouse-tabel geëxporteerd
  als gezipt native formaat, message-broker-definities) en een restore-testscript (wegwerpcontainers,
  gecontroleerd tegen het eigen rij-aantal-manifest van de back-up) draaiden beide schoon tegen de live
  NAS — elk tabel- en rij-aantal kwam exact overeen. Dit echt uitvoeren, niet alleen de scripts lezen,
  bracht twee gaten aan het licht waar geen van beide een test voor had: beide scripts wisten alleen het
  lokale dev-env-bestand te vinden, dus op de NAS (die een ander bestand heeft) zou de back-up
  stilzwijgend met het verkeerde wachtwoord tegen de echte draaiende containers hebben
  geauthenticeerd; en de standaard back-upbestemming lag in dezelfde map die de deploy-workflow bij elke
  deploy spiegelt, dus een back-up die daar werd geschreven zou door de eerstvolgende push naar `main`
  worden verwijderd. Beide opgelost; de back-up draait nu nachtelijks via cron naar een bestemming buiten
  de deploy-tree.

![Overview-tabblad met het live-bezoekerspaneel dat 2 echte actieve sessies toont](/case-studies/overview-live-visitors.jpg)

![Geography-tabblad, echte op GeoIP gebaseerde landuitsplitsing voor anthony-air.nl](/case-studies/geography.jpg)

![Data-quality-scherm: 98,2% acceptatiegraad, 0 berichten in de dead-letter-queue](/case-studies/data-quality.jpg)

## Wat dit laat zien

Naast de analytics-cijfers zelf is deze module de eerste plek waar meerdere platformbrede patronen echt
zijn beproefd: het paar transactional outbox / idempotente consumer onder echte retry-omstandigheden,
een echte publish/subscribe-abonnee die op de events van een andere service reageert zonder herstart, een
live WebSocket-oppervlak dat de gateway volledig omzeilt omdat een sidecar-naar-sidecar-forwarder geen
WebSocket-upgrade kan dragen, en een volledig geautomatiseerde build-image-deploy-pipeline tegen een
echte self-hosted NAS zonder handmatige stap voorbij een `git push`. De buglijst hierboven is het deel
van deze case study dat het meest de moeite waard is om serieus te nemen: elk ervan werd gevangen omdat
de module tegen iets echts werd gecontroleerd — een live database, een echte browser, echt verkeer —
niet omdat de code er bij inspectie correct uitzag.
