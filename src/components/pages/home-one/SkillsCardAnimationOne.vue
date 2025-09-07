import CustomTransition from '@/components/shared/CustomTransition.vue';
<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import {
  PhAngularLogo,
  PhFigmaLogo,
  PhFilmStrip,
  PhFramerLogo,
  PhPencil,
  PhSketchLogo,
} from "@phosphor-icons/vue";

const sliderOneData = [
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
];

const sliderTwo = [
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhFramerLogo,
  },
  {
    icon: PhAngularLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhFramerLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhFramerLogo,
  },
];
</script>

<template>
  <CustomTransition>
    <div class="card-style skills-card">
      <span class="heading-4 skills-card__title">Skills & Tools</span>
      <div class="skills-card__slider-aria">
        <div class="marquee-wrapper text-slider">
          <div class="marquee-inner to-left">
            <ul class="marqee-list d-flex">
              <li class="marquee-item">
                <span
                  v-for="(item, index) in sliderOneData"
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
                  v-for="({ icon }, index) in sliderTwo"
                  key="{`skill-slider-two${index}`}"
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
