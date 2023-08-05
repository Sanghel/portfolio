import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amsys from "@/public/amsys.png";
import wag from "@/public/wag.png";
import toDoList from "@/public/toDoList.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Universidad Nacional Experimental del Tachira (UNET)",
    location: "Tachira, Venezuela",
    description:
      "I graduated as a Mechanical Engineer with basic knowledge in algorithms and object-oriented programming.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />,
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "I graduated as a front-end developer on the platzi platform remotely with a total of 72 courses and more than 10 projects.",
    icon: React.createElement(FaReact),
    date: "2021-2022",
  },
  {
    title: "Junior Front-End Developer",
    location: "Bucaramanga, Colombia",
    description:
      "I worked as a front-end developer for +1 year in WaLibre LLC development with React JS, Next JS, TypeScript, CSS native, Tailwind CSS, and Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Amsys.io",
    description:
      "I Worked as a front-end developer for 6 months in this project, management of sessions, cryptocurrencies, payments through the blockchain.",
    tags: ["React JS", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: amsys,
  },
  {
    title: "Wealth Accelerators Global",
    description:
      "I worked as a front-end developer for 3 months on this project, informative landing page showing the different services offered by the company, routing from the front.",
    tags: ["React JS", "JavaScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: wag,
  },
  {
    title: "To-do List",
    description:
      "Small web application on a to-do-list using react, state management, global context, local storage",
    tags: ["React JS", "CSS Native", "Local Storage"],
    imageUrl: toDoList,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Styled Components",
  "Zustand",
  "Git",
  "Framer Motion",
  "MySQL",
] as const;