"use client";

import { useState } from "react";
import {
  Star,
  SprayCan,
  CheckCircle2,
  KeyRound,
  MessageCircle,
  Map,
  Tag,
} from "lucide-react";
import Image from "next/image";
import {
  listing,
  ratingBreakdown,
  ratingCategories,
  reviews,
} from "@/data/listing";
import SafeImg from "@/components/SafeImg";

const iconMap: Record<string, React.ElementType> = {
  spray: SprayCan,
  check: CheckCircle2,
  key: KeyRound,
  chat: MessageCircle,
  map: Map,
  tag: Tag,
};

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-3">
        {r.src ? (
          <SafeImg
            src={r.src}
            w={100}
            h={100}
            className="w-11 h-11 rounded-full object-cover"
            alt={r.name}
          />
        ) : r.avatarLock ? (
          <SafeImg
            tag="portrait,person"
            lock={r.avatarLock}
            w={100}
            h={100}
            className="w-11 h-11 rounded-full object-cover"
            alt={r.name}
          />
        ) : (
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-white"
            style={{ background: r.avatarColor }}
          >
            {r.name[0]}
          </div>
        )}
        <div>
          <div className="font-medium">{r.name}</div>
          <div className="text-gray-500 text-sm">{r.tenure}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs mt-3 text-gray-700">
        <span className="flex gap-0.5">
          {Array.from({ length: r.stars }).map((_, i) => (
            <Star key={i} size={10} fill="black" strokeWidth={0} />
          ))}
        </span>
        · {r.date}
      </div>
      <p
        className={`text-gray-700 mt-2 ${!expanded && r.long ? "line-clamp-3" : ""}`}
      >
        {r.text}
      </p>
      {r.long && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="underline font-medium mt-1"
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 6);
  const reviewTopics = [
    { label: "Comfort", icon: "comfort", count: 6 },
    { label: "Accuracy", icon: "accuracy", count: 5 },
    { label: "Hot tub", icon: "hot-tub", count: 5 },
    { label: "Condition", icon: "condition", count: 4 },
    { label: "Hospitality", icon: "hospitality", count: 8 },
    { label: "Cleanliness", icon: "cleanliness", count: 4 },
    { label: "Amenities", icon: "amenities", count: 2 },
    { label: "Decor", icon: "decor" },
    { label: "Indoor spaces", icon: "indoor-spaces" },
    { label: "Location", icon: "location" },
  ] as const;

  return (
    <div className="border-b border-gray-200 py-10">
      <div className="mx-auto mb-10 max-w-lg text-center">
        <div className="flex items-center justify-center gap-5">
          <Image
            src="/images/ui/guest-favourite/laurel-left.png"
            width={240}
            height={365}
            alt=""
            aria-hidden="true"
            className="h-[110px] w-auto object-contain"
          />
          <span className="text-[100px] font-medium leading-none tracking-[-0.03em]">
            {listing.rating}
          </span>
          <Image
            src="/images/ui/guest-favourite/laurel-right.png"
            width={240}
            height={365}
            alt=""
            aria-hidden="true"
            className="h-[110px] w-auto object-contain"
          />
        </div>
        <h3 className="mt-6 text-[1.75rem] font-semibold">Guest favourite</h3>
        <p className="mt-2 text-gray-600">
          This home is a guest favourite based on ratings, reviews and
          reliability
        </p>
        <button className="mt-2 font-medium underline">How reviews work</button>
      </div>

      <div className="no-scrollbar overflow-x-auto border-b border-gray-200">
        <div className="grid min-w-[680px] grid-cols-[1.4fr_repeat(6,1fr)] gap-0 py-2 pb-10">
          <div className="pr-4">
            <div className="mb-1 whitespace-nowrap text-[12px] font-medium">
              Overall rating
            </div>
            {ratingBreakdown.map((r) => (
              <div
                key={r.stars}
                className="my-0.5 flex items-center gap-1 text-[10px] leading-none"
              >
                <span className="w-2.5">{r.stars}</span>
                <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-black"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          {ratingCategories.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <div key={c.key} className="border-l border-gray-100 px-3">
                <div className="whitespace-nowrap text-[12px]">{c.key}</div>
                <div className="mt-1 text-[14px] font-medium">
                  {c.value.toFixed(1)}
                </div>
                <Icon size={22} strokeWidth={1.3} className="mt-1" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="no-scrollbar mt-5 overflow-x-auto px-1 pt-1 pb-[30px]">
        <div className="mx-auto flex w-max min-w-full justify-center gap-3">
          {reviewTopics.map((topic) => (
            <span
              key={topic.label}
              className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-[12px] text-[#222]"
            >
              <Image
                src={`/images/ui/${topic.icon}.png`}
                width={18}
                height={18}
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] shrink-0 object-contain"
              />
              {topic.label}
              {"count" in topic && (
                <span className="text-gray-500">{topic.count}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 min-[600px]:grid-cols-2">
        {visible.map((r, i) => (
          <ReviewCard r={r} key={i} />
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 rounded-lg border border-black px-5 py-3 font-medium transition hover:bg-gray-50"
        >
          Show all {listing.reviewCount} reviews
        </button>
      )}
    </div>
  );
}
