import service1 from "@/assets/image/service-1.png";
import service2 from "@/assets/image/service-2.png";
import service3 from "@/assets/image/service-3.png";
import service4 from "@/assets/image/service-4.png";
import {
  PhCodepenLogo,
  PhFigmaLogo,
  PhGithubLogo,
  PhGitlabLogo,
  PhMicrosoftTeamsLogo,
  PhPencil,
  PhStackOverflowLogo,
} from "@phosphor-icons/vue";

export const personalData = {
    name: "Anthony Inocencio ramos",
    contactInfo: {
        phoneNumber: "+31 6 3647 0448",
        email: "anthonyair03@gmail.com",
        address: "Rotterdam Lombardijen",
    },
    title: {
        full: "Software Developer",
        dual: {
            one: "Software",
            Two: "Developer",
        },
    },
    socials: {
        linkedIn:
            "https://www.linkedin.com/in/anthony-inoc%C3%AAncio-ramos-b89003277/",
        instagram: "https://www.instagram.com/anthony.air/",
        threads: "https://www.threads.com/@anthony.air",
    },
    experiences: [
        {
            name: "personal.experiences.yearsExperience",
            count: "6",
            prefix: "0",
        },
        {
            name: "personal.experiences.totalProjects",
            count: "21",
            prefix: "+",
        },
        {
            name: "personal.experiences.clientsWorldwide",
            count: "6",
            prefix: "+",
        },
        // {
        //     name: "TOTAL COMMITS",
        //     count: "115 + 754 + ",
        //     prefix: "+",
        // }
        // {
        //     name: "UNHAPPY CLIENTS",
        //     count: "00",
        //     Prefix: "",
        // }
    ],
    employments: [
        {
            startDate: "2023",
            endDate: null, // current role, rendered as "Present"
            function: "personal.employment.fullStackDev",
            company: "Qmobiel",
        },
        {
            startDate: "2022",
            endDate: "2023",
            function: "personal.employment.frontEndAccessibility",
            company: "Buro CITE",
        },
    ],
    abilities: [
        "personal.skills.webDevelopment",
        "personal.skills.uiUxDesign",
        "personal.skills.accessibility",
        "personal.skills.codingInfrastructure",
        "personal.skills.frontEndTesting",
        "personal.skills.codeMaintenance",
    ],
    // Real project data now lives in assets/data/projectsData.ts (its own domain, with
    // routing/slug/layout concerns personalData has no business knowing about).
    services: [
        {
            image: service1,
            title: "personal.skills.designPrecision",
        },
        {
            image: service2,
            title: "personal.skills.maintainableCode",
        },
        {
            image: service3,
            title: "personal.skills.accessibleUi",
        },
        {
            image: service4,
            title: "personal.skills.webDevelopment",
        },
        // {
        //   image: ,
        //   title: "Semantic frontend",
        // },
    ],
    skills: [
        "personal.skills.uiUxDesign",
        "personal.skills.components",
        "personal.skills.maintainability",
        "personal.skills.webDevelopment",
        "personal.skills.appDevelopment",
        "personal.skills.accessibleUi",
        "personal.skills.uiUxDesign",
        "personal.skills.components",
        "personal.skills.maintainability",
        "personal.skills.webDevelopment",
        "personal.skills.appDevelopment",
        "personal.skills.accessibleUi",
        "personal.skills.uiUxDesign",
        "personal.skills.components",
        "personal.skills.maintainability",
        "personal.skills.webDevelopment",
        "personal.skills.appDevelopment",
        "personal.skills.accessibleUi",
    ],
    tools: [
        { icon: PhFigmaLogo },
        { icon: PhStackOverflowLogo },
        { icon: PhGithubLogo },
        { icon: PhGitlabLogo },
        { icon: PhPencil },
        { icon: PhMicrosoftTeamsLogo },
        { icon: PhCodepenLogo },
        { icon: PhFigmaLogo },
        { icon: PhStackOverflowLogo },
        { icon: PhGithubLogo },
        { icon: PhGitlabLogo },
        { icon: PhPencil },
        { icon: PhMicrosoftTeamsLogo },
        { icon: PhCodepenLogo },
        { icon: PhFigmaLogo },
        { icon: PhStackOverflowLogo },
        { icon: PhGithubLogo },
        { icon: PhGitlabLogo },
        { icon: PhPencil },
        { icon: PhMicrosoftTeamsLogo },
        { icon: PhCodepenLogo },
    ],
};
