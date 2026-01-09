"use client";
import { GL } from "./gl";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="relative h-[60vh] flex flex-col justify-center bg-white overflow-hidden">
      {/* Particle graphics - full coverage */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full">
          <GL hovering={false} />
        </div>
      </div>

      {/* Text content centered */}
      <div className="relative z-10 py-12 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-balance max-w-[900px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
