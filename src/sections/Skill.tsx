import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiThreedotjs,
  SiFramer,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";
import { SkillsScene } from "../motions/Skills";
import { colors } from "../utils/Constants";
import Section from "./Main";

type IconProps = {
  size: number;
  color?: string;
};

type Skill = {
  name: string;
  icon: React.ReactElement<IconProps>;
  color?: string;
};

const skills: Skill[] = [
  { name: "React", icon: <FaReact size={32} />, color: "#61DAFB" },
  { name: "Next.js", icon: <TbBrandNextjs size={32} />, color: "#000000" },
  { name: "TypeScript", icon: <SiTypescript size={32} />, color: "#3178C6" },
  { name: "React Native", icon: <FaReact size={32} />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs size={32} />, color: "#339933" },
  { name: "Express", icon: <SiExpress size={32} />, color: "#000000" },
  { name: "Nest.js", icon: <SiNestjs size={32} />, color: "#E0234E" },
  { name: "Python", icon: <FaPython size={32} />, color: "#3776AB" },
  { name: "Flask", icon: <SiFlask size={32} />, color: "#000000" },
  { name: "Django", icon: <SiDjango size={32} />, color: "#092E20" },
  { name: "FastAPI", icon: <SiFastapi size={32} />, color: "#009688" },
  { name: "Java", icon: <FaJava size={32} />, color: "#f89820" },
  { name: "Three.js", icon: <SiThreedotjs size={32} />, color: "#000000" },
  { name: "Framer Motion", icon: <SiFramer size={32} />, color: "#0055FF" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "#06B6D4" },
  { name: "Git", icon: <FaGitAlt size={32} />, color: "#F05032" },
  { name: "DevOps", icon: <VscTerminalCmd size={32} /> },
  { name: "Docker", icon: <FaDocker size={32} />, color: "#2496ED" },
  { name: "MongoDB", icon: <SiMongodb size={32} />, color: "#47A248" },
  { name: "Redis", icon: <SiRedis size={32} />, color: "#DC382D" },
  { name: "Firebase", icon: <SiFirebase size={32} />, color: "#FFCA28" },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "#4169E1" },
  { name: "NocoDB", icon: <FaDatabase size={32} /> },
  { name: "REST API", icon: <TbApi size={32} /> },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-md flex-shrink-0 flex flex-col items-center justify-center gap-3 w-52 h-40 hover:scale-105 transition-all duration-300">
    {React.cloneElement(skill.icon, {
      size: 48,
      color: skill.color || skill.icon.props.color,
    })}
    <p
      className="text-center font-medium text-secondary"
      style={{ fontFamily: "monospace" }}
    >
      {skill.name}
    </p>
  </div>
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
        <SkillCard key={`${skill.name}-${index}`} skill={skill} />
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
