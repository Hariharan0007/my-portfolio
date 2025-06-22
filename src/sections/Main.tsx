import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
  scene: React.ReactNode;
  bgColor?: string;
  decoration?: "left" | "right" | "center" | "none";
  fullWidth?: boolean;
};

const Section = ({
  title,
  children,
  id,
  scene,
  bgColor = "bg-primary",
  decoration = "none",
  fullWidth = false,
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [inView, id]);

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
      className={`min-h-screen flex items-center justify-center p-8 relative ${bgColor} overflow-hidden w-full
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {getDecoration()}
      <div className="absolute inset-0 z-0 opacity-30">{scene}</div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${
          fullWidth ? "max-w-full" : "max-w-4xl"
        } mx-auto text-center relative z-10`}
      >
        <h2 className="text-4xl font-bold mb-8 text-secondary space-x-2 tracking-widest">
          {title}
        </h2>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
