<script setup lang="ts">
import starShape from "@/assets/image/star-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import Marquee from "@/components/shared/Marquee.vue";

const arrayLength = Array.from({ length: 3 });
</script>

<template>
    <CustomTransition>
        <section
            class="card-style latest-card position-relative overflow-hidden"
        >
            <Marquee :speed="20">
                <p
                    v-for="(item, index) in arrayLength"
                    :key="`latest-two${index}`"
                    class="latest-works"
                >
                    <img :src="starShape" alt="" class="star-image" />
                    <span class="latest-work-slider-text textL">
                        <span class="latest-work-light-text">
                            {{ $t('latestCard.featuredText.one') }}
                        </span>
                        {{ $t('latestCard.featuredText.two') }}
                    </span>
                </p>
            </Marquee>
        </section>
    </CustomTransition>
</template>

<style scoped>
.latest-works {
    display: flex;
    align-items: center;
    margin: 0;
}

.star-image {
    padding: 0 10px;
}
</style>
