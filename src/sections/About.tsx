import { AboutScene } from "../motions/About";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScrollTransition from "../components/SmoothScrollTransition";
import Section from "./Main";
import { useState } from "react";

const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    points: string[];
  }>({ title: "", points: [] });

  const frontendPoints = [
    "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks",
    "Building component-based architectures with reusable UI components",
    "Implementing state management solutions (Redux, Context API)",
    "Optimizing web performance and Core Web Vitals",
    "Developing Progressive Web Applications (PWAs)",
    "Working with modern build tools (Vite, Webpack, Parcel)",
    "Implementing accessibility standards (WCAG) and responsive design",
    "Integrating with RESTful APIs and GraphQL endpoints",
    "Working with design systems and component libraries",
    "Familiar with Antd, Tailwind CSS, Styled Components, Bootstrap and other CSS frameworks",
  ];

  const backendPoints = [
    "Building scalable APIs and server-side applications using Node.js, Python, and various databases",
    "Designing and implementing RESTful APIs",
    "Working with databases (PostgreSQL, MongoDB, Redis)",
    "Implementing authentication and authorization systems",
    "Building microservices and distributed systems",
    "Working with cloud platforms (AWS, Google Cloud, E2E)",
    "Implementing caching strategies and performance optimization",
    "Setting up database migrations and data modeling",
    "Working with message queues and event-driven architectures",
    "Implementing security best practices and data validation",
  ];

  const mobileAppPoints = [
    "Building cross-platform mobile applications using React Native",
    "Developing native iOS and Android features and integrations",
    "Implementing responsive UI/UX designs for mobile devices",
    "Managing app state and data persistence",
    "Testing and debugging mobile applications",
    "Integrating third-party APIs and services",
    "Optimizing app performance and memory usage",
    "Implementing push notifications and offline functionality",
  ];

  const deploymentPoints = [
    "Deploying web applications using Docker, Apache, and Nginx",
    "Managing cloud infrastructure and containerization",
    "Setting up CI/CD pipelines for automated deployments",
    "Releasing mobile applications to App Store and Google Play Store",
    "Monitoring application performance and uptime",
    "Implementing security best practices and SSL certificates",
    "Managing database migrations and backups",
    "Setting up monitoring and logging systems",
  ];

  const openModal = (title: string, points: string[]) => {
    setModalContent({ title, points });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Section
      title="About Me"
      id="about"
      scene={<AboutScene />}
      bgColor={`bg-gradient-to-br from-[${colors.background3}] to-[${colors.accent}]/10`}
      decoration="left"
      disableScene
    >
      <SmoothScrollTransition
        className="space-y-8 mt-8"
        direction="up"
        delay={0.2}
      >
        <SmoothScrollTransition direction="left" delay={0.4}>
          <p style={textStyles.bodyLarge}>
            I am a passionate developer with expertise in modern web
            technologies. My journey in software development began with a
            curiosity about how things work, and it has evolved into a deep love
            for creating beautiful, functional applications.
          </p>
        </SmoothScrollTransition>

        <SmoothScrollTransition direction="right" delay={0.6}>
          <p style={textStyles.bodyLarge}>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge with
            others.
          </p>
        </SmoothScrollTransition>

        <SmoothScrollTransition className="mt-12" direction="fade" delay={0.8}>
          <h3 style={textStyles.h4} className="mb-8">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <SmoothScrollTransition direction="left" delay={1.0}>
              <motion.div
                className="p-4 rounded-lg h-48 flex flex-col"
                style={{
                  backgroundColor: "rgba(0, 191, 255, 0.1)",
                  border: `1px solid ${colors.cyberpunk_grid}`,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 style={textStyles.accent} className="mb-2">
                  Frontend Development
                </h4>
                <ul
                  style={textStyles.body}
                  className="list-disc list-inside space-y-1 text-left flex-grow"
                >
                  {frontendPoints.slice(0, 2).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    openModal("Frontend Development", frontendPoints)
                  }
                  className="mt-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View More →
                </button>
              </motion.div>
            </SmoothScrollTransition>

            <SmoothScrollTransition direction="right" delay={1.2}>
              <motion.div
                className="p-4 rounded-lg h-48 flex flex-col"
                style={{
                  backgroundColor: "rgba(0, 191, 255, 0.1)",
                  border: `1px solid ${colors.cyberpunk_grid}`,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 style={textStyles.accent} className="mb-2">
                  Backend Development
                </h4>
                <ul
                  style={textStyles.body}
                  className="list-disc list-inside space-y-1 text-left flex-grow"
                >
                  {backendPoints.slice(0, 2).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    openModal("Backend Development", backendPoints)
                  }
                  className="mt-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View More →
                </button>
              </motion.div>
            </SmoothScrollTransition>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <SmoothScrollTransition direction="left" delay={1.0}>
              <motion.div
                className="p-4 rounded-lg h-48 flex flex-col"
                style={{
                  backgroundColor: "rgba(0, 191, 255, 0.1)",
                  border: `1px solid ${colors.cyberpunk_grid}`,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 style={textStyles.accent} className="mb-2">
                  Mobile Application Development
                </h4>
                <ul
                  style={textStyles.body}
                  className="list-disc list-inside space-y-1 text-left flex-grow"
                >
                  {mobileAppPoints.slice(0, 2).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    openModal("Mobile Application Development", mobileAppPoints)
                  }
                  className="mt-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View More →
                </button>
              </motion.div>
            </SmoothScrollTransition>

            <SmoothScrollTransition direction="right" delay={1.2}>
              <motion.div
                className="p-4 rounded-lg h-48 flex flex-col"
                style={{
                  backgroundColor: "rgba(0, 191, 255, 0.1)",
                  border: `1px solid ${colors.cyberpunk_grid}`,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 style={textStyles.accent} className="mb-2">
                  Deployment and DevOps
                </h4>
                <ul
                  style={textStyles.body}
                  className="list-disc list-inside space-y-1 text-left flex-grow"
                >
                  {deploymentPoints.slice(0, 2).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    openModal("Deployment and DevOps", deploymentPoints)
                  }
                  className="mt-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View More →
                </button>
              </motion.div>
            </SmoothScrollTransition>
          </div>
        </SmoothScrollTransition>
      </SmoothScrollTransition>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border border-cyan-500/30 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-cyan-500/20">
                <div className="flex justify-between items-center">
                  <h3 style={textStyles.h3} className="text-cyan-400">
                    {modalContent.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <ul
                  style={textStyles.body}
                  className="list-disc list-inside space-y-3 text-left"
                >
                  {modalContent.points.map((item, index) => (
                    <li key={index} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-cyan-500/20">
                <button
                  onClick={closeModal}
                  className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default AboutSection;
