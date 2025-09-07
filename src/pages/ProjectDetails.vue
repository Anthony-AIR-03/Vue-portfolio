<script setup lang="ts">
import ProjectDetailsBody from "@/components/pages/project-details/ProjectDetailsBody.vue";
import AboutTopLeftElement from "@/components/shared/AboutTopLeftElement.vue";
import EllipseShapeLandingTwoBottomRight from "@/components/shared/EllipseShapeLandingTwoBottomRight.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <ProjectDetailsBody />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <EllipseShapeLandingTwoBottomRight />
</template>

<style scoped></style>
