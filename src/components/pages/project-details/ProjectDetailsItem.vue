<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { defineProps } from "vue";

defineProps<{
  title: string;
  image: string;
  text: string;
  listContent: string[];
  flexDirection?: string;
}>();
</script>
<template>
  <CustomTransition>
    <div class="project-details__item ${flexDirection">
      <div class="product-details-image-div">
        <img
          :src="image"
          alt="Image one"
          class="img-fluid project-details__item-image"
        />
      </div>
      <div class="project-details__item-content">
        <h5 class="heading-3">{{ title }}</h5>
        <p class="textL project-details__item-content-text">{{ text }}</p>
        <ol>
          <li
            v-for="(item, index) in listContent"
            :key="`project-details-${index}`"
          >
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
