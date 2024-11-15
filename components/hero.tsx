import {
  SiGithub as Github,
  SiStackoverflow as Stackoverflow,
  SiLinkedin as Linkedin,
  SiX as X,
} from "@icons-pack/react-simple-icons";
import { FileUser, Send } from "lucide-react";
import Link from "next/link";
import { Section } from "./section";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <Section>
      <div>
        <div className="tracking-widest text-emerald-400 transition-all duration-300">
          👋, my name is
        </div>
        <h1 className="inline-block animate-gradient scroll-m-20 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
          Abed Abu-Hijleh
        </h1>
        <div className="mt-2">
          I&apos;m a{" "}
          <span className="tracking-widest text-emerald-400">
            full-stack software engineer
          </span>
          .
        </div>
        <div className="mt-4 flex gap-2">
          <a
            className="rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
            href="https://github.com/aabuhijleh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a
            className="rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
            href="https://stackoverflow.com/users/9698583/aabuhijleh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Stackoverflow size={32} />
          </a>
          <a
            className="rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
            href="https://www.linkedin.com/in/aabuhijleh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a
            className="rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
            href="https://x.com/aabuhijleh_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X size={32} />
          </a>
        </div>
        <div className="mt-4 flex gap-4">
          <Button asChild className="rounded text-lg font-semibold" size="lg">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileUser />
              View resume
            </a>
          </Button>
          <Button asChild className="rounded text-lg font-semibold" size="lg">
            <Link href="#contact">
              <Send />
              Contact me
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};
