"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroVideo() {
      const videoRef = useRef<HTMLVideoElement>(null);

//     useEffect(() => {
//   const v = document.getElementById("heroVideo") as HTMLVideoElement;
//   v?.play().catch(() => {});
// }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
        ref={videoRef}
    className="absolute inset-0 w-full h-full object-cover -z-10 hero-video"
    autoPlay
    muted
    loop
    playsInline
    webkit-playsinline="true"



    preload="auto"
    poster="/hero.png" // 👈 fallback image from /public
  >
    <source
      src="/output.mp4"
      type="video/mp4"
    />
    {/* Fallback if video cannot play */}
    <Image
      fill
      priority
      src="/hero.png"
      alt="Townhouse"
      className="w-full h-full object-cover"
    />
  </video>
  );
}
