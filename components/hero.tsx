import {
  SiGithub as Github,
  SiStackoverflow as Stackoverflow,
  SiLinkedin as Linkedin,
  SiX as X,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { Section } from "./section";

export const Hero = () => {
  return (
    <Section>
      <div className="space-y-8">
        <div>
          <div className="tracking-widest text-emerald-400 transition-all duration-300">
            👋, my name is
          </div>
          <h1 className="relative inline-block animate-gradient scroll-m-20 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
            Abed Abu-Hijleh
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 opacity-30 blur-3xl"></span>
          </h1>
          <div className="mt-2">
            I&apos;m a{" "}
            <span className="tracking-widest text-emerald-400">
              full-stack software engineer
            </span>
            .
          </div>
        </div>

        <div className="flex gap-2">
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

        <div className="flex gap-4">
          <a
            className="neon-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View resume
          </a>
          <Link className="neon-button" href="#contact">
            🤙 Contact me
          </Link>
        </div>
      </div>

      <Image
        src="/about-code.png"
        alt="Abed Abu-Hijleh"
        width={680}
        height={400}
      />
    </Section>
  );
};
