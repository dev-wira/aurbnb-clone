"use client";

import { Star, RectangleHorizontal, Fan, DoorOpen } from "lucide-react";
import Image from "next/image";
import { listing, highlights } from "@/data/listing";

const iconMap: Record<string, React.ElementType> = {
  tent: RectangleHorizontal,
  fan: Fan,
  door: DoorOpen,
};

export default function ListingBody() {
  return (
    <div className="mt-8">
      <div className="pb-6">
        <h2 className="text-[22px] font-medium leading-[26px]">
          {listing.subtitle}
        </h2>
        <p className="mt-[6px] text-[16px] text-gray-600">
          {listing.guestsInfo}
        </p>
      </div>

      <div className="mt-2 flex items-center gap-[22px] rounded-2xl border border-gray-200 px-7 py-4">
        <div className="inline-flex h-9 shrink-0 items-center gap-1 text-center text-[15px] font-medium leading-[1.15]">
          <Image
            src="/images/ui/guest-favourite/leftLA.png"
            width={136}
            height={214}
            alt=""
            aria-hidden="true"
            className="inline-flex h-9 w-auto items-center"
          />
          <span>
            Guest
            <br />
            favourite
          </span>
          <Image
            src="/images/ui/guest-favourite/rightLA.png"
            width={100}
            height={204}
            alt=""
            aria-hidden="true"
            className="block h-full w-auto"
          />
        </div>
        <div className="flex-1 text-[14px] leading-[1.3] text-gray-700">
          One of the most loved homes on Airbnb, according to guests
        </div>
        <div className="flex shrink-0 items-center gap-[22px]">
          <div className="text-center">
            <div className="text-[20px] font-bold">{listing.rating}</div>
            <div className="mt-0.5 flex justify-center gap-0.5 text-[#222]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  width={10}
                  height={10}
                  fill="black"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>
          <span
            className="h-[34px] w-px shrink-0 bg-gray-200"
            aria-hidden="true"
          />
          <div className="text-center">
            <div className="text-[20px] font-bold">{listing.reviewCount}</div>
            <div className="text-[13px] font-medium text-gray-600">Reviews</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 pb-6 border-b border-gray-200">
        <Image
          src="/images/hosts/mirashya-homes/host.jpeg"
          width={46}
          height={46}
          alt="host"
          className="h-[46px] w-[46px] rounded-full object-cover"
        />
        <div>
          <div className="text-[16px] font-medium">
            Hosted by {listing.host.name}
          </div>
          <div className="mt-0.5 text-[14px] text-[var(--muted2)]">
            {listing.host.tenure}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-b border-gray-200 pt-1.5 pb-8">
        {highlights.map((h, i) => {
          const Icon = iconMap[h.icon] ?? RectangleHorizontal;
          return (
            <div key={i} className="flex gap-4">
              <Icon size={26} strokeWidth={1.3} className="mt-1 shrink-0" />
              <div>
                <div className="text-[14px] font-medium leading-5">
                  {h.title}
                </div>
                <div className="mt-0.5 text-[14px] text-[var(--muted2)]">
                  {h.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
