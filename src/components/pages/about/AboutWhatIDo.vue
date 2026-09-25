<script setup lang="ts">
import groupShape from "@/assets/image/group-4.png";
import bottomShape from "@/assets/image/shape-14.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
import { personalData } from "@/assets/data/personalData";
</script>
<template>
    <CustomTransition>
        <section class="about-card what-i-do p-32px">
            <p class="heading-4">{{ $t("about.whatIDo") }}</p>
            <div class="what-i-do__content">
                <p
                    class="what-i-do__content-item"
                    v-for="(item, index) in personalData.abilities"
                    :key="`${item}_${index}`"
                >
                    <PhCaretDoubleRight :size="20" />
                    <span class="textL">{{ $t(item) }}</span>
                </p>
            </div>
            <img
                :src="bottomShape"
                alt="Bottom Shape"
                class="bottom-shape light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
            <img
                :src="groupShape"
                alt="Bottom Shape"
                class="group-shape light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<style scoped></style>
