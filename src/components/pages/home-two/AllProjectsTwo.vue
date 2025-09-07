<script setup lang="ts">
import allProjectStars from "@/assets/image/all-project-stars.png";
import allProjectImage from "@/assets/image/landing-two-all-projects.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style-two all-projects-card-two p-32px">
      <div class="all-projects-card-two__title-text">
        <p class="heading-4">See My Latest Works</p>
      </div>

      <img
        :src="allProjectImage"
        alt="All Project Image"
        class="all-projects-card-two__image"
      />
      <LinkPrimaryTwo
        linkText="All Projects"
        link="/all-projects"
        class="all-projects-card-two__link"
      />
      <img
        :src="allProjectStars"
        width="{68}"
        height="{60}"
        alt="All Project Stars"
        class="all-projects-card-two__image-star scale-up-down light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
