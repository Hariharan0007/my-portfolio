import { AboutScene } from "../motions/About";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import { staggerContainer, staggerItem } from "../utils/Animations";
import { motion } from "framer-motion";
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
      <motion.div className="space-y-6" {...staggerContainer}>
        <motion.p style={textStyles.bodyLarge} {...staggerItem}>
          I am a passionate developer with expertise in modern web technologies.
          My journey in software development began with a curiosity about how
          things work, and it has evolved into a deep love for creating
          beautiful, functional applications.
        </motion.p>
        <motion.p style={textStyles.bodyLarge} {...staggerItem}>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge with
          others.
        </motion.p>
        <motion.div className="mt-8" {...staggerItem}>
          <motion.h3 style={textStyles.h4} className="mb-4">
            What I Do
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "rgba(0, 191, 255, 0.1)",
                border: `1px solid ${colors.cyberpunk_grid}`,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={textStyles.accent} className="mb-2">
                Frontend Development
              </h4>
              <p style={textStyles.body}>
                Creating responsive and interactive user interfaces with React,
                TypeScript, and modern CSS frameworks.
              </p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "rgba(0, 191, 255, 0.1)",
                border: `1px solid ${colors.cyberpunk_grid}`,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={textStyles.accent} className="mb-2">
                Backend Development
              </h4>
              <p style={textStyles.body}>
                Building scalable APIs and server-side applications using
                Node.js, Python, and various databases.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
