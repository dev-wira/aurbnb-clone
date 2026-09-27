"use client";

import { useEffect, useState } from "react";

const tabs = [
  { label: "Photos", id: "photos" },
  { label: "Amenities", id: "amenities" },
  { label: "Reviews", id: "reviews" },
  { label: "Location", id: "location" },
];

export default function SubNav({
  price,
  reviewCount,
  rating,
}: {
  price: number;
  reviewCount: number;
  rating: number;
}) {
  const [active, setActive] = useState("photos");
  // Hidden until the user scrolls past the gallery/title block — matches the
  // reference, where this bar is absent on initial load and appears on scroll.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sentinel = document.getElementById("subnav-sentinel");
      setVisible(!!sentinel && sentinel.getBoundingClientRect().top < 80);

      let current = "photos";
      for (const t of tabs) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < 160) current = t.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-20 h-[72px] border-b border-gray-200 bg-white transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="absolute inset-x-0 top-0 z-[3] flex h-[72px] items-center px-6">
        <div className="mx-auto flex h-full w-full max-w-[1172px] items-center justify-between">
          <div className="flex gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  active === t.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden text-right text-sm md:block">
              <div>
                <span className="font-semibold underline">
                  ₹{price.toLocaleString("en-IN")}
                </span>{" "}
                for 5 nights
              </div>
              <div className="text-gray-600">
                ★ {rating} · {reviewCount} reviews
              </div>
            </div>
            <button className="hidden rounded-lg bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#E31C5F] md:block">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
