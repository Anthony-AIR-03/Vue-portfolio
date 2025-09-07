<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import BlogLink from "./BlogLink.vue";

defineProps<{
  image: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  link: string;
}>();
</script>
<template>
  <CustomTransition>
    <div class="card-style-two blog-slider">
      <div class="image-container">
        <img :src="image" alt="Blog image" class="img-fluid" />
      </div>
      <div class="blog-slider__content">
        <div class="blog-slider__content-date">
          <span class="textS font-thin">{{ date }}</span>
          <span class="textS font-thin articles-tag">{{ tag }}</span>
        </div>
        <div class="blog-slider__content-title">
          <router-link to="/blog-details">
            <h3 class="heading-4 font-medium list-blog-title">{{ title }}</h3>
          </router-link>
          <p class="textM font-thin">{{ text }}</p>
        </div>
        <BlogLink
          link="/blog-details"
          linkText="Read Now"
          class="slider-link"
        />
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
