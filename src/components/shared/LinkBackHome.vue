<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PhArrowLeft } from "@phosphor-icons/vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{ to?: RouteLocationRaw; label?: string }>(),
  { to: () => ({ name: "home" }) }
);
const { t } = useI18n();
const resolvedLabel = computed(() => props.label ?? t("general.backToHome"));
</script>
<template>
  <div class="m-t-60px z-2">
    <router-link :to="to" class="button-back-to-home light-theme-white-text">
      <PhArrowLeft :size="24" /> <span>{{ resolvedLabel }}</span>
    </router-link>
  </div>
</template>

<style scoped></style>
