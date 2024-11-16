"use client";

import { experience } from "~/assets/data";
import { TimelineCard } from "./timeline-card";

export const Work = () => {
  return (
    <section id="work" className="py-24">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 h-full w-0.5 -translate-x-1/2 transform bg-gray-200 md:left-1/2" />

        {experience.map((job, index) => (
          <div key={index} className={`relative mb-12`}>
            <div
              className={`items-start md:flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 h-4 w-4 -translate-x-1/2 transform rounded-full bg-emerald-500 md:left-1/2" />
              <TimelineCard job={job} index={index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
