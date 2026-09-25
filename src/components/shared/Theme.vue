<script setup lang="ts">
import { PhCaretDown, PhGearSix } from "@phosphor-icons/vue";
import { useDark, useToggle } from "@vueuse/core";
import { computed, ref } from "vue";

import { getLanguage, setLanguage, SUPPORTED_LOCALES } from "@/languages/i18nUtils";

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "custom-dark",
  valueLight: "custom-light",
});

const modalOpen = ref(false);
const toggleThemeModal = () => (modalOpen.value = !modalOpen.value);

const toggleDark = useToggle(isDark);
const handleThemeSwitch = () => {
  toggleDark();
  modalOpen.value = false;
};

// dropdown state
const currentLang = computed(() => getLanguage());

function handleLanguageChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value;
  setLanguage(value as any); // i18nUtils will normalize + validate anyway
  modalOpen.value = false;
}
</script>

<template>
  <div class="theme-modal-button" @click="toggleThemeModal">
    <button type="button">
      <PhGearSix :size="32" color="#ff6900" class="rotating setting-icon" />
    </button>
  </div>

  <div class="theme-modal" :class="modalOpen ? 'modal-open' : ''">
    <div class="theme-modal__select-wrap">
      <label for="lang-select" class="sr-only">{{ $t("theme.language") }}</label>

      <select
        id="lang-select"
        class="theme-modal__select"
        :value="currentLang"
        @change="handleLanguageChange"
      >
        <option
          v-for="locale in SUPPORTED_LOCALES"
          :key="locale"
          :value="locale"
        >
          {{ locale.toUpperCase() }}
        </option>
      </select>

      <PhCaretDown class="theme-modal__select-arrow" aria-hidden="true" />
    </div>

    <button
      class="theme-modal__theme-dir"
      type="button"
      @click="handleThemeSwitch"
    >
      {{ isDark ? $t("theme.light") : $t("theme.dark") }}
    </button>
  </div>
</template>