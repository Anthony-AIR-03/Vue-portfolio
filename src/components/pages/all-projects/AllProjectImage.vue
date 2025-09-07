<script setup lang="ts">
import linkImage from "@/assets/image/all-project-link.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { defineProps } from "vue";

defineProps<{
  image: string;
  width: number;
  hight: number;
  title?: string;
  text?: string;
}>();
</script>
<template>
  <CustomTransition>
    <div class="image-body">
      <img
        :src="image"
        alt="All Projects image 11"
        class="image-body__image img-fluid"
      />
      <router-link to="/project-details" class="all-project-link">
        <span class="all-project-link__text-area">
          <span class="link-title heading-2">Aroha agency website</span>
          <span class="textL link-text">
            An 12 month long inquiry into italine design,history and culture.
          </span>
        </span>
        <span class="all-project-link__image">
          <img
            :src="linkImage"
            width="{175}"
            height="{100}"
            alt="All Project Link image"
            class="img-fluid"
          />
        </span>
      </router-link>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
