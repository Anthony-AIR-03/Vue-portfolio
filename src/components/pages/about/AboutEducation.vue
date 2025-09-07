<script setup lang="ts">
import shapeImage from "@/assets/image/shape-12.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import AboutContentItem from "./AboutContentItem.vue";
</script>
<template>
  <CustomTransition>
    <div class="about-education about-card p-32px">
      <p class="heading-4 about-education__title">Education</p>
      <div class="about-education__content">
        <AboutContentItem
          title="Bachelor Degree in Psychology"
          year="2015 - 2019"
          university="University of California"
        />
        <AboutContentItem
          title="Master Degree in Designing"
          year="2015 - 2019"
          university="University of California"
        />
      </div>
      <img
        :src="shapeImage"
        width="{53}"
        height="{53}"
        alt="Card Element shape"
        class="about-education-shape light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
