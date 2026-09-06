<script setup lang="ts">
import ProjectsGrid from "@/components/pages/projects/ProjectsGrid.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from "@/components/shared/AfterEffect.vue";
</script>
<template>
  <main class="container">
    <LinkBackHome />
    <ProjectsGrid />
  </main>
  <AfterEffect />
</template>

<style scoped></style>
