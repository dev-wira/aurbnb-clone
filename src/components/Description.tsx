"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { listing } from "@/data/listing";
import SafeImg from "@/components/SafeImg";

export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="mb-2 flex items-center gap-[10px] rounded-xl bg-[var(--grey100)] px-[18px] py-4 text-[14px] text-[#222]">
        Some info has been automatically translated.
        <button
          type="button"
          className="bg-transparent p-0 font-medium underline"
        >
          Show original
        </button>
      </div>

      <p
        className={`whitespace-pre-line text-[16px] leading-[1.5] text-[#222] ${
          expanded
            ? ""
            : "line-clamp-3 [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_100%)]"
        }`}
      >
        {listing.description}
      </p>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
        className="mt-[14px] inline-flex items-center gap-[6px] border-0 bg-none p-0 text-[16px] font-medium text-[#222] underline underline-offset-[3px]"
      >
        {expanded ? "Show less" : "Show more"}
        <ChevronRight
          size={18}
          className={`transition-transform ${expanded ? "rotate-90" : ""}`}
        />
      </button>

      <div className="border-t border-[var(--line-soft)] py-8">
        <h3 className="mb-4 text-[1.4rem] font-semibold tracking-[-0.02em]">
          Where you&apos;ll sleep
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              src: "/images/listings/mirashya-ug10/bedroom/01.png",
              room: "Bedroom",
              bed: "1 double bed",
            },
            {
              src: "/images/listings/mirashya-ug10/living-room-1/01.png",
              room: "Living room",
              bed: "1 sofa",
            },
          ].map((p) => (
            <div key={p.src}>
              <SafeImg
                src={p.src}
                w={500}
                h={350}
                alt={p.room}
                className="aspect-[1.4] w-full rounded-xl object-cover"
              />
              <div className="mt-3 text-lg font-medium">{p.room}</div>
              <p className="mt-1 text-sm text-gray-500">{p.bed}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
