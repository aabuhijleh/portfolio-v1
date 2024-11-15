"use client";

import Link from "next/link";
import { links } from "~/assets/data";
import { useIntersecting } from "~/hooks/useIntersecting";
import { cn } from "~/lib/utils";

export const Hero = () => {
  const { targetRef, isIntersecting } = useIntersecting();

  return (
    <section
      ref={targetRef}
      className={cn("flex min-h-svh w-full flex-col justify-center")}
    >
      <div
        className={cn(
          "space-y-8",
          "-translate-x-full opacity-0 blur-sm transition-all duration-1000",
          isIntersecting && "translate-x-0 opacity-100 blur-none",
        )}
      >
        <div>
          <div className="tracking-widest text-emerald-400 transition-all duration-300">
            <span className="inline-block animate-wave">👋</span>, my name is
          </div>

          <h1 className="inline-block scroll-m-20 text-9xl font-extrabold tracking-tight">
            <span className="relative w-min animate-gradient bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-transparent">
              Abed{" "}
              <span className="absolute inset-0 animate-gradient bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] opacity-10 blur-3xl"></span>
            </span>
            <span className="relative animate-gradient whitespace-nowrap bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-transparent">
              Abu-Hijleh
              <span className="absolute inset-0 animate-gradient bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] opacity-10 blur-3xl"></span>
            </span>
          </h1>
          <div className="mt-4 w-max scroll-m-20 pb-2 text-3xl font-extrabold">
            I&apos;m a{" "}
            <span
              className={cn(
                "relative tracking-widest text-emerald-400",
                "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:delay-700 after:duration-700",
                isIntersecting && "after:w-full",
              )}
            >
              full-stack software engineer
            </span>
            .
          </div>
        </div>

        <ul className="flex gap-2 duration-0 animate-in">
          {links.map((link, index) => (
            <li
              key={link.href}
              className={cn(isIntersecting && "animate-fade-up")}
              style={{
                animationDelay: `${index * 150 + 500}ms`,
              }}
            >
              <a
                className="block rounded-md p-1 transition-colors hover:bg-foreground hover:text-background"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={32} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
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
