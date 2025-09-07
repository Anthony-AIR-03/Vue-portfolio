<script setup lang="ts">
defineProps<{
  year: string;
  title: string;
  university: string;
}>();
</script>
<template>
  <div class="about-education__content-item">
    <p class="textM year">{{ year }}</p>
    <p class="textXL title">{{ title }}</p>
    <p class="textM university">{{ university }}</p>
  </div>
</template>

<style scoped></style>
