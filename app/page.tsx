import { Hero } from "~/components/hero";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Work } from "~/components/work";
import { Projects } from "~/components/projects";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-8">
      <Header />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
