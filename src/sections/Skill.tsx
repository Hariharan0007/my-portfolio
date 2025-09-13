import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SkillsScene } from "../motions/Skills";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import { hoverScale, hoverGlow } from "../utils/Animations";
import SmoothScrollTransition from "../components/SmoothScrollTransition";
import Section from "./Main";
import { skills, Skill } from "../utils/SkillsData";

const SkillCard = ({
  skill,
  index,
  isMobile = false,
}: {
  skill: Skill;
  index: number;
  isMobile?: boolean;
}) => {
  if (isMobile) {
    return (
      <div
        className="p-3 rounded-lg backdrop-blur-sm shadow-md flex-shrink-0 flex flex-col items-center justify-center gap-1 w-24 h-20"
        style={{
          backgroundColor: "rgba(26, 35, 50, 0.3)",
          border: `1px solid ${colors.cyberpunk_grid}`,
        }}
      >
        {React.cloneElement(skill.icon, {
          size: 20,
          color: skill.color || skill.icon.props.color,
        })}
        <p
          style={textStyles.body}
          className="text-center text-xs leading-tight"
        >
          {skill.name}
        </p>
      </div>
    );
  }

  return (
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
};

const MarqueeRow = ({
  skills,
  direction = "left",
  isMobile = false,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  isMobile?: boolean;
}) => {
  const from = direction === "left" ? "0%" : "-100%";
  const to = direction === "left" ? "-100%" : "0%";

  if (isMobile) {
    return (
      <motion.div
        className="flex gap-4 overflow-hidden"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${index}`}
            skill={skill}
            index={index}
            isMobile={true}
          />
        ))}
      </motion.div>
    );
  }

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

const MobileSkillsGrid = ({ skills }: { skills: Skill[] }) => {
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidingOut, setSlidingOut] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < skills.length) {
        setVisibleSkills((prev) => [...prev, skills[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);

        if (visibleSkills.length === 6) {
          setSlidingOut([0, 1]);

          setTimeout(() => {
            setVisibleSkills((prev) => prev.slice(2));
            setSlidingOut([]);
          }, 600);
        }
      } else {
        setVisibleSkills([]);
        setCurrentIndex(0);
        setSlidingOut([]);
      }
    }, 1000); // Each card appears every 1 second for better visibility

    return () => clearInterval(interval);
  }, [currentIndex, skills]);

  return (
    <div className="w-full overflow-hidden relative min-h-[200px]">
      <div className="flex flex-wrap gap-4 justify-center px-4">
        {visibleSkills.map((skill, index) => {
          const isSlidingOut = slidingOut.includes(index);
          const isLeftCard = index % 2 === 0; // Even indices are left cards

          return (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                x: isSlidingOut ? (isLeftCard ? -150 : 150) : 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mb-3"
            >
              <SkillCard skill={skill} index={index} isMobile={true} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        {isMobile ? (
          <MobileSkillsGrid skills={skills} />
        ) : (
          <div className="flex flex-col gap-20">
            <MarqueeRow skills={skillsRow1} direction="left" />
            <MarqueeRow skills={skillsRow2} direction="right" />
          </div>
        )}
      </div>
    </Section>
  );
};

export default SkillSection;
