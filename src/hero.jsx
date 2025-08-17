"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Separate image arrays for each row
const IMAGES_ROW1 = [
  "/r1c1.jpeg",
  "/r1c2.jpeg",
  "/r1c3.jpeg",
  "/r1c4.jpeg",
];

const IMAGES_ROW2 = [
  "/r2c1.jpeg",
  "/r2c2.jpeg",
  "/r2c3.jpeg",
  "/r2c4.jpeg",
];

const IMAGES_ROW3 = [
  "r3c1.jpeg",
  "r3c2.jpeg",
  "r3c3.jpeg",
  "r3c4.jpeg",
  
];

function InfiniteRow({ images, reverse = false, speed = 30, y = 0, imgH = "30vh", imgW = "20vw" }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const halfWidth = row.scrollWidth / 2; // duplicate width for loop

    gsap.set(row, { y });

    gsap.to(row, {
      x: reverse ? `+=${halfWidth}` : `-=${halfWidth}`,
      ease: "none",
      duration: speed,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });
  }, [reverse, speed, y]);

  return (
    <div
      ref={rowRef}
      className="flex whitespace-nowrap"
      style={{ width: "max-content" }}
    >
      {[...images, ...images].map((src, i) => (
        <img
        key={i}
        src={src}
        alt={`gallery-${i}`}
        className="
          object-cover rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300 mx-2
          w-[41vw] h-[30vh]   // mobile: wider & shorter
          sm:w-[20vw] sm:h-[30vh] // desktop: original ratio
        "
      />
      
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden flex flex-col justify-center gap-0"
      
    >
      {/* Top row */}
      <InfiniteRow images={IMAGES_ROW1} reverse={false} speed={30} y={-30} imgH="30vh" imgW="20vw" />

      {/* Middle row opposite direction */}
      <InfiniteRow images={IMAGES_ROW2} reverse={false} speed={36} y={0} imgH="32vh" imgW="20vw" />

      {/* Bottom row */}
      <InfiniteRow images={IMAGES_ROW3} reverse={false} speed={33} y={20} imgH="30vh" imgW="20vw" />

      {/* Fade at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #242424, transparent)" }}
      />

      {/* Text in center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4">
          We <span className="text-[#FFBF00]">Setup</span>,<br />
          <span>
            We Transform<span className="text-[#ffbf00]">.</span>
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl">
          Be part of something amazing — creative projects, exciting challenges, and Workshops.
        </p>
        <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl font-semibold rounded-full bg-white text-[#242424] shadow-lg hover:bg-[#ffbf00] hover:text-white hover:scale-105 transition-transform duration-300">
          <a target="_blank_" href=" https://whatsapp.com/channel/0029Vb6Tn4FICVfnU3uU4Q1u">Join Now</a>
        </button>
      </div>
    </section>
  );
}
