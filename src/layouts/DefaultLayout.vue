<script setup lang="ts">
import Footer from "@/components/shared/Footer.vue";
import Header from "@/components/shared/Header.vue";
import Theme from "@/components/shared/Theme.vue";
</script>

<template>
  <body class="position-relative overflow-x-hidden">
    <div class="position-relative overflow-hidden">
      <Theme />
      <Header />
      <RouterView />
      <Footer />
    </div>
  </body>
</template>
