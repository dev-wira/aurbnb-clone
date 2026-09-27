"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  House,
  MapPin,
  GraduationCap,
  ShieldCheck,
  CalendarX,
  KeyRound,
} from "lucide-react";
import { listing, coHosts } from "@/data/listing";
import SafeImg from "@/components/SafeImg";

const nearbyStays = [
  {
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
    image: "/images/listings/nearby-stays/01.jpeg",
  },
  {
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
    image: "/images/listings/nearby-stays/02.jpeg",
  },
  {
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    image: "/images/listings/nearby-stays/03.jpeg",
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    image: "/images/listings/nearby-stays/04.jpeg",
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
    image: "/images/listings/nearby-stays/05.jpeg",
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    image: "/images/listings/nearby-stays/04.jpeg",
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool",
    price: "₹39,942",
    rating: "4.95",
    image: "/images/listings/nearby-stays/05.jpeg",
  },
  {
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
    image: "/images/listings/nearby-stays/06.jpeg",
  },
  {
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
    image: "/images/listings/nearby-stays/02.jpeg",
  },
  {
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga",
    price: "₹22,824",
    rating: "4.92",
    image: "/images/listings/nearby-stays/01.jpeg",
  },
];

export default function LocationAndHost() {
  const [nearbyPage, setNearbyPage] = useState(1);
  const visibleNearbyStays = nearbyStays.slice(
    nearbyPage * 5,
    nearbyPage * 5 + 5,
  );

  return (
    <>
      <section className="border-b border-gray-200 py-10">
        <h3 className="mb-6 text-[22px] font-medium leading-[26px]">
          Where you&apos;ll be
        </h3>
        <p className="mb-4 text-[17px] text-gray-700">{listing.location}</p>
        <div
          role="img"
          aria-label={`Map showing the approximate location of ${listing.location}`}
          className="relative h-[296px] overflow-hidden rounded-xl bg-[#edf2e7]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#a9d5e7] [clip-path:polygon(0_0,39.5%_0,20.5%_100%,0_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(199, 207, 195, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(199, 207, 195, 0.5) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute left-[25%] top-[30%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfe3c3]/80"
          />
          <div
            aria-hidden="true"
            className="absolute left-[70%] top-[61%] h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfe3c3]/80"
          />
          <div className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm">
            <Search size={13} />
          </div>
          <div className="absolute right-1 top-1 flex flex-col gap-1">
            <button
              type="button"
              aria-label="Zoom in"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-gray-700 shadow-sm"
            >
              <Plus size={13} />
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-gray-700 shadow-sm"
            >
              <Minus size={13} />
            </button>
          </div>
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#222] text-white shadow-md">
            <House size={18} />
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Exact location will be provided after booking.
        </p>
        <h4 className="mt-8 mb-2 text-lg font-semibold">
          Neighbourhood highlights
        </h4>
        <p className="text-gray-700">{listing.neighbourhoodHighlight}</p>
        <button className="mt-2 flex items-center font-medium underline">
          Show more
        </button>
      </section>

      <section className="border-b border-gray-200 py-10">
        <h3 className="mb-7 text-[22px] font-medium leading-[26px]">
          Meet your host
        </h3>
        <div className="grid grid-cols-1 gap-10 min-[700px]:grid-cols-[324px_minmax(0,1fr)] min-[700px]:gap-[46px]">
          <div>
            <div className="grid min-h-[248px] grid-cols-[1fr_96px] rounded-2xl border border-gray-200 bg-white shadow-[0_8px_22px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col items-center justify-center px-5 py-5 text-center">
                <div className="relative mb-4">
                  <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-emerald-900 text-center text-[11px] font-semibold leading-tight text-white">
                    MIRASHYA
                    <br />
                    HOMES
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#FF385C]">
                    <ShieldCheck size={16} className="text-white" />
                  </div>
                </div>
                <div className="text-[24px] font-medium leading-[1.25]">
                  Mirashya
                  <br />
                  Homes
                </div>
                <div className="mt-1 text-[14px] text-gray-600">Host</div>
              </div>
              <div className="my-7 flex flex-col justify-between border-l border-gray-100 px-5 py-2">
                <div className="border-b border-gray-100 pb-3">
                  <div className="text-[20px] font-medium">
                    {listing.host.reviews.toLocaleString()}
                  </div>
                  <div className="text-[12px] text-gray-600">Reviews</div>
                </div>
                <div className="border-b border-gray-100 py-3">
                  <div className="text-[20px] font-medium">
                    {listing.host.rating}★
                  </div>
                  <div className="text-[12px] text-gray-600">Rating</div>
                </div>
                <div className="pt-3">
                  <div className="text-[20px] font-medium">
                    {listing.host.yearsHosting}
                  </div>
                  <div className="text-[12px] text-gray-600">Years hosting</div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-4">
              <div className="flex items-center gap-3 text-[16px]">
                <MapPin size={20} strokeWidth={1.5} />
                {listing.host.bornDecade}
              </div>
              <div className="flex items-center gap-3 text-[16px]">
                <GraduationCap size={20} strokeWidth={1.5} />
                {listing.host.school}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-5 text-[22px] font-medium">Co-Hosts</div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 min-[900px]:grid-cols-3">
              {coHosts.map((coHost) => (
                <div key={coHost.name} className="flex items-center gap-3">
                  {coHost.src ? (
                    <SafeImg
                      src={coHost.src}
                      w={60}
                      h={60}
                      className="h-8 w-8 rounded-full object-cover"
                      alt={coHost.name}
                    />
                  ) : coHost.lock ? (
                    <SafeImg
                      tag="portrait,person"
                      lock={coHost.lock}
                      w={60}
                      h={60}
                      className="h-8 w-8 rounded-full object-cover"
                      alt={coHost.name}
                    />
                  ) : (
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold"
                      style={{ background: coHost.color }}
                    >
                      {coHost.initial}
                    </div>
                  )}
                  <span className="text-[16px]">{coHost.name}</span>
                </div>
              ))}
            </div>
            <div className="mb-4 mt-8 text-[22px] font-medium">
              Host details
            </div>
            <p className="text-[16px] text-gray-700">
              {listing.host.responseRate}
            </p>
            <p className="mb-5 mt-1 text-[16px] text-gray-700">
              {listing.host.responseTime}
            </p>
            <button className="rounded-lg bg-gray-100 px-6 py-3 text-[16px] font-medium transition hover:bg-gray-200">
              Message host
            </button>
            <p className="mt-8 flex items-center gap-3 text-[14px] text-gray-500">
              <ShieldCheck size={20} strokeWidth={1.3} className="shrink-0" />
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-[var(--line-soft)] py-12">
        <h3 className="mb-6 text-[22px] font-medium leading-[26px]">
          Things to know
        </h3>
        <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-3 min-[600px]:gap-12">
          <div>
            <CalendarX size={28} strokeWidth={1.3} className="mb-5" />
            <div className="mb-3 text-[18px] font-medium">
              Cancellation policy
            </div>
            <p className="text-[16px] leading-[1.45] text-gray-700">
              {listing.thingsToKnow.cancellation}
            </p>
            <button className="mt-3 text-[16px] font-medium underline">
              Learn more
            </button>
          </div>
          <div>
            <KeyRound size={28} strokeWidth={1.3} className="mb-5" />
            <div className="mb-3 text-[18px] font-medium">House rules</div>
            {listing.thingsToKnow.houseRules.map((rule) => (
              <p key={rule} className="text-[16px] leading-[1.7] text-gray-700">
                {rule}
              </p>
            ))}
            <button className="mt-3 text-[16px] font-medium underline">
              Learn more
            </button>
          </div>
          <div>
            <ShieldCheck size={28} strokeWidth={1.3} className="mb-5" />
            <div className="mb-3 text-[18px] font-medium">
              Safety &amp; property
            </div>
            {listing.thingsToKnow.safety.map((item) => (
              <p key={item} className="text-[16px] leading-[1.7] text-gray-700">
                {item}
              </p>
            ))}
            <button className="mt-3 text-[16px] font-medium underline">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line-soft)] py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 className="text-[28px] font-medium leading-[34px]">
            More stays nearby
          </h3>
          <div className="flex shrink-0 items-center gap-3 text-[16px] text-gray-600">
            <span>{nearbyPage + 1} / 2</span>
            <button
              type="button"
              aria-label="Previous nearby stays"
              disabled={nearbyPage === 0}
              onClick={() => setNearbyPage(0)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next nearby stays"
              disabled={nearbyPage === 1}
              onClick={() => setNearbyPage(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 min-[600px]:grid-cols-5 min-[600px]:gap-[30px]">
          {visibleNearbyStays.map((stay) => (
            <article key={stay.title} className="min-w-0">
              <SafeImg
                src={stay.image}
                w={320}
                h={320}
                alt={stay.title}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <h4 className="mt-3 line-clamp-2 text-[18px] leading-[1.4] text-[#222]">
                {stay.title}
              </h4>
              <div className="mt-2 flex items-center gap-2 text-[15px] text-gray-700">
                <span>{stay.price}</span>
                <span aria-hidden="true">·</span>
                <span>★ {stay.rating}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
