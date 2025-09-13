import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills, Skill } from "../utils/SkillsData";

interface SkillIconProps {
  skill: Skill;
  delay: number;
  position: { x: number; y: number };
  containerSize: { width: number; height: number };
}

const SkillIcon = ({
  skill,
  delay,
  position,
  containerSize,
}: SkillIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate responsive size based on container dimensions
  const getResponsiveSize = () => {
    const minDimension = Math.min(containerSize.width, containerSize.height);

    if (minDimension < 400) {
      return { size: "w-6 h-6", iconSize: 16, textSize: "text-xs" };
    } else if (minDimension < 600) {
      return { size: "w-8 h-8", iconSize: 20, textSize: "text-sm" };
    } else if (minDimension < 800) {
      return { size: "w-10 h-10", iconSize: 24, textSize: "text-base" };
    } else if (minDimension < 1000) {
      return { size: "w-12 h-12", iconSize: 28, textSize: "text-lg" };
    } else {
      return { size: "w-14 h-14", iconSize: 32, textSize: "text-xl" };
    }
  };

  const responsiveSize = getResponsiveSize();

  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`
          ${responsiveSize.size} 
          flex items-center justify-center
          bg-gradient-to-br from-cyan-500/10 to-blue-500/10
          backdrop-blur-sm
          border border-cyan-400/20
          rounded-lg
          shadow-lg
          transition-all duration-300
          group-hover:shadow-cyan-500/25
          group-hover:border-cyan-400/40
          group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-blue-500/20
          opacity-70
          group-hover:opacity-100
        `}
      >
        <div
          className="group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
          style={{ color: skill.color || "#00BFFF" }}
        >
          {React.cloneElement(skill.icon, { size: responsiveSize.iconSize })}
        </div>
      </div>

      {/* Tooltip */}
      <motion.div
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2
                 bg-gray-900/90 backdrop-blur-sm
                 border border-cyan-400/30
                 rounded-lg px-3 py-1
                 text-cyan-300 ${responsiveSize.textSize} font-medium
                 whitespace-nowrap
                 pointer-events-none
                 z-10`}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
      >
        {skill.name}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2
                        w-0 h-0 border-l-4 border-r-4 border-t-4
                        border-l-transparent border-r-transparent border-t-cyan-400/30"
        />
      </motion.div>
    </motion.div>
  );
};

const SkillIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Start showing skills after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      } else {
        // Fallback to window size if container ref is not available
        setContainerSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // Initial size update with a small delay to ensure container is mounted
    const timer = setTimeout(updateSize, 100);
    window.addEventListener("resize", updateSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Generate dynamic positions for all skills
  const generatePositions = (skills: Skill[]) => {
    const positions: Array<{
      skill: Skill;
      position: { x: number; y: number };
      delay: number;
    }> = [];
    const usedPositions = new Set<string>();

    // Avoid center area (where name/title is)
    const centerX = 50;
    const centerY = 50;
    const centerRadius = 35; // Much larger radius to avoid center content

    // Predefined safe positions around the edges - far from center
    const safePositions = [
      { x: 10, y: 10 },
      { x: 90, y: 10 },
      { x: 10, y: 90 },
      { x: 90, y: 90 },
      { x: 15, y: 20 },
      { x: 85, y: 20 },
      { x: 15, y: 80 },
      { x: 85, y: 80 },
      { x: 5, y: 25 },
      { x: 95, y: 25 },
      { x: 5, y: 75 },
      { x: 95, y: 75 },
      { x: 20, y: 5 },
      { x: 80, y: 5 },
      { x: 20, y: 95 },
      { x: 80, y: 95 },
      { x: 8, y: 40 },
      { x: 92, y: 40 },
      { x: 8, y: 60 },
      { x: 92, y: 60 },
      { x: 25, y: 8 },
      { x: 75, y: 8 },
      { x: 25, y: 92 },
      { x: 75, y: 92 },
    ];

    skills.forEach((skill, index) => {
      let position: { x: number; y: number };

      // Try predefined positions first
      if (index < safePositions.length) {
        position = safePositions[index];
      } else {
        // Fallback to random positioning
        let attempts = 0;
        do {
          position = {
            x: Math.random() * 80 + 10, // 10% to 90% to avoid edges
            y: Math.random() * 80 + 10, // 10% to 90% to avoid edges
          };

          // Check if position is too close to center
          const distanceFromCenter = Math.sqrt(
            Math.pow(position.x - centerX, 2) +
              Math.pow(position.y - centerY, 2)
          );

          const positionKey = `${Math.round(position.x)}-${Math.round(
            position.y
          )}`;
          attempts++;

          // If position is far enough from center and not used, accept it
          if (
            distanceFromCenter > centerRadius &&
            !usedPositions.has(positionKey)
          ) {
            usedPositions.add(positionKey);
            break;
          }
        } while (attempts < 20); // Reduced attempts
      }

      positions.push({
        skill,
        position,
        delay: 0.1 + index * 0.05, // Faster staggered delay
      });
    });

    return positions;
  };

  const skillPositions = generatePositions(skills);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      {skillPositions.map((item, index) => (
        <SkillIcon
          key={`${item.skill.name}-${index}`}
          skill={item.skill}
          delay={item.delay}
          position={item.position}
          containerSize={
            containerSize.width > 0
              ? containerSize
              : { width: 1200, height: 800 }
          }
        />
      ))}
    </div>
  );
};

export default SkillIcons;
