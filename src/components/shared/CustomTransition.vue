<script setup lang="ts"></script>
<template>
  <Transition appear><slot></slot></Transition>
</template>

<style scoped>
.v-enter-active {
  animation: fade 1s;
}
@keyframes fade {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>
