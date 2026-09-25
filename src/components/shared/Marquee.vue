<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Seamless, endlessly scrolling row. The slot is rendered twice side by side and the track
 * shifts by exactly one copy's width per cycle, so the loop restart is invisible at any
 * container width. Duration is derived from the content width, keeping the speed constant.
 * The slot content must be at least as wide as the container, or a gap shows between copies.
 */
const props = withDefaults(
  defineProps<{
    direction?: "left" | "right";
    /** Pixels per second. */
    speed?: number;
  }>(),
  { direction: "left", speed: 30 }
);

const group = ref<HTMLElement | null>(null);
const duration = ref(0);
let observer: ResizeObserver | undefined;

// offsetWidth is layout width, so it isn't skewed by a parent's scale/transform animation.
const measure = () => {
  if (group.value) duration.value = group.value.offsetWidth / props.speed;
};

onMounted(() => {
  measure();
  // Re-measure when fonts load, the language changes or the layout resizes.
  observer = new ResizeObserver(measure);
  if (group.value) observer.observe(group.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div class="marquee">
    <div
      class="marquee__track"
      :class="`marquee__track--${direction}`"
      :style="duration ? { animationDuration: `${duration}s` } : undefined"
    >
      <div ref="group" class="marquee__group">
        <slot />
      </div>
      <div class="marquee__group" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-left 30s linear infinite;
}

.marquee__track--right {
  animation-name: marquee-right;
}

.marquee__group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  white-space: nowrap;
}

/* Let people stop it to read (WCAG 2.2.2), and respect the OS "reduce motion" setting. */
.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
