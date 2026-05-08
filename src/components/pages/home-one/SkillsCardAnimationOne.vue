<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>

<template>
  <CustomTransition>
    <div class="card-style skills-card">
      <span class="heading-4 skills-card__title">{{ $t('skillsCard.title') }}</span>
      <div class="skills-card__slider-aria">
        <div class="marquee-wrapper text-slider">
          <div class="marquee-inner to-left">
            <ul class="marqee-list d-flex">
              <li class="marquee-item">
                <span
                  v-for="(item, index) in personalData.skills"
                  :key="`skill-slider-one-${index}`"
                  class="skills-card__slider-text"
                >
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="marquee-wrapper-icon-slider">
          <div class="marquee-inner to-right">
            <ul class="marqee-list d-flex">
              <li class="marquee-item">
                <span
                  v-for="({ icon }, index) in personalData.tools"
                  :key="`skill-slider-two-${index}`"
                  class="skills-card__slider-two__box"
                >
                  <component :is="icon" size="32"></component>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
