<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{ images: string[]; alt: string }>();

const activeIndex = ref<number | null>(null);
const isOpen = computed(() => activeIndex.value !== null);

function open(index: number) {
  activeIndex.value = index;
}
function close() {
  activeIndex.value = null;
}
function next() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
}
function prev() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
}
onMounted(() => document.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => document.removeEventListener("keydown", handleKeydown));
</script>
<template>
  <section v-if="images.length" class="project-screenshots" aria-label="Screenshots">
    <h2 class="heading-3">Screenshots</h2>
    <ul class="project-screenshots__grid">
      <li v-for="(src, i) in images" :key="src">
        <button
          type="button"
          class="project-screenshots__thumb-btn"
          :aria-label="`Expand screenshot ${i + 1} of ${images.length}`"
          @click="open(i)"
        >
          <img :src="src" :alt="`${alt} screenshot ${i + 1}`" class="project-screenshots__thumb" />
        </button>
      </li>
    </ul>

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="project-lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <button type="button" class="project-lightbox__close" aria-label="Close" @click="close">
          &times;
        </button>
        <button
          v-if="images.length > 1"
          type="button"
          class="project-lightbox__nav project-lightbox__nav--prev"
          aria-label="Previous screenshot"
          @click="prev"
        >
          &larr;
        </button>
        <img
          :src="images[activeIndex!]"
          :alt="`${alt} screenshot ${activeIndex! + 1}`"
          class="project-lightbox__image"
        />
        <button
          v-if="images.length > 1"
          type="button"
          class="project-lightbox__nav project-lightbox__nav--next"
          aria-label="Next screenshot"
          @click="next"
        >
          &rarr;
        </button>
        <div v-if="images.length > 1" class="project-lightbox__count">
          {{ activeIndex! + 1 }} / {{ images.length }}
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.project-screenshots {
  border-radius: 32px;
  border: 1px solid var(--black-neutral2);
  padding: 23px;
}

.project-screenshots__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.project-screenshots__thumb-btn {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  display: block;
  transition: transform 0.15s ease-in-out;
}

.project-screenshots__thumb-btn:hover {
  transform: scale(1.03);
}

.project-screenshots__thumb {
  display: block;
  width: 160px;
  height: 100px;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
}

.project-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 9, 13, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.project-lightbox__image {
  max-width: min(1100px, 90vw);
  max-height: 85vh;
  border-radius: 12px;
  object-fit: contain;
}

.project-lightbox__close {
  position: absolute;
  top: 20px;
  right: 24px;
  border: none;
  background: none;
  color: #fff;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
}

.project-lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 22px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.24);
}

.project-lightbox__nav--prev {
  left: 20px;
}

.project-lightbox__nav--next {
  right: 20px;
}

.project-lightbox__count {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.8;
}
</style>
