"use client";
import { WorldMap } from "../ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="max-w-7xl mx-auto py-20 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          تواصل معنا
          {/* <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span> */}
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          نحن هنا للإجابة على أسئلتك وتقديم الدعم الذي تحتاجه. لا تتردد في
          التواصل معنا
        </p>
      </div>
      <WorldMap
        lineColor="#f99122"
        dots={[
          {
            start: {
              lat: 2,
              lng: 47,
              location: [
                {
                  country: "اليمن",
                  city: "صنعاء",
                  address: "شارع الرقاص - تقاطع هائل",
                },
                {
                  country: "اليمن",
                  city: "المهرة",
                  address: "الغيضة - شارع المطار",
                },
              ],
            },
            end: {
              lat: 2,
              lng: 47,
            },
          },
          {
            start: {
              lat: 5,
              lng: 59,
              location: {
                country: "سلطنة عمان",
                city: "مسقط",
                address: "الخوير",
              },
            },
            end: {
              lat: 5,
              lng: 59,
            },
          },
        ]}
      />
    </div>
  );
}
