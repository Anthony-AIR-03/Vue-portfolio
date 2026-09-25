<script setup lang="ts">
import notFoundImage from "@/assets/image/not-found.png";
</script>
<template>
    <article className="not-found-page">
        <img
            :src="notFoundImage"
            alt="Not found Image"
            className="img-fluid not-found-image"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
        />
        <h4 className="m-t-60px heading-2 text-center">{{ $t('notFound.title') }}</h4>
        <p className="textXL font-thin text-center not-found-text">
            {{ $t('notFound.text') }}
        </p>
        <nav className="m-t-60px">
            <router-link :to="{ name: 'home' }" className=" back-to-home">
                {{ $t('general.backToHome') }}
            </router-link>
        </nav>
    </article>
</template>

<style scoped></style>
