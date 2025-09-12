import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  style = {},
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText("");
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setCurrentIndex(0);
      setDisplayedText("");
    }
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ marginLeft: "2px" }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypingEffect;
