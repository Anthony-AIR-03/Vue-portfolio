<script setup lang="ts">
import { onMounted, ref } from "vue";

interface SnowflakeProps {
  left: string;
  top: string;
  animationDuration: string;
  rotation: string;
  opacity: number;
  shape: string;
  color: string;
}

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getThemeColor = () => {
  const themeColors = ["#9747ff", "#ffffff", "#c59ef8"];
  return themeColors[Math.floor(Math.random() * themeColors.length)];
};

const snowflakes = ref<SnowflakeProps[]>();

onMounted(() => {
  const generateSnowflake = (): SnowflakeProps => {
    return {
      left: `${getRandomNumber(0, 100)}%`,
      top: `${getRandomNumber(-5, 0)}%`,
      animationDuration: `${getRandomNumber(5, 20)}s`,
      rotation: `${getRandomNumber(0, 100)}deg`,
      opacity: getRandomNumber(0.4, 0.6),
      shape: getRandomShape(),
      color: getThemeColor(),
    };
  };

  const newSnowflakes = Array.from({ length: 600 }, (_, index) =>
    generateSnowflake()
  );
  snowflakes.value = newSnowflakes;
});
</script>
<template>
  <div class="snowfall-container">
    <template
      v-for="snowflake in snowflakes"
      :key="`snow-fall-${snowflake.id}`"
    >
      <div
        :class="{ snowflake, [snowflake.shape]: true }"
        :style="{ ...snowflake, animationDelay: `${getRandomNumber(0, 2)}s` }"
      />
    </template>
  </div>
</template>

<style scoped></style>
