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
    bio: {
        introduction: {
            one: "Hello,",
            two: "I'm Anthony Inocencio Ramos",
            three: "Software Developer.",
        },
        description:
            "As a frontend-focused software developer, I build scalable, maintainable, and user-centered applications. With a strong foundation in modern frameworks and real-world project experience, I translate complex ideas into intuitive and performant digital solutions.",
    },
    socials: {
        linkedIn:
            "https://www.linkedin.com/in/anthony-inoc%C3%AAncio-ramos-b89003277/",
        instagram: "https://www.instagram.com/anthony.air/",
        threads: "https://www.threads.com/@anthony.air",
    },
    experiences: [
        {
            name: "YEARS EXPERIENCE",
            count: "6",
            prefix: "0",
        },
        {
            name: "TOTAL PROJECTS",
            count: "21",
            prefix: "+",
        },
        {
            name: "CLIENTS WORLDWIDE",
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
            endDate: "Present",
            function: "Full-stack dev",
            company: "Qmobiel",
        },
        {
            startDate: "2022",
            endDate: "2023",
            function: "Front-end Dev, accessibility adviseur",
            company: "Buro CITE",
        },
    ],
    abilities: [
        "Web Development",
        "UI/UX design",
        "Toegankelijkheid",
        "Coding infrastructure",
        "Front-end testing",
        "Code maintainance",
    ],
    // Real project data now lives in assets/data/projectsData.ts (its own domain, with
    // routing/slug/layout concerns personalData has no business knowing about).
    services: [
        {
            image: service1,
            title: "Design Precision",
        },
        {
            image: service2,
            title: "Maintainable code",
        },
        {
            image: service3,
            title: "Accessible UI",
        },
        {
            image: service4,
            title: "Web Development",
        },
        // {
        //   image: ,
        //   title: "Semantic frontend",
        // },
    ],
    skills: [
        "UI/UX Design",
        "Components",
        "Maintainability",
        "Web development",
        "App development",
        "Accesible UI",
        "UI/UX Design",
        "Components",
        "Maintainability",
        "Web development",
        "App development",
        "Accesible UI",
        "UI/UX Design",
        "Components",
        "Maintainability",
        "Web development",
        "App development",
        "Accesible UI",
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
