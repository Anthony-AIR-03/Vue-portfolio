<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
</script>
<template>
  <div class="right__search-box">
    <div class="search-field">
      <input type="text" class="search" placeholder="Search" />
      <button class="search-icon">
        <PhMagnifyingGlass :size="24" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
