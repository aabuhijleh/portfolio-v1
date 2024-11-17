import {
  SiGithub as Github,
  SiStackoverflow as Stackoverflow,
  SiLinkedin as Linkedin,
  SiX as X,
} from "@icons-pack/react-simple-icons";
import { BrandLink, Experience, Project } from "~/types";

export const links: BrandLink[] = [
  {
    href: "https://github.com/aabuhijleh",
    icon: Github,
  },
  {
    href: "https://stackoverflow.com/users/9698583/aabuhijleh",
    icon: Stackoverflow,
  },
  {
    href: "https://www.linkedin.com/in/aabuhijleh/",
    icon: Linkedin,
  },
  {
    href: "https://x.com/aabuhijleh",
    icon: X,
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Ninja Van",
    companyUrl: "https://www.ninjavan.co",
    date: {
      from: "Sep 2022",
      to: "Present",
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
      "Generates a good looking website using your GitHub profile data.",
    technologies: ["React", "Styled Components", "GitHub GraphQL API"],
    repoUrl: "https://github.com/aabuhijleh/better-github-profile",
    externalUrl: "https://aabuhijleh.vercel.app/",
  },
  {
    name: "keylogger.js",
    description:
      "A Node.js keylogger for Windows and macOS. It registers native low level hooks to capture keyboard events. node-addon-api is used to bridge between native and JavaScript worlds",
    technologies: ["Node.js", "C++"],
    repoUrl: "https://github.com/aabuhijleh/keylogger.js",
    externalUrl: "https://www.npmjs.com/package/keylogger.js",
  },
  {
    name: "electron-selected-text",
    description:
      "A cross-platform utility that enables retrieving selected text from any application. It achieves this by using RobotJS to synthesize a CommandOrControl+C keyboard shortcut then getting the value from the clipboard",
    technologies: ["Node.js", "RobotJS"],
    repoUrl: "https://github.com/aabuhijleh/electron-selected-text",
    externalUrl: "https://www.npmjs.com/package/electron-selected-text",
  },
  {
    name: "osw",
    description:
      "During the COVID-19 lockdown we all had to work from home. To make things worse, in our company, we had to fill out a form every day and use a slow, outdated website to submit it. With this tool, me and dozens of my coworkers do this chore in 5 seconds instead of 5 minutes",
    technologies: ["Node.js", "Yargs", "Inquirer.js"],
    repoUrl: "https://github.com/aabuhijleh/osw",
    externalUrl: "https://www.npmjs.com/package/osw",
  },
];
