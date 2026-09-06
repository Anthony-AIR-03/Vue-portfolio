import image13 from "@/assets/image/all-project-13.png";
import image31 from "@/assets/image/all-project-31.png";
import telumeraScreenshot from "@/assets/image/project-telumera.jpg";
import telumeraGeographyScreenshot from "@/assets/image/project-telumera-geography.jpg";
import telumeraQualityScreenshot from "@/assets/image/project-telumera-quality.jpg";
import wuzziCpScreenshot from "@/assets/image/project-wuzzi-cp.jpg";
import wuzziCpLoginScreenshot from "@/assets/image/project-wuzzi-cp-login.jpg";
import githubDashboardScreenshot from "@/assets/image/project-github-dashboard.png";

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
  /**
   * When true, /projects/:slug renders this project's own component from
   * `components/pages/projects/custom/registry.ts` instead of the generic
   * ProjectDetailContent layout — for projects with enough going on (multiple
   * modules, a live demo, a case study) that the generic template undersells them.
   */
  custom?: boolean;
}

// Telumera/wuzzi-cp/github-dashboard use real screenshots. Hupol has no UI to screenshot (a
// backend-only REST API) and Smokies has no standalone domain to screenshot from — both still use
// the purchased template's placeholder art, visibly labeled with pixel dimensions.
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
    links: [{ label: "Live demo", href: "https://wuzzi-cp.anthony-air.nl" }],
    screenshots: [wuzziCpLoginScreenshot, wuzziCpScreenshot],
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
      "A burger restaurant's website, built together with a fellow developer — a JSON-driven menu and a working contact form, no framework needed.",
    description:
      "Smokies is a real small-business site — built together with a fellow developer (Berkan Kaya), with commits from both of us in its history, not just a shared repo. A JSON menu feed builds the page instead of hand-written HTML per item, an image carousel, an about page, and a PHPMailer-backed contact form, plus hand-tuned responsive and animation fixes down to iOS-specific quirks. No framework, no build step — just vanilla HTML/CSS/JS and PHP.",
    image: image31,
    tags: ["Vanilla JavaScript", "PHP", "PHPMailer", "Responsive Design"],
    // Smokies has no standalone domain (its own <link rel="canonical"> is still the placeholder
    // https://example.com/) — the only real, code-referenced "Smokies site" is its Thuisbezorgd.nl
    // ordering page. As of this writing that URL redirects to Thuisbezorgd's own homepage instead of
    // the Smokies listing (the listing looks inactive) — verify before shipping, or replace with a
    // real domain if Smokies gets one.
    links: [{ label: "Smokies", href: "https://www.thuisbezorgd.nl/menu/smokies" }],
  },
];
