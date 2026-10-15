<script setup lang="ts">
import minorCardStar from "@/assets/image/all-blog-card-star.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>

<template>
    <CustomTransition>
        <section class="card-style minor-card">
            <article class="minor-card__title-text">
                <p class="heading-4">{{ $t("minorCard.title.partOne")}}</p>
                <p class="minor-card__title-text-two heading-4">
                    {{ $t("minorCard.title.partTwo")}}
                </p>
            </article>

            <LinkPrimary
                :linkText="$t('minorCard.linkText')"
                link="https://minor.anthony-air.nl"
                class="minor-card__link"
            />
            <img
                :src="minorCardStar"
                alt="Title Card Shape"
                class="minor-card__shapes-image-articles light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<style scoped>
.minor-card__link {
    margin-top: 53px;
}

@media (max-width: 1400px) {
    .minor-card__link {
        margin-top: 53px;
    }
}

@media (max-width: 992px) {
    .minor-card__link {
        margin-top: 37px;
    }
}

/* Minor card */
.minor-card {
    padding: 32px;
    position: relative;
}

@media (max-width: 1400px) {
    .minor-card {
        padding: 20px;
    }
}

.minor-card__title-text-two {
    margin-left: 38px;
}

.minor-card__shapes-image-articles {
    position: absolute;
    right: 24px;
    top: 0;
    flex-shrink: 0;
}
</style>
