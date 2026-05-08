 <script setup lang="ts">
import qmobielWebsiteImage from "@/assets/image/qmobiel-website.png";
import allProjectStars from "@/assets/image/all-project-stars.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
    <CustomTransition>
        <section class="card-style all-projects-card">
            <h4 class="all-projects-card__title-text">
                <span class="all-projects-card__title-text-one heading-4">{{ $t('projectsCard.title.one') }}</span>
                <span class="all-projects-card__title-text-two heading-4">
                    {{ $t('projectsCard.title.two') }}
                </span>
            </h4>

            <img
                :src="qmobielWebsiteImage"
                alt="All Project Image"
                class="all-projects-card__image"
                width="200"
            />
            <LinkPrimary
                :linkText="$t('projectsCard.linkText')"
                :link="{ name: 'all-projects' }"
                class="all-projects-card__link"
            />

            <img
                :src="allProjectStars"
                alt=""
                class="all-projects-card__image-star scale-up-down light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<style scoped>
.all-projects-card__title-text-one {
  display: block;
}
</style>
