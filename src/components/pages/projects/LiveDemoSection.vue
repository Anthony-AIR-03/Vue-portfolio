<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{ text: string }>();
const { t } = useI18n();
</script>
<template>
  <section class="project-demo" :aria-label="t('projects.liveDemo')">
    <h2 class="heading-3">{{ t("projects.liveDemo") }}</h2>
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
