import React, { useMemo, useState } from "react";
import { motion, MotionValue } from "framer-motion";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Star = () => {
  const { top, left, size, duration, delay } = useMemo(() => {
    return {
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`,
      size: `${random(1, 3)}px`,
      duration: random(4, 10),
      delay: random(1, 8),
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0 0 6px 1px rgba(255, 255, 255, 0.7)",
      }}
      // Animation: Fade in, then fade out
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
      }}
      // Transition settings
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export const StarrySky = ({ yStars }: { yStars: MotionValue<string> }) => {
  const numStars = 150;
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0"
      onMouseMove={handleMouseMove}
      style={{ y: yStars }}
    >
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-radial-gradient from-white to-transparent mix-blend-screen opacity-50 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x - 96}px, ${
            mousePosition.y - 96
          }px)`,
        }}
      />
      {[...Array(numStars)].map((_, i) => (
        <Star key={i} />
      ))}
    </motion.div>
  );
};
