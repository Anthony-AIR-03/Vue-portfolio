<script setup lang="ts">
import profileImage from "@/assets/image/landing-bio-image.png";
import profileShape from "@/assets/image/landing-two-profile-shapepng.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <CustomTransition>
    <div class="card-style-two biography-style">
      <div class="position-relative">
        <img
          :src="profileImage"
          alt="Profile Bio"
          class="biography-style__bio-image"
        />
        <img
          :src="profileShape"
          alt="Profile shape"
          class="biography-style__bio-shape"
        />
      </div>
      <router-link to="/contact">
        <PhPaperPlaneTilt :size="32" class="biography-style__send-icon" />
      </router-link>
      <div class="biography-style__button-text">
        <router-link to="/about-us-two" class="biography-style__button textXL">
          I’m Gole Layla
        </router-link>
        <p class="biography-style__text textL">
          A Passionate Designer and Creative Thinker
        </p>
      </div>
      <LinkPrimaryTwo
        linkText="Biography"
        link="/about-us"
        class="biography-style__link"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
