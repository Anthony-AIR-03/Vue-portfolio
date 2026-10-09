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
  <article class="experience-card__item">
    <p class="experience-card__item-number display-4">
      {{ counterElement }}
      <CustomCounterUp :counterNumber="counterNumber" />
    </p>
    <h4 class="experience-card__item-text textM">{{ text }}</h4>
  </article>
</template>
