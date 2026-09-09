/**
 * Per-module case studies for the Telumera project. Each shipped module in TelumeraProject.vue links
 * here; the long-form write-up itself lives as Markdown in src/assets/case-studies/<module>.<locale>.md
 * and is rendered by src/pages/CaseStudyPage.vue. Adding a case study = drop the two .md files in and
 * add a row below.
 */
export interface CaseStudyMeta {
  /** URL param and Markdown filename stem, e.g. "product-analytics". */
  module: string;
  /** Owning project's slug in projectsData — used to resolve the back-link. */
  projectSlug: string;
  /** i18n key for the module's display name (reused from the project's own module list). */
  nameKey: string;
}

export const caseStudies: CaseStudyMeta[] = [
  {
    module: "product-analytics",
    projectSlug: "telumera",
    nameKey: "projects.telumera.modules.productAnalytics.name",
  },
];

const sources = import.meta.glob("/src/assets/case-studies/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function pathFor(module: string, locale: string): string {
  return `/src/assets/case-studies/${module}.${locale}.md`;
}

export function findCaseStudy(module: unknown, projectSlug: unknown): CaseStudyMeta | undefined {
  return caseStudies.find((c) => c.module === module && c.projectSlug === projectSlug);
}

/** Raw Markdown for a module in the requested locale, falling back to English. */
export function getCaseStudyMarkdown(module: string, locale: string): string | null {
  return sources[pathFor(module, locale)] ?? sources[pathFor(module, "en")] ?? null;
}

/** Whether a locale-specific translation actually exists (vs. an English fallback). */
export function caseStudyHasLocale(module: string, locale: string): boolean {
  return pathFor(module, locale) in sources;
}
