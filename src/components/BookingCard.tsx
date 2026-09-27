"use client";

import { ChevronDown, Flag } from "lucide-react";
import Image from "next/image";
import { listing } from "@/data/listing";

export default function BookingCard() {
  return (
    <div className="sticky top-[112px]">
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white p-4">
        <Image
          src="/images/ui/discount.svg"
          width={32}
          height={32}
          alt=""
          aria-hidden="true"
          unoptimized
          className="block h-8 w-8 shrink-0 object-contain"
        />
        <div className="flex-1 text-[14px] leading-[1.3]">
          <div>Get 10% off your next stay.</div>
          <button className="p-0 underline">Terms apply</button>
        </div>
        <button className="shrink-0 rounded-lg border-0 bg-[#f7f7f7] px-[14px] py-2 text-[14px] font-medium">
          Claim
        </button>
      </div>

      <div className="rounded-xl border border-[var(--card-border)] bg-white px-6 pb-6 pt-[22px] shadow-[var(--shadow-card)]">
        <div className="mb-[18px] flex items-baseline gap-[6px]">
          <span className="text-[22px] font-medium underline underline-offset-2">
            ₹{listing.price.toLocaleString("en-IN")}
          </span>
          <span className="text-[15px] text-[#222]">
            for {listing.nights} nights
          </span>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#b0b0b0]">
          <div className="grid grid-cols-2">
            <div className="border border-transparent border-b-gray-300 border-r-gray-300 px-3 py-2.5">
              <div className="text-[10px] font-semibold tracking-[0.12em] text-gray-500">
                CHECK-IN
              </div>
              <div className="text-sm">{listing.checkIn}</div>
            </div>
            <div className="border border-transparent border-b-gray-300 px-3 py-2.5">
              <div className="text-[10px] font-semibold tracking-[0.12em] text-gray-500">
                CHECKOUT
              </div>
              <div className="text-sm">{listing.checkOut}</div>
            </div>
          </div>
          <button className="flex w-full items-center justify-between border border-transparent px-3 py-2.5 text-left">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.12em] text-gray-500">
                GUESTS
              </div>
              <div className="text-sm">{listing.guestsSelected}</div>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="my-4 rounded-lg bg-gray-100 py-3 text-center text-sm">
          Free cancellation before <strong>{listing.cancellationDate}</strong>
        </div>

        <button className="h-12 w-full rounded-full border-0 bg-[var(--reserve)] px-6 text-[16px] font-medium text-white transition-[filter,transform] duration-150 hover:brightness-95 active:scale-[0.99]">
          Reserve
        </button>

        <p className="mt-4 text-center text-[14px] text-[var(--muted2)]">
          You won&apos;t be charged yet
        </p>
      </div>

      <button className="mt-6 flex items-center gap-2 text-sm text-gray-600 underline">
        <Flag size={14} />
        Report this listing
      </button>
    </div>
  );
}
