<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import allServicesShape from "@/assets/image/all-service-shape.png";
import serviceThumb from "@/assets/image/service-thum.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>

<template>
    <CustomTransition>
        <section class="card-style all-services-card">
            <h4 class="all-services-card__sub-title">{{ $t('servicesCard.title') }}</h4>

            <ul class="all-services-card__services">
                <li
                    v-for="(service, index) in personalData.services"
                    class="all-services-card__services-service"
                    :key="`${service.title}_${index}`"
                >
                    <img
                        :src="service.image"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                    />
                    <span>{{ service.title }}</span>
                </li>
            </ul>

            <header class="all-services-card__title">
                <h5 class="heading-2">{{ $t('servicesCard.subText') }}</h5>
                <img
                    :src="serviceThumb"
                    width="56"
                    height="56"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                />
            </header>

            <LinkPrimary
                :linkText="$t('servicesCard.linkText')"
                :link="{ name: 'services'}"
                class="all-services-card__link"
            />

            <img
                :src="allServicesShape"
                alt="Title Card Shape"
                class="all-services-card__shapes-image light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<style scoped>
.all-services-card__services {
    padding: 0;
}

.all-services-card__services-service > span {
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
    color: var(--white-neutral1);
    opacity: 0.9;
    text-align: center;
}
</style>
