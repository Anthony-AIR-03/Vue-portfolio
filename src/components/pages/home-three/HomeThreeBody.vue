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
import TitleCard from "@/components/pages/home-three/TitleCard.vue";
</script>

<template>
    <section class="parent m-t-60px container position-relative z-2">
        <BioCard class="BioCard" />
        <AllBlogsCard class="AllBlogsCard" />
        <TitleCard class="TitleCard" />
        <ProfileCard class="ProfileCard" />
        <AllServiceCard class="AllServiceCard" />
        <SkillsCardAnimationOne class="SkillsCardAnimationOne" />
        <GetInTouchCard class="GetInTouchCard" />
        <LatestCardLandingOne class="LatestCardLandingOne" />
        <ExperienceCard class="ExperienceCard" />
        <AllProjects class="AllProjects" />
    </section>
</template>

<style scoped>
.parent {
    display: grid;
    gap: 1rem;
}

.TitleCard {
    grid-row: 2;
}

@media (min-width: 576px) {
    .parent {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(8, auto);
    }

    .BioCard {
        grid-row-start: 1;
        grid-row: span 2;
    }

    .ProfileCard {
        grid-row-start: 1;
        grid-column-start: 2;
        grid-row: span 1;
    }

    .TitleCard {
        grid-row-start: 1;
        grid-column-start: 2;
        grid-row: span 1;
    }

    .AllBlogsCard {
        grid-column-start: 1;
        grid-row-start: 3;
        grid-column: span 2;
    }

    .AllServiceCard {
        grid-column-start: 1;
        grid-row-start: 4;
        grid-column: span 2;
    }

    .SkillsCardAnimationOne {
        grid-column-start: 1;
        grid-row-start: 5;
        grid-row: span 2;
    }

    .LatestCardLandingOne {
        grid-row-start: 5;
        grid-column-start: 2;
        grid-row: span 1;
    }

    .ExperienceCard {
        grid-row-start: 6;
        grid-column-start: 2;
        grid-row: span 2;
    }

    .AllProjects {
        grid-column-start: 1;
        grid-row-start: 7;
        grid-row: span 2;
    }

    .GetInTouchCard {
        grid-column-start: 2;
        grid-row-start: 8;
    }
}

@media (min-width: 922px) {
    .parent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(, auto);
        gap: 1rem;
    }

    .BioCard {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row: span 2;
    }

    .TitleCard {
        grid-row-start: 1;
        grid-column-start: 2;
    }

    .ProfileCard {
        grid-row-start: 1;
        grid-column-start: 3;
    }

    .AllBlogsCard {
        grid-row-start: 2;
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .AllServiceCard {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-column: span 2;
    }

    .ExperienceCard {
        grid-row-start: 3;
        grid-column-start: 3;
    }

    .SkillsCardAnimationOne {
        grid-row-start: 4;
        grid-column-start: 1;
        grid-column: span 2;
        grid-row: span 2;
    }

    .LatestCardLandingOne {
        grid-row-start: 4;
        grid-column-start: 3;
    }

    .AllProjects {
        grid-row-start: 5;
        grid-column-start: 3;
        grid-row: span 2;
    }

    .GetInTouchCard {
        grid-row-start: 6;
        grid-column-start: 1;
        grid-column: span 2;
    }
}

@media (min-width: 1200px) {
    .parent {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(10, auto);
        gap: 1rem;
    }

    .BioCard {
        grid-row: span 4 / span 4;
    }

    .AllBlogsCard {
        grid-row: span 2 / span 2;
        grid-column-start: 1;
        grid-row-start: 5;
        grid-column: span 1;
    }

    .TitleCard {
        grid-row: span 2 / span 2;
        grid-column-start: 2;
        grid-row-start: 1;
    }

    .ProfileCard {
        grid-row: span 2 / span 2;
        grid-column-start: 3;
        grid-row-start: 1;
    }

    .AllServiceCard {
        grid-column: span 2 / span 2;
        grid-row: span 4 / span 4;
        grid-column-start: 2;
        grid-row-start: 3;
    }

    .SkillsCardAnimationOne {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;
        grid-column-start: 1;
        grid-row-start: 7;
    }

    .GetInTouchCard {
        grid-column-start: 3;
        grid-row-start: 7;
        grid-row: span 2 / span 2;
    }

    .LatestCardLandingOne {
        grid-column-start: 4;
        grid-row-start: 1;
    }

    .ExperienceCard {
        grid-row: span 4 / span 4;
        grid-column-start: 4;
        grid-row-start: 2;
    }

    .AllProjects {
        grid-row: span 3 / span 3;
        grid-column-start: 4;
        grid-row-start: 6;
    }
}
</style>
