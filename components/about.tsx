import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

export const About = () => {
  const codeString = `const aboutMe = {
  name: "Your Name",
  title: "Senior Software Engineer",
  skills: ["JavaScript", "React", "Node.js", "CSS Wizardry"],
  passion: "Crafting elegant solutions to complex problems",
  funFact: "Speaks fluent code and coffee.",
  quote: "It's not a bug; it's an undocumented feature!",
};`;

  return (
    <section id="about">
      <SyntaxHighlighter language="javascript" style={synthwave84}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
};
