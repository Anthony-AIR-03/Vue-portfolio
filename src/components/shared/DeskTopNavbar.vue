<script setup lang="ts">
import { navbarData } from "@/assets/data/navbarData";
import { PhCaretDown } from "@phosphor-icons/vue";
import { useRoute } from "vue-router";
import ArrowButton from "./ArrowButton.vue";

interface MenuItem {
  id: string;
  menuTitle: string;
  path: string;
  menuItems?: {
    id: string;
    title: string;
    menuItemPath: string;
  }[];
}

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
      <router-link to="/" class="logo-main"> Bento<span>X</span> </router-link>
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
              {{ item.menuTitle }}
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
            {{ item.menuTitle }}
          </router-link>
        </li>
      </template>
    </ul>
    <ArrowButton link="/" />
  </div>
</template>

<style scoped></style>
