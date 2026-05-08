<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
import { PhLinkedinLogo, PhInstagramLogo } from "@phosphor-icons/vue";
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

.profile-icons {
  display: flex;
  gap: 26px;
  justify-content: center;
  align-items: center;
}

.profile-icons .profile-icon {
  padding: 30px;
  border-radius: 1000px;
  border: 1px solid var(--accent2);
  color: var(--white-neutral1);
  transition: all 0.3s ease-in-out;
  display: block;
}

@media (max-width: 1400px) {
  .profile-icons .profile-icon {
    padding: 24px;
  }
}

.profile-icons .profile-icon:hover {
  color: var(--secondary-color);
}

.profile-icons .profile-icon svg {
}

@media (max-width: 1400px) {
  .profile-icons .profile-icon svg {
    width: 30px;
    height: 30px;
  }
}

.profile-icons .profile-icon .hover-icon {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.29, 0.12, 0.75, 0.4);
  opacity: 0;
}

@media (max-width: 1400px) {
  .profile-icons .profile-icon .hover-icon {
    width: 80px;
    height: 80px;
  }
}

.profile-icons .profile-icon:hover .hover-icon {
  opacity: 1;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
}

[theme="custom-light"] .profile-icon {
  color: #6d6b6b;
}
</style>
