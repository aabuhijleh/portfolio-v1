"use client";

import { useEffect, useState, RefObject } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useInterval } from "~/hooks/useInterval";
import { cn } from "~/lib/utils";
import { useIsMobile } from "~/hooks/useIsMobile";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import styles from "./about.module.css";

dayjs.extend(utc);
dayjs.extend(timezone);

export const About = () => {
  const [time, setTime] = useState<dayjs.Dayjs | null>(null);
  const { targetRef, isIntersecting } = useIsIntersecting();
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
    quote: "Coding for food 🍕",
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
    <section id="about" className={cn("flex justify-center py-24")}>
      <div
        className={cn(
          "shadow-medium",
          "-translate-x-full opacity-0 blur-sm transition-all duration-1000",
          isIntersecting && "translate-x-0 opacity-100 blur-none",
        )}
        ref={targetRef as RefObject<HTMLDivElement>}
      >
        <SyntaxHighlighter
          className={cn(styles.editor, "rounded")}
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
    </section>
  );
};
