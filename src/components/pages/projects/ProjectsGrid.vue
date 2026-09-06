<script setup lang="ts">
import { projectsData } from "@/assets/data/projectsData";
import ProjectCard from "./ProjectCard.vue";
</script>
<template>
  <section class="projects-grid" aria-label="Projects">
    <ProjectCard
      v-for="project in projectsData"
      :key="project.slug"
      :project="project"
    />
  </section>
</template>

<style scoped>
.projects-grid {
  margin-top: 60px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}

.projects-grid :deep(.project-featured) {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .projects-grid :deep(.project-featured) {
    grid-column: span 1;
  }
}
</style>
