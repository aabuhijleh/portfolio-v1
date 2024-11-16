"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useInterval } from "~/hooks/useInterval";
import { cn } from "~/lib/utils";
import styles from "./about.module.css";

dayjs.extend(utc);
dayjs.extend(timezone);

export const About = () => {
  const [time, setTime] = useState<dayjs.Dayjs | null>(null);

  const codeString = `const aboutMe = {
  name: "Abed Abu-Hijleh",
  title: "Senior Software Engineer",
  skills: ["JavaScript", "React", "Node.js", "CSS Wizardry"],
  passion: "Crafting elegant solutions to complex problems",
  funFact: "Speaks fluent code and coffee.",
  quote: "It's not a bug; it's an undocumented feature!",
  location: "West Bank",
  localTime: "${time?.format("h:mm:ss A") ?? "N/A"}",
};`;

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
      className={cn("flex items-center justify-center py-24")}
    >
      <div>
        <SyntaxHighlighter
          className={cn(styles.editor, "shadow")}
          language="javascript"
          style={synthwave84}
          customStyle={{
            borderRadius: "0.25rem",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};
