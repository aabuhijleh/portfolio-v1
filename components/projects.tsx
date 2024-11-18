"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import {
  SiGithub as Github,
  SiNpm as Npm,
} from "@icons-pack/react-simple-icons";
import { RefObject } from "react";
import { projects } from "~/assets/config";

export const Projects = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="projects" className="p-section">
      <div ref={targetRef as RefObject<HTMLDivElement>}>
        <div className="mb-16 flex items-center gap-4">
          <div
            className={`hidden h-[2px] flex-grow origin-right rounded-full bg-emerald-500/70 transition-transform duration-1000 sm:block ${
              isIntersecting ? "scale-x-100" : "motion-safe:scale-x-0"
            }`}
          />
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Projects
          </h2>
          <div
            className={`h-[2px] flex-grow origin-left rounded-full bg-emerald-500/70 transition-transform duration-1000 ${
              isIntersecting ? "scale-x-100" : "motion-safe:scale-x-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group flex h-full flex-col rounded-lg border bg-card p-6 transition-all duration-1000 ease-out hover:shadow-lg ${
                isIntersecting
                  ? "translate-y-0 opacity-100"
                  : "motion-safe:translate-y-12 motion-safe:opacity-0"
              } `}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-2 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.externalUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.npm ? (
                          <>
                            <Npm className="mr-2" />
                            Package
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2" />
                            Live Demo
                          </>
                        )}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
