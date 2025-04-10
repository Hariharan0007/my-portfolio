import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

// Import local font CSS
import "./assets/fonts/fonts.css";

// Update color scheme with attractive light colors
const colors = {
  primary: "#ffffff", // Pure white
  secondary: "#1a1a1a", // Dark text
  accent: "#3b82f6", // Bright blue
  accent2: "#8b5cf6", // Purple
  accent3: "#ec4899", // Pink
  accent4: "#10b981", // Emerald
  accent5: "#f59e0b", // Amber
  background1: "#f8fafc", // Light blue-gray
  background2: "#f1f5f9", // Lighter blue-gray
  background3: "#f0fdf4", // Light green
  background4: "#fef2f2", // Light red
  background5: "#f0f9ff", // Light blue
  cursor: "#1a1a1a", // Black for cursor trail
  star: "#3b82f6", // Blue for star trail
};

interface DodecahedronProps {
  position: [number, number, number];
  text?: string;
}

function Dodecahedron({ position, text = "Hello\nWorld" }: DodecahedronProps) {
  return (
    <mesh position={position} scale={1}>
      <dodecahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial
        roughness={0.75}
        emissive="#404057"
        color={colors.accent}
      />
      <Html distanceFactor={45}>
        <div className="content text-white text-center">
          {text.split("\n").map((line, i) => (
            <p key={i} className={i === 0 ? "text-xl font-bold" : "text-sm"}>
              {line}
            </p>
          ))}
        </div>
      </Html>
    </mesh>
  );
}

function Content() {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.0025;
    }
  });
  return (
    <group ref={ref} scale={2}>
      <Dodecahedron position={[-2, 0, 0]} text="" />
      <Dodecahedron position={[0, -2, -3]} text="" />
      <Dodecahedron position={[2, 0, 0]} text="" />
    </group>
  );
}

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 10] }}
    style={{ width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <pointLight color="indianred" />
    <pointLight position={[10, 10, -10]} color="orange" />
    <pointLight position={[-10, -10, 10]} color="lightblue" />
    <Content />
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.5}
      enablePan={false}
    />
  </Canvas>
);

const AboutScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh scale={2.5}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={colors.accent4} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
  </Canvas>
);

const SkillsScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh scale={2.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={colors.accent5} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
  </Canvas>
);

const ProjectsScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh scale={2.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={colors.accent} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
  </Canvas>
);

const ExperienceScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh scale={2.5}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={colors.accent2} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.5} />
  </Canvas>
);

const ContactScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh scale={2.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={colors.accent3} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
  </Canvas>
);

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const starId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add a new star at the cursor position
      setStars((prevStars) => {
        const newStar = {
          id: starId.current++,
          x: e.clientX,
          y: e.clientY,
        };

        // Keep only the last 20 stars
        const updatedStars = [...prevStars, newStar].slice(-20);

        // Remove stars after their animation completes
        setTimeout(() => {
          setStars((currentStars) =>
            currentStars.filter((star) => star.id !== newStar.id)
          );
        }, 1000);

        return updatedStars;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor-trail"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, ${colors.cursor} 0%, transparent 70%)`,
        }}
      />
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-trail"
          style={{
            left: star.x,
            top: star.y,
            backgroundColor: colors.star,
          }}
        />
      ))}
    </>
  );
};

