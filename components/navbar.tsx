"use client";

import { useState } from "react";
import { navLinks } from "~/config";
import { X, Menu } from "lucide-react";
import { cn } from "~/lib/utils";
import { useScrollDirection } from "~/hooks/useScrollDirection";

export const Navbar = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollingDown = useScrollDirection();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed right-4 top-4 z-50 rounded-full bg-card/30 p-3 drop-shadow-2xl backdrop-blur-md transition-transform duration-300 md:hidden ${
          scrollingDown ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
        }`}
      >
        <Menu />
        <span className="sr-only">Menu</span>
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-card p-6 shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100/10"
        >
          <X className="h-6 w-6 text-card-foreground" />
          <span className="sr-only">Close</span>
        </button>

        <ul className="mt-12 space-y-4">
          {navLinks.map(({ href, label, icon: Icon }, index) => (
            <li
              key={href}
              className={cn(isOpen && "motion-safe:animate-fade-side")}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a
                href={href}
                className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-emerald-500/10"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium text-card-foreground">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const NavbarDesktop = () => {
  const scrollingDown = useScrollDirection();

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 overflow-hidden transition-transform duration-300 md:block ${
        !scrollingDown ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
      }`}
    >
      <nav className="group relative rounded-full border bg-card/30 px-3 py-2 drop-shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out">
        <ul className="flex items-center justify-center gap-2 transition-all duration-500 group-hover:gap-6">
          {navLinks.map(({ href, label, icon: Icon }, index) => (
            <li
              key={href}
              className="motion-safe:animate-fade-side"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <a
                href={href}
                className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
              >
                <Icon className="h-4 w-4 transform text-card-foreground transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
                <span className="absolute mt-1 scale-0 text-xs font-medium text-card-foreground opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
