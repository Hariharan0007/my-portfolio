import { motion } from "framer-motion";
import { AwardsScene } from "../motions/Contacts";
import { colors } from "../utils/Constants";
import Section from "./Main";

const AwardsSection = () => {
  return (
    <Section
      title="Awards & Achievements"
      id="awards"
      scene={<AwardsScene />}
      bgColor={`bg-gradient-to-tr from-[${colors.background3}] to-[${colors.accent4}]/10`}
      decoration="left"
      disableScene
    >
      <div className="space-y-8">
        {[
          {
            title: "Best Project Award",
            organization: "Tech Conference 2023",
            date: "2023",
            description:
              "Awarded for developing an innovative web application using Three.js and React",
          },
          {
            title: "Hackathon Winner",
            organization: "CodeFest 2022",
            date: "2022",
            description:
              "First place in a 48-hour hackathon for creating a real-time collaboration tool",
          },
          {
            title: "Outstanding Student",
            organization: "University Name",
            date: "2021",
            description:
              "Recognized for academic excellence and contributions to the developer community",
          },
        ].map((award) => (
          <motion.div
            key={award.title}
            className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className="text-xl font-bold mb-2 text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {award.title}
            </h3>
            <p
              className="text-lg font-medium text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {award.organization}
            </p>
            <p
              className="text-secondary/80 mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {award.date}
            </p>
            <p className="text-secondary" style={{ fontFamily: "monospace" }}>
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;
