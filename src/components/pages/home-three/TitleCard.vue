-
<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import titleCardShape from "@/assets/image/title-card-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>

<template>
    <CustomTransition>
        <article class="card-style title-card">
            <h4 class="title-card__title-sub-text">{{ $t('titleCard.title') }}</h4>

            <section class="title-card__title-text">
                <p>{{ personalData.title.dual.one }}</p>
                <p class="title-card__title-text-two">{{ personalData.title.dual.Two }}</p>
            </section>

            <img
                :src="titleCardShape"
                alt="Title Card Shape"
                class="title-card__shapes-image light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </article>
    </CustomTransition>
</template>

<style scoped>
h4 {
    font-size: 20px;
}

p {
    font-size: 28px;
    font-weight: 600;
}
</style>
