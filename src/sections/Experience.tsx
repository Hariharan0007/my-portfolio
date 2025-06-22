import { motion } from "framer-motion";
import { ExperienceScene } from "../motions/Experience";
import { colors } from "../utils/Constants";
import Section from "./Main";

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      id="experience"
      scene={<ExperienceScene />}
      bgColor={`bg-gradient-to-tl from-[${colors.background5}] to-[${colors.accent4}]/10`}
      decoration="left"
      disableScene
    >
      <div className="space-y-8">
        {[
          {
            role: "Senior Developer",
            company: "Tech Corp",
            period: "2020 - Present",
            description:
              "Leading the development of innovative web applications and mentoring junior developers.",
          },
          {
            role: "Frontend Developer",
            company: "Digital Solutions",
            period: "2018 - 2020",
            description:
              "Developed and maintained multiple client-facing applications using modern web technologies.",
          },
        ].map((exp) => (
          <motion.div
            key={exp.role}
            className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className="text-xl font-bold mb-2 text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {exp.role}
            </h3>
            <p
              className="text-lg font-medium text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {exp.company}
            </p>
            <p
              className="text-secondary/80 mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {exp.period}
            </p>
            <p className="text-secondary" style={{ fontFamily: "monospace" }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
