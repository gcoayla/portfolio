import { useState } from "react";
import { Typography } from "../ui/Typography";
import { StarrySky } from "./StarrySky";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const svg = event.currentTarget;
    const svgRect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;

    const xRatio = viewBox.width / svgRect.width;
    const yRatio = viewBox.height / svgRect.height;

    const x = (event.clientX - svgRect.left) * xRatio;
    const y = (event.clientY - svgRect.top) * yRatio;

    setMousePosition({ x, y });
  };

  const pathD =
    "M 0 280 L 7 273.4140625 L 12 272.4140625 L 15 272.4140625 L 18 271.4140625 L 23 269.4140625 L 24 269.4140625 L 27 269.4140625 L 30 268.4140625 L 31 267.4140625 L 33 267.4140625 L 39 265.4140625 L 40 265.4140625 L 49 263.4140625 L 51 263.4140625 L 55 262.4140625 L 58 261.4140625 L 62 260.4140625 L 65 260.4140625 L 68 259.4140625 L 74 256.4140625 L 77 255.4140625 L 81 253.4140625 L 86 252.4140625 L 91 251.4140625 L 94 251.4140625 L 100 248.4140625 L 103 247.4140625 L 107 246.4140625 L 111 244.4140625 L 113 243.4140625 L 118 242.4140625 L 121 241.4140625 L 125 240.4140625 L 132 237.4140625 L 138 235.4140625 L 140 233.4140625 L 143 231.4140625 L 149 229.4140625 L 151 227.4140625 L 153 226.4140625 L 158 223.4140625 L 159 222.4140625 L 163 219.4140625 L 167 218.4140625 L 174 216.4140625 L 175 212.4140625 L 178 211.4140625 L 182 209.4140625 L 184 207.4140625 L 189 204.4140625 L 191 203.4140625 L 193 201.4140625 L 197 198.4140625 L 202 195.4140625 L 206 193.4140625 L 210 191.4140625 L 214 189.4140625 L 218 186.4140625 L 222 183.4140625 L 224 180.4140625 L 228 178.4140625 L 230 177.4140625 L 234 174.4140625 L 238 173.4140625 L 241 171.4140625 L 244 169.4140625 L 246 167.4140625 L 249 165.4140625 L 253 163.4140625 L 256 162.4140625 L 259 161.4140625 L 261 159.4140625 L 264 158.4140625 L 268 156.4140625 L 271 154.4140625 L 274 151.4140625 L 277 150.4140625 L 282 148.4140625 L 286 146.4140625 L 289 145.4140625 L 294 144.4140625 L 297 143.4140625 L 304 141.4140625 L 308 141.4140625 L 310 141.4140625 L 313 144.4140625 L 314 146.4140625 L 322 147.4140625 L 323 147.4140625 L 326 145.4140625 L 327 144.4140625 L 330 144.4140625 L 334 143.4140625 L 337 141.4140625 L 339 140.4140625 L 344 140.4140625 L 347 140.4140625 L 351 141.4140625 L 354 142.4140625 L 359 144.4140625 L 369 147.4140625 L 371 149.4140625 L 375 153.4140625 L 377 154.4140625 L 382 158.4140625 L 387 162.4140625 L 390 163.4140625 L 394 166.4140625 L 396 168.4140625 L 397 169.4140625 L 402 172.4140625 L 404 174.4140625 L 410 178.4140625 L 411 179.4140625 L 415 182.4140625 L 416 182.4140625 L 417 183.4140625 L 426 189.4140625 L 426 189.4140625 L 428 191.4140625 L 432 194.4140625 L 433 195.4140625 L 437 197.4140625 L 440 198.4140625 L 442 200.4140625 L 444 202.4140625 L 449 205.4140625 L 451 206.4140625 L 453 207.4140625 L 459 210.4140625 L 459 210.4140625 L 464 213.4140625 L 468 217.4140625 L 471 219.4140625 L 474 220.4140625 L 479 223.4140625 L 487 228.4140625 L 490 229.4140625 L 498 234.4140625 L 501 236.4140625 L 503 236.4140625 L 507 238.4140625 L 510 240.4140625 L 514 243.4140625 L 519 244.4140625 L 522 246.4140625 L 525 247.4140625 L 533 251.4140625 L 534 252.4140625 L 541 255.4140625 L 546 256.4140625 L 549 257.4140625 L 553 258.4140625 L 556 260.4140625 L 559 261.4140625 L 568 263.4140625 L 572 265.4140625 L 576 268.4140625 L 578 268.4140625 L 581 268.4140625 L 588 269.4140625 L 591 270.4140625 L 596 270.4140625 L 601 272.4140625 L 605 273.4140625 L 609 274.4140625 L 612 274.4140625 L 615 277.4140625 L 619 277.4140625 L 620 277.4140625 L 628 278.4140625 L 631 278.4140625 L 634 279.4140625 L 639 280";

  return (
    <section
      id="hero"
      className="h-lvh p-10 md:p-20 flex flex-col justify-center items-start gap-2 bg-radial-[at_50%_100%] from-rich-black-3 to-rich-black-2 to-rich-black"
    >
      <StarrySky />
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="w-full flex-1" />
        <svg
          className="w-full"
          viewBox="0 0 639 280"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          onMouseMove={handleMouseMove}
        >
          <defs>
            <mask id="glow-mask">
              <rect width="100%" height="100%" fill="black" />
              <circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r="40"
                fill="white"
                filter="url(#glow-blur)"
              />
            </mask>
            <filter id="glow-blur">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <path
            d={pathD}
            fill="#00080dff"
            stroke="#002234ff"
            strokeWidth="1"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#508bff"
            strokeWidth="1.5"
            mask="url(#glow-mask)"
          />
        </svg>
        <div className="w-full h-32 md:flex-1  bg-rich-black-3" />
      </div>
      <Typography variant="h1" className="uppercase text-white z-20">
        Hi! I'm Gonzalo Coayla
      </Typography>
      <Typography
        variant="h4"
        className="max-w=[80%] md:max-w-[70%] text-gray-100 z-20"
      >
        Senior Frontend Engineer building polished, complex UIs—from interactive
        3D models to scalable design systems.
      </Typography>
    </section>
  );
};
