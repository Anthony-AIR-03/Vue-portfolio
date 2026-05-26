<template>
    <section class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
        <ul class="service-body">
            <CustomTransition
                v-for="(service, index) in serviceData"
                :key="service.id ?? service.title?.full ?? index"
                class="service-body-item"
            >
                <article class="service-card service-body__design">
                    <h3 class="heading-3 card-title">
                        <span class="title-top">{{
                            service.title.duel.one
                        }}</span>
                        <span class="title-bottom">{{
                            service.title.duel.two
                        }}</span>
                    </h3>

                    <img
                        :src="service.image"
                        :alt="`${service.title.full} illustration`"
                        class="m-t-40px img-fluid"
                        loading="lazy"
                        decoding="async"
                    />

                    <p class="m-t-40px textL font-thin card-text-color">
                        {{ service.description }}
                    </p>

                    <img
                        v-if="shapeFor(index)"
                        :src="shapeFor(index)"
                        alt=""
                        aria-hidden="true"
                        class="img-fluid light-mood-image-shape shape-image-service"
                        loading="lazy"
                        decoding="async"
                    />
                </article>
            </CustomTransition>
        </ul>

        <div class="service-bottom">
            <ProfileCardAbout />
            <AboutEducation />
            <AboutLetsWorks />
        </div>
    </section>
</template>

<script>
import brandImage from "@/assets/image/brand-icon.png";
import marketingImage from "@/assets/image/marketing-icon.png";
import serviceShape from "@/assets/image/service-shape-14.png";
import shape11 from "@/assets/image/shape-11.png";
import shape29 from "@/assets/image/shape-29.png";
import shape53 from "@/assets/image/shape-53.png";
import uxDesignImage from "@/assets/image/ui-ux-icon.png";
import developmentImage from "@/assets/image/web-development-icon.png";
import AboutEducation from "@/components/pages/about/AboutEducation.vue";
import AboutLetsWorks from "@/components/pages/about/AboutLetsWorks.vue";
import ProfileCardAbout from "@/components/pages/about/ProfileCardAbout.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";

export default {
    components: {
        CustomTransition,
        AboutEducation,
        AboutLetsWorks,
        ProfileCardAbout,
    },

    data() {
        return {
            serviceData: [
                {
                    id: "design-precision",
                    image: uxDesignImage,
                    title: {
                        full: "Design Precision",
                        duel: { one: "Design", two: "Precision" },
                    },
                    description:
                        "Welcome to my Design Precision showcase, where creativity meets functionality. I translate designs into clean, consistent interfaces—focused on clarity, user experience, and the small details that make a product feel polished.",
                },
                {
                    id: "maintainable-code",
                    image: marketingImage,
                    title: {
                        full: "Maintainable code",
                        duel: { one: "Maintainable", two: "Code" },
                    },
                    description:
                        "I write maintainable code built for the long run. Clear structure, predictable patterns, and thoughtful naming make it easy to extend, refactor, and scale—so future updates stay fast and stress-free.",
                },
                {
                    id: "accessible-ui",
                    image: brandImage,
                    title: {
                        full: "Accessible UI",
                        duel: { one: "Accessible", two: "UI" },
                    },
                    description:
                        "Accessibility is part of the build—not an afterthought. I develop interfaces that work well with screen readers, keyboard navigation, and proper semantics, aiming for WCAG-aligned, inclusive experiences.",
                },
                {
                    id: "web-development",
                    image: developmentImage,
                    title: {
                        full: "Web Development",
                        duel: { one: "Web", two: "Development" },
                    },
                    description:
                        "Elevate your online presence with modern Web Development. I build visually strong and functionally robust websites and web apps—focused on performance, responsiveness, and a smooth user experience.",
                },
            ],
            shapes: [shape11, serviceShape, shape29, shape53],
        };
    },

    methods: {
        shapeFor(index) {
            const { shapes } = this;
            if (!shapes?.length) return null;
            return shapes[index % shapes.length];
        },
    },
};
</script>

<style scoped>
.service-body {
    padding: 0;
}

.service-body > .service-body-item:nth-child(odd) {
    grid-column-start: 1;
    grid-column-end: 7;
    position: relative;
}

.service-body > .service-body-item:nth-child(even) {
    grid-column-start: 7;
    grid-column-end: 13;
    position: relative;
}

.service-body > .service-body-item:last-child:nth-child(odd) {
    grid-column-start: 4;
    grid-column-end: 10;
    position: relative;
}
</style>
