"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    // Update height on resize
    window.addEventListener("resize", updateHeight);

    // Use ResizeObserver for more accurate height tracking
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 relative"
      ref={containerRef}
      dir="rtl"
    >
      {/* Gradient overlay for the whole timeline - extends along full height */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-0 transition-all duration-300"
        style={{
          height: height > 0 ? height + "px" : "100vh",
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, white 0%, white 30%, rgba(255,255,255,0.98) 30%, rgba(69,138,71,0.03) 50%, rgba(69,138,71,0.05) 70%, rgba(69,138,71,0.08) 100%)",
        }}
      ></div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 pt-10 z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute right-3 md:right-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pr-20 md:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pr-20 pl-4 md:pr-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-right font-bold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:right-8 right-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#458A47] via-[#458A47] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
