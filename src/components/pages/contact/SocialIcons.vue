<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import {
  PhAt,
    PhBehanceLogo,
    PhDribbbleLogo,
    PhFacebookLogo,
    PhGithubLogo,
    PhInstagramLogo,
    PhLinkedinLogo,
    PhTwitchLogo,
} from "@phosphor-icons/vue";
</script>
<template>
    <div class="m-t-120px social-icon-section">
        <a :href="personalData.socials.linkedIn" class="social-icon">
            <span class="icon">
                <PhLinkedinLogo :size="24" />
            </span>
            <span class="textLead icon-name">LinkedIn</span>
        </a>
        <a :href="personalData.socials.github" class="social-icon">
            <span class="icon">
                <PhGithubLogo :size="24" />
            </span>
            <span class="textLead icon-name">GitHub</span>
        </a>
        <a :href="personalData.socials.instagram" class="social-icon">
            <span class="icon">
                <PhInstagramLogo :size="24" />
            </span>
            <span class="textLead icon-name">Instagram</span>
        </a>

        <a :href="personalData.socials.threads" class="social-icon">
            <span class="icon">
                <PhAt :size="24" />
            </span>
            <p class="textLead icon-name">Threads</p>
        </a>
    </div>
</template>
