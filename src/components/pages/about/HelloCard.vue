<script setup lang="ts">
import image from "@/assets/image/shape-11.png";
import CustomTransition from '@/components/shared/CustomTransition.vue';
</script>
<template>
  <CustomTransition>
  <div class="about-card card-hello">
    <span class="heading-3">Hello,</span>
    <h2 class="heading-3">I’m Gole Layla, an Award-Winning</h2>
    <span class="heading-3">Product Designer.</span>
    <p class="textL">
      As a skilled Product designer, illustrator, and visual development expert,
      my diverse background has allowed me to apply my talents across different
      fields and industries, demonstrating adaptability and versatility.
    </p>
    <img
      :src="image"
      alt="Shape"
      class="card-hello__shape light-mood-image-shape"
    />
  </div></CustomTransition>
</template>

<style scoped></style>
