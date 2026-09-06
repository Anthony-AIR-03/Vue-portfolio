<script setup lang="ts">
defineProps<{ text: string }>();
</script>
<template>
  <section class="project-demo" aria-label="Live demo">
    <h2 class="heading-3">Live demo</h2>
    <p class="textL">{{ text }}</p>
  </section>
</template>

<style scoped>
.project-demo {
  border-radius: 32px;
  border: 1px solid var(--black-neutral2);
  padding: 23px;
}
</style>
