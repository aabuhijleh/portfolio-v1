import {
  SiGithub as Github,
  SiStackoverflow as Stackoverflow,
  SiLinkedin as Linkedin,
  SiX as X,
} from "@icons-pack/react-simple-icons";
import { BrandLink, Experience } from "~/types";

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
