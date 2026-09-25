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

// Same four services (and icons) as the home page's services card. The modifier/shape
// classes position each card and its decorative shape in _service.scss.
const services = [
  { key: "designPrecision", icon: uxDesignImage, cardClass: "service-body__design", shape: shape11, shapeClass: "shape-image-service" },
  { key: "maintainableCode", icon: developmentImage, cardClass: "service-body__marketing", shape: serviceShape, shapeClass: "shape-image-marketing" },
  { key: "accessibleUi", icon: brandImage, cardClass: "service-body__brand-identity", shape: shape29, shapeClass: "shape-image-brand" },
  { key: "webDevelopment", icon: marketingImage, cardClass: "service-body__web-development", shape: shape53, shapeClass: "shape-image-developer" },
];
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="service-body">
      <CustomTransition v-for="service in services" :key="service.key">
        <div class="service-card" :class="service.cardClass">
          <h3 class="heading-3 card-title">
            <span class="title-top">{{ $t(`servicesPage.${service.key}.top`) }}</span>
            <span class="title-bottom"> {{ $t(`servicesPage.${service.key}.bottom`) }}</span>
          </h3>
          <img :src="service.icon" alt="" class="m-t-40px img-fluid" />
          <p class="m-t-40px textL font-thin card-text-color">
            {{ $t(`servicesPage.${service.key}.text`) }}
          </p>
          <img
            :src="service.shape"
            alt=""
            class="img-fluid light-mood-image-shape"
            :class="service.shapeClass"
            aria-hidden="true"
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
