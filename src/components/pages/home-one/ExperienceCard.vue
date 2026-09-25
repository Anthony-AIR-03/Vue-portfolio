<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import ExperienceCardItem from "./ExperienceCardItem.vue";
import { personalData } from "@/assets/data/personalData";
</script>

<template>
    <CustomTransition>
        <section class="card-style experience-card">
            <ExperienceCardItem
                v-for="(experience, index) in personalData.experiences"
                :key="`${experience.name}_${index}`"
                :counterNumber="+experience.count"
                :text="$t(experience.name)"
                :counterElement="experience.prefix"
            />
        </section>
    </CustomTransition>
</template>

<style scoped></style>
