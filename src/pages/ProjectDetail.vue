<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projectsData } from "@/assets/data/projectsData";
import { customProjectComponents } from "@/components/pages/projects/custom/registry";
import ProjectDetailContent from "@/components/pages/projects/ProjectDetailContent.vue";
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
</script>
<template>
  <div v-if="project" class="container">
    <LinkBackHome />
    <component :is="CustomDetail" v-if="CustomDetail" :project="project" />
    <ProjectDetailContent v-else :project="project" />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <EllipseShapeLandingTwoBottomRight />
</template>

<style scoped></style>
