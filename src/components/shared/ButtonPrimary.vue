<script setup lang="ts">
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
</script>

<template>
  <div class="primary-button-container">
    <router-link
      to="/about-us"
      class="button-primary text-center justify-content-center gap-2 d-inline-flex align-items-center py-3 px-6 px-5"
    >
      <span class="n0-color textM primary-button-text"> I’m Gole Layla </span>
      <PhPaperPlaneTilt class="primary-button-icon" :size="24" />
    </router-link>
  </div>
</template>

<style scoped></style>
