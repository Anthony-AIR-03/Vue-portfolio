-
<script setup lang="ts">
import titleCardShape from "@/assets/image/title-card-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>

<template>
  <CustomTransition>
    <div class="card-style title-card">
      <span class="title-card__title-sub-text heading-4">Title</span>
      <div class="title-card__title-text">
        <h2 class="heading-2">Product</h2>
        <h2 class="title-card__title-text-two heading-2">Designer</h2>
      </div>
      <img
        :src="titleCardShape"
        alt="Title Card Shape"
        class="title-card__shapes-image light-mood-image-shape"
      /></div
  ></CustomTransition>
</template>

<style scoped></style>
