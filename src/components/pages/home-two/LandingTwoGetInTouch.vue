<script setup lang="ts">
import image from "@/assets/image/landing-two-get-in-touch-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="get-in-touch card-style-two p-32px">
      <p class="heading-4">Let’s Works Together</p>
      <LinkPrimaryTwo link="/contact" linkText="Get In Touch" />
      <img
        :src="image"
        alt="Get in touch Shape"
        class="shape-get-touch light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
