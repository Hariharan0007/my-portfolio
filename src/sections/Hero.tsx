import { motion, MotionValue } from "framer-motion";
import { HeroScene } from "../motions/Hero";
import { textStyles, typography } from "../utils/Typography";
import { fadeInUp, cyberpunkGlow } from "../utils/Animations";

interface HeroSectionProps {
  opacity: MotionValue<number>;
}

const HeroSection = ({ opacity }: HeroSectionProps) => {
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
        <motion.h1 className="mb-4" style={textStyles.h1} {...cyberpunkGlow}>
          Hariharan P
        </motion.h1>
        <motion.p
          className="mb-8"
          style={textStyles.h3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          className="mb-8"
          style={textStyles.accent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Scroll to explore
        </motion.p>
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
