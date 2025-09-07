<script setup lang="ts">
import {
  PhBagSimple,
  PhBook,
  PhBriefcase,
  PhCaretDown,
  PhHouse,
  PhPhonePlus,
  PhUsers,
} from "@phosphor-icons/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const navbarData = [
  {
    id: "menu1",
    icon: PhHouse,
    menuTitle: "Home",
    path: "#",
    menuItems: [
      {
        id: "homeONe",
        title: "Home One",
        menuItemPath: "/",
      },
      {
        id: "homeTwo",
        title: "Home Two",
        menuItemPath: "/landing-page-two",
      },
    ],
  },
  {
    id: "menu2",
    menuTitle: "Blog",
    icon: PhBook,
    path: "#",
    menuItems: [
      {
        id: "all-blogs",
        title: "Blogs",
        menuItemPath: "/blogs",
      },
      {
        id: "Blogs-details",
        title: "Blog Details",
        menuItemPath: "/blog-details",
      },
    ],
  },
  {
    id: "project",
    menuTitle: "Projects",
    icon: PhBagSimple,
    path: "#",
    menuItems: [
      {
        id: "all-project",
        title: "All Project",
        menuItemPath: "/all-projects",
      },
      {
        id: "project-details",
        title: "Project Details",
        menuItemPath: "/project-details",
      },
    ],
  },
  {
    id: "services-section",
    menuTitle: "Services",
    icon: PhBriefcase,
    path: "/services",
  },

  {
    id: "about-page",
    icon: PhUsers,
    menuTitle: "About",
    path: "/about-us",
  },
  {
    id: "contact-page",
    icon: PhPhonePlus,
    menuTitle: "Contact",
    path: "/contact",
  },
];

defineProps<{
  sidebarToggle: boolean;
  handleToggle: () => void;
  handleFalse: () => void;
}>();

const currentPath = useRoute();

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

const dropDown = ref("");

const handleDropDown = (id: string) => {
  if (dropDown.value === id) {
    dropDown.value = "";
  } else {
    dropDown.value = id;
  }
};

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
  <div
    class="mobile-sidebar-overlay"
    :class="`${
      sidebarToggle
        ? 'mobile-sidebar-overlay-show'
        : 'mobile-sidebar-overlay-hide'
    }`"
    @click="handleToggle"
  ></div>
  <div
    class="mobile-sidebar-containe"
    :class="`${sidebarToggle ? 'mobile-sidebar-show' : 'mobile-sidebar-hide'}`"
  >
    <router-link to="/" class="d-block logo-main-mobile">
      Bento<span>X</span>
    </router-link>

    <div class="sidebar-menu-container">
      <ul class="mobile-sidebar-menus">
        <template v-for="item in navbarData">
          <li
            v-if="item.menuItems"
            class="position-relative"
            :class="`${isActive(item) && 'text-secondary'}`"
          >
            <p
              @click="() => handleDropDown(item.id)"
              class="d-flex align-items-center mobile-menu-item justify-content-between mobile-single-menu"
            >
              <span class="mobile-menu-link">
                <component :is="item.icon" :size="20"></component>
                <span class="textXL">{{ item.menuTitle }}</span>
              </span>
              <PhCaretDown
                :class="`${
                  dropDown === item.id ? 'icon-rotate' : 'icon-normal'
                }`"
              />
            </p>
            <Transition v-show="dropDown === item.id" name="fade">
              <ul class="list-unstyled mobile-sidebar-menu-modal">
                <li
                  v-for="subItem in item.menuItems"
                  :key="subItem.id"
                  class="sub-item"
                >
                  <router-link
                    :to="subItem.menuItemPath"
                    class="d-flex align-items-center justify-content-between mobile-single-menu"
                    @click="handleFalse"
                  >
                    <span
                      class="textM mobile-menu-link"
                      :class="`${
                        currentPath.path === subItem.menuItemPath &&
                        'text-secondary'
                      }`"
                    >
                      {{ subItem.title }}
                    </span>
                  </router-link>
                </li>
              </ul>
            </Transition>
          </li>

          <li
            v-else
            class="mobile-menu-item"
            :class="`${currentPath.path === item.path && 'text-secondary'}`"
            @click="
              () => {
                handleDropDown(item.id), handleFalse();
              }
            "
          >
            <router-link
              :to="item.path"
              class="d-flex align-items-center justify-content-between mobile-single-menu"
            >
              <span class="textXL mobile-menu-link">
                <component :is="item.icon" :size="20"></component>
                <span>{{ item.menuTitle }}</span>
              </span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
