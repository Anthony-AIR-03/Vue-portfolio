<script setup lang="ts">
import notFoundImage from "@/assets/image/not-found.png";
</script>
<template>
  <div className="not-found-page">
    <img
      :src="notFoundImage"
      alt="Not found Image"
      className="img-fluid not-found-image"
    />
    <h4 className="m-t-60px heading-2 text-center">Page Not Found.</h4>
    <p className="textXL font-thin text-center not-found-text">
      The page you are looking for doesn&apos;t exist or has been moved
    </p>
    <div className="m-t-60px">
      <router-link to="/" className=" back-to-home"> Back To Home </router-link>
    </div>
  </div>
</template>

<style scoped></style>
