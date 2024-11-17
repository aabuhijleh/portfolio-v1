"use client";

import Link from "next/link";
import { socialLinks } from "~/assets/config";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";
import { cn } from "~/lib/utils";

export const Hero = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section
      id="home"
      ref={targetRef}
      className={cn("flex min-h-svh w-full flex-col justify-center sm:px-0")}
    >
      <div
        className={cn(
          "w-full space-y-8",
          "motion-safe:-translate-x-full motion-safe:opacity-0 motion-safe:blur-sm motion-safe:transition-all motion-safe:duration-1000",
          isIntersecting &&
            "motion-safe:translate-x-0 motion-safe:opacity-100 motion-safe:blur-none",
        )}
      >
        <div>
          <div className="tracking-widest text-emerald-400 sm:text-lg">
            <span className="inline-block animate-wave">👋</span>, my name is
          </div>

          <h1 className="inline-block animate-gradient scroll-m-20 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-9xl">
            Abed <span className="whitespace-nowrap">Abu-Hijleh</span>
          </h1>
          <div className="mt-4 w-max scroll-m-20 pb-2 text-lg sm:text-2xl md:text-3xl">
            I&apos;m a{" "}
            <span
              className={cn(
                "relative text-emerald-400",
                "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:delay-700 after:duration-700",
                isIntersecting && "after:w-full",
              )}
            >
              full-stack software engineer
            </span>
            .
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 duration-0 animate-in">
          {socialLinks.map((link, index) => (
            <li
              key={link.href}
              className={cn(isIntersecting && "motion-safe:animate-fade-up")}
              style={{
                animationDelay: `${index * 150 + 1200}ms`,
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

        <div className="flex flex-wrap gap-4">
          <a
            className="neon-button group"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-block animate-bounce">📄</span> View resume
          </a>
          <Link className="neon-button group" href="#contact">
            <span className="inline-block transition-transform group-hover:rotate-12">
              🤙
            </span>{" "}
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};
