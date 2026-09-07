<script setup lang="ts">
import { useI18n } from "vue-i18n";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ProjectScreenshots from "./ProjectScreenshots.vue";
import LiveDemoSection from "./LiveDemoSection.vue";
import { localize, type Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();
const { t } = useI18n();
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
