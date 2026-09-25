<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import Marquee from "@/components/shared/Marquee.vue";
</script>

<template>
  <CustomTransition>
    <div class="card-style skills-card">
      <span class="heading-4 skills-card__title">{{ $t('skillsCard.title') }}</span>
      <div class="skills-card__slider-aria">
        <Marquee class="skills-marquee-text" :speed="30">
          <span
            v-for="(item, index) in personalData.skills"
            :key="`skill-slider-one-${index}`"
            class="skills-card__slider-text"
          >
            {{ $t(item) }}
          </span>
        </Marquee>

        <Marquee class="skills-marquee-icons" direction="right" :speed="15">
          <span
            v-for="({ icon }, index) in personalData.tools"
            :key="`skill-slider-two-${index}`"
            class="skills-card__slider-two__box"
          >
            <component :is="icon" :size="32" />
          </span>
        </Marquee>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped>
.skills-marquee-text {
  padding-top: 5px;
}

.skills-marquee-icons {
  padding: 17px 0 2px;
}
</style>
