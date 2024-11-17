"use client";

import { type RefObject } from "react";
import { useIsIntersecting } from "~/hooks/useIsIntersecting";

export const Contact = () => {
  const { targetRef, isIntersecting } = useIsIntersecting();

  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <div
        className={`space-y-8 text-center transition-all duration-1000 ${
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        ref={targetRef as RefObject<HTMLDivElement>}
      >
        <h2 className="text-4xl font-bold">
          Let&apos;s Connect!{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h2>

        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Feel free to reach out anytime! Whether you have a question, want to
          discuss a project, or just want to say hello, I’ll do my best to
          respond as quickly as possible.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:aabuhijleh.dev@gmail.com" className="neon-button">
            ✉️ Email Me
          </a>

          <a
            href="https://wa.me/+972599113856"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
