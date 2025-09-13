import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About", icon: FaUser, color: "#00BFFF" },
    { id: "skills", label: "Skills", icon: FaCode, color: "#00FF88" },
    {
      id: "projects",
      label: "Projects",
      icon: FaProjectDiagram,
      color: "#FF6B6B",
    },
    {
      id: "experience",
      label: "Experience",
      icon: FaBriefcase,
      color: "#4ECDC4",
    },
    {
      id: "education",
      label: "Education",
      icon: FaGraduationCap,
      color: "#45B7D1",
    },
    { id: "contact", label: "Contact", icon: FaEnvelope, color: "#96CEB4" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Modern Menu Button */}
      <motion.button
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/60 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
        onClick={toggleMenu}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 block rounded-full"
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 block rounded-full"
            animate={
              isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 block rounded-full"
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Modern Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 h-full w-80 md:w-96 bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-xl border-l border-cyan-400/40 z-50 flex flex-col shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Modern Header */}
            <div className="p-4 md:p-8 border-b border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h2
                  style={textStyles.h3}
                  className="text-cyan-400 font-bold text-lg md:text-xl"
                >
                  Navigation
                </h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-cyan-500/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </motion.button>
              </div>
            </div>

            {/* Modern Menu Items */}
            <div className="flex-1 p-4 md:p-8 overflow-y-auto">
              <ul className="space-y-2 md:space-y-3">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => handleNavigate(item.id)}
                        className="w-full flex items-center space-x-3 md:space-x-4 p-3 md:p-5 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/70 hover:to-gray-600/70 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Icon Container */}
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${item.color}20`,
                            border: `2px solid ${item.color}40`,
                          }}
                        >
                          <IconComponent
                            className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
                            style={{ color: item.color }}
                          />
                        </div>

                        {/* Label */}
                        <div className="flex-1 text-left">
                          <span
                            style={textStyles.body}
                            className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300"
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Hover Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Modern Footer */}
            <div className="p-4 md:p-6 border-t border-cyan-400/30 bg-gradient-to-r from-gray-800/30 to-gray-700/30 flex-shrink-0">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <p
                  style={textStyles.code}
                  className="text-gray-400 text-xs md:text-sm"
                >
                  Press ESC to close
                </p>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
