"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <BackgroundGradient className="rounded-[22px] p-6 bg-white h-full flex flex-col w-full max-w-sm">
      {image && (
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      )}
      <h3 className="text-xl font-bold text-[#F5951C] mb-3 text-left">
        {title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed text-left">
        {description}
      </p>
    </BackgroundGradient>
  );
}
