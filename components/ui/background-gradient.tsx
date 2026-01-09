"use client";
import { cn } from "@/lib/utils";
import type React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className={cn("relative p-[4px] group", containerClassName)}
      style={{
        background:
          "linear-gradient(135deg, #F5951C 0%, #458A47 50%, #F5951C 100%)",
      }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform"
        )}
        style={{
          background:
            "linear-gradient(135deg, #F5951C 0%, #458A47 50%, #F5951C 100%)",
        }}
      />
      <div
        className={cn("absolute inset-0 rounded-3xl z-[1]")}
        style={{
          background:
            "linear-gradient(135deg, #F5951C 0%, #458A47 50%, #F5951C 100%)",
        }}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
