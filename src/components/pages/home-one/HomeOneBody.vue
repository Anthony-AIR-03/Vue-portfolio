<script setup lang="ts">
import AllBlogsCard from "@/components/pages/home-one/AllBlogsCard.vue";
import AllProjects from "@/components/pages/home-one/AllProjects.vue";
import AllServiceCard from "@/components/pages/home-one/AllServiceCard.vue";
import BioCard from "@/components/pages/home-one/BioCard.vue";
import ExperienceCard from "@/components/pages/home-one/ExperienceCard.vue";
import GetInTouchCard from "@/components/pages/home-one/GetInTouchCard.vue";
import LatestCardLandingOne from "@/components/pages/home-one/LatestCardLandingOne.vue";
import ProfileCard from "@/components/pages/home-one/ProfileCard.vue";
import SkillsCardAnimationOne from "@/components/pages/home-one/SkillsCardAnimationOne.vue";
import TitleCard from "@/components/pages/home-one/TitleCard.vue";
</script>
<template>
  <div class="m-t-60px container position-relative z-2">
    <div class=" ">
      <div class="row g-xxl-6 g-4">
        <div class="col-lg-9 col-12">
          <div class="row g-xxl-6 g-4">
            <div class="col-md-4 col-12">
              <div class="d-flex flex-column gap-xxl-6 gap-4">
                <BioCard />
                <AllBlogsCard />
              </div>
            </div>
            <div class="col-md-8 col-12">
              <div class="row g-xxl-6 g-4">
                <div class="col-sm-6 col-12">
                  <TitleCard />
                </div>
                <div class="col-sm-6 col-12">
                  <ProfileCard />
                </div>
                <div class="col-12">
                  <AllServiceCard />
                </div>
              </div>
            </div>
          </div>
          <div class="row g-xxl-6 mt-0 g-4">
            <div class="col-md-8 col-12">
              <SkillsCardAnimationOne />
            </div>
            <div class="col-md-4 col-12">
              <GetInTouchCard />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="landing-one-body-four">
            <LatestCardLandingOne />
            <div class="landing-one-body-four__second">
              <ExperienceCard />
              <AllProjects />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
