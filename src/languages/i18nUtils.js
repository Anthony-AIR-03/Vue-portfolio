import { createI18n } from "vue-i18n";
import en from "@/languages/en.json";
import nl from "@/languages/nl.json";

export const SUPPORTED_LOCALES = ["en", "nl"];

function normalizeLocale(input) {
  const candidate = (input || "").toLowerCase().split("-")[0];
  return SUPPORTED_LOCALES.includes(candidate) ? candidate : "en";
}

function getCookie(name) {
  const encodedName = encodeURIComponent(name) + "=";
  const parts = document.cookie.split("; ");
  const part = parts.find((row) => row.startsWith(encodedName));
  if (!part) return null;

  return decodeURIComponent(part.substring(encodedName.length));
}

function setCookieSession(name, value) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; path=/; SameSite=Lax`;
}

function detectInitialLocale() {
  const cookieLang = getCookie("lang");
  if (cookieLang) return normalizeLocale(cookieLang);

  return normalizeLocale(window.navigator.language);
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectInitialLocale(),
  fallbackLocale: "en",
  messages: { en, nl },
});

document.documentElement.lang = i18n.global.locale.value;

export function getLanguage() {
  return normalizeLocale(i18n.global.locale.value);
}

export function setLanguage(language) {
  const locale = normalizeLocale(language);

  i18n.global.locale.value = locale;
  setCookieSession("lang", locale);
  document.documentElement.lang = locale;
}