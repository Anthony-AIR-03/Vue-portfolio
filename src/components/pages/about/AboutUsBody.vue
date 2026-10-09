<script setup lang="ts">
import AboutCardProfile from "@/components/pages/about/AboutCardProfile.vue";
import AboutEducation from "@/components/pages/about/AboutEducation.vue";
import AboutLetsWorks from "@/components/pages/about/AboutLetsWorks.vue";
import AboutMyExperience from "@/components/pages/about/AboutMyExperience.vue";
import AboutWhatIDo from "@/components/pages/about/AboutWhatIDo.vue";
import ExperienceInNumber from "@/components/pages/about/ExperienceInNumber.vue";
import HelloCard from "@/components/pages/about/HelloCard.vue";
import ProfileCardAbout from "@/components/pages/about/ProfileCardAbout.vue";
import { defineProps } from "vue";

defineProps<{ image: string }>();
</script>
<template>
    <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
        <div class="about-body">
            <HelloCard class="hello-card" />
            <AboutCardProfile :image="image" class="image-card" />
            <AboutMyExperience class="experience-card" />
            <AboutWhatIDo class="activities-card" />
            <ExperienceInNumber class="numbers-card" />
            <ProfileCardAbout class="profile-card" />
            <AboutEducation class="education-card" />
            <AboutLetsWorks class="contact-card" />
        </div>
    </div>
</template>

<style scoped>
.about-body {
    display: grid;
    gap: 1rem;
    grid-template-rows: repeat(10, auto);
    grid-template-columns: minmax(0, 1fr);
}

.image-card {
    grid-row-start: 1;
    grid-column: 1;
}

.hello-card {
    grid-row-start: 2;
    grid-column: 1;
    text-align: left;
}

.experience-card {
    grid-row-start: 3;
    grid-column: 1;
}

.education-card {
    grid-row-start: 5;
    grid-column: 1;
}

.activities-card {
    grid-row-start: 4;
    grid-column: 1;
}

.numbers-card {
    grid-row-start: 6;
    grid-column: 1;
}

.profile-card {
    grid-row-start: 7;
    grid-column: 1;
}

.contact-card {
    grid-row-start: 8;
    grid-column: 1;
}

@media (min-width: 922px) {
    .about-body {
        display: grid;
        gap: 1rem;
        grid-template-rows: repeat(5, auto);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .image-card {
        grid-row-start: 1;
        grid-column-start: 1;
    }

    .activities-card {
        grid-row-start: 1;
        grid-column-start: 2;
    }

    .hello-card {
        grid-row-start: 2;
        grid-column: span 2;
        text-align: left;
    }

    .education-card {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-row: span 2;
    }

    .experience-card {
        grid-row-start: 3;
        grid-column: 2;
    }

    .numbers-card {
        grid-row-start: 4;
        grid-column-start: 2;
        /* grid-row-end: 6; */
        /* grid-row: span 2; */
    }

    .profile-card {
        grid-row-start: 5;
        grid-column-start: 1;
    }

    .contact-card {
        grid-row-start: 5;
        grid-column: 2;
    }
}

@media (min-width: 1200px) {
    .about-body {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .hello-card {
        grid-row-start: 1;
        grid-column: span 2;
    }

    .image-card {
        grid-row-start: 1;
        grid-column: 3;
    }

    .experience-card {
        grid-row-start: 2;
        grid-column: 1;
    }

    .activities-card {
        grid-row-start: 2;
        grid-column-start: 2;
    }

    .education-card {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-column: span 2;
    }
    
    .numbers-card {
        grid-row-start: 4;
        grid-column-start: 2;
        grid-row: span 3;
    }

    .profile-card {
        grid-row-start: 4;
        grid-column-start: 1;
        grid-row-end: 6;
    }

    .contact-card {
        grid-row-start: 6;
        grid-column: 1;
    }
}
</style>
