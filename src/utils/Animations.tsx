import { motion } from "framer-motion";

// Page transition animations
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Component entrance animations
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};

// Stagger animations for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};

// Hover animations
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 20px rgba(0, 191, 255, 0.5)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Cyberpunk specific animations
export const cyberpunkGlow = {
  initial: {
    textShadow: "0 0 10px rgba(0, 191, 255, 0.5)",
  },
  animate: {
    textShadow: [
      "0 0 10px rgba(0, 191, 255, 0.5)",
      "0 0 20px rgba(0, 191, 255, 0.8)",
      "0 0 10px rgba(0, 191, 255, 0.5)",
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const cyberpunkPulse = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Scroll-triggered animations
export const scrollReveal = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.3,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

export const scrollRevealLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.3,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

export const scrollRevealRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.3,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  },
};

export const loadingDots = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Utility function to create custom animations
export const createCustomAnimation = (
  initial: any,
  animate: any,
  transition: any = { duration: 0.5, ease: "easeOut" }
) => ({
  initial,
  animate,
  transition,
});

// Motion components with predefined animations
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionButton = motion.button;
export const MotionA = motion.a;
