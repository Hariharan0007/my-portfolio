import { motion } from "framer-motion";
import { CertificatesScene } from "../motions/Certificates";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
import Section from "./Main";

const CertificateSection = () => {
  return (
    <Section
      title="Course Certificates"
      id="certificates"
      scene={<CertificatesScene />}
      bgColor={`bg-gradient-to-bl from-[${colors.background2}] to-[${colors.accent3}]/10`}
      decoration="right"
      disableScene
    >
      <motion.div className="grid md:grid-cols-2 gap-8" {...staggerContainer}>
        {[
          {
            title: "Advanced React Development",
            issuer: "Meta (Facebook)",
            date: "2023",
            skills: [
              "React Hooks",
              "Context API",
              "Performance Optimization",
              "Testing",
            ],
            credentialId: "META-REACT-2023-001",
            description:
              "Comprehensive course covering advanced React concepts, state management, and performance optimization techniques.",
          },
          {
            title: "Three.js Mastery",
            issuer: "Three.js University",
            date: "2023",
            skills: ["3D Graphics", "WebGL", "Animation", "Shaders"],
            credentialId: "THREE-JS-2023-002",
            description:
              "Complete mastery of Three.js library for creating interactive 3D web experiences and animations.",
          },
          {
            title: "TypeScript Fundamentals",
            issuer: "Microsoft Learn",
            date: "2022",
            skills: ["Type System", "Generics", "Advanced Types", "Decorators"],
            credentialId: "MS-TS-2022-003",
            description:
              "Deep dive into TypeScript's type system, advanced features, and best practices for large-scale applications.",
          },
          {
            title: "Web Performance Optimization",
            issuer: "Google Developers",
            date: "2022",
            skills: [
              "Lighthouse",
              "Core Web Vitals",
              "Caching",
              "Bundle Optimization",
            ],
            credentialId: "GOOGLE-PERF-2022-004",
            description:
              "Learn to optimize web applications for maximum performance using modern tools and techniques.",
          },
          {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            skills: ["Cloud Computing", "AWS Services", "DevOps", "Security"],
            credentialId: "AWS-CP-2023-005",
            description:
              "Foundational understanding of AWS cloud services and cloud computing concepts.",
          },
          {
            title: "Node.js Backend Development",
            issuer: "The Odin Project",
            date: "2022",
            skills: ["Express.js", "MongoDB", "Authentication", "API Design"],
            credentialId: "ODIN-NODE-2022-006",
            description:
              "Complete backend development course covering Node.js, Express, and database integration.",
          },
        ].map((cert) => (
          <motion.div
            key={cert.title}
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
                  {cert.title}
                </h3>
                <p style={textStyles.accent} className="mb-1">
                  {cert.issuer}
                </p>
                <p style={textStyles.body} className="text-sm opacity-80 mb-1">
                  {cert.date} • ID: {cert.credentialId}
                </p>
              </div>
            </div>

            <p style={textStyles.body} className="text-sm mb-4">
              {cert.description}
            </p>

            <div>
              <h4 style={textStyles.accent} className="mb-2 text-sm">
                Skills Covered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "rgba(0, 191, 255, 0.1)",
                      color: colors.cyberpunk_cyan,
                      border: `1px solid ${colors.cyberpunk_grid}`,
                      fontFamily: "monospace",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default CertificateSection;
