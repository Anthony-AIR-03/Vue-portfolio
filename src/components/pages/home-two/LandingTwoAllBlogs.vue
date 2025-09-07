<script setup lang="ts">
import image from "@/assets/image/all-blog-card-star.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="blogs card-style-two p-32px">
      <p class="heading-4">Blog</p>
      <LinkPrimaryTwo link="/blogs" linkText="All Blog" />
      <img
        :src="image"
        alt="All Blog"
        class="shape-blog light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
