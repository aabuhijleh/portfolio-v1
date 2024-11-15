import Image from "next/image";
import { Section } from "./section";

export const About = () => {
  return (
    <Section id="about">
      <Image
        src="/about-code.png"
        alt="Abed Abu-Hijleh"
        width={680}
        height={400}
      />
    </Section>
  );
};
