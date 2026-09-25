<script setup lang="ts">
import inConstructionImage from "@/assets/image/in-construction.png";
</script>
<template>
    <article className="not-found-page">
        <img
            :src="inConstructionImage"
            alt="In construction Image"
            className="img-fluid not-found-image"
            width="700"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
        />
        <h4 className="m-t-60px heading-2 text-center">{{ $t('inConstruction.title') }}</h4>
        <p className="textXL font-thin text-center not-found-text">
            {{ $t('inConstruction.text') }}
        </p>
        <nav className="m-t-60px">
            <router-link :to="{ name: 'home' }" className=" back-to-home">
                {{ $t('general.backToHome') }}
            </router-link>
        </nav>
    </article>
</template>

<style scoped></style>
