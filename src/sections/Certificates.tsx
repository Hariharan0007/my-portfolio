import { motion } from "framer-motion";
import { CertificatesScene } from "../motions/Certificates";
import { colors } from "../utils/Constants";
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
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Advanced React Development",
            issuer: "Platform Name",
            date: "2023",
            skills: ["React Hooks", "Context API", "Performance Optimization"],
          },
          {
            title: "Three.js Mastery",
            issuer: "Platform Name",
            date: "2023",
            skills: ["3D Graphics", "WebGL", "Animation"],
          },
          {
            title: "TypeScript Fundamentals",
            issuer: "Platform Name",
            date: "2022",
            skills: ["Type System", "Generics", "Advanced Types"],
          },
          {
            title: "Web Performance Optimization",
            issuer: "Platform Name",
            date: "2022",
            skills: ["Lighthouse", "Core Web Vitals", "Caching"],
          },
        ].map((cert) => (
          <motion.div
            key={cert.title}
            className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className="text-xl font-bold mb-2 text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {cert.title}
            </h3>
            <p
              className="text-secondary/80 mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {cert.issuer} • {cert.date}
            </p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                  style={{ fontFamily: "monospace" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CertificateSection;
