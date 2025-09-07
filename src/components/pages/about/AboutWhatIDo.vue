<script setup lang="ts">
import groupShape from "@/assets/image/group-4.png";
import bottomShape from "@/assets/image/shape-14.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
</script>
<template>
  <CustomTransition>
    <div class="about-card what-i-do p-32px">
      <p class="heading-4">What I Do</p>
      <div class="what-i-do__content">
        <div class="what-i-do__content-item">
          <PhCaretDoubleRight :size="20" />
          <p class="textL">Branding</p>
        </div>
        <div class="what-i-do__content-item">
          <PhCaretDoubleRight :size="20" />
          <p class="textL">Illustration</p>
        </div>
        <div class="what-i-do__content-item">
          <PhCaretDoubleRight :size="20" />
          <p class="textL">Logo Design</p>
        </div>
        <div class="what-i-do__content-item">
          <PhCaretDoubleRight :size="20" />
          <p class="textL">Typography</p>
        </div>
        <div class="what-i-do__content-item">
          <PhCaretDoubleRight :size="20" />
          <p class="textL">Card Design</p>
        </div>
      </div>
      <img
        :src="bottomShape"
        alt="Bottom Shape"
        class="bottom-shape light-mood-image-shape"
      />
      <img
        :src="groupShape"
        alt="Bottom Shape"
        class="group-shape light-mood-image-shape"
      /></div
  ></CustomTransition>
</template>

<style scoped></style>
