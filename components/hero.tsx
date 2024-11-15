"use client";

import Link from "next/link";
import { links } from "~/assets/data";
import { useIntersecting } from "~/lib/useIntersecting";
import { cn } from "~/lib/utils";

export const Hero = () => {
  const { targetRef, isIntersecting } = useIntersecting();

  return (
    <section
      ref={targetRef}
      className={cn(
        "flex min-h-svh items-center justify-center",
        "-translate-x-full opacity-0 blur-sm transition-all duration-1000",
        isIntersecting && "translate-x-0 opacity-100 blur-none",
      )}
    >
      <div className="space-y-8">
        <div>
          <div className="tracking-widest text-emerald-400 transition-all duration-300">
            <span className="inline-block animate-wave">👋</span>, my name is
          </div>
          <h1 className="relative inline-block animate-gradient scroll-m-20 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
            Abed Abu-Hijleh
            <span className="absolute inset-0 animate-gradient bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-[size:400%] opacity-30 blur-3xl"></span>
          </h1>
          <div className="mt-2">
            I&apos;m a{" "}
            <span className="tracking-widest text-emerald-400">
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
