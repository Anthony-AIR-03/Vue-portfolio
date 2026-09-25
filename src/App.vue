<script setup lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { projectsData, localize } from "@/assets/data/projectsData";
import { findCaseStudy } from "@/components/pages/projects/custom/caseStudies";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const route = useRoute();
const { t } = useI18n();

// Browser-tab title: "<page> - <site name>", re-run on navigation and on language switch.
watchEffect(() => {
  let page = t(String(route.meta.title ?? "nav.home"));
  const project = projectsData.find((p) => p.slug === route.params.slug);

  if (route.name === "project-detail" && project) {
    page = localize(project.title);
  } else if (route.name === "case-study") {
    const caseStudy = findCaseStudy(route.params.module, route.params.slug);
    if (caseStudy) page = `${t("pageTitles.caseStudy")}: ${t(caseStudy.nameKey)}`;
  }

  document.title = `${page} - ${t("pageTitles.siteName")}`;
});
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout" />
</template>
