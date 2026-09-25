<template>
    <CustomTransition>
        <section class="about-education about-card p-32px">
            <p class="heading-4 about-education__title">{{ $t("about.education.title") }}</p>
            <section class="about-education__content">
                <AboutContentItem
                    v-for="education in educations"
                    :key="education.year"
                    :title="$t(education.title)"
                    :year="education.ongoing ? `${education.year} - ${$t('about.education.present')}` : education.year"
                    :university="education.university"
                />
            </section>

            <img
                :src="shapeImage"
                width="{53}"
                height="{53}"
                alt=""
                class="about-education-shape light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<script>
import shapeImage from "@/assets/image/shape-12.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import AboutContentItem from "./AboutContentItem.vue";

export default {
    components: { CustomTransition, AboutContentItem },

    data() {
        return {
            shapeImage,
            educations: [
                {
                    title: "about.education.vmbo",
                    year: "2015 - 2019",
                    university: "Focus Beroeps Academie",
                },
                {
                    title: "about.education.mbo",
                    year: "2019 - 2023",
                    university: "Da Vinci College Dordrecht",
                },
                {
                    title: "about.education.hbo",
                    year: "2023",
                    ongoing: true,
                    university: "Hogeschool Utrecht",
                },
            ],
        };
    },
};
</script>

<style scoped></style>
