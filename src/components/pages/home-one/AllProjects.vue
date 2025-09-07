<script setup lang="ts">
import allProjectImage from "@/assets/image/all-project-image.png";
import allProjectStars from "@/assets/image/all-project-stars.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style all-projects-card">
      <div class="all-projects-card__title-text">
        <p class="heading-4">See My</p>
        <p class="all-projects-card__title-text-two heading-4">Latest Works</p>
      </div>

      <img
        :src="allProjectImage"
        alt="All Project Image"
        class="all-projects-card__image"
      />
      <LinkPrimary
        linkText="All Projects"
        link="/all-projects"
        class="all-projects-card__link"
      />
      <img
        :src="allProjectStars"
        alt="All Project Stars"
        class="all-projects-card__image-star scale-up-down light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
