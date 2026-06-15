"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      
      {/* STICKER */}
      <div className="animate-bounce">
        <Image
          src="/stickers/stikerJok.png"
          alt="loading"
          width={200}
          height={200}
          className="drop-shadow-xl"
        />
      </div>

      {/* TEXT */}
      <p className="mt-4 text-xl font-medium text-gray-600">
        Loading... {progress}%
      </p>

      {/* PROGRESS BAR */}
      <div className="mt-3 h-3 w-52 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-[#3C9379] transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}