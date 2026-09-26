<script setup lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { projectsData, localize } from "@/assets/data/projectsData";
import { findCaseStudy } from "@/components/pages/projects/custom/caseStudies";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const SITE_URL = "https://anthony-air.nl";

const route = useRoute();
const { t } = useI18n();

/** Route name → pageDescriptions key; anything unlisted falls back to the home description. */
const descriptionKeys: Record<string, string> = {
  home: "home",
  "about-us": "about",
  projects: "projects",
  services: "services",
  contact: "contact",
};

/** Sets an attribute on a <head> tag, creating the tag on first use. */
function setHeadTag(selector: string, tag: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
}

function removeHeadTag(selector: string) {
  document.head.querySelector(selector)?.remove();
}

// Browser-tab title ("<page> - <site name>") plus the per-page tags search engines read after
// rendering: description, canonical URL, and noindex for pages that shouldn't be indexed.
// Re-runs on navigation and on language switch.
watchEffect(() => {
  let page = t(String(route.meta.title ?? "nav.home"));
  let description = t(`pageDescriptions.${descriptionKeys[String(route.name)] ?? "home"}`);
  const project = projectsData.find((p) => p.slug === route.params.slug);

  if (route.name === "project-detail" && project) {
    page = localize(project.title);
    description = localize(project.shortDescription);
  } else if (route.name === "case-study") {
    const caseStudy = findCaseStudy(route.params.module, route.params.slug);
    if (caseStudy) page = `${t("pageTitles.caseStudy")}: ${t(caseStudy.nameKey)}`;
    if (project) description = localize(project.shortDescription);
  }

  document.title = `${page} - ${t("pageTitles.siteName")}`;
  setHeadTag('meta[name="description"]', "meta", { name: "description", content: description });

  // The server answers unknown URLs with index.html and status 200, so mark those noindex.
  const indexable =
    route.meta.title !== "pageTitles.notFound" && route.meta.title !== "pageTitles.inConstruction";
  if (indexable) {
    // Always the apex https URL, so www/http copies and query strings fold into one page.
    const url = SITE_URL + (route.path === "/" ? "/" : route.path.replace(/\/$/, ""));
    removeHeadTag('meta[name="robots"]');
    setHeadTag('link[rel="canonical"]', "link", { rel: "canonical", href: url });
    setHeadTag('meta[property="og:url"]', "meta", { property: "og:url", content: url });
  } else {
    removeHeadTag('link[rel="canonical"]');
    removeHeadTag('meta[property="og:url"]');
    setHeadTag('meta[name="robots"]', "meta", { name: "robots", content: "noindex" });
  }
});
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout" />
</template>
