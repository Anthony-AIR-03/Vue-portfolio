<script setup lang="ts">
import starShape from "@/assets/image/star-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";

const arrayLength = Array.from({ length: 50 });
</script>
<template>
  <CustomTransition>
    <div class="card-style latest-card position-relative overflow-hidden">
      <div class="marquee-wrapper">
        <div class="marquee-inner to-left">
          <ul class="marqee-list d-flex">
            <li class="marquee-item">
              <span
                v-for="(item, index) in arrayLength"
                :key="`latest-two${index}`"
              >
                <span class="star-image">
                  <img :src="starShape" alt="Star Shape" />
                </span>
                <span class="latest-work-slider-text textL">
                  <span class="latest-work-light-text"> LATEST WORKS AND </span>
                  FEATURED
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
