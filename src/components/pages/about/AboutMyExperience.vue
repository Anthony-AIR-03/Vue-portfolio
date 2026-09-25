<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { PhDownloadSimple } from "@phosphor-icons/vue";
import MyExperienceItem from "./MyExperienceItem.vue";
import personalCV from "@/assets/data/Anthony_cv.pdf";
import { personalData } from "@/assets/data/personalData";
</script>

<template>
    <CustomTransition>
        <section class="about-card my-experience p-32px">
            <div class="d-flex align-items-center justify-content-between">
                <p class="heading-4">{{ $t("about.myExperience") }}</p>
                <a
                    class="download-icon"
                    :href="personalCV"
                    download="Anthony_cv.pdf"
                    :aria-label="$t('about.downloadCv')"
                >
                    <PhDownloadSimple :size="24" />
                </a>
            </div>
            <div class="my-experience__content">
                <MyExperienceItem
                    v-for="(experience, index) in personalData.employments"
                    :key="`${experience}_${index}`"
                    :time="`${experience.startDate} // ${experience.endDate ?? $t('personal.employment.present')}`"
                    :title="$t(experience.function)"
                    :company="`${experience.company}`"
                />
            </div>
        </section>
    </CustomTransition>
</template>

<style scoped></style>
