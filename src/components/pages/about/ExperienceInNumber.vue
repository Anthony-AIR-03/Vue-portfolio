<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ExperienceCardItemAbout from "./ExperienceCardItemAbout.vue";
import { personalData } from "@/assets/data/personalData";

</script>
<template>
  <CustomTransition>
    <section class="about-card experience-in-number">
      <ExperienceCardItemAbout
        v-for="(experience, index) in personalData.experiences"
                :key="`${experience.name}_${index}`"
                :counterNumber="+experience.count"
                :text="$t(experience.name)"
                :counterElement="experience.prefix"
      />
    </section>
  </CustomTransition>
</template>

<style scoped></style>
