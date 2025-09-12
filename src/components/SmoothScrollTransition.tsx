import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface SmoothScrollTransitionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
}

const SmoothScrollTransition: React.FC<SmoothScrollTransitionProps> = ({
  children,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  direction = "up",
  delay = 0,
  duration = 0.6,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    threshold,
    triggerOnce,
    margin: "-100px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
      case "left":
        return { x: 50, opacity: 0 };
      case "right":
        return { x: -50, opacity: 0 };
      case "fade":
        return { opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getAnimateTransform = () => {
    switch (direction) {
      case "up":
        return { y: 0, opacity: 1 };
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
        return { x: 0, opacity: 1 };
      case "right":
        return { x: 0, opacity: 1 };
      case "fade":
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  // Parallax effect based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialTransform()}
      animate={isInView ? getAnimateTransform() : getInitialTransform()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      style={{
        y: direction === "fade" ? undefined : y,
        scale: direction === "fade" ? scale : undefined,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollTransition;
