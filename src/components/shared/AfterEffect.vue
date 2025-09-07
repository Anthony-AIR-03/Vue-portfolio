<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const showPreloader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showPreloader.value = false;
  }, 1000);
});

onUnmounted(() => {
  // Clean up any event listeners or timers here
});
</script>

<template>
  <div id="preloader" v-if="showPreloader">
    <div class="layla-preloader text-center"></div>
  </div>
</template>

<style scoped></style>
