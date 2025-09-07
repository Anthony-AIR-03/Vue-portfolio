<script setup lang="ts">
import titleShape from "@/assets/image/landing-two-title-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style-two product-design p-32px">
      <span class="product-design__sub-title heading-4">Title</span>
      <h2 class="heading-2 product-design__title">Product Designer</h2>
      <img
        :src="titleShape"
        alt="Title shape"
        class="product-design__shape scale-up-down light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
