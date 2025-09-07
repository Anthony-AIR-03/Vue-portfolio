<script setup lang="ts">
import ProfileIcon from "@/components/pages/home-one/ProfileIcon.vue";
import { PhBehanceLogo, PhInstagramLogo } from "@phosphor-icons/vue";
import LinkPrimaryTwo from "../home-two/LinkPrimaryTwo.vue";
import CustomTransition from '@/components/shared/CustomTransition.vue';
</script>
<template>
  <CustomTransition>
  <div class="about-profile about-card p-32px profile-card">
    <div class="profile-icons">
      <ProfileIcon socialLink="/">
        <PhBehanceLogo :size="40" />
      </ProfileIcon>
      <ProfileIcon socialLink="/">
        <PhInstagramLogo :size="40" />
      </ProfileIcon>
    </div>
    <div>
      <p class="textM about-profile__text">Stay With Me</p>
      <LinkPrimaryTwo
        link="/about-us"
        linkText="Profiles"
        class="about-profile-link"
      />
    </div>
  </div></CustomTransition>
</template>

<style scoped></style>
