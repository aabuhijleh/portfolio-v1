import { Hero } from "~/components/hero";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
