<script setup lang="ts">
import CustomServiceBody from "@/components/pages/Services/customServiceBody.vue";
import ServiceBody from "@/components/pages/Services/ServiceBody.vue";
import AfterEffect from "@/components/shared/AfterEffect.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
</script>
<template>
    <main class="container">
        <LinkBackHome />
        <CustomServiceBody />
    </main>
    <AfterEffect />
</template>

<style scoped></style>
