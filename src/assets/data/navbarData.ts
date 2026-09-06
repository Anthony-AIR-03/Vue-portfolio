import { PhBagSimple, PhBook, PhBriefcase, PhHouse, PhPhonePlus, PhUsers } from "@phosphor-icons/vue";
import type { Component } from "vue";

export interface MenuItem {
  id: string;
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
    menuTitle: "Home",
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
    menuTitle: "About",
    path: "/about-us",
  },
  {
    id: "project",
    menuTitle: "Projects",
    path: "/projects",
  },
  {
    id: "menu2",
    menuTitle: "Blog",
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
    menuTitle: "Contact",
    path: "/contact",
  },
];


export const mobileNavbarData: MenuItem[] = [
  {
    id: "menu1",
    icon: PhHouse,
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "menu2",
    menuTitle: "Blog",
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
    menuTitle: "Projects",
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
