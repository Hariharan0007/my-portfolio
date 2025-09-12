import React from "react";
import { motion } from "framer-motion";
import { textStyles, typography } from "../utils/Typography";
import { colors } from "../utils/Constants";
import {
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";

interface AnimatedSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "left" | "right" | "center";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  subtitle,
  children,
  className = "",
  variant = "center",
}) => {
  const getRevealAnimation = () => {
    switch (variant) {
      case "left":
        return scrollRevealLeft;
      case "right":
        return scrollRevealRight;
      default:
        return scrollReveal;
    }
  };

  return (
    <motion.section
      className={`py-20 px-4 ${className}`}
      {...getRevealAnimation()}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" {...staggerContainer}>
          <motion.h2 style={textStyles.h2} {...staggerItem}>
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              style={textStyles.bodyLarge}
              {...staggerItem}
              className="mt-4"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div {...staggerContainer}>{children}</motion.div>
      </div>
    </motion.section>
  );
};

// Sample card component with animations
export const AnimatedCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, description, icon, className = "" }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-${colors.cyberpunk_secondary} to-${colors.cyberpunk_primary} p-6 rounded-lg border border-${colors.cyberpunk_grid} ${className}`}
      style={{
        backgroundColor: "rgba(26, 35, 50, 0.3)",
        borderColor: colors.cyberpunk_grid,
        backdropFilter: "blur(10px)",
      }}
      {...staggerItem}
      {...hoverScale}
      {...hoverGlow}
    >
      {icon && (
        <motion.div className="mb-4" style={{ color: colors.cyberpunk_cyan }}>
          {icon}
        </motion.div>
      )}
      <h3 style={textStyles.h4} className="mb-3">
        {title}
      </h3>
      <p style={textStyles.body}>{description}</p>
    </motion.div>
  );
};

// Sample button component with cyberpunk styling
export const CyberpunkButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}> = ({ children, onClick, variant = "primary", className = "" }) => {
  const getButtonStyle = () => {
    const baseStyle = {
      ...textStyles.button,
      padding: "12px 24px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase" as const,
      letterSpacing: "0.1em",
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          background: `linear-gradient(45deg, ${colors.cyberpunk_grid}, ${colors.cyberpunk_cyan})`,
          color: colors.cyberpunk_primary,
          boxShadow: `0 0 20px ${colors.cyberpunk_glow}`,
        };
      case "secondary":
        return {
          ...baseStyle,
          background: "transparent",
          color: colors.cyberpunk_text,
          border: `2px solid ${colors.cyberpunk_grid}`,
          boxShadow: `0 0 10px ${colors.cyberpunk_glow}`,
        };
      case "accent":
        return {
          ...baseStyle,
          background: `linear-gradient(45deg, ${colors.cyberpunk_accent}, ${colors.cyberpunk_electric})`,
          color: colors.cyberpunk_primary,
          boxShadow: `0 0 20px ${colors.cyberpunk_accent}`,
        };
      default:
        return baseStyle;
    }
  };

  return (
    <motion.button
      style={getButtonStyle()}
      className={className}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 30px ${colors.cyberpunk_glow}`,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedSection;
