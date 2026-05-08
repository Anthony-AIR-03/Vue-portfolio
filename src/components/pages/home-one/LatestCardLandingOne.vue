<script setup lang="ts">
import starShape from "@/assets/image/star-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";

const arrayLength = Array.from({ length: 3 });
</script>

<template>
    <CustomTransition>
        <section
            class="card-style latest-card position-relative overflow-hidden"
        >
            <div class="marquee-wrapper">
                <div class="marquee-inner to-left">
                    <ul class="marqee-list d-flex">
                        <li class="marquee-item">
                            <p
                                v-for="(item, index) in arrayLength"
                                :key="`latest-two${index}`"
                                class="latest-works"
                            >
                                <img
                                    :src="starShape"
                                    alt="Star Shape"
                                    class="star-image"
                                />
                                <span class="latest-work-slider-text textL">
                                    <span class="latest-work-light-text">
                                        {{ $t('latestCard.featuredText.one') }}
                                    </span>
                                    {{ $t('latestCard.featuredText.two') }}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </CustomTransition>
</template>

<style scoped></style>
