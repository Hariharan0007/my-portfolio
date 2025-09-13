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

type IconProps = {
  size: number;
  color?: string;
};

export type Skill = {
  name: string;
  icon: React.ReactElement<IconProps>;
  color?: string;
};

export const skills: Skill[] = [
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
