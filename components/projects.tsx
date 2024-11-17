"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { RefObject } from "react";
import { projects } from "~/assets/data";

export const Projects = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="projects" className="p-section">
      <div ref={targetRef as RefObject<HTMLDivElement>}>
        <div className="mb-16 flex items-center gap-4">
          <div
            className={`hidden h-[2px] flex-grow origin-right rounded-full bg-emerald-500/70 transition-transform duration-1000 sm:block ${
              isIntersecting ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Projects
          </h2>
          <div
            className={`h-[2px] flex-grow origin-left rounded-full bg-emerald-500/70 transition-transform duration-1000 ${
              isIntersecting ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: `all 1s ease-out ${index * 0.2}s`,
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
                      <SiGithub className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
