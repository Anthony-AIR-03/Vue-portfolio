<script setup lang="ts">
import image1 from "@/assets/image/project-details-image-1.png";
import image2 from "@/assets/image/project-details-image-2.png";
import image3 from "@/assets/image/project-details-image-3.png";
import ProjectBanner from "./ProjectBanner.vue";
import ProjectDetailsItem from "./ProjectDetailsItem.vue";

const listArrayOne = [
  "Expert advice and guidance to elevate your digital strategy.",
  "Crafting visually stunning  user-friendly websites your brand.",
  "Building and maintaining presence on social platforms.",
];

const listArrayTwo = [
  "One who avoids a pain that produces no resultant pleasure.",
  "laborious physical exercise.",
  "One who avoids a pain that produces no resultant",
];

const listArrayThree = [
  "Creating customized and user-friendly mobile applications.",
  "Enhancing your website's visibility and search engine ranking.",
  "online stores for seamless transactions.",
];
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="card-style-two project-details p-32px">
      <ProjectBanner />
      <ProjectDetailsItem
        :image="image1"
        :listContent="listArrayOne"
        title="The Challenge"
        text="Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,"
      />
      <ProjectDetailsItem
        :image="image2"
        :listContent="listArrayTwo"
        flexDirection="flex-row-reverse"
        title="The Solution"
        text="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
      />
      <ProjectDetailsItem
        :image="image3"
        :listContent="listArrayThree"
        title="Project Result"
        text="Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, "
      />
    </div>
    <router-link
      to="/all-projects"
      class="header-title next-project heading-4 m-t-60px z-2 position-relative"
    >
      Next Projects
    </router-link>
  </div>
</template>

<style scoped></style>
