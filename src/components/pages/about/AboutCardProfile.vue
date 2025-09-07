<script setup lang="ts">
import imageShape from "@/assets/image/landing-two-profile-shapepng.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";

defineProps<{ image: string }>();
</script>
<template>
  <CustomTransition>
    <div class="about-card card-profile-image">
      <div class="card-profile-image__image-container">
        <img :src="image" alt="Landing bio image" class="profile-image" />
        <img :src="imageShape" alt="Image Shape" class="profile-shape" />
      </div></div
  ></CustomTransition>
</template>

<style scoped></style>
