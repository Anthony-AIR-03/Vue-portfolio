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
  linkText: string;
}>();
</script>
<template>
  <CustomTransition>
    <div class="card-style-two blog-body__up-right-list">
      <div class="image-container">
        <img :src="image" alt="List blog one" class="img-fluid" />
      </div>
      <div class="list__content">
        <div class="list__content-date">
          <span class="textS font-thin">{{ date }}</span>
          <span class="textS font-thin articles-tag">{{ tag }}</span>
        </div>
        <div class="list__content-title">
          <router-link :to="link">
            <h4 class="heading-4 font-medium list-blog-title">{{ title }}</h4>
          </router-link>
          <p class="textM font-thin">{{ text }}</p>
        </div>
        <BlogLink :link="link" :linkText="linkText" class="list-blog" />
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
