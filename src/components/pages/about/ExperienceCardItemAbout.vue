<script setup lang="ts">
import CustomCounterUp from "@/components/shared/CustomCounterUp.vue";
import { defineProps } from "vue";

defineProps<{
  counterNumber: number;
  counterElement?: string;
  rightElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <div class="experience-in-number__item">
    <p class="experience-in-number__item-number heading-1">
      {{ counterElement }}

      <CustomCounterUp :counter-number="counterNumber" />
      {{ rightElement }}
    </p>
    <p class="textL experience-in-number__item-text">{{ text }}</p>
  </div>
</template>

<style scoped></style>
