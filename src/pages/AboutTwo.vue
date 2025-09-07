<script setup lang="ts">
import aboutTwo from "@/assets/image/landing-bio-image.png";
import AboutUsBody from "@/components/pages/about/AboutUsBody.vue";
import AboutTopLeftElement from "@/components/shared/AboutTopLeftElement.vue";
import EllipseShapeLandingTwoBottomRight from "@/components/shared/EllipseShapeLandingTwoBottomRight.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <AboutUsBody :image="aboutTwo" />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <EllipseShapeLandingTwoBottomRight />
</template>

<style scoped></style>
