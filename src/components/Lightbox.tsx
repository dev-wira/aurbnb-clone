"use client";

import { useCallback, useEffect } from "react";
import { Grid3x3, X, ChevronLeft, ChevronRight } from "lucide-react";
import { allPhotos } from "@/data/listing";
import SafeImg from "@/components/SafeImg";

export default function Lightbox({
  index,
  onClose,
  onChangeIndex,
  onBackToGrid,
}: {
  index: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
  onBackToGrid: () => void;
}) {
  const total = allPhotos.length;
  const photo = allPhotos[index];

  const goPrev = useCallback(() => {
    onChangeIndex((index - 1 + total) % total);
  }, [index, total, onChangeIndex]);

  const goNext = useCallback(() => {
    onChangeIndex((index + 1) % total);
  }, [index, total, onChangeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-fadeIn">
      <div className="flex items-center justify-between px-6 py-5 shrink-0">
        <button
          onClick={onBackToGrid}
          aria-label="Back to grid"
          className="hover:opacity-60"
        >
          <Grid3x3 size={22} />
        </button>
        <span className="font-medium">{photo.title}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {index + 1} of {total}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="hover:opacity-60"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-6 pb-6">
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-6 md:left-10 w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <SafeImg
          key={index}
          src={photo.src}
          w={1400}
          h={1000}
          alt={photo.title}
          className="h-auto w-auto max-h-[calc(100dvh-140px)] max-w-[calc(100vw-120px)] object-contain rounded-lg animate-scaleIn"
        />

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-6 md:right-10 w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
