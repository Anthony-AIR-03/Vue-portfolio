<script setup lang="ts">
import blogList1 from "@/assets/image/list-blog-1.png";
import blogList2 from "@/assets/image/list-blog-2.png";
import blogList3 from "@/assets/image/list-blog-3.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import BlogBig from "./BlogBig.vue";
import BlogList from "./BlogList.vue";
import BlogSlider from "./BlogSlider.vue";
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="blog-body">
      <div class="blog-body__up">
        <CustomTransition>
          <BlogBig />
        </CustomTransition>
        <div class="blog-body__up-right">
          <BlogList
            :image="blogList1"
            date="December 17,2023"
            link="/blog-details"
            linkText="Read Now"
            tag="Branding"
            text="Showcase design various print material such as brochures, posters,"
            title="Aroha Innovations in App Development"
          />
          <BlogList
            :image="blogList2"
            date="December 17,2023"
            link="/blog-details"
            linkText="Read Now"
            tag="Branding"
            text="Showcase design various print material such as brochures, posters,"
            title="Aroha Innovations in App Development"
          />
          <BlogList
            :image="blogList3"
            date="December 17,2023"
            link="/blog-details"
            linkText="Read Now"
            tag="Branding"
            text="Showcase design various print material such as brochures, posters,"
            title="Aroha Innovations in App Development"
          />
        </div>
      </div>
      <BlogSlider />
    </div>
  </div>
</template>

<style scoped></style>
