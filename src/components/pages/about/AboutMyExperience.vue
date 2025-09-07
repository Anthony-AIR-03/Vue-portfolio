<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { PhDownloadSimple } from "@phosphor-icons/vue";
import MyExperienceItem from "./MyExperienceItem.vue";
</script>
<template>
  <CustomTransition>
    <div class="about-card my-experience p-32px">
      <div class="d-flex align-items-center justify-content-between">
        <p class="heading-4">My Experience</p>
        <div class="download-icon">
          <PhDownloadSimple :size="24" />
        </div>
      </div>
      <div class="my-experience__content">
        <MyExperienceItem
          time="2021 // Now"
          title="UI Designer"
          company="Apple"
        />
        <MyExperienceItem
          time="2015 // 2020"
          title="Front-end Dev"
          company="Google"
        />
        <MyExperienceItem
          time="2010 // 2015"
          title="UI/UX Designer"
          company="Intel"
        />
        <MyExperienceItem
          time="2009 // 2010"
          title="UI Designer"
          company="Intel"
        />
      </div></div
  ></CustomTransition>
</template>

<style scoped></style>
