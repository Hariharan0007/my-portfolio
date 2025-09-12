import { useState, useEffect } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow effect */}
      <div
        className="cursor-glow"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Inner bright spot */}
      <div
        className="cursor-inner"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer ring effect */}
      <div
        className="cursor-ring"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CursorTrail;
