<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  image: string;
  title: string;
  date: string;
}>();
</script>
<template>
  <div class="recent-post__card">
    <div>
      <img :src="image" alt="Recent Post one" class="img-fluid" />
    </div>
    <div class="recent-post__card-content">
      <router-link
        to="/blog-details"
        class="textXL d-block recent-post-card-title"
      >
        {{ title }}
      </router-link>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<style scoped></style>
