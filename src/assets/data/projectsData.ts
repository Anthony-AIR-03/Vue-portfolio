import { getLanguage } from "@/languages/i18nUtils";
import hupolArchTest from "@/assets/image/project-hupol-archtest.jpg";
import hupolResults from "@/assets/image/project-hupol-results.jpg";
import telumeraScreenshot from "@/assets/image/project-telumera.jpg";
import telumeraGeographyScreenshot from "@/assets/image/project-telumera-geography.jpg";
import telumeraQualityScreenshot from "@/assets/image/project-telumera-quality.jpg";
import telumeraCiList from "@/assets/image/project-telumera-ci-list.jpg";
import telumeraCiMatrix from "@/assets/image/project-telumera-ci-matrix.jpg";
import wuzziCpScreenshot from "@/assets/image/project-wuzzi-cp.jpg";
import wuzziCpLoginScreenshot from "@/assets/image/project-wuzzi-cp-login.jpg";
import wuzziCpMessagesScreenshot from "@/assets/image/project-wuzzi-cp-messages.jpg";
import wuzziCpAlarmSettingsScreenshot from "@/assets/image/project-wuzzi-cp-alarm-settings.jpg";
import wuzziCpBillingScreenshot from "@/assets/image/project-wuzzi-cp-billing.jpg";
import wuzziCpSafezoneMapScreenshot from "@/assets/image/project-wuzzi-cp-safezone-map.jpg";
import githubDashboardScreenshot from "@/assets/image/project-github-dashboard.png";
import smokiesHero from "@/assets/image/smokies-real-1.png";
import smokiesMenu from "@/assets/image/smokies-real-2.png";
import smokiesMenuMains from "@/assets/image/smokies-real-3.png";
import smokiesMenuDesserts from "@/assets/image/smokies-real-4.png";
import smokiesAbout from "@/assets/image/smokies-real-5.png";
import smokiesContact from "@/assets/image/smokies-real-6.png";
import smokiesFooter from "@/assets/image/smokies-real-7.png";
import tickItScreenshot from "@/assets/image/ticket-systeem-real.png";
import daliDashboard from "@/assets/image/project-dali-dashboard.jpg";
import daliPve from "@/assets/image/project-dali-pve.jpg";
import daliBronnen from "@/assets/image/project-dali-bronnen.jpg";
import kayaC4Context from "@/assets/image/project-kaya-c4-context.png";
import kayaC4Container from "@/assets/image/project-kaya-c4-container.png";
import kayaC4Component from "@/assets/image/project-kaya-c4-component.png";
import kayaDomainModel from "@/assets/image/project-kaya-domain-model.png";
import lingoGuess from "@/assets/image/project-lingo-guess.jpg";
import lingoOutput from "@/assets/image/project-lingo-output.jpg";
import lingoCi from "@/assets/image/project-lingo-ci.jpg";
import hulandCasinoUseCase from "@/assets/image/project-huland-casino-usecase.png";
import hulandCasinoPackages from "@/assets/image/project-huland-casino-packages.png";
import hulandCasinoCode from "@/assets/image/project-huland-casino-code.jpg";
import hulandCasinoOutput from "@/assets/image/project-huland-casino-output.jpg";

/** Text shown per-project that changes with the site's language switcher. */
export interface LocalizedText {
  en: string;
  nl: string;
}

/** Picks the string for the site's current language, falling back to English. */
export function localize(text: LocalizedText): string {
  const lang = getLanguage() as keyof LocalizedText;
  return text[lang] ?? text.en;
}

export interface Project {
  /** Routes to /projects/:slug — must be unique and URL-safe. */
  slug: string;
  title: LocalizedText;
  /** Short blurb shown on the project card. */
  shortDescription: LocalizedText;
  /** Longer intro paragraph shown on the project's own detail page. */
  description: LocalizedText;
  image: string;
  /** Spans two grid columns on the projects list instead of one. */
  featured?: boolean;
  /**
   * Tech-stack badges shown on the detail page. Also used for a "School Assignment" marker.
   * Deliberately not localized — these are proper nouns/tech names, unchanged in Dutch.
   */
  tags?: string[];
  links?: { label: string; href: string }[];
  /** Extra screenshots shown in a "Screenshots" gallery on the detail page. */
  screenshots?: string[];
  /** Prose shown in a "Live demo" section, only when there's something to say about one. */
  liveDemo?: LocalizedText;
  /**
   * When true, /projects/:slug renders this project's own component from
   * `components/pages/projects/custom/registry.ts` instead of the generic
   * ProjectDetailContent layout — for projects with enough going on (multiple
   * modules, a live demo, a case study) that the generic template undersells them.
   */
  custom?: boolean;
}

