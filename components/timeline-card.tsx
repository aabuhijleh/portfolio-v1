import { RefObject } from "react";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import { Experience } from "~/types";

type TimelineCardProps = {
  job: Experience;
  index: number;
};

export const TimelineCard = ({ job, index }: TimelineCardProps) => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  const isEven = index % 2 === 0;
  const slideDirection = isEven
    ? "translate-x-[200px]"
    : "md:-translate-x-[200px] translate-x-[200px]";

  return (
    <div ref={targetRef as RefObject<HTMLDivElement>} className="p-6 md:w-1/2">
      <div
        className={`transform rounded-lg border bg-card p-6 text-card-foreground shadow-lg transition-all duration-700 ${isIntersecting ? "translate-x-0 opacity-100" : `opacity-0 ${slideDirection}`} ${isEven ? "md:ml-8" : "md:mr-8"} `}
      >
        <h3 className="text-xl font-bold text-emerald-600">
          <a href={job.companyUrl} className="hover-underline">
            {job.company}
          </a>
        </h3>
        <p className="font-semibold text-card-foreground">{job.title}</p>
        <p className="mb-4 font-mono text-sm text-card-foreground/60">
          {job.date.from} - {job.date.to}
        </p>
        <ul className="space-y-2">
          {job.accomplishments.map((accomplishment, i) => (
            <li
              key={i}
              className={`flex transform gap-3 text-card-foreground transition-all duration-500 ${isIntersecting ? "translate-x-0 opacity-100" : "translate-x-[50px] opacity-0"} `}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rotate-45 transform bg-emerald-500" />
              <span>{accomplishment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
