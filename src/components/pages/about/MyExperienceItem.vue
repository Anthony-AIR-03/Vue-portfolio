<script setup lang="ts">
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
import { defineProps } from "vue";

defineProps<{ time: string; title: string; company: string }>();
</script>
<template>
  <div class="my-experience__content-item">
    <PhCaretDoubleRight :size="24" />
    <p class="textM">{{ time }}</p>
    <div class="dash"></div>
    <p class="textM">{{ title }}</p>
    <div class="dash"></div>
    <p class="textM">{{ company }}</p>
  </div>
</template>

<style scoped></style>
