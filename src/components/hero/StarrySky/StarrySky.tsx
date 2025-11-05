import React, { useMemo } from "react";
import { motion } from "framer-motion";

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
      whileHover={{
        scale: 1.5,
        boxShadow: "0 0 12px 3px rgba(255, 255, 255, 0.9)",
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

export const StarrySky = ({ numStars = 150 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(numStars)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};
