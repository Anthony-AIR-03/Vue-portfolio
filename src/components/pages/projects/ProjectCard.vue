<script setup lang="ts">
import linkImage from "@/assets/image/all-project-link.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { localize, type Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();
</script>
<template>
  <CustomTransition>
    <article class="image-body" :class="{ 'project-featured': project.featured }">
      <img
        :src="project.image"
        :alt="`${localize(project.title)} preview`"
        class="image-body__image img-fluid"
      />
      <router-link
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        class="all-project-link"
      >
        <div class="all-project-link__text-area">
          <h4 class="link-title heading-2">{{ localize(project.title) }}</h4>
          <p class="textL link-text">{{ localize(project.shortDescription) }}</p>
        </div>
        <span class="all-project-link__image">
          <img
            :src="linkImage"
            width="175"
            height="100"
            :alt="`Go to ${localize(project.title)} detail page`"
            class="img-fluid"
          />
        </span>
      </router-link>
    </article>
  </CustomTransition>
</template>

<style scoped></style>
