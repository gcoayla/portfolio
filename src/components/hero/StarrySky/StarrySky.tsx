import React, { useMemo, useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

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

const ShootingStar = () => {
  const [width, height] = useWindowSize();

  const { startX, startY, endX, endY, duration, delay } = useMemo(() => {
    const startX = random(-50, width + 50);
    const startY = random(-50, height + 50);
    const endX = random(-50, width + 50);
    const endY = random(-50, height + 50);

    return {
      startX,
      startY,
      endX,
      endY,
      duration: random(1, 3),
      delay: random(5, 15),
    };
  }, [width, height]);

  const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: startY,
        left: startX,
        width: "4px",
        height: "4px",
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0 0 12px 3px rgba(255, 255, 255, 0.8)",
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: endX - startX,
        y: endY - startY,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "2px",
          height: "200px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          transform: `translate(-50%, 0) rotate(${angle - 90}deg)`,
          transformOrigin: "top",
          filter: "blur(2px)",
        }}
      />
    </motion.div>
  );
};

export const StarrySky = ({ yStars }: { yStars: MotionValue<string> }) => {
  const numStars = 150;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0"
      style={{ y: yStars }}
    >
      {[...Array(numStars)].map((_, i) => (
        <Star key={i} />
      ))}
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </motion.div>
  );
};
