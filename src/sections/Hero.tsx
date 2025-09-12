import { motion, MotionValue } from "framer-motion";
import { HeroScene } from "../motions/Hero";
import { textStyles, typography } from "../utils/Typography";
import { fadeInUp, cyberpunkGlow } from "../utils/Animations";
import TypingEffect from "../components/TypingEffect";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  opacity: MotionValue<number>;
}

const HeroSection = ({ opacity }: HeroSectionProps) => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showScrollText, setShowScrollText] = useState(false);

  useEffect(() => {
    // Start the first typing effect after a short delay
    const timer = setTimeout(() => {
      setShowName(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10"
      style={{
        opacity,
        backgroundColor: "transparent",
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <HeroScene />
      </div>
      <motion.div {...fadeInUp} className="text-center relative z-10">
        {showName && (
          <motion.div className="mb-4" {...cyberpunkGlow}>
            <TypingEffect
              text="Hariharan P"
              speed={120}
              delay={0}
              style={textStyles.h1}
              onComplete={() => setShowTitle(true)}
            />
          </motion.div>
        )}
        {showTitle && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingEffect
              text="Full Stack Developer"
              speed={100}
              delay={0}
              style={textStyles.h3}
              onComplete={() => setShowScrollText(true)}
            />
          </motion.div>
        )}
        {showScrollText && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingEffect
              text="Scroll to explore"
              speed={80}
              delay={0}
              style={textStyles.accent}
            />
          </motion.div>
        )}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl"
          style={{
            color: typography.textColor.cyan,
            textShadow: typography.textShadow.glowBlue,
            fontFamily: typography.fontFamily.primary,
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
