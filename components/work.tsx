"use client";

import { experience } from "~/assets/data";
import { TimelineCard } from "./timeline-card";
import { RefObject } from "react";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";

export const Work = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="work" className="overflow-hidden py-24">
      <div className="relative" ref={targetRef as RefObject<HTMLDivElement>}>
        {/* Timeline line */}
        <div
          className={`absolute left-4 h-full w-0.5 -translate-x-1/2 transform bg-gray-200 transition-opacity duration-700 md:left-1/2 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
        />

        {experience.map((job, index) => (
          <div key={index} className={`relative mb-12`}>
            <div
              className={`items-start md:flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 h-4 w-4 -translate-x-1/2 transform rounded-full bg-emerald-500 transition-opacity duration-700 md:left-1/2 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
              />
              <TimelineCard job={job} index={index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
