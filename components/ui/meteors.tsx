"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<{ id: number; left: string; delay: number; duration: number; size: string }[]>([]);

  useEffect(() => {
    const meteorsArray = Array.from({ length: number }, (_, i) => ({
      id: i,
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      delay: Math.random() * (0.8 - 0.2) + 0.2,
      duration: Math.random() * (10 - 2) + 2,
      size: Math.random() * (1 - 0.5) + 0.5 + "px",
    }));
    setMeteors(meteorsArray);
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "animate-meteor-effect absolute top-0 h-px w-px rounded-[9999px] bg-[#458A47] shadow-[0_0_0_1px_#458A4710] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#458A47] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            width: meteor.size,
            height: meteor.size,
          }}
        ></span>
      ))}
    </>
  );
};

