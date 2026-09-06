import image13 from "@/assets/image/all-project-13.png";
import telumeraScreenshot from "@/assets/image/project-telumera.jpg";
import telumeraGeographyScreenshot from "@/assets/image/project-telumera-geography.jpg";
import telumeraQualityScreenshot from "@/assets/image/project-telumera-quality.jpg";
import wuzziCpScreenshot from "@/assets/image/project-wuzzi-cp.jpg";
import wuzziCpLoginScreenshot from "@/assets/image/project-wuzzi-cp-login.jpg";
import wuzziCpMessagesScreenshot from "@/assets/image/project-wuzzi-cp-messages.jpg";
import wuzziCpAlarmSettingsScreenshot from "@/assets/image/project-wuzzi-cp-alarm-settings.jpg";
import wuzziCpBillingScreenshot from "@/assets/image/project-wuzzi-cp-billing.jpg";
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
import lingoPlaceholder from "@/assets/image/all-project-12.png";
import hulandCasinoUseCase from "@/assets/image/project-huland-casino-usecase.png";
import hulandCasinoPackages from "@/assets/image/project-huland-casino-packages.png";

export interface Project {
  /** Routes to /projects/:slug — must be unique and URL-safe. */
  slug: string;
  title: string;
  /** Short blurb shown on the project card. */
  shortDescription: string;
  /** Longer intro paragraph shown on the project's own detail page. */
  description: string;
  image: string;
  /** Spans two grid columns on the projects list instead of one. */
  featured?: boolean;
  /** Tech-stack badges shown on the detail page. Also used for a "School Assignment" marker. */
  tags?: string[];
  links?: { label: string; href: string }[];
  /** Extra screenshots shown in a "Screenshots" gallery on the detail page. */
  screenshots?: string[];
  /** Prose shown in a "Live demo" section, only when there's something to say about one. */
  liveDemo?: string;
  /**
   * When true, /projects/:slug renders this project's own component from
   * `components/pages/projects/custom/registry.ts` instead of the generic
   * ProjectDetailContent layout — for projects with enough going on (multiple
   * modules, a live demo, a case study) that the generic template undersells them.
   */
  custom?: boolean;
}

