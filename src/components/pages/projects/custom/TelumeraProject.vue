<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ProjectScreenshots from "../ProjectScreenshots.vue";
import type { Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();

// Roadmap per telumera/CLAUDE.md — each module only becomes its own deployable service once it
// actually needs independent scaling/security/failure isolation, not by default.
const modules = [
  { name: "Product Analytics", detail: "tracking SDK, collector, ClickHouse pipeline, live dashboard", status: "Shipped" },
  { name: "Performance Monitoring", detail: "Web Vitals, percentiles, regression detection", status: "Planned" },
  { name: "Error Tracking", detail: "grouping, source maps, issue lifecycle", status: "Planned" },
  { name: "Deployment Intelligence", detail: "release tracking, before/after comparison", status: "Planned" },
  { name: "Goals and Funnels", detail: "", status: "Planned" },
  { name: "AI Insights", detail: "Claude via typed tools, no raw DB access", status: "Planned" },
  { name: "Alerts and Uptime", detail: "", status: "Planned" },
];
</script>
<template>
  <CustomTransition>
    <article class="card-style-two project-details p-32px">
      <header class="project-details__banner">
        <img :src="project.image" :alt="`${project.title} banner`" />
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
          Built module by module, each one only becoming its own deployable service once it
          genuinely needs independent scaling, storage, or a security boundary.
        </p>
        <ul class="project-modules__list">
          <li v-for="module in modules" :key="module.name" class="project-modules__item">
            <span class="project-modules__status" :data-status="module.status">{{ module.status }}</span>
            <span>
              <strong>{{ module.name }}</strong>
              <template v-if="module.detail"> — {{ module.detail }}</template>
            </span>
          </li>
        </ul>
      </section>

      <ProjectScreenshots :images="project.screenshots ?? []" :alt="project.title" />

      <section class="project-demo" aria-label="Live demo">
        <h2 class="heading-3">Live demo</h2>
        <p class="textL">
          The dashboard is live at telumera.nl, sitting behind real sign-in — it's tracking this
          portfolio's own visitors right now. See the links below for the source and the live site.
        </p>
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
  width: 70px;
  text-align: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #fff;
}

.project-modules__status[data-status="Shipped"] {
  background: #0ca30c;
}

.project-modules__status[data-status="Planned"] {
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
