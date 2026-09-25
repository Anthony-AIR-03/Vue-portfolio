import EmptyLayoutVue from "@/layouts/EmptyLayout.vue";
import About from "@/pages/About.vue";
import CaseStudyPage from "@/pages/CaseStudyPage.vue";
import Contact from "@/pages/Contact.vue";
import Home from "@/pages/Home.vue";
import InConstruction from "@/pages/InConstruction.vue";
import NotFound from "@/pages/NotFound.vue";
import ProjectDetail from "@/pages/ProjectDetail.vue";
import Projects from "@/pages/Projects.vue";
import Services from "@/pages/Services.vue";
import { createRouter, createWebHistory } from "vue-router";

// `meta.title` is an i18n key; App.vue turns it into the browser-tab title.
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { title: "nav.home" },
        },
        {
            path: "/about-us",
            name: "about-us",
            component: About,
            meta: {
                title: "nav.about",
            },
        },
        {
            path: "/blogs",
            name: "blogs",
            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: Blogs,
            meta: {
                title: "nav.blog",
            },
        },
        {
            path: "/blog-details",
            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: BlogDetails,
            meta: {
                title: "nav.blog",
            },
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects,
            meta: {
                title: "nav.projects",
            },
        },
        {
            path: "/projects/:slug",
            name: "project-detail",
            component: ProjectDetail,
            meta: {
                title: "nav.projects",
            },
        },
        {
            path: "/projects/:slug/case-study/:module",
            name: "case-study",
            component: CaseStudyPage,
            meta: {
                title: "pageTitles.caseStudy",
            },
        },
        // Cheap safety net for any stray links to the old path.
        {
            path: "/all-projects",
            redirect: { name: "projects" },
        },
        {
            path: "/services",
            name: "services",

            component: Services,
            meta: {
                title: "nav.services",
            },
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
            meta: {
                title: "nav.contact",
            },
        },
        {
            path: "/not-found",
            component: NotFound,
            meta: {
                layout: EmptyLayoutVue,
                title: "pageTitles.notFound",
            },
        },
        {
            path: "/in-construction",
            name: "in-construction",
            component: InConstruction,
            meta: {
                layout: EmptyLayoutVue,
                title: "pageTitles.inConstruction",
            },
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFound,
            meta: {
                layout: EmptyLayoutVue,
                title: "pageTitles.notFound",
            },
        },
    ],
});

export default router;
