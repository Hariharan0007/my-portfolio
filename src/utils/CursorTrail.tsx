import { useState, useRef, useEffect } from "react";
import { colors } from "./Constants";

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
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.cursor} 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-trail"
          style={{
            position: "fixed",
            left: star.x,
            top: star.y,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: colors.star,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998,
            animation: "fadeOut 1s forwards",
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
