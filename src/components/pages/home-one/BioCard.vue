<script setup lang="ts">
import bioImage from "@/assets/image/bio-image-anthony.png";
import bioRoundedImage from "@/assets/image/bio-round-text.png";
import ButtonPrimary from "@/components/shared/ButtonPrimary.vue";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
    <CustomTransition>
        <section class="card-style d-flex flex-column bio-card">
            <figure class="bio-rounded-image">
                <img
                    :src="bioRoundedImage"
                    alt="Bio rounded Image"
                    class="bio-rounded-text-image light-mood-image-shape"
                />
                <img
                    :src="bioImage"
                    alt="Bio Image"
                    class="bio-image position-absolute"
                />
            </figure>
            <ButtonPrimary />
            <LinkPrimary :linkText="$t('bioCard.biography')" :link="{ name: 'about-us' }" />
        </section>
    </CustomTransition>
</template>

<style scoped>
.bio-card {
    padding: 32px;
}

@media (max-width: 1400px) {
    .bio-card {
        padding: 20px;
    }
}

.bio-card .bio-rounded-image {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
}

.bio-card .bio-rounded-image .bio-rounded-text-image {
    animation: rotate 15s linear infinite;
}

.bio-card .bio-rounded-image .bio-rounded-text-image {
    width: 160px;
    height: 160px;
}

.bio-card .bio-rounded-image .bio-image {
    background: var(--secondary-color);
    border-radius: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.bio-card .bio-rounded-image .bio-image {
    width: 120px;
    height: 120px;
}
</style>
