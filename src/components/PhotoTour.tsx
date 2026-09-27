"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { allPhotos, tourCategories, Photo } from "@/data/listing";
import SafeImg from "@/components/SafeImg";

// Groups a category's photos the way the reference site does: each run of 3
// photos becomes [large hero, then the other 2 as a side-by-side row]. A
// trailing pair with no hero renders as just a row; a trailing single photo
// renders full-width alone.
function chunk(photos: Photo[]): Photo[][] {
  const groups: Photo[][] = [];
  for (let i = 0; i < photos.length; i += 3)
    groups.push(photos.slice(i, i + 3));
  return groups;
}

export default function PhotoTour({
  onClose,
  onOpenLightbox,
  initialPhotoSrc,
}: {
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  initialPhotoSrc: string | null;
}) {
  const chipRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const photoRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!initialPhotoSrc) return;
    const photoIndex = allPhotos.findIndex(
      (photo) => photo.src === initialPhotoSrc,
    );
    if (photoIndex < 0) return;

    const frame = window.requestAnimationFrame(() => {
      photoRefs.current[photoIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialPhotoSrc]);

  const scrollToCategory = (title: string) => {
    chipRefs.current[title]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Running counter so every rendered photo maps to its true position in the
  // flattened `allPhotos` list (what the Lightbox indexes into).
  let runningIndex = 0;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fadeIn">
      {/* Only this top bar stays pinned while scrolling. */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-5">
          <button
            onClick={onClose}
            aria-label="Back"
            className="p-1 hover:opacity-60"
          >
            <ChevronLeft size={26} />
          </button>
          <span className="font-semibold text-lg">Photo tour</span>
          <div className="flex items-center gap-5">
            <button aria-label="Share" className="hover:opacity-60">
              <Share size={20} />
            </button>
            <button aria-label="Save" className="hover:opacity-60">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail strip scrolls away with the page — not sticky. */}
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-x-3 gap-y-5 px-4 py-5 sm:grid-cols-4 lg:grid-cols-8">
        {tourCategories.map((c) => (
          <button
            key={c.title}
            onClick={() => scrollToCategory(c.title)}
            className="min-w-0 text-center"
          >
            <div className="mb-2 aspect-[1.07] overflow-hidden rounded-lg">
              <SafeImg
                src={c.hero.src}
                w={200}
                h={160}
                alt={c.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg text-gray-800">{c.title}</span>
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-[1160px] px-4 py-12">
        {tourCategories.map((c) => {
          const groups = chunk([c.hero, ...c.sub]);
          return (
            <div
              key={c.title}
              ref={(el) => {
                chipRefs.current[c.title] = el;
              }}
              className="mb-16 grid grid-cols-1 gap-y-8 scroll-mt-40 md:grid-cols-2 md:gap-x-[60px]"
            >
              <div>
                <h3 className="mb-4 text-4xl font-semibold">{c.title}</h3>
                {c.tags && <p className="text-lg text-gray-500">{c.tags}</p>}
              </div>

              <div className="space-y-3">
                {groups.map((group, gi) => {
                  if (group.length === 3) {
                    const [hero, a, b] = group;
                    const heroIdx = runningIndex++;
                    const aIdx = runningIndex++;
                    const bIdx = runningIndex++;
                    return (
                      <div key={gi} className="space-y-3">
                        <button
                          ref={(el) => {
                            photoRefs.current[heroIdx] = el;
                          }}
                          onClick={() => onOpenLightbox(heroIdx)}
                          className="block w-full rounded-xl overflow-hidden"
                        >
                          <SafeImg
                            src={hero.src}
                            w={900}
                            h={650}
                            alt={c.title}
                            className="w-full h-[420px] object-cover hover:brightness-95 transition"
                          />
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            [a, aIdx],
                            [b, bIdx],
                          ].map(([p, idx]) => {
                            const photo = p as Photo;
                            const index = idx as number;
                            return (
                              <button
                                key={index}
                                ref={(el) => {
                                  photoRefs.current[index] = el;
                                }}
                                onClick={() => onOpenLightbox(index)}
                                className="rounded-xl overflow-hidden"
                              >
                                <SafeImg
                                  src={photo.src}
                                  w={500}
                                  h={400}
                                  alt={c.title}
                                  className="w-full h-56 object-cover hover:brightness-95 transition"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  if (group.length === 2) {
                    const [a, b] = group;
                    const aIdx = runningIndex++;
                    const bIdx = runningIndex++;
                    return (
                      <div key={gi} className="grid grid-cols-2 gap-3">
                        {[
                          [a, aIdx],
                          [b, bIdx],
                        ].map(([p, idx]) => {
                          const photo = p as Photo;
                          const index = idx as number;
                          return (
                            <button
                              key={index}
                              ref={(el) => {
                                photoRefs.current[index] = el;
                              }}
                              onClick={() => onOpenLightbox(index)}
                              className="rounded-xl overflow-hidden"
                            >
                              <SafeImg
                                src={photo.src}
                                w={500}
                                h={400}
                                alt={c.title}
                                className="w-full h-56 object-cover hover:brightness-95 transition"
                              />
                            </button>
                          );
                        })}
                      </div>
                    );
                  }

                  // group.length === 1
                  const single = group[0];
                  const idx = runningIndex++;
                  return (
                    <button
                      key={gi}
                      ref={(el) => {
                        photoRefs.current[idx] = el;
                      }}
                      onClick={() => onOpenLightbox(idx)}
                      className="block w-full rounded-xl overflow-hidden"
                    >
                      <SafeImg
                        src={single.src}
                        w={900}
                        h={650}
                        alt={c.title}
                        className="w-full h-[420px] object-cover hover:brightness-95 transition"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
