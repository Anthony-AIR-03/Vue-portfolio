<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import type { Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();

// TODO: replace with the real module list once the case study is adapted for the portfolio —
// see telumera/CLAUDE.md's module roadmap table and docs/case-studies/product-analytics.md.
const modules = [
  "Product Analytics — tracking SDK, collector, dashboards",
  "Performance Monitoring",
  "Error Tracking",
  "Deployment Intelligence",
  "AI Insights",
];
</script>
<template>
  <CustomTransition>
    <article class="card-style-two project-details p-32px">
      <header class="project-details__banner">
        <img :src="project.image" :alt="`${project.title} banner`" class="img-fluid" />
        <h1 class="heading-2">{{ project.title }}</h1>
        <p class="textL">{{ project.description }}</p>
      </header>

      <ul v-if="project.tags?.length" class="project-tags" aria-label="Tech stack">
        <li v-for="tag in project.tags" :key="tag" class="project-tags__item">
          {{ tag }}
        </li>
      </ul>

      <section class="project-modules" aria-label="Modules">
        <h2 class="heading-3">Modules</h2>
        <p class="textL project-modules__note">
          TODO: this is a self-hosted, modular analytics platform built module-by-module — replace
          this placeholder list with the real, current module status.
        </p>
        <ul class="project-modules__list">
          <li v-for="module in modules" :key="module">{{ module }}</li>
        </ul>
      </section>

      <section class="project-demo" aria-label="Live demo">
        <h2 class="heading-3">Live demo</h2>
        <p class="textL">TODO: embed a real screenshot/demo once ready — for now, see the links below.</p>
      </section>

      <nav v-if="project.links?.length" class="project-links" aria-label="Project links">
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

.project-modules,
.project-demo {
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
