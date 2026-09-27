"use client";

import { useState } from "react";
import { Share, Heart } from "lucide-react";
import { listing } from "@/data/listing";

export default function ListingHeader() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="mt-8 flex items-center justify-between gap-6">
      <h1 className="text-[26px] font-medium leading-[30px] tracking-normal">
        {listing.title}
      </h1>
      <div className="flex items-center gap-3">
        <button className="flex h-9 items-center gap-2 rounded-lg px-2 text-sm font-semibold underline decoration-1 underline-offset-4 hover:bg-gray-100">
          <Share size={16} />
          Share
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className="flex h-9 items-center gap-2 rounded-lg px-2 text-sm font-semibold underline decoration-1 underline-offset-4 hover:bg-gray-100"
        >
          <Heart
            size={16}
            className={`transition-colors ${saved ? "fill-[#FF385C] text-[#FF385C]" : ""}`}
          />
          Save
        </button>
      </div>
    </div>
  );
}
