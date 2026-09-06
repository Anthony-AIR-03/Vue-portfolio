import image11 from "@/assets/image/all-project-11.png";
import image12 from "@/assets/image/all-project-12.png";
import image13 from "@/assets/image/all-project-13.png";
import image21 from "@/assets/image/all-project-21.png";

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
  /** Tech-stack badges shown on the detail page. */
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

export const projectsData: Project[] = [
  {
    slug: "telumera",
    title: "Telumera",
    shortDescription:
      "TODO: one-line summary — self-hosted, privacy-first analytics and developer-intelligence platform.",
    description:
      "TODO: replace with the real Telumera write-up. See telumera/docs/case-studies/product-analytics.md for the source material once it's ready to adapt here.",
    image: image21,
    featured: true,
    tags: ["Vue 3", "TypeScript", "ASP.NET Core", "ClickHouse", "Dapr"],
    links: [{ label: "GitHub", href: "https://github.com/Anthony-AIR-03/telumera" }],
    custom: true,
  },
  {
    slug: "project-one",
    title: "TODO: Project One",
    shortDescription: "TODO: replace with a real one-line project summary.",
    description: "TODO: replace with a real project description.",
    image: image11,
    tags: ["TODO"],
  },
  {
    slug: "project-two",
    title: "TODO: Project Two",
    shortDescription: "TODO: replace with a real one-line project summary.",
    description: "TODO: replace with a real project description.",
    image: image12,
    tags: ["TODO"],
  },
  {
    slug: "project-three",
    title: "TODO: Project Three",
    shortDescription: "TODO: replace with a real one-line project summary.",
    description: "TODO: replace with a real project description.",
    image: image13,
    tags: ["TODO"],
  },
];
