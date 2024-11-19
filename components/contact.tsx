"use client";

import { type RefObject } from "react";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";

export const Contact = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="contact" className="p-section container mx-auto">
      <div
        className={`flex flex-col gap-8 text-center transition-all duration-1000 ${
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "motion-safe:translate-y-10 motion-safe:opacity-0"
        }`}
        ref={targetRef as RefObject<HTMLDivElement>}
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          Let&apos;s Connect!{" "}
          <span className="inline-block motion-safe:animate-bounce">👋</span>
        </h2>

        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Feel free to reach out anytime! Whether you have a question, want to
          discuss a project, or just want to say hello, I’ll do my best to
          respond as quickly as possible.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:aabuhijleh.dev@gmail.com" className="neon-button">
            <span className="mr-2">✉️</span> Email Me
          </a>

          <a
            href="https://wa.me/+972599113856"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
          >
            <span className="mr-2">💬</span> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
