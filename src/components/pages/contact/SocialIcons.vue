<script setup lang="ts">
import {
  PhBehanceLogo,
  PhDribbbleLogo,
  PhFacebookLogo,
  PhInstagramLogo,
  PhTwitchLogo,
} from "@phosphor-icons/vue";
</script>
<template>
  <div class="m-t-120px social-icon-section">
    <a href="https://www.facebook.com" class="social-icon">
      <span class="icon">
        <PhFacebookLogo :size="24" />
      </span>
      <span class="textLead icon-name">Facebook</span>
    </a>

    <a href="https://twitter.com/" class="social-icon">
      <span class="icon">
        <PhTwitchLogo :size="24" />
      </span>
      <p class="textLead icon-name">Twitter</p>
    </a>

    <a href="https://dribbble.com/" class="social-icon">
      <span class="icon">
        <PhDribbbleLogo :size="24" />
      </span>
      <p class="textLead icon-name">Dribbble</p>
    </a>

    <a href="https://www.instagram.com/" class="social-icon">
      <span class="icon">
        <PhInstagramLogo :size="24" />
      </span>
      <p class="textLead icon-name">Instagram</p>
    </a>

    <a href="https://www.behance.net/" class="social-icon">
      <span class="icon">
        <PhBehanceLogo :size="24" />
      </span>
      <p class="textLead icon-name">Behance</p>
    </a>
  </div>
</template>

<style scoped></style>