// Most entries below use real screenshots. Hupol has no UI to screenshot (a backend-only REST
// API) — it still uses the purchased template's placeholder art, visibly labeled with pixel
// dimensions.
export const projectsData: Project[] = [
  {
    slug: "telumera",
    title: "Telumera",
    shortDescription:
      "A self-hosted, privacy-first analytics platform — built module by module, with strict data-ownership rules over feature count.",
    description:
      "Telumera is a modular, self-hosted analytics platform in the spirit of PostHog or Plausible, built module by module as a full-stack learning and portfolio project. Each service owns its own database and schema — no service ever reads another's tables directly — and they only ever talk to each other through versioned events and typed APIs. Every metric traces back to raw vs. processed event counts, bot/duplicate classification, and consent state, instead of presenting a polished number with no visible provenance. It's live at telumera.nl, tracking this very portfolio's own traffic.",
    image: telumeraScreenshot,
    featured: true,
    tags: ["Vue 3", "TypeScript", "ASP.NET Core", "C#", "PostgreSQL", "ClickHouse", "Dapr", "Docker", "Azure"],
    links: [
      { label: "GitHub", href: "https://github.com/Anthony-AIR-03/telumera" },
      { label: "Live", href: "https://telumera.nl" },
    ],
    screenshots: [telumeraScreenshot, telumeraGeographyScreenshot, telumeraQualityScreenshot],
    liveDemo:
      "The dashboard is live at telumera.nl, sitting behind real sign-in — it's tracking this portfolio's own visitors right now. See the links below for the source and the live site.",
    custom: true,
  },
  {
    slug: "wuzzi-cp",
    title: "Wuzzi Alert Client Portal",
    shortDescription:
      "Client portal for a personal safety-alarm company — device tracking, safezones, and emergency contacts, with a fully mocked demo mode for public showcasing.",
    description:
      "A Vue 3 + Pinia client portal built for Wuzzi Alert, a Dutch personal-alarm provider, letting care staff manage a client's devices, GPS safezones, emergency call lists, and subscriptions with live WebSocket device notifications. The public demo here runs entirely against a self-hosted mock API and WebSocket server, seeded from the same fixtures used in its own Cypress test suite — the real production backend is never exposed.",
    image: wuzziCpScreenshot,
    featured: true,
    tags: ["Vue 3", "Pinia", "Vite", "Tailwind CSS", "Cypress", "WebSocket", "i18n"],
    screenshots: [
      wuzziCpLoginScreenshot,
      wuzziCpScreenshot,
      wuzziCpMessagesScreenshot,
      wuzziCpAlarmSettingsScreenshot,
      wuzziCpBillingScreenshot,
    ],
    liveDemo:
      "A live demo ran at wuzzi-cp.anthony-air.nl against the mocked backend described above — the real Wuzzi Alert production API was never exposed. It's currently locked down for confidentiality reasons agreed with the company, so it isn't publicly reachable right now.",
  },
  {
    slug: "github-dashboard",
    title: "GitHub Analytics Dashboard",
    shortDescription:
      "A school assignment: a GitHub analytics dashboard built entirely in native Web Components — no React, no Vue.",
    description:
      "Built as a final course assignment, this dashboard signs in with a GitHub token to browse your repositories and drill into one for its language breakdown, collaborators, and commit-frequency history. It's built with Lit and vanilla Web Components instead of a frontend framework, with a clean service/controller/view separation, a hand-rolled design-token system, and correct retry-with-backoff handling of GitHub's async stats endpoints (which return 202 until the data is ready).",
    image: githubDashboardScreenshot,
    tags: ["Lit", "Web Components", "ApexCharts", "Vite", "GitHub REST API", "School Assignment"],
    screenshots: [githubDashboardScreenshot],
  },
  {
    slug: "hupol",
    title: "Hupol Voting System",
    shortDescription:
      "A school assignment: a JWT-secured Spring Boot voting system with its own architecture rules enforced by automated tests.",
    description:
      "Hupol is a candidate/voting/results backend built for a software-quality-focused course at Hogeschool Utrecht. Beyond standard Spring Boot and JWT security, it enforces its own layered architecture with an ArchUnit test that fails the build if application-layer code is reached from the wrong package, plus EqualsVerifier-checked value objects and a benchmark-driven refactor exercise comparing two implementations of the same service under test.",
    image: image13,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "ArchUnit", "Docker", "School Assignment"],
  },
  {
    slug: "smokies",
    title: "Smokies",
    shortDescription:
      "A Rotterdam burger restaurant's website, built together with a fellow developer — since closed, but its own screenshots remain.",
    description:
      "Smokies was a real burger restaurant in Rotterdam. Built together with a fellow developer (Berkan Kaya) — commits from both of us are in its history, not just a shared repo — with a JSON menu feed building the page instead of hand-written HTML per item, an image carousel, an about page, and a PHPMailer-backed contact form, plus hand-tuned responsive and animation fixes down to iOS-specific quirks. No framework, no build step — just vanilla HTML/CSS/JS and PHP. The restaurant has since closed and its site is offline; the screenshots below are from its last live version.",
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
    title: "Tick-It",
    shortDescription:
      "A group project from Da Vinci College — a Trello-style help-ticket board where classmates post coding questions tagged by language.",
    description:
      "Tick-It is a Trello-style ticket board built as a group project at Da Vinci College with three or four classmates. Students post coding questions as cards tagged by language (PHP, HTML/CSS, JavaScript, Laravel, C++), organized into lesson-specific columns (e.g. \"PHP Les 1\", \"Laravel Les 1\") that a teacher or TA can manage — adding students, adding tags, and viewing all participants.",
    image: tickItScreenshot,
    tags: ["PHP", "Laravel", "JavaScript", "Group Project"],
  },
  {
    slug: "dali",
    title: "Dali",
    shortDescription:
      "A year-long Buro CITE internship — researching WCAG and ISO/IEC 25010, then refactoring a public-space reference handbook into accessible, testable components.",
    description:
      "Dali is a reference and requirements handbook for public-space management — chapters like climate adaptation, earthworks, sewage, and utilities, each with its own source references and a two-column \"Program of Requirements\" view. This was a roughly year-long (2022–2023) Front-end & Accessibility Developer internship at Buro CITE Nederland, spent researching and applying the WCAG and ISO/IEC 25010 standards throughout: auditing the existing application for accessibility and usability problems, translating WCAG guidelines into concrete technical fixes, and restructuring its semantic HTML and navigation for different user groups. Two documented sprints from that year show the work concretely — a component-based refactor to match a new house style, with client-run screen-reader testing that caught a real accessibility bug (skip links inside accordions that stayed invisible until keyboard focus revealed them) — and a backend sprint building an ASP.NET Core Web API for managing document attachments, done together with a fellow developer (Swen Sperling). Sprint reports disclosed real, known bugs rather than hiding them: a login that persisted via localStorage instead of sessionStorage (so users were never auto-logged-out), and a slow PDF-in-accordion render found during testing.",
    image: daliDashboard,
    tags: ["Accessibility", "WCAG", "ISO 25010", "JavaScript", "ASP.NET Core", "Web API"],
    screenshots: [daliDashboard, daliPve, daliBronnen],
  },
  {
    slug: "kaya-airbarlines",
    title: "Kaya AIRBARlines",
    shortDescription:
      "A group project for an HU software-architecture course — redesigning a brownfield event-planner API into a scalable airline booking platform using DDD, C4 diagrams, and a modular monolith.",
    description:
      "Kaya AIRBARlines is a software-architecture design exercise done with two fellow students (Berkan Kaya, Baris Sariusta) for an HU course on distributed-systems design. Starting from an existing brownfield Java/Spring Boot \"Event Planner\" REST API built by another developer, the assignment was to redesign it into a scalable SaaS platform for a fictional airline — translating events into flights and users into passengers. The real deliverable was the architecture work: a full design document covering functional scope and quality requirements (scalability, security, reliability, maintainability, performance), a Domain-Driven Design pass identifying bounded contexts (Passenger Management, Flight Management, Booking Management, Access Control, Communication), a chosen system architecture (a modular monolith over microservices, deliberately, given the team size and scope) and application architecture (a pragmatic Hexagonal/Ports & Adapters style layered onto the existing controller/service/repository structure), plus C4 context/container/component diagrams, a domain model, and a sequence diagram for the booking flow.",
    image: kayaC4Context,
    tags: ["Software Architecture", "DDD", "C4 Model", "Hexagonal Architecture", "Spring Boot", "Team Project"],
    screenshots: [kayaC4Context, kayaC4Container, kayaC4Component, kayaDomainModel],
  },
  {
    slug: "lingo-trainer",
    title: "Lingo Trainer",
    shortDescription:
      "A school assignment: a TDD-built Lingo word-guessing trainer, developed feature-first from Cucumber scenarios through to a tested Spring Boot API.",
    description:
      "Lingo Trainer is a backend for the word-guessing game Lingo, built for HU's Continuous Integration and Software Quality 1 (CISQ1) course with a strict test-first workflow: it started from user stories and Cucumber feature scenarios, followed by a UML diagram derived directly from those scenarios, before any production code was written. The core Round/Guess domain logic handles the trickiest part of Lingo's rules honestly — repeated letters in a guess are tracked with a hash map so a correct letter can't be marked twice — with edge cases driven out through iterative JUnit tests rather than assumed upfront. A Spring Data JPA-backed word repository and a random-word REST endpoint sit on top, with GitHub Actions running the full test suite (including a Postgres-free CI profile) on every push.",
    image: lingoPlaceholder,
    tags: ["Java", "Spring Boot", "TDD", "Cucumber", "JUnit", "PostgreSQL", "GitHub Actions", "School Assignment"],
  },
  {
    slug: "huland-casino",
    title: "HUland Casino",
    shortDescription:
      "A school assignment: a JWT-secured casino backend where a hand-rolled Blackjack engine (hit, stand, double down, surrender) sits behind its own bounded, layered module.",
    description:
      "Built across two phases of HU's Backend Programming 2 (BEP2) course, this is a Spring Boot casino backend with JWT-based authentication and a chip-balance system provided as a starting point, on top of which the actual assignment was to design and build a Blackjack module from scratch. That meant modelling cards, shuffling, dealing, and player/dealer scoring as a proper object-oriented domain layer first, then wiring in the game rules — hit, stand, double down, surrender — and finally exposing it through a REST controller, hiding the dealer's hole card until it's meaningfully revealed. Each bounded component (security, chips, blackjack) is deliberately structured with its own presentation/application/domain/data layers, following a use-case diagram and package architecture worked out before implementation.",
    image: hulandCasinoUseCase,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "Domain-Driven Design", "School Assignment"],
    screenshots: [hulandCasinoUseCase, hulandCasinoPackages],
  },
];
