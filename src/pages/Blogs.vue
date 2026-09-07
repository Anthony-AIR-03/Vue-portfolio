<script setup lang="ts">
import BlogBody from "@/components/pages/blogs/BlogBody.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>

<template>
  <div class="container">
    <LinkBackHome />
    <BlogBody />
  </div>
  <AfterEffect />
</template>

<style scoped></style>
