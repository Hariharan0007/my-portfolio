import { AboutScene } from "../motions/About";
import { colors } from "../utils/Constants";
import Section from "./Main";

const AboutSection = () => {
  return (
    <Section
      title="About Me"
      id="about"
      scene={<AboutScene />}
      bgColor={`bg-gradient-to-br from-[${colors.background3}] to-[${colors.accent}]/10`}
      decoration="left"
      disableScene
    >
      <div className="space-y-4">
        <p
          className="text-lg text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          I am a passionate developer with expertise in modern web technologies.
          My journey in software development began with a curiosity about how
          things work, and it has evolved into a deep love for creating
          beautiful, functional applications.
        </p>
        <p
          className="text-lg text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge with
          others.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
