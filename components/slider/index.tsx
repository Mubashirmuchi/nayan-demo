"use client";

import {
  motion,
  useMotionValue,
  animate,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = ["/gallery1.png", "/gallery2.png", "/gallery3.png", "/hero.png"];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);

  const timeoutRef = useRef<any>(null);

  const swipeTo = (direction: number) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setIndex(newIndex);
  };

  const onDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50) swipeTo(1);
    if (info.offset.x > 50) swipeTo(-1);
    animate(x, 0, { type: "spring" });
  };

  /* AUTOPLAY */
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      swipeTo(1);
    }, 3500);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Gallery.</h2>

        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Left Preview */}
          <div className="col-span-2 hidden md:block">
            <div className="w-full h-80 bg-gray-300 relative overflow-hidden">
              <Image
                src={images[(index - 1 + images.length) % images.length]}
                fill
                className="object-cover"
                alt="prev"
              />
            </div>
          </div>

          {/* Main Slide */}
          <div className="col-span-12 md:col-span-8 relative">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={onDragEnd}
              style={{ x }}
              className="cursor-pointer select-none"
              key={index} // IMPORTANT: new animation on every image
              initial={{ opacity: 0, scale: 0.98, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -50 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1], // smooth cubic easing
              }}
            >
              <div className="w-full h-[26rem] bg-gray-400 relative overflow-hidden">
                <Image
                  src={images[index]}
                  fill
                  className="object-cover"
                  alt="main"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Preview */}
          <div className="col-span-2 hidden md:block">
            <div className="w-full h-80 bg-gray-300 relative overflow-hidden">
              <Image
                src={images[(index + 1) % images.length]}
                fill
                className="object-cover"
                alt="next"
              />
            </div>
          </div>
        </div>

    

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
