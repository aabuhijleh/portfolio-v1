import { RefObject } from "react";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import { cn } from "~/lib/utils";
import { Experience } from "~/types";

type TimelineCardProps = {
  job: Experience;
  index: number;
};

export const TimelineCard = ({ job, index }: TimelineCardProps) => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  const isEven = index % 2 === 0;
  const slideDirection = isEven
    ? "motion-safe:translate-x-[200px]"
    : "motion-safe:md:-translate-x-[200px] motion-safe:translate-x-[200px]";

  return (
    <div
      ref={targetRef as RefObject<HTMLDivElement>}
      className={cn(
        "p-6 pr-0 md:w-1/2",
        !isEven ? "md:pl-0 md:pr-6" : "md:pr-0",
      )}
    >
      <div
        className={`transform rounded-lg border bg-card p-6 text-card-foreground shadow-lg transition-all duration-700 ${isIntersecting ? "translate-x-0 opacity-100" : `motion-safe:opacity-0 ${slideDirection}`} ${isEven ? "motion-safe:md:ml-8" : "motion-safe:md:mr-8"} `}
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
              className={`flex transform gap-3 text-card-foreground transition-all duration-500 ${isIntersecting ? "translate-x-0 opacity-100" : "motion-safe:translate-x-[50px] motion-safe:opacity-0"} `}
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
