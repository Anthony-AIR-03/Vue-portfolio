<script setup lang="ts">
import { PhArrowLeft } from "@phosphor-icons/vue";
import type { RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{ to?: RouteLocationRaw; label?: string }>(),
  { to: () => ({ name: "home" }), label: "Back To Home" }
);
</script>
<template>
  <div class="m-t-60px z-2">
    <router-link :to="to" class="button-back-to-home light-theme-white-text">
      <PhArrowLeft :size="24" /> <span>{{ label }}</span>
    </router-link>
  </div>
</template>

<style scoped></style>
