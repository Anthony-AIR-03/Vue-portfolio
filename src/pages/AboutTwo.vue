<script setup lang="ts">
import aboutTwo from "@/assets/image/landing-bio-image.png";
import AboutUsBody from "@/components/pages/about/AboutUsBody.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <AboutUsBody :image="aboutTwo" />
  </div>
  <AfterEffect />
</template>

<style scoped></style>
