<template>
    <CustomTransition>
        <section class="card-style get-in-touch-card">
            <slot name="title">
                <h4 v-if="title">{{ title }}</h4>
                <h4 v-else class="get-in-touch-card__title-text">
                    <span class="heading-4">{{ $t('contactCard.title.one') }}</span>
                    <span class="get-in-touch-card__title-text-two heading-4">
                        {{ $t('contactCard.title.two') }}
                    </span>
                </h4>
            </slot>
            <LinkPrimary
                :linkText="linkText"
                :link="{ name: 'contact' }"
                class="get-in-touch-card__link"
            />
            <img
                :src="getInTouchShape"
                alt=""
                class="get-in-touch-card__image-shape"
                :class="shapeClass"
            />
        </section>
    </CustomTransition>
</template>

<script>
import getInTouchShape from "@/assets/image/get-in-touch-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
import { useI18n } from "vue-i18n";

export default {
    components: { CustomTransition, LinkPrimary },
    props: {
        title: String,
        linkText: {
            type: String,
            default: () => {
                const { t } = useI18n();
                return t('contactCard.linkText');
             },
        },
        useAnimation: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        shapeClass() {
            return this.useAnimation ? "scale-up-down" : "";
        },
    },
    data() {
        return {
            getInTouchShape,
        };
    },
};
</script>

<style scoped></style>
