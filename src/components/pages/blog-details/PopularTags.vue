<script setup lang="ts"></script>
<template>
  <div class="popular-tag">
    <h5 class="heading-4">Popular Tag:</h5>
    <div class="popular-tag__tags">
      <router-link :to="{ name: 'blogs'}" class="tag"> Development </router-link>
      <router-link :to="{ name: 'blogs'}" class="tag"> Branding </router-link>
      <router-link :to="{ name: 'blogs'}" class="tag"> Design System </router-link>
      <router-link :to="{ name: 'blogs'}" class="tag"> Framer </router-link>
      <router-link :to="{ name: 'blogs'}" class="tag"> Graphic Design </router-link>
      <router-link :to="{ name: 'blogs'}" class="tag"> UIX/UI </router-link>
    </div>
  </div>
</template>
