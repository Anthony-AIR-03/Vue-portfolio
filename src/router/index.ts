import EmptyLayoutVue from "@/layouts/EmptyLayout.vue";
import About from "@/pages/About.vue";
import AboutTwoVue from "@/pages/AboutTwo.vue";
import AllProjectsPage from "@/pages/AllProjectsPage.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import Blogs from "@/pages/Blogs.vue";
import Contact from "@/pages/Contact.vue";
import Home from "@/pages/Home.vue";
import HomeTwo from "@/pages/HomeTwo.vue";
import NotFound from "@/pages/NotFound.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import Services from "@/pages/Services.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { title: "Home - Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/landing-page-two",
      component: HomeTwo,
      meta: { title: "Home Two - Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/about-us",
      component: About,
      meta: { title: "About - Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/about-us-two",
      component: AboutTwoVue,
      meta: { title: "About -Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/blogs",
      component: Blogs,
      meta: { title: "Blogs -Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/blog-details",
      component: BlogDetails,
      meta: {
        title: "Blog Details - Grid System Unique Portfolio VueJs Template",
      },
    },
    {
      path: "/all-projects",
      component: AllProjectsPage,
      meta: {
        title: "App Projects - Grid System Unique Portfolio VueJs Template",
      },
    },
    {
      path: "/project-details",
      component: ProjectDetails,
      meta: {
        title: "App Projects - Grid System Unique Portfolio VueJs Template",
      },
    },
    {
      path: "/services",
      component: Services,
      meta: { title: "Services - Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/contact",
      component: Contact,
      meta: { title: "Services - Grid System Unique Portfolio VueJs Template" },
    },
    {
      path: "/not-found",
      component: NotFound,
      meta: {
        layout: EmptyLayoutVue,
        title: "Not Found - Grid System Unique Portfolio VueJs Template",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        layout: EmptyLayoutVue,
        title: "Not Found - Grid System Unique Portfolio VueJs Template",
      },
    },
  ],
});

export default router;
