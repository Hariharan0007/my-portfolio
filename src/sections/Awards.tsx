import { motion } from "framer-motion";
import { AwardsScene } from "../motions/Contacts";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
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
      <motion.div className="space-y-8" {...staggerContainer}>
        {[
          {
            title: "Best Project Award",
            organization: "Tech Conference 2023",
            date: "2023",
            category: "Innovation",
            description:
              "Awarded for developing an innovative web application using Three.js and React that revolutionized user interaction in e-commerce platforms.",
            impact:
              "The project was adopted by 3 major e-commerce companies and improved user engagement by 45%",
            prize: "₹50,000 + Recognition Certificate",
          },
          {
            title: "Hackathon Winner",
            organization: "CodeFest 2022",
            date: "2022",
            category: "Real-time Applications",
            description:
              "First place in a 48-hour hackathon for creating a real-time collaboration tool with video calling capabilities.",
            impact:
              "The solution was implemented by 2 startups and served 10,000+ users",
            prize: "₹25,000 + Job Offer",
          },
          {
            title: "Outstanding Student",
            organization: "Dr. N.G.P. Institute of Technology",
            date: "2021",
            category: "Academic Excellence",
            description:
              "Recognized for academic excellence and contributions to the developer community through open-source projects and mentoring.",
            impact:
              "Mentored 15+ junior students and contributed to 5+ open-source projects",
            prize: "Gold Medal + Scholarship",
          },
          {
            title: "Best UI/UX Design",
            organization: "Design Challenge 2023",
            date: "2023",
            category: "Design",
            description:
              "Awarded for creating an intuitive and accessible user interface for a healthcare application.",
            impact:
              "The design improved accessibility for users with disabilities by 60%",
            prize: "₹15,000 + Design Tools License",
          },
          {
            title: "Open Source Contributor",
            organization: "GitHub",
            date: "2022-2023",
            category: "Community",
            description:
              "Recognized as a top contributor to various open-source projects, particularly in React and TypeScript ecosystems.",
            impact:
              "Contributed to 20+ repositories with 500+ commits and 50+ pull requests",
            prize: "GitHub Swag Pack + Recognition",
          },
        ].map((award) => (
          <motion.div
            key={award.title}
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
                  {award.title}
                </h3>
                <p style={textStyles.accent} className="mb-1">
                  {award.organization}
                </p>
                <p style={textStyles.body} className="text-sm opacity-80 mb-1">
                  {award.date}
                </p>
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: "rgba(0, 191, 255, 0.2)",
                    color: colors.cyberpunk_cyan,
                    fontFamily: "monospace",
                  }}
                >
                  {award.category}
                </span>
              </div>
            </div>

            <p style={textStyles.body} className="mb-4">
              {award.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 style={textStyles.accent} className="mb-2 text-sm">
                  Impact:
                </h4>
                <p style={textStyles.body} className="text-sm">
                  {award.impact}
                </p>
              </div>

              <div>
                <h4 style={textStyles.accent} className="mb-2 text-sm">
                  Prize:
                </h4>
                <p style={textStyles.body} className="text-sm">
                  {award.prize}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default AwardsSection;
