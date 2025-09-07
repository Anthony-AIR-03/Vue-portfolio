<script setup lang="ts">
import CountUp from "vue-countup-v3";

defineProps<{
  counterNumber: number;
  decimalPlaces?: number;
}>();
</script>
<template>
  <count-up :end-val="counterNumber" :decimal-places="decimalPlaces"></count-up>
</template>

<style scoped></style>
