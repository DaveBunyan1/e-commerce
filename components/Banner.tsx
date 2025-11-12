"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import SideButton from "./SideComponent";
import { useState } from "react";
import TempThreeD from "./TempThreeD";

const Banner = () => {
  const [shapeIndex, setShapeIndex] = useState(0);

  const handlePrev = () => setShapeIndex((i) => (i === 0 ? 4 : i - 1));
  const handleNext = () => setShapeIndex((i) => (i === 4 ? 0 : i + 1));

  return (
    <section className="relative w-full h-64 flex items-center justify-between bg-white dark:bg-neutral-900 dark:text-black overflow-hidden">
      <SideButton side="left" onClick={handlePrev} />
      <div className="text-3xl w-1/2 dark:text-white font-semibold select-none">
        Banner
      </div>
      <div className="w-1/6 h-full">
        <TempThreeD shapeIndex={shapeIndex} />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`
          w-2 h-2 rounded-full transition-colors duration-300
          ${
            shapeIndex === index
              ? "bg-amber-500 dark:bg-blue-600"
              : "bg-gray-600 dark:bg-gray-300"
          }
        `}
            />
          ))}
        </div>
      </div>
      <SideButton side="right" onClick={handleNext} />
    </section>
  );
};

export default Banner;
