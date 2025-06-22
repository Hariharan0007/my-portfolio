import { useScroll, useTransform } from "framer-motion";
import { colors } from "./utils/Constants";
import { useEffect } from "react";
import CursorTrail from "./utils/CursorTrail";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import SkillSection from "./sections/Skill";
import ProjectSection from "./sections/Project";
import ExperienceSection from "./sections/Experience";
import EducationSection from "./sections/Education";
import CertificateSection from "./sections/Certificates";
import AwardsSection from "./sections/Awards";
import ContactSection from "./sections/Contact";

// Import local font CSS
import "./assets/fonts/fonts.css";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: colors.primary }}
    >
      <CursorTrail />
      <HeroSection opacity={opacity} />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <CertificateSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
}

export default App;
