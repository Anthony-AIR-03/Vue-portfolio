<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
import { PhBehanceLogo, PhInstagramLogo } from "@phosphor-icons/vue";
import ProfileIcon from "./ProfileIcon.vue";
</script>

<template>
  <CustomTransition>
    <div class="card-style profile-card">
      <div class="profile-icons">
        <ProfileIcon socialLink="/">
          <PhBehanceLogo :size="40" />
        </ProfileIcon>
        <ProfileIcon socialLink="/">
          <PhInstagramLogo :size="40" />
        </ProfileIcon>
      </div>
      <LinkPrimary link="/about-us" linkText="Profiles" />
    </div>
  </CustomTransition>
</template>
