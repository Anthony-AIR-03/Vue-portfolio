<script setup lang="ts">
import { PhArrowLeft, PhArrowRight } from "@phosphor-icons/vue";
import type { Project } from "@/assets/data/projectsData";

defineProps<{ previous: Project; next: Project }>();
</script>
<template>
  <nav class="project-pager" aria-label="Other projects">
    <router-link
      :to="{ name: 'project-detail', params: { slug: previous.slug } }"
      class="project-pager__link"
    >
      <PhArrowLeft :size="20" />
      <span class="project-pager__text">
        <small>Previous</small>
        <strong>{{ previous.title }}</strong>
      </span>
    </router-link>
    <router-link
      :to="{ name: 'project-detail', params: { slug: next.slug } }"
      class="project-pager__link project-pager__link--next"
    >
      <span class="project-pager__text">
        <small>Next</small>
        <strong>{{ next.title }}</strong>
      </span>
      <PhArrowRight :size="20" />
    </router-link>
  </nav>
</template>

<style scoped>
.project-pager {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 40px;
}

.project-pager__link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid var(--black-neutral2);
  color: var(--white-neutral1);
  flex: 1;
  transition: all 0.3s ease;
}

.project-pager__link:hover {
  border-color: var(--secondary-color);
}

.project-pager__link--next {
  justify-content: flex-end;
  text-align: right;
}

.project-pager__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-pager__text small {
  opacity: 0.6;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-pager__text strong {
  font-weight: 600;
}

@media (max-width: 600px) {
  .project-pager {
    flex-direction: column;
  }

  .project-pager__link--next {
    justify-content: flex-start;
    text-align: left;
  }
}
</style>
