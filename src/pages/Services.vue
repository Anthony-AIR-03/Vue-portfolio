<script setup lang="ts">
import ServiceBody from "@/components/pages/Services/ServiceBody.vue";
import ServiceBottomRight from "@/components/pages/Services/ServiceBottomRight.vue";
import AboutTopLeftElement from "@/components/shared/AboutTopLeftElement.vue";
import AfterEffect from "@/components/shared/AfterEffect.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <ServiceBody />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <ServiceBottomRight />
</template>

<style scoped></style>
