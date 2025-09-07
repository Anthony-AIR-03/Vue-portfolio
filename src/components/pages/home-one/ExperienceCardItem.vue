<script setup lang="ts">
import CustomCounterUp from "@/components/shared/CustomCounterUp.vue";

defineProps<{
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <div class="experience-card__item">
    <p class="experience-card__item-number display-4">
      {{ counterElement }}
      <CustomCounterUp :counterNumber="counterNumber" />
    </p>
    <p class="experience-card__item-text textM">{{ text }}</p>
  </div>
</template>

<style scoped></style>