const Section = ({
  title,
  children,
  id,
  scene,
  bgColor = "bg-primary",
  decoration = "none",
}: {
  title: string;
  children: React.ReactNode;
  id: string;
  scene: React.ReactNode;
  bgColor?: string;
  decoration?: "left" | "right" | "center" | "none";
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
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
      className={`min-h-screen flex items-center justify-center p-8 relative ${bgColor} overflow-hidden`}
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
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-secondary">{title}</h2>
        {children}
      </motion.div>
    </motion.section>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: colors.primary }}
    >
      <CursorTrail />

      {/* Hero Section */}
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

      {/* About Section */}
      <Section
        title="About Me"
        id="about"
        scene={<AboutScene />}
        bgColor={`bg-gradient-to-br from-[${colors.background3}] to-[${colors.accent}]/10`}
        decoration="left"
      >
        <div className="space-y-4">
          <p
            className="text-lg text-secondary"
            style={{ fontFamily: "monospace" }}
          >
            I am a passionate developer with expertise in modern web
            technologies. My journey in software development began with a
            curiosity about how things work, and it has evolved into a deep love
            for creating beautiful, functional applications.
          </p>
          <p
            className="text-lg text-secondary"
            style={{ fontFamily: "monospace" }}
          >
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge with
            others.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        title="Skills"
        id="skills"
        scene={<SkillsScene />}
        bgColor={`bg-gradient-to-bl from-[${colors.background2}] to-[${colors.accent2}]/10`}
        decoration="right"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "Three.js",
            "Framer Motion",
            "Tailwind CSS",
            "Git",
          ].map((skill) => (
            <motion.div
              key={skill}
              className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <p
                className="text-center font-medium text-secondary"
                style={{ fontFamily: "monospace" }}
              >
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        title="Projects"
        id="projects"
        scene={<ProjectsScene />}
        bgColor={`bg-gradient-to-tr from-[${colors.background4}] to-[${colors.accent3}]/10`}
        decoration="center"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Project 1",
              description:
                "A modern web application built with React and Three.js",
            },
            {
              title: "Project 2",
              description: "An interactive data visualization tool",
            },
            {
              title: "Project 3",
              description: "A real-time collaboration platform",
            },
            {
              title: "Project 4",
              description: "A mobile-first e-commerce solution",
            },
          ].map((project) => (
            <motion.div
              key={project.title}
              className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3
                className="text-xl font-bold mb-2 text-secondary"
                style={{ fontFamily: "monospace" }}
              >
                {project.title}
              </h3>
              <p className="text-secondary" style={{ fontFamily: "monospace" }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        title="Experience"
        id="experience"
        scene={<ExperienceScene />}
        bgColor={`bg-gradient-to-tl from-[${colors.background5}] to-[${colors.accent4}]/10`}
        decoration="left"
      >
        <div className="space-y-8">
          {[
            {
              role: "Senior Developer",
              company: "Tech Corp",
              period: "2020 - Present",
              description:
                "Leading the development of innovative web applications and mentoring junior developers.",
            },
            {
              role: "Frontend Developer",
              company: "Digital Solutions",
              period: "2018 - 2020",
              description:
                "Developed and maintained multiple client-facing applications using modern web technologies.",
            },
          ].map((exp) => (
            <motion.div
              key={exp.role}
              className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3
                className="text-xl font-bold mb-2 text-secondary"
                style={{ fontFamily: "monospace" }}
              >
                {exp.role}
              </h3>
              <p
                className="text-lg font-medium text-secondary"
                style={{ fontFamily: "monospace" }}
              >
                {exp.company}
              </p>
              <p
                className="text-secondary/80 mb-2"
                style={{ fontFamily: "monospace" }}
              >
                {exp.period}
              </p>
              <p className="text-secondary" style={{ fontFamily: "monospace" }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="Contact"
        id="contact"
        scene={<ContactScene />}
        bgColor={`bg-gradient-to-b from-[${colors.background1}] to-[${colors.accent5}]/10`}
        decoration="right"
      >
        <div className="space-y-6">
          <p
            className="text-lg text-secondary"
            style={{ fontFamily: "monospace" }}
          >
            Feel free to reach out to me for any opportunities or just to say
            hello!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow text-secondary"
              whileHover={{ scale: 1.05 }}
              style={{ fontFamily: "monospace" }}
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow text-secondary"
              whileHover={{ scale: 1.05 }}
              style={{ fontFamily: "monospace" }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
