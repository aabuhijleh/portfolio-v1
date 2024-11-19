import {
  SiGithub as Github,
  SiStackoverflow as Stackoverflow,
  SiLinkedin as Linkedin,
  SiX as X,
} from "@icons-pack/react-simple-icons";
import { FolderGit, Briefcase, Home, User, Mail } from "lucide-react";
import { SocialLink, Experience, Project, NavLink } from "~/types";

export const siteConfig = {
  name: "Abed Abu-Hijleh",
  description:
    "Full-stack software engineer specializing in web, mobile, and desktop applications with a passion for building delightful, user-centric solutions.",
  url: "https://aabuhijleh.com",
  themeColor: "#020817",
} as const;

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/aabuhijleh",
    icon: Github,
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/9698583/aabuhijleh",
    icon: Stackoverflow,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aabuhijleh/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/aabuhijleh_dev",
    icon: X,
  },
];

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: User,
  },
  {
    label: "Work",
    href: "#work",
    icon: Briefcase,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FolderGit,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Ninja Van",
    companyUrl: "https://www.ninjavan.co",
    date: {
      from: "Sep 2022",
      to: "Sep 2024",
    },
    accomplishments: [
      "Led a team in developing an order management platform and spearheaded the design and release of new features, coordinating with cross-functional teams to ensure timely delivery and alignment with business goals",
      "Enhanced customer experience for web and mobile platforms by implementing feedback collection methods to identify and address improvement areas",
      "Resolved technical support tickets by debugging and addressing root causes, significantly reducing recurring issues and the overall volume of support requests",
      "Architected and implemented TypeScript integration for the website, enhancing code quality and maintainability",
      "Created accessible UI components for Ninja Van's internal React design system, enforcing WCAG standards and setting up tooling to ensure compliance",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Amdocs",
    companyUrl: "https://www.amdocs.com",
    date: {
      from: "Sep 2021",
      to: "Sep 2022",
    },
    accomplishments: [
      "Led initiatives to refactor the codebase with modern React patterns, improving maintainability and developer efficiency, and reducing technical debt",
      "Contributed to a large-scale eCommerce web application using React, Redux, and TypeScript, focusing on improving user experience and accessibility",
      "Provided mentorship, fostering a culture of continuous improvement and knowledge sharing, leading to increased team productivity",
    ],
  },
  {
    title: "Software Engineer",
    company: "Alcatel-Lucent Enterprise",
    companyUrl: "https://www.al-enterprise.com/en",
    date: {
      from: "May 2018",
      to: "Aug 2021",
    },
    accomplishments: [
      "Created and maintained a robust, cross-platform desktop application, leveraging TypeScript, Electron, and Node.js. Engineered OS-specific C++ integrations to access native APIs, ensuring seamless functionality for tens of thousands of users",
      "Engineered complex features for the desktop application based on customer needs, including USB headset support utilizing SDKs and the USB HID protocol, and developed remote desktop control using WebRTC",
      "Developed a Google Chrome extension using TypeScript, enabling seamless browser access to communication features",
      "Mentored junior developers, guiding them through the onboarding process and accelerating their integration into the team",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Better GitHub Profile",
    description:
      "A web application that generates an elegant, customizable portfolio website using your GitHub profile data.",
    technologies: ["React", "Styled Components", "GitHub GraphQL API"],
    repoUrl: "https://github.com/aabuhijleh/better-github-profile",
    externalUrl: "https://github.aabuhijleh.com",
  },
  {
    name: "keylogger.js",
    description:
      "A Node.js keylogger for Windows and macOS that utilizes native low-level hooks to capture keyboard events. Built with node-addon-api to seamlessly bridge native C++ code with JavaScript.",
    technologies: ["Node.js", "C++", "node-addon-api"],
    repoUrl: "https://github.com/aabuhijleh/keylogger.js",
    externalUrl: "https://www.npmjs.com/package/keylogger.js",
    npm: true,
  },
  {
    name: "electron-selected-text",
    description:
      "A cross-platform utility for retrieving selected text from any application. Leverages RobotJS to simulate keyboard shortcuts (Cmd/Ctrl+C) and efficiently captures clipboard content.",
    technologies: ["Node.js", "RobotJS"],
    repoUrl: "https://github.com/aabuhijleh/electron-selected-text",
    externalUrl: "https://www.npmjs.com/package/electron-selected-text",
    npm: true,
  },
  {
    name: "osw",
    description:
      "An automation tool developed during the COVID-19 lockdown to streamline daily form submissions. Reduces a 5-minute manual process to just 5 seconds, helping dozens of coworkers save valuable time.",
    technologies: ["Node.js", "Yargs", "Inquirer.js"],
    repoUrl: "https://github.com/aabuhijleh/osw",
    externalUrl: "https://www.npmjs.com/package/osw",
    npm: true,
  },
  {
    name: "Arraf",
    description:
      "An entertaining Progressive Web App that creates an immersive experience by simulating conversations with a genie. Features clever input manipulation to deliver engaging, predetermined responses.",
    technologies: ["Next.js", "Styled Components"],
    repoUrl: "https://github.com/aabuhijleh/arraf",
    externalUrl: "https://arraf.aabuhijleh.com",
  },
  {
    name: "Electron TypeScript Quick Start",
    description:
      "A production-ready Electron application template with TypeScript support and electron-builder configuration, enabling rapid development and simplified distribution.",
    technologies: ["Electron", "electron-builder"],
    repoUrl: "https://github.com/aabuhijleh/electron-ts-quick-start",
  },
];
