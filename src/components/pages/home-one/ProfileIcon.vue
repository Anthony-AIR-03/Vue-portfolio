<script setup lang="ts">
import hoverIconPath from "@/assets/image/hover-icon.png";

defineProps<{
  socialLink: string;
}>();
</script>

<template>
  <router-link
    :to="socialLink"
    class="position-relative icon-container profile-icon"
  >
    <slot />
    <img :src="hoverIconPath" alt="Hover Icon" class="hover-icon" />
  </router-link>
</template>
