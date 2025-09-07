<script setup lang="ts">
import CustomCounterUp from "@/components/shared/CustomCounterUp.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";

defineProps<{
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <CustomTransition>
    <div class="experience-one card-style-two p-32px">
      <div class="experience__item">
        <p class="experience__item-number display-4">
          {{ counterElement }}
          <CustomCounterUp :counterNumber="counterNumber" />
        </p>
        <p class="experience__item-text textL">{{ text }}</p>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
