<script setup lang="ts">
import BlogDetailsBody from "@/components/pages/blog-details/BlogDetailsBody.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <BlogDetailsBody />
  </div>
  <AfterEffect />
</template>

<style scoped></style>