// Most entries below use real screenshots. Hupol and Lingo Trainer are backend-only REST APIs
// with no UI to screenshot, so their image is a real source-code excerpt instead.
export const projectsData: Project[] = [
  {
    slug: "telumera",
    title: { en: "Telumera", nl: "Telumera" },
    shortDescription: {
      en: "A self-hosted, privacy-first analytics platform — built module by module, with strict data-ownership rules over feature count.",
      nl: "Een self-hosted, privacyvriendelijk analyseplatform — module voor module gebouwd, met strikte regels voor data-eigendom die zwaarder wegen dan het aantal features.",
    },
    description: {
      en: "Telumera is a modular, self-hosted analytics platform in the spirit of PostHog or Plausible, built module by module as a full-stack learning and portfolio project. Each service owns its own database and schema — no service ever reads another's tables directly — and they only ever talk to each other through versioned events and typed APIs. Every metric traces back to raw vs. processed event counts, bot/duplicate classification, and consent state, instead of presenting a polished number with no visible provenance. A real CI/CD pipeline backs every push: GitHub Actions builds all six services as Docker images in parallel, pushes them to a container registry, then a self-hosted runner on the NAS pulls and redeploys automatically — the same pipeline that shipped every fix disclosed elsewhere on this page. It's live at telumera.nl, tracking this very portfolio's own traffic.",
      nl: "Telumera is een modulair, self-hosted analyseplatform in de geest van PostHog of Plausible, module voor module gebouwd als full-stack leer- en portfolioproject. Elke service bezit zijn eigen database en schema — geen enkele service leest ooit rechtstreeks uit de tabellen van een andere — en onderling communiceren ze uitsluitend via geversioneerde events en typed API's. Elke metriek is te herleiden tot ruwe versus verwerkte event-aantallen, bot/duplicaat-classificatie en consent-status, in plaats van een gepolijst getal zonder zichtbare herkomst te tonen. Elke push wordt ondersteund door een echte CI/CD-pipeline: GitHub Actions bouwt alle zes services parallel als Docker-images, pusht ze naar een container registry, waarna een self-hosted runner op de NAS ze automatisch ophaalt en herdeployt — dezelfde pipeline die elke fix heeft uitgeleverd die elders op deze pagina wordt genoemd. Het platform draait live op telumera.nl en volgt het verkeer van deze portfolio zelf.",
    },
    image: telumeraScreenshot,
    featured: true,
    tags: ["Vue 3", "TypeScript", "ASP.NET Core", "C#", "PostgreSQL", "ClickHouse", "Dapr", "Docker", "GitHub Actions", "Azure"],
    links: [
      { label: "GitHub", href: "https://github.com/Anthony-AIR-03/telumera" },
      { label: "Live", href: "https://telumera.nl" },
    ],
    screenshots: [
      telumeraScreenshot,
      telumeraGeographyScreenshot,
      telumeraQualityScreenshot,
      telumeraCiList,
      telumeraCiMatrix,
    ],
    liveDemo: {
      en: "The dashboard is live at telumera.nl, sitting behind real sign-in — it's tracking this portfolio's own visitors right now. See the links below for the source and the live site.",
      nl: "Het dashboard draait live op telumera.nl, achter een echte inlog — het volgt op dit moment de bezoekers van deze portfolio zelf. Zie de links hieronder voor de broncode en de live site.",
    },
    custom: true,
  },
  {
    slug: "wuzzi-cp",
    title: { en: "Wuzzi Alert Client Portal", nl: "Wuzzi Alert Klantportaal" },
    shortDescription: {
      en: "Client portal for a personal safety-alarm company — device tracking, safezones, and emergency contacts, with a fully mocked demo mode for public showcasing.",
      nl: "Klantportaal voor een bedrijf in persoonsalarmering — apparaatlocaties, veilige zones en noodcontacten, met een volledig gemockte demomodus voor openbare presentatie.",
    },
    description: {
      en: "A Vue 3 + Pinia client portal built for Wuzzi Alert, a Dutch personal-alarm provider, letting care staff manage a client's devices, GPS safezones, emergency call lists, and subscriptions with live WebSocket device notifications. The public demo here runs entirely against a self-hosted mock API and WebSocket server, seeded from the same fixtures used in its own Cypress test suite — the real production backend is never exposed.",
      nl: "Een klantportaal (Vue 3 + Pinia) gebouwd voor Wuzzi Alert, een Nederlandse aanbieder van persoonsalarmering, waarmee zorgmedewerkers de apparaten, gps-veilige zones, noodbellijsten en abonnementen van een cliënt beheren, met live apparaatmeldingen via WebSocket. De publieke demo hier draait volledig tegen een self-hosted mock-API en WebSocket-server, gevuld met dezelfde fixtures als de eigen Cypress-testsuite — de echte productie-backend wordt nooit blootgesteld.",
    },
    image: wuzziCpScreenshot,
    featured: true,
    tags: ["Vue 3", "Pinia", "Vite", "Tailwind CSS", "Cypress", "WebSocket", "i18n"],
    screenshots: [
      wuzziCpLoginScreenshot,
      wuzziCpScreenshot,
      wuzziCpMessagesScreenshot,
      wuzziCpAlarmSettingsScreenshot,
      wuzziCpSafezoneMapScreenshot,
      wuzziCpBillingScreenshot,
    ],
    liveDemo: {
      en: "A live demo ran at wuzzi-cp.anthony-air.nl against the mocked backend described above — the real Wuzzi Alert production API was never exposed. It's currently locked down for confidentiality reasons agreed with the company, so it isn't publicly reachable right now.",
      nl: "Er draaide een live demo op wuzzi-cp.anthony-air.nl tegen de hierboven beschreven gemockte backend — de echte productie-API van Wuzzi Alert is nooit blootgesteld. Deze is momenteel afgesloten om vertrouwelijkheidsredenen die met het bedrijf zijn afgesproken, en is op dit moment dus niet publiek bereikbaar.",
    },
  },
  {
    slug: "github-dashboard",
    title: { en: "GitHub Analytics Dashboard", nl: "GitHub-analysedashboard" },
    shortDescription: {
      en: "A school assignment: a GitHub analytics dashboard built entirely in native Web Components — no React, no Vue.",
      nl: "Een schoolopdracht: een GitHub-analysedashboard volledig gebouwd met native Web Components — geen React, geen Vue.",
    },
    description: {
      en: "Built as a final course assignment, this dashboard signs in with a GitHub token to browse your repositories and drill into one for its language breakdown, collaborators, and commit-frequency history. It's built with Lit and vanilla Web Components instead of a frontend framework, with a clean service/controller/view separation, a hand-rolled design-token system, and correct retry-with-backoff handling of GitHub's async stats endpoints (which return 202 until the data is ready).",
      nl: "Gebouwd als eindopdracht voor een vak: dit dashboard logt in met een GitHub-token om je repositories te doorbladeren en per repository de taalverdeling, medewerkers en commit-frequentie te bekijken. Het is gebouwd met Lit en vanilla Web Components in plaats van een frontend-framework, met een nette scheiding tussen service/controller/view, een handgeschreven design-token-systeem en correcte retry-with-backoff-afhandeling van GitHub's asynchrone stats-endpoints (die 202 teruggeven totdat de data klaarstaat).",
    },
    image: githubDashboardScreenshot,
    tags: ["Lit", "Web Components", "ApexCharts", "Vite", "GitHub REST API", "School Assignment"],
    screenshots: [githubDashboardScreenshot],
  },
  {
    slug: "hupol",
    title: { en: "Hupol Voting System", nl: "Hupol Stemsysteem" },
    shortDescription: {
      en: "A school assignment: a JWT-secured Spring Boot voting system with its own architecture rules enforced by automated tests.",
      nl: "Een schoolopdracht: een met JWT beveiligd stemsysteem in Spring Boot, met eigen architectuurregels die worden afgedwongen door geautomatiseerde tests.",
    },
    description: {
      en: "Hupol is a candidate/voting/results backend built for a software-quality-focused course at Hogeschool Utrecht. Beyond standard Spring Boot and JWT security, it enforces its own layered architecture with an ArchUnit test that fails the build if application-layer code is reached from the wrong package, plus EqualsVerifier-checked value objects and a benchmark-driven refactor exercise comparing two implementations of the same service under test.",
      nl: "Hupol is een backend voor kandidaten, stemmen en uitslagen, gebouwd voor een vak gericht op softwarekwaliteit aan de Hogeschool Utrecht. Naast standaard Spring Boot en JWT-beveiliging handhaaft het zijn eigen gelaagde architectuur met een ArchUnit-test die de build laat falen zodra applicatielaag-code vanuit het verkeerde package wordt benaderd, plus met EqualsVerifier gecontroleerde value objects en een benchmark-gedreven refactor-oefening die twee implementaties van dezelfde service met elkaar vergelijkt.",
    },
    image: hupolArchTest,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "ArchUnit", "Docker", "School Assignment"],
    screenshots: [hupolArchTest, hupolResults],
  },
  {
    slug: "smokies",
    title: { en: "Smokies", nl: "Smokies" },
    shortDescription: {
      en: "A Rotterdam burger restaurant's website, built together with a fellow developer — since closed, but its own screenshots remain.",
      nl: "De website van een Rotterdams burgerrestaurant, gebouwd samen met een mede-ontwikkelaar — inmiddels gesloten, maar de eigen screenshots blijven bewaard.",
    },
    description: {
      en: "Smokies was a real burger restaurant in Rotterdam. Built together with a fellow developer (Berkan Kaya) — commits from both of us are in its history, not just a shared repo — with a JSON menu feed building the page instead of hand-written HTML per item, an image carousel, an about page, and a PHPMailer-backed contact form, plus hand-tuned responsive and animation fixes down to iOS-specific quirks. No framework, no build step — just vanilla HTML/CSS/JS and PHP. The restaurant has since closed and its site is offline; the screenshots below are from its last live version.",
      nl: "Smokies was een echt burgerrestaurant in Rotterdam. Gebouwd samen met een mede-ontwikkelaar (Berkan Kaya) — commits van ons beiden staan in de geschiedenis, niet alleen een gedeelde repo — met een JSON-menufeed die de pagina opbouwt in plaats van met de hand geschreven HTML per gerecht, een afbeeldingencarrousel, een over-ons-pagina en een contactformulier op basis van PHPMailer, plus met de hand afgestemde responsive- en animatiefixes tot en met iOS-specifieke eigenaardigheden. Geen framework, geen buildstap — puur vanilla HTML/CSS/JS en PHP. Het restaurant is inmiddels gesloten en de site is offline; de screenshots hieronder zijn van de laatst live versie.",
    },
    image: smokiesHero,
    tags: ["Vanilla JavaScript", "PHP", "PHPMailer", "Responsive Design"],
    screenshots: [
      smokiesHero,
      smokiesMenu,
      smokiesMenuMains,
      smokiesMenuDesserts,
      smokiesAbout,
      smokiesContact,
      smokiesFooter,
    ],
  },
  {
    slug: "tick-it",
    title: { en: "Tick-It", nl: "Tick-It" },
    shortDescription: {
      en: "A group project from Da Vinci College — a Trello-style help-ticket board where classmates post coding questions tagged by language.",
      nl: "Een groepsproject van het Da Vinci College — een Trello-achtig ticketbord waarop klasgenoten programmeervragen posten, getagd per taal.",
    },
    description: {
      en: "Tick-It is a Trello-style ticket board built as a group project at Da Vinci College with three or four classmates. Students post coding questions as cards tagged by language (PHP, HTML/CSS, JavaScript, Laravel, C++), organized into lesson-specific columns (e.g. \"PHP Les 1\", \"Laravel Les 1\") that a teacher or TA can manage — adding students, adding tags, and viewing all participants.",
      nl: "Tick-It is een Trello-achtig ticketbord, gebouwd als groepsproject aan het Da Vinci College met drie of vier klasgenoten. Studenten plaatsen programmeervragen als kaarten, getagd per taal (PHP, HTML/CSS, JavaScript, Laravel, C++), georganiseerd in lesspecifieke kolommen (bijv. \"PHP Les 1\", \"Laravel Les 1\") die een docent of TA kan beheren — studenten toevoegen, tags toevoegen en alle deelnemers bekijken.",
    },
    image: tickItScreenshot,
    tags: ["PHP", "Laravel", "JavaScript", "Group Project"],
  },
  {
    slug: "dali",
    title: { en: "Dali", nl: "Dali" },
    shortDescription: {
      en: "A year-long Buro CITE internship — researching WCAG and ISO/IEC 25010, then refactoring a public-space reference handbook into accessible, testable components.",
      nl: "Een jaar durende stage bij Buro CITE — onderzoek naar WCAG en ISO/IEC 25010, gevolgd door het refactoren van een naslagwerk voor de openbare ruimte naar toegankelijke, testbare componenten.",
    },
    description: {
      en: "Dali is a reference and requirements handbook for public-space management — chapters like climate adaptation, earthworks, sewage, and utilities, each with its own source references and a two-column \"Program of Requirements\" view. This was a roughly year-long (2022–2023) Front-end & Accessibility Developer internship at Buro CITE Nederland, spent researching and applying the WCAG and ISO/IEC 25010 standards throughout: auditing the existing application for accessibility and usability problems, translating WCAG guidelines into concrete technical fixes, and restructuring its semantic HTML and navigation for different user groups. Two documented sprints from that year show the work concretely — a component-based refactor to match a new house style, with client-run screen-reader testing that caught a real accessibility bug (skip links inside accordions that stayed invisible until keyboard focus revealed them) — and a backend sprint building an ASP.NET Core Web API for managing document attachments, done together with a fellow developer (Swen Sperling). Sprint reports disclosed real, known bugs rather than hiding them: a login that persisted via localStorage instead of sessionStorage (so users were never auto-logged-out), and a slow PDF-in-accordion render found during testing.",
      nl: "Dali is een naslag- en eisenhandboek voor het beheer van de openbare ruimte — hoofdstukken als klimaatadaptatie, grondwerk, riolering en nutsvoorzieningen, elk met eigen bronverwijzingen en een tweekoloms \"Programma van Eisen\"-weergave. Dit was een ruwweg jaar durende (2022–2023) stage als Front-end & Accessibility Developer bij Buro CITE Nederland, waarin voortdurend onderzoek werd gedaan naar en toepassing werd gegeven aan de standaarden WCAG en ISO/IEC 25010: de bestaande applicatie doorlichten op toegankelijkheids- en bruikbaarheidsproblemen, WCAG-richtlijnen vertalen naar concrete technische oplossingen, en de semantische HTML en navigatie herstructureren voor verschillende gebruikersgroepen. Twee gedocumenteerde sprints uit dat jaar laten het werk concreet zien — een componentgebaseerde refactor om aan te sluiten bij een nieuwe huisstijl, met screenreader-tests door de klant die een echte toegankelijkheidsbug aan het licht brachten (skip-links binnen accordeons die onzichtbaar bleven totdat toetsenbordfocus ze onthulde) — en een backend-sprint waarin een ASP.NET Core Web API werd gebouwd voor het beheren van documentbijlagen, samen met een mede-ontwikkelaar (Swen Sperling). Sprintrapportages meldden echte, bekende bugs in plaats van ze te verbergen: een login die via localStorage bleef bestaan in plaats van via sessionStorage (waardoor gebruikers nooit automatisch werden uitgelogd), en een trage weergave van pdf's binnen accordeons die tijdens het testen werd gevonden.",
    },
    image: daliDashboard,
    tags: ["Accessibility", "WCAG", "ISO 25010", "JavaScript", "ASP.NET Core", "Web API"],
    screenshots: [daliDashboard, daliPve, daliBronnen],
  },
  {
    slug: "kaya-airbarlines",
    title: { en: "Kaya AIRBARlines", nl: "Kaya AIRBARlines" },
    shortDescription: {
      en: "A group project for an HU software-architecture course — redesigning a brownfield event-planner API into a scalable airline booking platform using DDD, C4 diagrams, and a modular monolith.",
      nl: "Een groepsproject voor een softwarearchitectuurvak aan de HU — het herontwerpen van een brownfield event-planner-API tot een schaalbaar boekingsplatform voor een luchtvaartmaatschappij, met DDD, C4-diagrammen en een modulaire monoliet.",
    },
    description: {
      en: "Kaya AIRBARlines is a software-architecture design exercise done with two fellow students (Berkan Kaya, Baris Sariusta) for an HU course on distributed-systems design. Starting from an existing brownfield Java/Spring Boot \"Event Planner\" REST API built by another developer, the assignment was to redesign it into a scalable SaaS platform for a fictional airline — translating events into flights and users into passengers. The real deliverable was the architecture work: a full design document covering functional scope and quality requirements (scalability, security, reliability, maintainability, performance), a Domain-Driven Design pass identifying bounded contexts (Passenger Management, Flight Management, Booking Management, Access Control, Communication), a chosen system architecture (a modular monolith over microservices, deliberately, given the team size and scope) and application architecture (a pragmatic Hexagonal/Ports & Adapters style layered onto the existing controller/service/repository structure), plus C4 context/container/component diagrams, a domain model, and a sequence diagram for the booking flow.",
      nl: "Kaya AIRBARlines is een softwarearchitectuur-ontwerpoefening, gedaan samen met twee medestudenten (Berkan Kaya, Baris Sariusta) voor een HU-vak over het ontwerpen van gedistribueerde systemen. Uitgaande van een bestaande brownfield Java/Spring Boot \"Event Planner\"-REST-API, gebouwd door een andere ontwikkelaar, was de opdracht om deze te herontwerpen tot een schaalbaar SaaS-platform voor een fictieve luchtvaartmaatschappij — events werden vluchten en gebruikers werden passagiers. Het echte opleverproduct was het architectuurwerk: een volledig ontwerpdocument met functionele scope en kwaliteitseisen (schaalbaarheid, beveiliging, betrouwbaarheid, onderhoudbaarheid, performance), een Domain-Driven Design-analyse die bounded contexts identificeerde (Passenger Management, Flight Management, Booking Management, Access Control, Communication), een gekozen systeemarchitectuur (bewust een modulaire monoliet in plaats van microservices, gezien de teamgrootte en scope) en applicatiearchitectuur (een pragmatische Hexagonal/Ports & Adapters-stijl, gelaagd over de bestaande controller/service/repository-structuur), plus C4-context-, container- en componentdiagrammen, een domeinmodel en een sequence-diagram voor de boekingsflow.",
    },
    image: kayaC4Context,
    tags: ["Software Architecture", "DDD", "C4 Model", "Hexagonal Architecture", "Spring Boot", "Team Project"],
    screenshots: [kayaC4Context, kayaC4Container, kayaC4Component, kayaDomainModel],
  },
  {
    slug: "lingo-trainer",
    title: { en: "Lingo Trainer", nl: "Lingo Trainer" },
    shortDescription: {
      en: "A school assignment: a TDD-built Lingo word-guessing trainer with a real Game/Round state machine, developed feature-first from Cucumber scenarios through to a tested, CI-driven Spring Boot API.",
      nl: "Een schoolopdracht: een met TDD gebouwde Lingo-woordraaktrainer met een echte Game/Round-statemachine, feature-first ontwikkeld vanuit Cucumber-scenario's tot een geteste, CI-gedreven Spring Boot-API.",
    },
    description: {
      en: "Lingo Trainer is a backend for the word-guessing game Lingo, built for HU's Continuous Integration and Software Quality 1 (CISQ1) course with a strict test-first workflow: it started from user stories and Cucumber feature scenarios, followed by a UML diagram derived directly from those scenarios, before any production code was written. A Game aggregate manages a sequence of Rounds, each with its own five-attempt loss condition, a progressively-revealed hint, and the trickiest part of Lingo's rules handled honestly — repeated letters in a guess are tracked with a hash map so a correct letter can't be marked twice — with a real scoring formula rewarding fewer attempts. GitHub Actions runs the full JUnit suite (plus JaCoCo coverage) on every push, and its real run history is refreshingly unpolished: several early red runs while the workflow itself was being debugged, then a genuine test failure caught while hardening the marking logic, all fixed in later commits rather than force-pushed away. Running it live for this portfolio surfaced one more real bug worth disclosing rather than hiding: guesses are upper-cased before an exact-match dictionary lookup against lower-cased stored words, so no guess currently registers as valid — the screenshot below shows precisely that, a genuine loss after five attempts.",
      nl: "Lingo Trainer is een backend voor het woordraadspel Lingo, gebouwd voor het HU-vak Continuous Integration and Software Quality 1 (CISQ1) met een strikte test-first-werkwijze: het begon bij user stories en Cucumber-featurescenario's, gevolgd door een UML-diagram dat rechtstreeks uit die scenario's is afgeleid, nog vóór er productiecode werd geschreven. Een Game-aggregaat beheert een reeks Rounds, elk met een eigen verliesvoorwaarde na vijf pogingen, een geleidelijk onthulde hint, en het lastigste deel van Lingo's regels eerlijk afgehandeld — herhaalde letters in een gok worden bijgehouden met een hashmap, zodat een juiste letter niet twee keer kan worden gemarkeerd — met een echte scoreformule die minder pogingen beloont. GitHub Actions draait de volledige JUnit-suite (plus JaCoCo-coverage) bij elke push, en de echte run-geschiedenis is verfrissend ongepolijst: meerdere vroege rode runs terwijl de workflow zelf nog werd gedebugd, daarna een echte testfout die aan het licht kwam tijdens het aanscherpen van de matchlogica, allemaal opgelost in latere commits in plaats van weggewerkt met een force-push. Het live draaien voor deze portfolio bracht nog een echte bug aan het licht die het waard is om te melden in plaats van te verbergen: gokken worden naar hoofdletters omgezet vóór een exacte match met de in kleine letters opgeslagen woorden, waardoor geen enkele gok momenteel als geldig wordt herkend — de screenshot hieronder toont precies dat: een echt verlies na vijf pogingen.",
    },
    image: lingoGuess,
    tags: ["Java", "Spring Boot", "TDD", "Cucumber", "JUnit", "PostgreSQL", "GitHub Actions", "School Assignment"],
    screenshots: [lingoGuess, lingoCi, lingoOutput],
  },
  {
    slug: "huland-casino",
    title: { en: "HUland Casino", nl: "HUland Casino" },
    shortDescription: {
      en: "A school assignment: a JWT-secured casino backend where a hand-rolled Blackjack engine (hit, stand, double down, surrender) sits behind its own bounded, layered module.",
      nl: "Een schoolopdracht: een met JWT beveiligde casino-backend waarin een zelfgebouwde Blackjack-engine (hit, stand, double down, surrender) achter zijn eigen afgebakende, gelaagde module zit.",
    },
    description: {
      en: "Built across two phases of HU's Backend Programming 2 (BEP2) course, this is a Spring Boot casino backend with JWT-based authentication and a chip-balance system provided as a starting point, on top of which the actual assignment was to design and build a Blackjack module from scratch. That meant modelling cards, shuffling, dealing, and player/dealer scoring as a proper object-oriented domain layer first, then wiring in the game rules — hit, stand, double down, surrender — and finally exposing it through a REST controller, hiding the dealer's hole card until it's meaningfully revealed. Each bounded component (security, chips, blackjack) is deliberately structured with its own presentation/application/domain/data layers, following a use-case diagram and package architecture worked out before implementation.",
      nl: "Gebouwd over twee fases van het HU-vak Backend Programming 2 (BEP2): een Spring Boot casino-backend met JWT-authenticatie en een chip-saldosysteem als startpunt, waarbovenop de eigenlijke opdracht was om een Blackjack-module vanaf nul te ontwerpen en te bouwen. Dat betekende eerst kaarten, schudden, delen en speler/dealer-scoring modelleren als een echte objectgeoriënteerde domeinlaag, daarna de spelregels inbouwen — hit, stand, double down, surrender — en het geheel ten slotte via een REST-controller ontsluiten, waarbij de verborgen kaart van de dealer pas op een zinvol moment wordt onthuld. Elk afgebakend onderdeel (security, chips, blackjack) is bewust opgebouwd met zijn eigen presentatie-, applicatie-, domein- en datalaag, volgens een use-casediagram en pakketarchitectuur die vóór de implementatie zijn uitgewerkt.",
    },
    image: hulandCasinoCode,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "Domain-Driven Design", "School Assignment"],
    screenshots: [hulandCasinoCode, hulandCasinoOutput, hulandCasinoUseCase, hulandCasinoPackages],
  },
];
