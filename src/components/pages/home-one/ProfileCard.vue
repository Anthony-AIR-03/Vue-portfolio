<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
import { PhGithubLogo, PhInstagramLogo, PhLinkedinLogo } from "@phosphor-icons/vue";
import { personalData } from "@/assets/data/personalData";
import SocialsLink from "@/components/shared/socialsLink.vue";
</script>

<template>
  <CustomTransition>
    <section class="card-style profile-card">
      <nav class="profile-icons">
        <SocialsLink :socialLink="personalData.socials.linkedIn">
          <PhLinkedinLogo :size="40" />
        </SocialsLink>
        <SocialsLink :socialLink="personalData.socials.github">
          <PhGithubLogo :size="40" />
        </SocialsLink>
        <SocialsLink :socialLink="personalData.socials.instagram">
          <PhInstagramLogo :size="40" />
        </SocialsLink>
      </nav>

      <LinkPrimary :link="{ name: 'about-us'}" :linkText="$t('profileCard.linkText')" />
    </section>
  </CustomTransition>
</template>

<style scoped>
.profile-card {
  padding: 32px;
}

@media (max-width: 1400px) {
  .profile-card {
    padding: 20px;
  }
}
</style>
