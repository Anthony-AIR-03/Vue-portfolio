<script setup lang="ts">
import LandingTwoBody from "@/components/pages/home-two/LandingTwoBody.vue";
import SnowFall from "@/components/shared/SnowFall.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <div class="pt-xxl-5 pt-4"></div>
    <LandingTwoBody />
  </div>
  <AfterEffect />
  <SnowFall />
  <div class="ellipse-landing-two-top-left z-0"></div>
  <div class="ellipse-landing-two-bottom-right z-0"></div>
</template>

<style scoped></style>
