<script setup lang="ts">
import ProfileIcon from "@/components/pages/home-one/ProfileIcon.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import {
  PhBehanceLogo,
  PhDribbbleLogo,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
import AllProjectsTwo from "./AllProjectsTwo.vue";
import ExperienceCardItemLandingTwo from "./ExperienceCardItemLandingTwo.vue";
import LandingTwoAllBlogs from "./LandingTwoAllBlogs.vue";
import LandingTwoAllService from "./LandingTwoAllService.vue";
import LandingTwoBio from "./LandingTwoBio.vue";
import LandingTwoGetInTouch from "./LandingTwoGetInTouch.vue";
import LatestCardLandingTwo from "./LatestCardLandingTwo.vue";
import ProductDesign from "./ProductDesign.vue";
import SkillsCardTwo from "./SkillsCardTwo.vue";
</script>
<template>
  <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div class="landing-two-body">
      <div class="landing-two-body__1st">
        <ProductDesign />
        <LandingTwoBio />
      </div>
      <div class="landing-two-body__2nd">
        <div class="second-up-section">
          <div class="all-project-and-skills">
            <AllProjectsTwo />
            <SkillsCardTwo />
          </div>
          <div class="latest-works-and-others">
            <LatestCardLandingTwo />
            <div class="experience-and-profile">
              <div class="experience">
                <ExperienceCardItemLandingTwo
                  :counterNumber="7"
                  text="YEARS EXPERIENCE"
                  counterElement="0"
                />
                <ExperienceCardItemLandingTwo
                  :counterNumber="125"
                  text="TOTAL
                    PROJECTS"
                  counterElement="+"
                />
              </div>
              <CustomTransition>
                <div class="profile profile-icons card-style-two p-32px">
                  <ProfileIcon socialLink="/">
                    <PhBehanceLogo :size="40" />
                  </ProfileIcon>
                  <ProfileIcon socialLink="/">
                    <PhInstagramLogo :size="40" />
                  </ProfileIcon>
                  <ProfileIcon socialLink="/">
                    <PhDribbbleLogo :size="40" />
                  </ProfileIcon>
                </div>
              </CustomTransition>
            </div>
          </div>
        </div>
        <div class="second-down-section">
          <LandingTwoAllService />
          <LandingTwoGetInTouch />
          <LandingTwoAllBlogs />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
