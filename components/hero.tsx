"use client";

import Link from "next/link";
import { socialLinks } from "~/config";
import { cn } from "~/lib/utils";
import { BackgroundLines } from "./ui/background-lines";

export const Hero = () => {
  return (
    <section id="home">
      <BackgroundLines
        className={cn("flex min-h-svh w-full flex-col justify-center")}
      >
        <div className="z-20 flex w-full flex-col gap-8">
          <div>
            <div className="mb-2 tracking-widest text-emerald-400 sm:text-lg">
              <span className="inline-block motion-safe:animate-wave">👋</span>,
              my name is
            </div>

            <h1 className="scroll-m-20 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-6xl font-extrabold tracking-tight text-transparent motion-safe:animate-gradient md:text-9xl">
              Abed <span className="whitespace-nowrap">Abu-Hijleh</span>
            </h1>
            <div className="mt-4 w-max scroll-m-20 pb-2 text-lg sm:text-2xl md:text-3xl">
              I&apos;m a{" "}
              <span className={cn("text-emerald-400")}>
                full-stack software engineer
              </span>
              .
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 duration-0">
            {socialLinks.map((link, index) => (
              <li
                key={link.href}
                className="motion-safe:animate-fade-up"
                style={{
                  animationDelay: `${index * 150 + 100}ms`,
                }}
              >
                <a
                  className="block rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={32} />
                  <span className="sr-only">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-4">
            <a
              className="neon-button group"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2 inline-block motion-safe:animate-bounce">
                📄
              </span>
              View resume
            </a>
            <Link className="neon-button group" href="#contact">
              <span className="mr-2 inline-block transition-transform group-hover:rotate-12">
                🤙
              </span>
              Contact me
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};
