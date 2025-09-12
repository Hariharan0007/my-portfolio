import { motion } from "framer-motion";
import { EducationScene } from "../motions/Education";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
import Section from "./Main";

const EducationSection = () => {
  return (
    <Section
      title="Education"
      id="education"
      scene={<EducationScene />}
      bgColor={`bg-gradient-to-br from-[${colors.background1}] to-[${colors.accent2}]/10`}
      decoration="left"
      disableScene
    >
      <motion.div className="space-y-8" {...staggerContainer}>
        {[
          {
            degree: "Bachelor of Engineering",
            institution: "Dr. N.G.P. Institute of Technology",
            period: "2020 - 2024",
            details: "Computer Science and Engineering",
            gpa: "8.5/10",
            achievements: [
              "Graduated with First Class Honors",
              "Organized multiple events and workshops",
              "Participated in multiple hackathons",
              "Specialized in Web Development",
              "Pet Project: Seminar Hall Booking System",
              "Final Year Project: AI-Powered Learning Management System",
            ],
            relevantCourses: [
              "Data Structures and Algorithms",
              "Database Management Systems",
              "Software Engineering",
              "Computer Networks",
              "Web Technologies",
              "Machine Learning",
            ],
          },
          {
            degree: "Higher Secondary",
            institution: "Sri Kumaran Matric Higher Secondary School",
            period: "2018 - 2020",
            details: "Science Stream with Computer Science",
            gpa: "88%",
            achievements: [
              "Scored 88% in final exams",
              "Active member of Science Club",
              "Participated in multiple science fairs",
              "Won 2nd place in State-level Science Exhibition",
              "Class Representative for Computer Science",
            ],
            relevantCourses: [
              "Mathematics",
              "Physics",
              "Chemistry",
              "Computer Science",
              "English",
            ],
          },
        ].map((edu) => (
          <motion.div
            key={edu.degree}
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
                  {edu.degree}
                </h3>
                <p style={textStyles.accent} className="mb-1">
                  {edu.institution}
                </p>
                <p style={textStyles.body} className="text-sm opacity-80 mb-1">
                  {edu.period}
                </p>
                <p style={textStyles.body} className="text-sm mb-1">
                  {edu.details}
                </p>
                <p style={textStyles.accent} className="text-sm">
                  GPA: {edu.gpa}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 style={textStyles.accent} className="mb-2 text-sm">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, achIndex) => (
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

              <div>
                <h4 style={textStyles.accent} className="mb-2 text-sm">
                  Relevant Courses:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "rgba(0, 191, 255, 0.1)",
                        color: colors.cyberpunk_cyan,
                        border: `1px solid ${colors.cyberpunk_grid}`,
                        fontFamily: "monospace",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default EducationSection;
