<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  link: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "Let’s Talk",
  },
});
</script>

<template>
  <router-link :to="link" class="kewta-btn d-flex align-items-center">
    <span class="kew-text light-theme-white-text">{{ text }}</span>
    <span class="kew-arrow">
      <div class="kt-one">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5625 10.9336L23.1446 11.1277L22.9504 19.7098"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8516 22.875L23.0183 11.2466"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="kt-two">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5625 10.9336L23.1446 11.1277L22.9504 19.7098"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8516 22.875L23.0183 11.2466"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </span>
  </router-link>
</template>

<style scoped>
/* Add your CSS styles here */
</style>
