import { Hero } from "~/components/hero";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Work } from "~/components/work";
import { Projects } from "~/components/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-8">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
