"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { RefObject } from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  externalUrl: string;
}

const projectData: Project[] = [
  {
    name: "Better GitHub Profile",
    description:
      "Generates a good looking website using your GitHub profile data. It's the tool I'm using right now to generate this website!",
    technologies: ["React", "Styled Components", "GitHub GraphQL API"],
    repoUrl: "https://github.com/aabuhijleh/better-github-profile",
    externalUrl: "https://aabuhijleh.vercel.app/",
  },
  {
    name: "keylogger.js",
    description:
      "A Node.js keylogger for Windows and macOS. It registers native low level hooks to capture keyboard events. node-addon-api is used to bridge between native and JavaScript worlds",
    technologies: ["Node.js", "C++"],
    repoUrl: "https://github.com/aabuhijleh/keylogger.js",
    externalUrl: "https://www.npmjs.com/package/keylogger.js",
  },
  {
    name: "electron-selected-text",
    description:
      "A cross-platform utility that enables retrieving selected text from any application. It achieves this by using RobotJS to synthesize a CommandOrControl+C keyboard shortcut then getting the value from the clipboard",
    technologies: ["Node.js", "RobotJS"],
    repoUrl: "https://github.com/aabuhijleh/electron-selected-text",
    externalUrl: "https://www.npmjs.com/package/electron-selected-text",
  },
  {
    name: "osw",
    description:
      "During the COVID-19 lockdown we all had to work from home. To make things worse, in our company, we had to fill out a form every day and use a slow, outdated website to submit it. With this tool, me and dozens of my coworkers do this chore in 5 seconds instead of 5 minutes",
    technologies: ["Node.js", "Yargs", "Inquirer.js"],
    repoUrl: "https://github.com/aabuhijleh/osw",
    externalUrl: "https://www.npmjs.com/package/osw",
  },
];

export const Projects = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="projects" className="py-24">
      <div ref={targetRef as RefObject<HTMLDivElement>}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
          {projectData.map((project, index) => (
            <div
              key={project.name}
              className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: `all 0.5s ease-out ${index * 0.2}s`,
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
