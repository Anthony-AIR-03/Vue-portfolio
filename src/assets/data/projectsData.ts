import image13 from "@/assets/image/all-project-13.png";
import image31 from "@/assets/image/all-project-31.png";
import telumeraScreenshot from "@/assets/image/project-telumera.jpg";
import wuzziCpScreenshot from "@/assets/image/project-wuzzi-cp.jpg";
import githubDashboardScreenshot from "@/assets/image/project-github-dashboard.jpg";

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
  /**
   * When true, /projects/:slug renders this project's own component from
   * `components/pages/projects/custom/registry.ts` instead of the generic
   * ProjectDetailContent layout — for projects with enough going on (multiple
   * modules, a live demo, a case study) that the generic template undersells them.
   */
  custom?: boolean;
}

// Telumera/wuzzi-cp/github-dashboard use real screenshots. Hupol has no UI to screenshot (a
// backend-only REST API) and Your Studio's real site is currently unreachable (broken SSL cert) —
// both still use the purchased template's placeholder art, visibly labeled with pixel dimensions.
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
    slug: "your-studio",
    title: "Your Studio",
    shortDescription:
      "A small freelance web-design partnership — real client sites built and shipped together, not solo practice work.",
    description:
      "Your Studio was a freelance web-design partnership with a fellow developer: real small-business client sites, built and launched together rather than as solo practice. The flagship is Smokies, a burger restaurant's site with a JSON-driven menu system, a PHPMailer-backed contact form, and hand-tuned responsive and animation fixes down to iOS-specific quirks — no framework, no build step, just vanilla HTML/CSS/JS and PHP.",
    image: image31,
    tags: ["Vanilla JavaScript", "PHP", "PHPMailer", "Responsive Design"],
    // yourstudio.nl is the studio's real site (credited in Smokies's own footer) — confirmed live
    // and serving real content, but currently has a broken/expired SSL certificate, so visitors hit
    // a browser security warning. Fix the cert, or drop this link, before shipping.
    links: [{ label: "Studio site", href: "https://www.yourstudio.nl" }],
    custom: true,
  },
];
