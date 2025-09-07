<script setup lang="ts">
import blogBig from "@/assets/image/big-blog.png";
import BlogLink from "./BlogLink.vue";
</script>
<template>
  <div class="blog-body__up-left">
    <div class="card-style-two big-blog-padding">
      <div class="image-container">
        <img :src="blogBig" alt="Blog image" class="img-fluid" />
      </div>
      <div class="up-left__content">
        <div class="up-left__content-date">
          <span class="textL font-thin">December 17,2023</span>
          <span class="textL font-thin articles-tag">Articles</span>
        </div>
        <div class="up-left__content-title">
          <router-link to="/blog-details">
            <h3 class="heading-3 font-semi-bold blog-title">
              Aroha Agency Portfolio Unveiled
            </h3>
          </router-link>
          <p class="textL font-thin">
            We delve into the creative decisions that make our websites just
            functional but visually captivating.
          </p>
        </div>
        <BlogLink link="/" linkText="Read Now" class="blog-link-big" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
