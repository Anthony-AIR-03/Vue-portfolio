<script setup lang="ts">
import image from "@/assets/image/landing-two-all-service-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="all-service card-style-two">
      <p class="heading-4">Services</p>
      <LinkPrimaryTwo link="/services" linkText="All Services" />
      <img
        :src="image"
        alt="All Service Shape"
        class="shape-service light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
