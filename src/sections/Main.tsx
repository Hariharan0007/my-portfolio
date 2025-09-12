import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { textStyles } from "../utils/Typography";
import TypingEffect from "../components/TypingEffect";
import SmoothScrollTransition from "../components/SmoothScrollTransition";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
  scene: React.ReactNode;
  bgColor?: string;
  decoration?: "left" | "right" | "center" | "none";
  fullWidth?: boolean;
  disableScene?: boolean;
};

const Section = ({
  title,
  children,
  id,
  scene,
  bgColor = "bg-primary",
  decoration = "none",
  fullWidth = false,
  disableScene = false,
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowTyping(true);
    } else {
      setShowTyping(false);
    }
  }, [inView]);

  const getDecoration = () => {
    switch (decoration) {
      case "left":
        return (
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-accent/10 to-transparent" />
        );
      case "right":
        return (
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-accent2/10 to-transparent" />
        );
      case "center":
        return (
          <>
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-accent3/20 to-transparent" />
            <div className="absolute left-1/2 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen flex items-center justify-center p-8 relative ${bgColor} overflow-hidden w-full`}
    >
      {getDecoration()}
      {!disableScene && (
        <div className="absolute inset-0 z-0 opacity-30">{scene}</div>
      )}
      <SmoothScrollTransition
        className={`${
          fullWidth ? "max-w-full" : "max-w-4xl"
        } mx-auto text-center relative z-10`}
        direction="fade"
        threshold={0.2}
        triggerOnce={false}
      >
        <div className="mb-16">
          {showTyping ? (
            <TypingEffect
              text={title}
              speed={80}
              delay={0}
              style={textStyles.h2}
            />
          ) : (
            <h2 style={textStyles.h2}>{title}</h2>
          )}
        </div>
        <SmoothScrollTransition
          direction="up"
          delay={0.3}
          threshold={0.1}
          className="mt-8"
        >
          {children}
        </SmoothScrollTransition>
      </SmoothScrollTransition>
    </motion.section>
  );
};

export default Section;
