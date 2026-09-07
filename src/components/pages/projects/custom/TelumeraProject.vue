<script setup lang="ts">
import { useI18n } from "vue-i18n";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ProjectScreenshots from "../ProjectScreenshots.vue";
import LiveDemoSection from "../LiveDemoSection.vue";
import { localize, type Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();
const { t } = useI18n();

// Roadmap per telumera/CLAUDE.md — each module only becomes its own deployable service once it
// actually needs independent scaling/security/failure isolation, not by default. Names/details
// live in projects.telumera.modules.* so they translate with the rest of the page.
const modules = [
  { key: "productAnalytics", status: "shipped" },
  { key: "performanceMonitoring", status: "planned" },
  { key: "errorTracking", status: "planned" },
  { key: "deploymentIntelligence", status: "planned" },
  { key: "goalsAndFunnels", status: "planned" },
  { key: "aiInsights", status: "planned" },
  { key: "alertsAndUptime", status: "planned" },
] as const;
</script>
<template>
  <CustomTransition>
    <article class="card-style-two project-details p-32px">
      <header class="project-details__banner">
        <img :src="project.image" :alt="`${localize(project.title)} banner`" />
        <h1 class="heading-2">{{ localize(project.title) }}</h1>
        <p class="textL">{{ localize(project.description) }}</p>
      </header>

      <ul v-if="project.tags?.length" class="project-tags" :aria-label="t('projects.techStack')">
        <li v-for="tag in project.tags" :key="tag" class="project-tags__item">
          {{ tag }}
        </li>
      </ul>

      <section class="project-modules" :aria-label="t('projects.telumera.modulesHeading')">
        <h2 class="heading-3">{{ t("projects.telumera.modulesHeading") }}</h2>
        <p class="textL project-modules__note">
          {{ t("projects.telumera.modulesNote") }}
        </p>
        <ul class="project-modules__list">
          <li v-for="module in modules" :key="module.key" class="project-modules__item">
            <span class="project-modules__status" :data-status="module.status">{{
              t(`projects.telumera.status.${module.status}`)
            }}</span>
            <span>
              <strong>{{ t(`projects.telumera.modules.${module.key}.name`) }}</strong>
              <template v-if="t(`projects.telumera.modules.${module.key}.detail`)">
                — {{ t(`projects.telumera.modules.${module.key}.detail`) }}
              </template>
            </span>
          </li>
        </ul>
      </section>

      <ProjectScreenshots :images="project.screenshots ?? []" :alt="localize(project.title)" />

      <LiveDemoSection v-if="project.liveDemo" :text="localize(project.liveDemo)" />

      <nav v-if="project.links?.length" class="project-links" :aria-label="t('projects.projectLinks')">
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-links__item"
        >
          {{ link.label }}
        </a>
      </nav>
    </article>
  </CustomTransition>
</template>

<style scoped>
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project-tags__item {
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid var(--black-neutral3);
  color: var(--white-neutral1);
  font-size: 13px;
  font-weight: 500;
}

.project-modules {
  border-radius: 32px;
  border: 1px solid var(--black-neutral2);
  padding: 23px;
}

.project-modules__note {
  opacity: 0.7;
  padding-top: 8px;
}

.project-modules__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.project-modules__item {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.project-modules__status {
  flex-shrink: 0;
  min-width: 70px;
  text-align: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #fff;
}

.project-modules__status[data-status="shipped"] {
  background: #0ca30c;
}

.project-modules__status[data-status="planned"] {
  background: var(--black-neutral3);
  color: var(--white-neutral1);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.project-links__item {
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: underline;
}
</style>
