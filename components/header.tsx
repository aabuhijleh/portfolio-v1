"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderGit, Mail } from "lucide-react";

export const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 overflow-hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
      }`}
    >
      <nav className="group relative rounded-full border bg-gray-900/10 px-3 py-2 shadow-lg drop-shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-gray-900/20">
        <ul className="flex items-center justify-center gap-2 transition-all duration-500 group-hover:gap-6">
          <li className="animate-fade-side" style={{ animationDelay: "0ms" }}>
            <a
              href="#home"
              className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
            >
              <Home className="h-4 w-4 transform text-gray-200 transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
              <span className="absolute mt-1 scale-0 text-xs font-medium text-gray-200 opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                Home
              </span>
            </a>
          </li>
          <li className="animate-fade-side" style={{ animationDelay: "150ms" }}>
            <a
              href="#about"
              className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
            >
              <User className="h-4 w-4 transform text-gray-200 transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
              <span className="absolute mt-1 scale-0 text-xs font-medium text-gray-200 opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                About
              </span>
            </a>
          </li>
          <li className="animate-fade-side" style={{ animationDelay: "300ms" }}>
            <a
              href="#work"
              className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
            >
              <Briefcase className="h-4 w-4 transform text-gray-200 transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
              <span className="absolute mt-1 scale-0 text-xs font-medium text-gray-200 opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                Work
              </span>
            </a>
          </li>
          <li className="animate-fade-side" style={{ animationDelay: "450ms" }}>
            <a
              href="#projects"
              className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
            >
              <FolderGit className="h-4 w-4 transform text-gray-200 transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
              <span className="absolute mt-1 scale-0 text-xs font-medium text-gray-200 opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                Projects
              </span>
            </a>
          </li>
          <li className="animate-fade-side" style={{ animationDelay: "600ms" }}>
            <a
              href="#contact"
              className="group/item flex h-8 w-8 flex-col items-center justify-center rounded-full transition-all duration-500 hover:bg-emerald-500/10 group-hover:h-16 group-hover:w-16"
            >
              <Mail className="h-4 w-4 transform text-gray-200 transition-all duration-500 group-hover/item:scale-125 group-hover/item:text-emerald-400" />
              <span className="absolute mt-1 scale-0 text-xs font-medium text-gray-200 opacity-0 transition-opacity duration-500 group-hover:relative group-hover:scale-100 group-hover/item:text-emerald-400 group-hover:opacity-100">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
