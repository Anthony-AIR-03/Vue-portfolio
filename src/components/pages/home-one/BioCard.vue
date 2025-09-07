<script setup lang="ts">
import bioImage from "@/assets/image/bio-image.png";
import bioRoundedImage from "@/assets/image/bio-round-text.png";
import ButtonPrimary from "@/components/shared/ButtonPrimary.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style d-flex flex-column bio-card">
      <div class="bio-rounded-image">
        <img
          :src="bioRoundedImage"
          alt="Bio rounded Image"
          class="bio-rounded-text-image light-mood-image-shape"
        />
        <img
          :src="bioImage"
          alt="Bio Image"
          class="bio-image position-absolute"
        />
      </div>
      <ButtonPrimary />
      <LinkPrimary linkText="Biography" link="/about-us" />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
