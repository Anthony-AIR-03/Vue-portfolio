import { PhBagSimple, PhBook, PhBriefcase, PhHouse, PhPhonePlus, PhUsers } from "@phosphor-icons/vue";
import type { Component } from "vue";

export interface MenuItem {
  id: string;
  /** i18n key, translated at render time. */
  menuTitle: string;
  icon?: Component;
  path: string;
  menuItems?: {
    id: string;
    title: string;
    menuItemPath: string;
  }[];
}

export const navbarData: MenuItem[] = [
  {
    id: "menu1",
    menuTitle: "nav.home",
    path: "/",
    // menuItems: [
    //   {
    //     id: "homeONe",
    //     title: "Home One",
    //     menuItemPath: "/",
    //   },
    //   {
    //     id: "homeTwo",
    //     title: "Home Two",
    //     menuItemPath: "/landing-page-two",
    //   },
    // ],
  },
  {
    id: "about-page",
    menuTitle: "nav.about",
    path: "/about-us",
  },
  {
    id: "project",
    menuTitle: "nav.projects",
    path: "/projects",
  },
  {
    id: "services-section",
    menuTitle: "nav.services",
    path: "/services",
  },
  {
    id: "menu2",
    menuTitle: "nav.blog",
    path: "/blogs",
    // menuItems: [
    //   {
    //     id: "all-blogs",
    //     title: "Blogs",
    //     menuItemPath: "/blogs",
    //   },
    //   {
    //     id: "Blogs-details",
    //     title: "Blog Details",
    //     menuItemPath: "/blog-details",
    //   },
    // ],
  },
  {
    id: "contact-page",
    menuTitle: "nav.contact",
    path: "/contact",
  },
];


export const mobileNavbarData: MenuItem[] = [
  {
    id: "menu1",
    icon: PhHouse,
    menuTitle: "nav.home",
    path: "/",
  },
  {
    id: "menu2",
    menuTitle: "nav.blog",
    icon: PhBook,
    path: "/blogs",
    // menuItems: [
    //   {
    //     id: "all-blogs",
    //     title: "Blogs",
    //     menuItemPath: "/blogs",
    //   },
    //   {
    //     id: "Blogs-details",
    //     title: "Blog Details",
    //     menuItemPath: "/blog-details",
    //   },
    // ],
  },
  {
    id: "project",
    menuTitle: "nav.projects",
    icon: PhBagSimple,
    path: "/projects",
    // menuItems: [
    //   {
    //     id: "all-project",
    //     title: "All Project",
    //     menuItemPath: "/all-projects",
    //   },
    //   {
    //     id: "project-details",
    //     title: "Project Details",
    //     menuItemPath: "/project-details",
    //   },
    // ],
  },
  {
    id: "services-section",
    menuTitle: "nav.services",
    icon: PhBriefcase,
    path: "/services",
  },

  {
    id: "about-page",
    icon: PhUsers,
    menuTitle: "nav.about",
    path: "/about-us",
  },
  {
    id: "contact-page",
    icon: PhPhonePlus,
    menuTitle: "nav.contact",
    path: "/contact",
  },
];
