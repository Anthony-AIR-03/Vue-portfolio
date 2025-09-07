<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "../home-two/LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="about-get-in-touch about-card p-32px">
      <p class="heading-4 about-get-in-touch__title">
        Let’s Works Together...!
      </p>
      <LinkPrimaryTwo link="/contact" linkText="Get In Touch" />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
