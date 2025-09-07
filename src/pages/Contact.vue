<script setup lang="ts">
import ServiceBottomRight from "@/components/pages/Services/ServiceBottomRight.vue";
import ContactBody from "@/components/pages/contact/ContactBody.vue";
import AboutTopLeftElement from "@/components/shared/AboutTopLeftElement.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <div class="container">
    <LinkBackHome />
    <ContactBody />
  </div>
  <AfterEffect />
  <AboutTopLeftElement />
  <ServiceBottomRight />
</template>

<style scoped></style>
