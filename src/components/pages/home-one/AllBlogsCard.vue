<script setup lang="ts">
import allBlogsStar from "@/assets/image/all-blog-card-star.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>

<template>
    <CustomTransition>
        <section class="card-style all-blog-card">
            <article class="all-blog-card__title-text">
                <p class="heading-4">{{ $t("allBlogsCard.title.partOne")}}</p>
                <p class="all-blog-card__title-text-two heading-4">
                    {{ $t("allBlogsCard.title.partTwo")}}
                </p>
            </article>

            <LinkPrimary
                :linkText="$t('allBlogsCard.linkText')"
                :link="{ name: 'blogs'}"
                class="all-blog-card__link"
            />
            <img
                :src="allBlogsStar"
                alt="Title Card Shape"
                class="all-blog-card__shapes-image-articles light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<style scoped>
.all-blog-card__link {
    margin-top: 53px;
}

@media (max-width: 1400px) {
    .all-blog-card__link {
        margin-top: 53px;
    }
}

@media (max-width: 992px) {
    .all-blog-card__link {
        margin-top: 37px;
    }
}

/* All Blogs card */
.all-blog-card {
    padding: 32px;
    position: relative;
}

@media (max-width: 1400px) {
    .all-blog-card {
        padding: 20px;
    }
}

.all-blog-card__title-text-two {
    margin-left: 38px;
}

.all-blog-card__shapes-image-articles {
    position: absolute;
    right: 24px;
    top: 0;
    flex-shrink: 0;
}

[dir="rtl"] .all-blog-card__shapes-image-articles {
    position: absolute;
    left: 24px;
    top: 0;
    right: auto !important;
    flex-shrink: 0;
}
</style>
