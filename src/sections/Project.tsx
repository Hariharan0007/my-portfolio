import { motion } from "framer-motion";
import { ProjectsScene } from "../motions/Projects";
import { colors } from "../utils/Constants";
import Section from "./Main";

const ProjectSection = () => {
  return (
    <Section
      title="Projects"
      id="projects"
      scene={<ProjectsScene />}
      bgColor={`bg-gradient-to-tr from-[${colors.background4}] to-[${colors.accent3}]/10`}
      decoration="center"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Project 1",
            description:
              "A modern web application built with React and Three.js",
          },
          {
            title: "Project 2",
            description: "An interactive data visualization tool",
          },
          {
            title: "Project 3",
            description: "A real-time collaboration platform",
          },
          {
            title: "Project 4",
            description: "A mobile-first e-commerce solution",
          },
        ].map((project) => (
          <motion.div
            key={project.title}
            className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className="text-xl font-bold mb-2 text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {project.title}
            </h3>
            <p className="text-secondary" style={{ fontFamily: "monospace" }}>
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
