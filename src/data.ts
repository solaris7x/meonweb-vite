import { FooterProps } from "./components/Layout/Footer";
import { AboutProps } from "./components/Home/About";
import { ContactMeProps } from "./components/Home/ContactMe"
import { NavBarDataProps } from "./components/Home/NavBar"
import { QualificationsProps } from "./components/Home/Qualifications"
import { SkillsProps } from "./components/Home/Skills"
import { SplashProps } from "./components/Home/Splash"

export interface profileDataProps {
  splash: SplashProps
  about: AboutProps
  skills: SkillsProps
  qualifications: QualificationsProps
  contactMe: ContactMeProps
  navBar: NavBarDataProps
  footer: FooterProps
}

export const profileData: profileDataProps = {
  navBar: {
    title: "Aditya Patil",
    links: [
      {
        name: "Home",
        href: "/",
        icon: "uil:estate",
      },
      {
        name: "About",
        href: "/#about",
        icon: "uil:user",
      },
      {
        name: "Skills",
        href: "/#skills",
        icon: "uil:file-alt",
      },
      {
        name: "Qualifications",
        href: "/#qualification",
        icon: "uil:graduation-cap",
      },
      {
        name: "Contact Me",
        href: "/#contact",
        icon: "uil:message",
      },
    ],
  },
  splash: {
    name: "Aditya",
    profession: ["an Cloud", "a Web", "a Full-Stack"],
    professionSuffix: "Developer",
    subtitle:
      "Cloud-Native enthusiast and self learner, believes in the power of community.",
    coverImgLink: "./assets/img/me.jpg",
    social: [
      {
        icon: "uil:linkedin-alt",
        href: "https://www.linkedin.com/in/patil11aditya/",
        name: "LinkedIn",
      },
      {
        icon: "uil:github-alt",
        href: "https://github.com/solaris7x",
        name: "Github",
      },
      {
        icon: "uil:twitter-alt",
        href: "https://twitter.com/_solaris7",
        name: "Twitter",
      },
    ],
  },
  about: {
    introduction:
      "Hi! 👋 I'm Aditya, Web Developer who aims to build cloud-native applications with a strong grasp of JavaScript along with Typescript and have previously completed projects with React and Angular . Well-versed in Web technologies (React, Angular, NextJS, ExpressJS, Java Spring, GraphQL) with Continuous integration and deployment pipelines, and experience in containerized application. Frequently praised as adaptable by my peers. Aiming to leverage a proven knowledge of IT strategy and web platform development skills to implement scalable, fast, and cloud-native solutions and enjoy working among a progressive team.  Additionally has a background in Cloud-Native App Development and Open-Source Development.",
    resumeLink: "/assets/pdf/Aditya-Resume.pdf",
  },
  skills: {
    skillLists: [
      {
        icon: "ant-design:code-outlined",
        title: "Runtimes",
        subtitle: "Runtimes that I have picked up over the years",
        skills: [
          {
            icon: "logos:typescript-icon",
            title: "Typescript",
          },
          {
            icon: "logos:javascript",
            title: "Javascript",
          },
          {
            icon: "logos:nodejs",
            title: "NodeJS",
          },
          {
            icon: "logos:python",
            title: "Python",
          },
          {
            icon: "vscode-icons:file-type-html",
            title: "HTML & CSS",
          },
          {
            title: "Mysql",
            icon: "logos:mysql",
          },
          {
            title: "MongoDB",
            icon: "logos:mongodb",
          },
        ],
      },
      {
        icon: "ant-design:code-sandbox-outlined",
        title: "Libraries & Frameworks",
        subtitle: "Libraries and Frameworks that I prefer to work with",
        skills: [
          {
            icon: "logos:react",
            title: "ReactJS",
          },
          {
            icon: "logos:tailwindcss-icon",
            title: "TailwindCSS",
          },
          {
            title: "NextJS",
            icon: "logos:nextjs",
          },
          {
            title: "ExpressJS",
            icon: "logos:express",
          },
          {
            title: "Apollo GraphQL",
            icon: "logos:graphql",
          },
          {
            title: "Realm",
            icon: "logos:realm",
          },
          {
            title: "RabbitMQ",
            icon: "logos:rabbitmq-icon",
          },
        ],
      },
      {
        icon: "ant-design:tool-outlined",
        title: "Tools",
        subtitle: "Tools that I use to build and deploy my projects",
        skills: [
          {
            icon: "logos:git",
            title: "Git",
          },
          {
            icon: "logos:github",
            title: "Github Actions",
          },
          {
            title: "Docker",
            icon: "logos:docker-icon",
          },
          {
            title: "Ansible",
            icon: "logos:ansible",
          },
          {
            title: "Kubernetes",
            icon: "logos:kubernetes",
          },
          {
            title: "Cloudflare Workers",
            icon: "logos:cloudflare",
          },
          {
            title: "Vite",
            icon: "logos:vitejs",
          },
        ],
      },
    ],
  },
  qualifications: {
    tabs: [
      {
        icon: "uil:graduation-cap",
        title: "Education",
        items: [
          {
            title:
              "BTech Computer Science & Engineering (Cloud Technology & Information Security)",
            subtitle: "Jain Deemed-to-be University",
            dateString: "2018 - 2022",
          },
          {
            title: "12th - PCM-CS",
            subtitle: "Muljibhai Mehta International School, Virar",
            dateString: "2016 - 2017",
          },
          {
            title: "10th - CBSE",
            subtitle: "Muljibhai Mehta International School, Virar",
            dateString: "2014 - 2015",
          },
        ],
      },
    ],
  },
  contactMe: {
    items: [
      {
        icon: "uil:envelope",
        title: "Email",
        subtitle: "patil11aditya@gmail.com",
        link: "mailto:patil11aditya@gmail.com",
      },
      {
        icon: "uil:twitter",
        title: "Twitter",
        subtitle: "@_solaris7",
        link: "https://twitter.com/_solaris7",
      },
      {
        icon: "uil:location-point",
        title: "Location",
        subtitle: "Mumbai, India",
      },
    ],
  },
  footer: {
    name: "Aditya Patil",
    subtitle: "Software Developement Engineer",
    links: [
      {
        title: "About",
        link: "#about",
      },
      {
        title: "Projects",
        link: "https://github.com/solaris7x?tab=repositories",
      },
      {
        title: "Contact Me",
        link: "#contact",
      },
    ],
    social: [
      {
        icon: "uil:linkedin-alt",
        link: "https://www.linkedin.com/in/patil11aditya/",
        name: "LinkedIn",
      },
      {
        icon: "uil:twitter-alt",
        link: "https://twitter.com/_solaris7",
        name: "Twitter",
      },
      {
        icon: "uil:github",
        link: "https://github.com/solaris7x",
        name: "Github",
      },
    ],
  },
}
