<script setup lang="ts">
import allServicesShape from "@/assets/image/all-service-shape.png";
import service1 from "@/assets/image/service-1.png";
import service2 from "@/assets/image/service-2.png";
import service3 from "@/assets/image/service-3.png";
import service4 from "@/assets/image/service-4.png";
import serviceThumb from "@/assets/image/service-thum.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
const serviceData = [
  {
    image: service1,
    title: "UI/UX Design",
  },
  {
    image: service2,
    title: "Digital Marketing",
  },
  {
    image: service3,
    title: "Brand Identity",
  },
  {
    image: service4,
    title: "Web Development",
  },
];
</script>
<template>
  <CustomTransition>
    <div class="card-style all-services-card">
      <span class="all-services-card__sub-title heading-4">
        Services Offering
      </span>
      <div class="all-services-card__services">
        <div
          v-for="({ image, title }, index) in serviceData"
          class="all-services-card__services-service"
        >
          <img :src="image" alt="Service One" />
          <p>{{ title }}</p>
        </div>
      </div>
      <div class="all-services-card__title">
        <h2 class="heading-2">Things I’m good at</h2>
        <img
          :src="serviceThumb"
          width="{63}"
          height="{56}"
          alt="Service Thumbs"
        />
      </div>
      <LinkPrimary
        linkText="All Services"
        link="/services"
        class="all-services-card__link"
      />
      <img
        :src="allServicesShape"
        alt="Title Card Shape"
        class="all-services-card__shapes-image light-mood-image-shape"
      />
    </div>
  </CustomTransition>
</template>

<style scoped></style>
