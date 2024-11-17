"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useInterval } from "~/hooks/useInterval";
import { cn } from "~/lib/utils";
import { useIsMobile } from "~/hooks/useIsMobile";
import { BackgroundGradient } from "./ui/background-gradient";
import styles from "./about.module.css";

dayjs.extend(utc);
dayjs.extend(timezone);

export const About = () => {
  const [time, setTime] = useState<dayjs.Dayjs | null>(null);
  const isMobile = useIsMobile();

  const codeStringDesktop = `const aboutMe = {
  location: "West Bank",
  localTime: "${time?.format("h:mm:ss A") ?? "N/A"}",
  skills: {
    languages: ["Typescript", "Javascript", "Python", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Django", "Electron"],
  },
  quote: "Coding for food 🍕",
};`;

  const codeStringMobile = `const aboutMe = {
    location: "West Bank",
    localTime: "${time?.format("h:mm:ss A") ?? "N/A"}",
    skills: {
      languages: [
        "Typescript",
        "Javascript",
        "Python",
        "HTML",
        "CSS",
      ],
      frameworks: [
        "React",
        "Next.js",
        "Node.js",
        "Django",
        "Electron",
      ],
    },
    quote: "Coding for food",
};`;

  const codeString = isMobile ? codeStringMobile : codeStringDesktop;

  useEffect(() => {
    // Set in useEffect to avoid hydration error
    // due to time dependent rendering
    setTime(dayjs(new Date(), "Asia/Hebron"));
  }, []);

  useInterval(() => {
    setTime((time) => time?.add(1, "second") ?? null);
  }, 1000);

  return (
    <section
      id="about"
      className={cn(
        "p-section mx-auto flex flex-col items-center justify-center !pt-8",
      )}
    >
      <BackgroundGradient className="rounded">
        <div className={cn("overflow-hidden rounded")}>
          <SyntaxHighlighter
            className={cn(styles.editor)}
            language="javascript"
            style={synthwave84}
            wrapLines
            lineProps={{
              style: { whiteSpace: "pre-wrap" },
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </BackgroundGradient>
    </section>
  );
};
