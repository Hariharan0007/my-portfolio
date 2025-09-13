import { motion } from "framer-motion";
import { ExperienceScene } from "../motions/Experience";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
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
      <motion.div className="space-y-8" {...staggerContainer}>
        {[
          {
            role: "Full Stack Developer",
            company: "5C Network",
            period: "2023 - Present",
            description:
              "Leading the development of innovative web applications and mentoring junior developers. Spearheaded the migration of legacy systems to modern React and Node.js architecture.",
            achievements: [
              "Proficient in building responsive front-end interfaces with React.js, Next.js, and Vite.js.",
              "Experienced in developing high-performance back-end systems using Node.js, NestJS, and Express.",
              "Skilled in managing both relational (PostgreSQL) and non-relational databases (MongoDB, Redis) for optimized data solutions.",
              "Expertise in RESTful API development, integration, and performance tuning.",
              "Strong troubleshooting, debugging, and performance optimization skills to improve application efficiency.",
              "Collaborative team player with experience in Agile/Scrum environments, ensuring timely and quality software delivery.",
              "Improved application performance by 40% through code optimization",
            ],
            tech: [
              "React",
              "Node.js",
              "TypeScript",
              "AWS",
              "Docker",
              "MongoDB",
            ],
          },
        ].map((exp) => (
          <motion.div
            key={exp.role}
            className="p-6 rounded-lg backdrop-blur-sm shadow-sm"
            style={{
              backgroundColor: "rgba(26, 35, 50, 0.3)",
              border: `1px solid ${colors.cyberpunk_grid}`,
            }}
            {...staggerItem}
            {...hoverScale}
            {...hoverGlow}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 style={textStyles.h4} className="mb-1">
                  {exp.role}
                </h3>
                <p style={textStyles.accent} className="mb-1">
                  {exp.company}
                </p>
                <p style={textStyles.body} className="text-sm opacity-80">
                  {exp.period}
                </p>
              </div>
            </div>

            <p style={textStyles.body} className="mb-4">
              {exp.description}
            </p>

            <div className="mb-4">
              <h4 style={textStyles.accent} className="mb-2 text-sm">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    style={textStyles.body}
                    className="text-sm flex items-start"
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.cyberpunk_cyan }}
                    >
                      •
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "rgba(0, 191, 255, 0.1)",
                    color: colors.cyberpunk_cyan,
                    border: `1px solid ${colors.cyberpunk_grid}`,
                    fontFamily: "monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ExperienceSection;
