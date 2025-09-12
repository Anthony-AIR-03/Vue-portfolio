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
    <section class="parent m-t-60px container position-relative z-2">
        <BioCard class="div1" />
        <AllBlogsCard class="div2" />
        <TitleCard class="div3" />
        <ProfileCard class="div4" />
        <AllServiceCard class="div5" />
        <SkillsCardAnimationOne class="div6" />
        <GetInTouchCard class="div7" />
        <LatestCardLandingOne class="div8" />
        <ExperienceCard class="div9" />
        <AllProjects class="div10" />
    </section>
</template>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1rem;
}

.div1 {
    grid-row: span 4 / span 4;
}

.div2 {
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 5;
}

.div3 {
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 1;
}

.div4 {
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 1;
}

.div5 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 2;
    grid-row-start: 3;
}

.div6 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 7;
}

.div7 {
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 7;
}

.div8 {
    grid-column-start: 4;
    grid-row-start: 1;
}

.div9 {
    grid-row: span 4 / span 4;
    grid-column-start: 4;
    grid-row-start: 2;
}

.div10 {
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    grid-row-start: 6;
}
</style>
