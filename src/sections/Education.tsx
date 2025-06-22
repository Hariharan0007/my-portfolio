import { motion } from "framer-motion";
import { EducationScene } from "../motions/Education";
import { colors } from "../utils/Constants";
import Section from "./Main";

const EducationSection = () => {
  return (
    <Section
      title="Education"
      id="education"
      scene={<EducationScene />}
      bgColor={`bg-gradient-to-br from-[${colors.background1}] to-[${colors.accent2}]/10`}
      decoration="left"
    >
      <div className="space-y-8">
        {[
          {
            degree: "Bachelor of Engineering",
            institution: "Dr. N.G.P. Institute of Technology",
            period: "2020 - 2024",
            details: "Computer Science and Engineering",
            achievements: [
              "Graduated with First Class Honors",
              "Organized multiple events and workshops",
              "Participated in multiple hackathons",
              "Specialized in Web Development",
              "Pet Project: Seminar Hall Booking System",
            ],
          },
          {
            degree: "Higher Secondary",
            institution: "Sri Kumaran Matric Higher Secondary School",
            period: "2018 - 2020",
            details: "Science Stream with Computer Science",
            achievements: [
              "Scored 88% in final exams",
              "Active member of Science Club",
              "Participated in multiple science fairs",
            ],
          },
        ].map((edu) => (
          <motion.div
            key={edu.degree}
            className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className="text-xl font-bold mb-2 text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {edu.degree}
            </h3>
            <p
              className="text-lg font-medium text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              {edu.institution}
            </p>
            <p
              className="text-secondary/80 mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {edu.period}
            </p>
            <p
              className="text-secondary mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {edu.details}
            </p>
            <div className="flex flex-col gap-2 items-start">
              <h4 className="font-bold text-secondary text-sm">Achievements</h4>
              <ul
                className="list-disc list-inside text-secondary flex flex-col gap-2 items-start text-xs"
                style={{ fontFamily: "monospace" }}
              >
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
