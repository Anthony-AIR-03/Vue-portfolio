<script setup lang="ts">
import { navbarData, type MenuItem } from "@/assets/data/navbarData";
import { PhCaretDown } from "@phosphor-icons/vue";
import { useRoute } from "vue-router";
import ArrowButton from "./ArrowButton.vue";
import banner from "@/assets/image/anthony_logo.png"

const currentPath = useRoute();

const isActive = (item: MenuItem) => {
  return (
    currentPath.path === item.path ||
    (item.menuItems &&
      item.menuItems.some(
        (subItem) => currentPath.path === subItem.menuItemPath
      ))
  );
};
</script>
<template>
  <div class="desktop-navbar-container">
    <div>
      <router-link :to="{ name: 'home'}" class="logo-main"><img :src="banner" height="48px" /> </router-link>
    </div>
    <ul class="desktop-menu-items" id="primary">
      <template v-for="item in navbarData" :key="item.id">
        <li
          v-if="item.menuItems"
          :class="{
            'position-relative menu-item-with-dropdown': item.menuItems,
          }"
        >
          <p
            class="d-flex gap-1 align-items-center justify-content-between navbar-hover-text"
            :class="`${isActive(item) && 'text-secondary'}`"
          >
            <span
              class="textL font-medium"
              :class="` ${
                isActive(item) ? 'text-secondary' : 'menu-item-text-white'
              }`"
            >
              {{ $t(item.menuTitle) }}
            </span>
            <PhCaretDown :size="24" v-if="item.menuItems" />
          </p>

          <ul class="list-unstyled main-menu-dropdown" v-if="item.menuItems">
            <li v-for="subItem in item.menuItems" :key="subItem.id">
              <router-link
                :to="subItem.menuItemPath"
                class="textL desktop-menu-item desktop-menu-dropdown-item menu-item-text-white"
                :class="`${
                  currentPath.path === subItem.menuItemPath && 'menu-active'
                }`"
              >
                {{ subItem.title }}
              </router-link>
            </li>
          </ul>
        </li>
        <li v-else class="menu-item">
          <router-link
            :to="item.path"
            class="textL font-medium navbar-hover-text"
            :class="`${
              currentPath.path === item.path
                ? 'text-secondary'
                : 'menu-item-text-white'
            }`"
          >
            {{ $t(item.menuTitle) }}
          </router-link>
        </li>
      </template>
    </ul>
    <ArrowButton :link="{name: 'contact'}" />
  </div>
</template>

<style scoped></style>
