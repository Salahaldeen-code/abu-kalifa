"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface LocationData {
  country: string;
  city: string;
  address: string;
}

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string; location?: LocationData | LocationData[] };
    end: { lat: number; lng: number; label?: string; location?: LocationData };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{
    locations: LocationData[];
  } | null>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const handlePointHover = useCallback((
    e: React.MouseEvent<SVGCircleElement>,
    location: LocationData | LocationData[] | undefined
  ) => {
    if (!location) return;
    
    const locations = Array.isArray(location) ? location : [location];
    setHoveredPoint({ locations });
  }, []);

  const handlePointLeave = useCallback(() => {
    setHoveredPoint(null);
  }, []);

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                  className="pointer-events-none"
                />
                {dot.start.location && (
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="12"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, dot.start.location)}
                    onMouseLeave={handlePointLeave}
                  />
                )}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                  className="pointer-events-none"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                  className="pointer-events-none"
                />
                {dot.end.location && (
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="12"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, dot.end.location)}
                    onMouseLeave={handlePointLeave}
                  />
                )}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                  className="pointer-events-none"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Tooltip Container - Fixed Upper Right */}
      <AnimatePresence>
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.15 }}
            className="absolute top-4 right-4 pointer-events-none z-50"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 min-w-[220px] max-w-[280px]">
              {hoveredPoint.locations.map((location, idx) => (
                <div key={idx} className={idx > 0 ? "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" : ""}>
                  <div className="space-y-2">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {location.country}
                    </div>
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {location.city}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {location.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
