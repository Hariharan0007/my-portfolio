import { motion } from "framer-motion";
import React from "react";
import { SkillsScene } from "../motions/Skills";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import { hoverScale, hoverGlow } from "../utils/Animations";
import SmoothScrollTransition from "../components/SmoothScrollTransition";
import Section from "./Main";
import { skills, Skill } from "../utils/SkillsData";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <SmoothScrollTransition
    direction="up"
    delay={0.2 + index * 0.1}
    threshold={0.1}
  >
    <motion.div
      className="p-6 rounded-lg backdrop-blur-sm shadow-md flex-shrink-0 flex flex-col items-center justify-center gap-3 w-52 h-40"
      style={{
        backgroundColor: "rgba(26, 35, 50, 0.3)",
        border: `1px solid ${colors.cyberpunk_grid}`,
      }}
      {...hoverScale}
      {...hoverGlow}
    >
      {React.cloneElement(skill.icon, {
        size: 48,
        color: skill.color || skill.icon.props.color,
      })}
      <p style={textStyles.body} className="text-center">
        {skill.name}
      </p>
    </motion.div>
  </SmoothScrollTransition>
);

const MarqueeRow = ({
  skills,
  direction = "left",
}: {
  skills: Skill[];
  direction?: "left" | "right";
}) => {
  const from = direction === "left" ? "0%" : "-100%";
  const to = direction === "left" ? "-100%" : "0%";

  return (
    <motion.div
      className="flex gap-8"
      initial={{ x: from }}
      animate={{ x: to }}
      transition={{
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...skills, ...skills].map((skill, index) => (
        <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
      ))}
    </motion.div>
  );
};

const SkillSection = () => {
  const skillsRow1 = skills.slice(0, Math.ceil(skills.length / 2));
  const skillsRow2 = skills.slice(Math.ceil(skills.length / 2));
  return (
    <Section
      title="Skills"
      id="skills"
      scene={<SkillsScene />}
      bgColor={`bg-gradient-to-bl from-[${colors.background2}] to-[${colors.accent2}]/10`}
      decoration="right"
      fullWidth
      disableScene
    >
      <div className="w-full overflow-hidden py-8">
        <div className="flex flex-col gap-20">
          <MarqueeRow skills={skillsRow1} direction="left" />
          <MarqueeRow skills={skillsRow2} direction="right" />
        </div>
      </div>
    </Section>
  );
};

export default SkillSection;
