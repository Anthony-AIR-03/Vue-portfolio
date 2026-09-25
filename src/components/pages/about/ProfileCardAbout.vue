<script setup lang="ts">
import { PhLinkedinLogo, PhInstagramLogo } from "@phosphor-icons/vue";
import LinkPrimaryTwo from "../home-two/LinkPrimaryTwo.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { personalData } from "@/assets/data/personalData";
import SocialsLink from "@/components/shared/socialsLink.vue";
</script>

<template>
    <CustomTransition>
        <section class="about-profile about-card p-32px profile-card">
            <nav class="profile-icons">
                <SocialsLink :socialLink="personalData.socials.linkedIn">
                    <PhLinkedinLogo :size="40" />
                </SocialsLink>
                <SocialsLink :socialLink="personalData.socials.instagram">
                    <PhInstagramLogo :size="40" />
                </SocialsLink>
            </nav>
            <nav>
                <span class="textM about-profile__text">{{ $t("about.stayWithMe") }}</span>
                <LinkPrimaryTwo
                    :link="{ name: 'about-us'}"
                    :linkText="$t('profileCard.linkText')"
                    class="about-profile-link"
                />
            </nav>
        </section>
    </CustomTransition>
</template>

<style scoped></style>
