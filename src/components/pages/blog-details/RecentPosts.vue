<script setup lang="ts">
import recentPost1 from "@/assets/image/recent-post-1.png";
import recentPost2 from "@/assets/image/recent-post-2.png";
import recentPost3 from "@/assets/image/recent-post-3.png";
import RecentPost from "./RecentPost.vue";
</script>
<template>
  <div class="m-t-32px recent-post">
    <h5 class="heading-4 recent-post__title">Recent Posts</h5>
    <RecentPost
      :image="recentPost1"
      title="Design Chronicles: Aroha's Odyssey"
      date="July 23, 2023"
    />
    <RecentPost
      :image="recentPost2"
      title="E-Commerce Elevation Aroha's Triumphs"
      date="July 28, 2023"
    />
    <RecentPost
      :image="recentPost3"
      title="Data-Driven Insights: Aroha's Analytics"
      date="July 02, 2023"
    />
  </div>
</template>

<style scoped></style>
