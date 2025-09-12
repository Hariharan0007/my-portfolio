import { motion } from "framer-motion";
import { ProjectsScene } from "../motions/Projects";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
import Section from "./Main";

const ProjectSection = () => {
  return (
    <Section
      title="Projects"
      id="projects"
      scene={<ProjectsScene />}
      bgColor={`bg-gradient-to-tr from-[${colors.background4}] to-[${colors.accent3}]/10`}
      decoration="right"
      disableScene
    >
      <motion.div className="grid md:grid-cols-2 gap-8" {...staggerContainer}>
        {[
          {
            title: "E-Commerce Platform",
            description:
              "A modern full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            status: "Completed",
          },
          {
            title: "3D Portfolio Website",
            description:
              "An interactive portfolio website featuring 3D animations and smooth transitions using Three.js and Framer Motion.",
            tech: ["Three.js", "React", "Framer Motion", "TypeScript"],
            status: "In Progress",
          },
          {
            title: "Real-time Chat App",
            description:
              "A real-time messaging application with video calling capabilities, built with Socket.io and WebRTC.",
            tech: ["Socket.io", "WebRTC", "Express", "React"],
            status: "Completed",
          },
          {
            title: "AI-Powered Dashboard",
            description:
              "A data visualization dashboard with machine learning predictions and real-time analytics.",
            tech: ["Python", "FastAPI", "React", "TensorFlow"],
            status: "Completed",
          },
        ].map((project) => (
          <motion.div
            key={project.title}
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
              <h3 style={textStyles.h4}>{project.title}</h3>
              <span
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor:
                    project.status === "Completed"
                      ? "rgba(0, 191, 255, 0.2)"
                      : "rgba(255, 128, 0, 0.2)",
                  color:
                    project.status === "Completed"
                      ? colors.cyberpunk_cyan
                      : colors.cyberpunk_accent,
                  fontFamily: "monospace",
                }}
              >
                {project.status}
              </span>
            </div>
            <p style={textStyles.body} className="mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
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

export default ProjectSection;
