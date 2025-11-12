import { motion } from "framer-motion";

export const SoundWave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1440 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute top-0 left-0 w-full h-full"
    >
      <defs>
        <motion.linearGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1440"
          y2="0"
          animate={{
            gradientTransform: [
              "translate(0)",
              "translate(1440)",
              "translate(0)",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <stop stopColor="#003554" />
          <stop stopColor="#00A6FB" />
          <stop stopColor="#003554" />
        </motion.linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0,250 C150,100 250,400 400,250 C550,100 650,400 800,250 C950,100 1050,400 1200,250 C1350,100 1440,250 1440,250"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        stroke-opacity="0.2"
        className="hidden md:block"
        filter="url(#glow)"
      />
      <path
        d="M0,250 C75,150 125,350 200,250 C275,150 325,350 400,250 C475,150 525,350 600,250 C675,150 725,350 800,250"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        stroke-opacity="0.2"
        className="block md:hidden"
        filter="url(#glow)"
        transform="translate(0, 50)"
      />
    </svg>
  );
};
