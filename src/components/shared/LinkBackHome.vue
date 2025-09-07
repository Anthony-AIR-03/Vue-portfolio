<script setup lang="ts">
import { PhArrowLeft } from "@phosphor-icons/vue";
</script>
<template>
  <div class="m-t-60px z-2">
    <router-link to="/" class="button-back-to-home light-theme-white-text">
      <PhArrowLeft :size="24" /> <span>Back To Home</span>
    </router-link>
  </div>
</template>

<style scoped></style>
