<script setup lang="ts">
import { PhGearSix } from "@phosphor-icons/vue";
import { useDark, useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "custom-dark",
  valueLight: "custom-light",
});

const modalOpen = ref(false);

const toggleThemeModal = () => {
  modalOpen.value = true;
};

const toggleDark = useToggle(isDark);

const handleThemeSwitch = () => {
  toggleDark();
  modalOpen.value = false;
};

const dirValue = ref(localStorage.getItem("dir") || "ltr");

const localStoreDir = localStorage.getItem("dir");

onMounted(() => {
  if (!localStoreDir) {
    localStorage.setItem("dir", dirValue.value);
  }
  document.documentElement.dir = dirValue.value;
});

function handleDir() {
  if (dirValue.value == "ltr") {
    localStorage.setItem("dir", "rtl");
    dirValue.value = "rtl";
  } else {
    localStorage.setItem("dir", "ltr");
    dirValue.value = "ltr";
  }
  document.documentElement.dir = dirValue.value;
  modalOpen.value = false;
}
</script>

<template>
  <div class="theme-modal-button" @click="toggleThemeModal">
    <button>
      <PhGearSix :size="32" color="#ff6900" class="rotating setting-icon" />
    </button>
  </div>

  <div class="theme-modal" :class="`${modalOpen ? 'modal-open' : ''}`">
    <button class="theme-modal__theme-dir" @click="handleDir">
      {{ dirValue === "ltr" ? "RTL" : "LTR" }}
    </button>
    <button class="theme-modal__theme-dir" @click="handleThemeSwitch">
      {{ isDark ? "Light" : "Dark" }}
    </button>
  </div>
</template>

<style scoped></style>
