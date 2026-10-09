<script setup lang="ts">
defineProps<{
    year: string;
    title: string;
    university: string;
}>();
</script>
<template>
    <article class="about-education__content-item">
        <p class="textM year">{{ year }}</p>
        <h4 class="textXL title">{{ title }}</h4>
        <p class="textM university">{{ university }}</p>
    </article>
</template>
