<script setup lang="ts">
import bannerImage from "@/assets/image/blog-details-banner.png";
import sliderBlog1 from "@/assets/image/slider-blog-1.png";
import sliderBlog2 from "@/assets/image/slider-blog-2.png";
import sliderBlog3 from "@/assets/image/slider-blog-3.png";
import ArrowButton from "@/components/shared/ArrowButton.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import BlogSliderItem from "../blogs/BlogSliderItem.vue";
import BlogDetailsLeft from "./BlogDetailsLeft.vue";
import CategoriesCard from "./CategoriesCard.vue";
import PopularTags from "./PopularTags.vue";
import RecentPosts from "./RecentPosts.vue";
import SearchBox from "./SearchBox.vue";

const blogSlider = [
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Articles",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "No-Code",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "Resources",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
];
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="blog-detail-style blog-details-body">
      <CustomTransition>
        <img
          :src="bannerImage"
          alt="Blog Details Banner Image"
          class="img-fluid banner-image"
        />
      </CustomTransition>
      <div class="blog-details-container">
        <BlogDetailsLeft />
        <div class="blog-details-container__right">
          <CustomTransition>
            <SearchBox />
          </CustomTransition>
          <CustomTransition>
            <RecentPosts />
          </CustomTransition>
          <CustomTransition>
            <CategoriesCard />
          </CustomTransition>
          <CustomTransition>
            <PopularTags />
          </CustomTransition>
        </div>
      </div>
    </div>

    <div class="m-t-120px">
      <div class="related-blog">
        <div class="related-blog__heading">
          <h3 class="heading-2">Related Blog</h3>
          <ArrowButton link="/blogs" text="See all blogs" />
        </div>
        <div class="m-t-60px blog-card-section">
          <BlogSliderItem
            v-for="(props, index) in blogSlider"
            :key="`related-blog${index}`"
            v-bind="props"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
