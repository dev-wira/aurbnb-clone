"use client";

import { useState } from "react";
import { Grid3x3 } from "lucide-react";
import { heroImages } from "@/data/listing";
import SafeImg from "@/components/SafeImg";

export default function Gallery({
  onOpenTour,
}: {
  onOpenTour: (photoSrc?: string) => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative mt-6 grid h-[480px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-[28px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={() => onOpenTour(heroImages[0].src)}
        className="group relative col-span-2 row-span-2 overflow-hidden"
      >
        <SafeImg
          src={heroImages[0].src}
          w={900}
          h={900}
          alt={heroImages[0].alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </button>
      {heroImages.slice(1).map((img, i) => (
        <button
          key={i}
          onClick={() => onOpenTour(img.src)}
          className="group relative overflow-hidden"
        >
          <SafeImg
            src={img.src}
            w={500}
            h={500}
            alt={img.alt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>
      ))}

      <button
        onClick={() => onOpenTour()}
        className={`absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-[0_2px_12px_rgba(0,0,0,0.18)] transition-opacity duration-200 ${
          hover ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Grid3x3 size={16} />
        Show all photos
      </button>
    </div>
  );
}
