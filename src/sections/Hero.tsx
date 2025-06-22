import { motion, MotionValue } from "framer-motion";
import { HeroScene } from "../motions/Hero";
import { colors } from "../utils/Constants";

interface HeroSectionProps {
  opacity: MotionValue<number>;
}

const HeroSection = ({ opacity }: HeroSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10"
      style={{
        opacity,
        backgroundColor: colors.primary,
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <HeroScene />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1
          className="text-6xl font-bold mb-4 text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          Hariharan P
        </h1>
        <p
          className="text-lg opacity-80 mb-8 text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          Full Stack Developer
        </p>
        <p
          className="text-xl opacity-80 mb-8 text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
