<script setup lang="ts">
import brandImage from "@/assets/image/brand-icon.png";
import marketingImage from "@/assets/image/marketing-icon.png";
import serviceShape from "@/assets/image/service-shape-14.png";
import shape11 from "@/assets/image/shape-11.png";
import shape29 from "@/assets/image/shape-29.png";
import shape53 from "@/assets/image/shape-53.png";
import uxDesignImage from "@/assets/image/ui-ux-icon.png";
import developmentImage from "@/assets/image/web-development-icon.png";
import AboutEducation from "@/components/pages/about/AboutEducation.vue";
import AboutLetsWorks from "@/components/pages/about/AboutLetsWorks.vue";
import ProfileCardAbout from "@/components/pages/about/ProfileCardAbout.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="service-body">
      <CustomTransition>
        <div class="service-body__design service-card">
          <h3 class="heading-3 card-title">
            <span class="title-top">UI/UX</span>
            <span class="title-bottom">Design</span>
          </h3>
          <img
            :src="uxDesignImage"
            alt="UI/UX design Image"
            class="m-t-40px img-fluid"
          />
          <p class="m-t-40px textL font-thin card-text-color">
            Welcome to our UI/UX Design Showcase, where creativity meets
            functionality. Dive world where user experience is paramount, and
            portfolio and witness the art of user-centric design that elevates
            digital experiences to new heights.
          </p>
          <img
            :src="shape11"
            alt="Shape 11"
            class="img-fluid shape-image-service light-mood-image-shape"
          />
        </div>
      </CustomTransition>
      <CustomTransition>
        <div class="service-body__marketing service-card">
          <h3 class="heading-3 card-title">
            <span class="title-top">Digital</span>
            <span class="title-bottom"> Marketing</span>
          </h3>
          <img
            :src="marketingImage"
            alt="UI/UX design Image"
            class="m-t-40px img-fluid"
          />
          <p class="m-t-40px textL font-thin card-text-color">
            Unlock your brand&apos;s potential with Digital Marketing expertise.
            From strategic campaigns to engaging content, we navigate the
            digital landscape to elevate your online presence and drive
            meaningful connections.
          </p>
          <img
            :src="serviceShape"
            alt="Service Shape"
            class="img-fluid shape-image-marketing light-mood-image-shape"
          />
        </div>
      </CustomTransition>
      <CustomTransition>
        <div class="service-body__brand-identity service-card">
          <h3 class="heading-3 card-title">
            <span class="title-top">Brand</span>
            <span class="title-bottom">Identity</span>
          </h3>
          <img
            :src="brandImage"
            alt="UI/UX design Image"
            class="m-t-40px img-fluid"
          />
          <p class="m-t-40px textL font-thin card-text-color">
            Crafting brand identities that resonate. Our Brand Identity
            portfolio showcases unique logos, color schemes, and style guides
            that leave a lasting impression, defining your brand with visual
            excellence.
          </p>
          <img
            :src="shape29"
            alt="Service Shape"
            class="img-fluid shape-image-brand light-mood-image-shape"
          />
        </div>
      </CustomTransition>
      <CustomTransition>
        <div class="service-body__web-development service-card">
          <h3 class="heading-3 card-title">
            <span class="title-top">Web</span>
            <span class="title-bottom"> Development</span>
          </h3>
          <img
            :src="developmentImage"
            alt="UI/UX design Image"
            class="m-t-40px img-fluid"
          />
          <p class="m-t-40px textL font-thin card-text-color">
            Elevate your online presence with Web Development expertise.
            portfolio showcases visually stunning and functionally robust
            websites, meticulously crafted captivate audiences and drive digital
            success.
          </p>
          <img
            :src="shape53"
            alt="Service Shape"
            class="img-fluid shape-image-developer light-mood-image-shape"
          />
        </div>
      </CustomTransition>
    </div>
    <div class="service-bottom">
      <ProfileCardAbout />
      <AboutEducation />
      <AboutLetsWorks />
    </div>
  </div>
</template>

<style scoped></style>
