<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ExperienceCardItem from "./ExperienceCardItem.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style experience-card">
      <ExperienceCardItem
        :counterNumber="6"
        text="YEARS EXPERIENCE"
        counterElement="0"
      />
      <ExperienceCardItem
        :counterNumber="145"
        text="TOTAL PROJECTS"
        counterElement="+"
      />
      <ExperienceCardItem
        :counterNumber="129"
        text="CLENTS WORLDWIBE"
        counterElement="+"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
