<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projectsData } from "@/assets/data/projectsData";
import { customProjectComponents } from "@/components/pages/projects/custom/registry";
import ProjectDetailContent from "@/components/pages/projects/ProjectDetailContent.vue";
import ProjectPager from "@/components/pages/projects/ProjectPager.vue";
import AboutTopLeftElement from "@/components/shared/AboutTopLeftElement.vue";
import EllipseShapeLandingTwoBottomRight from "@/components/shared/EllipseShapeLandingTwoBottomRight.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from "@/components/shared/AfterEffect.vue";

const route = useRoute();
const router = useRouter();

const project = computed(() =>
  projectsData.find((p) => p.slug === route.params.slug)
);

if (!project.value) {
  router.replace("/not-found");
}

const CustomDetail = computed(() => {
  const slug = project.value?.slug;
  if (!slug || !project.value?.custom || !customProjectComponents[slug]) return null;
  return defineAsyncComponent(customProjectComponents[slug]);
});

const currentIndex = computed(() =>
  projectsData.findIndex((p) => p.slug === route.params.slug)
);
const previousProject = computed(() => {
  if (currentIndex.value === -1) return null;
  const index = (currentIndex.value - 1 + projectsData.length) % projectsData.length;
  return projectsData[index];
});
const nextProject = computed(() => {
  if (currentIndex.value === -1) return null;
  const index = (currentIndex.value + 1) % projectsData.length;
  return projectsData[index];
});
</script>
<template>
  <div v-if="project" class="container">
    <LinkBackHome :to="{ name: 'projects' }" label="Back To Projects" class="back-link" />
    <component :is="CustomDetail" v-if="CustomDetail" :project="project" />
    <ProjectDetailContent v-else :project="project" />
    <ProjectPager
      v-if="previousProject && nextProject"
      :previous="previousProject"
      :next="nextProject"
    />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <EllipseShapeLandingTwoBottomRight />
</template>

<style scoped>
.back-link {
  margin-bottom: 30px;
}
</style>
