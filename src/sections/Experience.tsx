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
            role: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description:
              "Leading the development of innovative web applications and mentoring junior developers. Spearheaded the migration of legacy systems to modern React and Node.js architecture.",
            achievements: [
              "Led a team of 5 developers in building a real-time collaboration platform",
              "Improved application performance by 40% through code optimization",
              "Implemented CI/CD pipelines reducing deployment time by 60%",
              "Mentored 3 junior developers who successfully transitioned to mid-level roles",
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
          {
            role: "Frontend Developer",
            company: "Digital Solutions Ltd.",
            period: "2020 - 2022",
            description:
              "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with design teams to create responsive and accessible user interfaces.",
            achievements: [
              "Built 15+ responsive web applications for various clients",
              "Implemented accessibility standards improving user experience for 10,000+ users",
              "Reduced page load times by 35% through performance optimization",
              "Collaborated with UX designers to create intuitive user interfaces",
            ],
            tech: ["React", "JavaScript", "CSS3", "SASS", "Webpack", "Git"],
          },
          {
            role: "Junior Developer",
            company: "StartupXYZ",
            period: "2019 - 2020",
            description:
              "Started my professional journey as a junior developer, working on various web development projects and learning modern development practices.",
            achievements: [
              "Developed 8+ small to medium web applications",
              "Learned modern JavaScript frameworks and libraries",
              "Contributed to open-source projects",
              "Gained experience in agile development methodologies",
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP"],
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
