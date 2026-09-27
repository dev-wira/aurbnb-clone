"use client";

import { useState } from "react";
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  AlarmSmoke,
  AirVent,
  BedDouble,
  Baby,
  Coffee,
  DoorOpen,
  Dumbbell,
  KeyRound,
  Microwave,
  Refrigerator,
  Shirt,
  Sparkles,
  Tv,
  WashingMachine,
  Wind,
  Wine,
  CookingPot,
  Trees,
  X,
} from "lucide-react";
import { amenityGroups, amenities } from "@/data/listing";

const iconMap: Record<string, React.ElementType> = {
  kitchen: Utensils,
  wifi: Wifi,
  desk: Laptop,
  car: Car,
  pool: Waves,
  hottub: Bath,
  pets: PawPrint,
  camera: Camera,
  co: AlarmSmoke,
  smoke: AlarmSmoke,
  hairdryer: Wind,
  cleaning: Sparkles,
  shampoo: Bath,
  "hot-water": Waves,
  shower: Bath,
  washer: WashingMachine,
  hanger: Shirt,
  bed: BedDouble,
  blinds: Wind,
  iron: Shirt,
  storage: Shirt,
  cot: Baby,
  tv: Tv,
  "air-conditioning": AirVent,
  fridge: Refrigerator,
  freezer: Refrigerator,
  cooking: CookingPot,
  cutlery: Utensils,
  kettle: Coffee,
  coffee: Coffee,
  wine: Wine,
  toaster: CookingPot,
  blender: CookingPot,
  cooker: CookingPot,
  entrance: DoorOpen,
  patio: Trees,
  dining: Utensils,
  gym: Dumbbell,
  "long-stay": BedDouble,
  "self-check-in": KeyRound,
};

type AmenityItem = { icon: string; label: string; available?: boolean };

function Row({ a }: { a: AmenityItem }) {
  const Icon = iconMap[a.icon] ?? Utensils;
  return (
    <div
      className={`flex items-center gap-4 py-1 text-[16px] ${
        !a.available ? "text-gray-400 line-through decoration-1" : ""
      }`}
    >
      <Icon size={24} strokeWidth={1.5} className="shrink-0" />
      <span>{a.label}</span>
    </div>
  );
}

export default function Amenities() {
  const [open, setOpen] = useState(false);
  const half = Math.ceil(amenities.length / 2);

  return (
    <div className="border-t border-b border-[var(--line-soft)] py-8">
      <h3 className="mb-6 text-[22px] font-medium leading-[26px]">
        What this place offers
      </h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-3">
        {Array.from({ length: half }, (_, index) => (
          <div
            key={index}
            className="col-span-2 grid grid-cols-2 items-center gap-x-10"
          >
            <Row a={amenities[index]} />
            {amenities[index + half] && <Row a={amenities[index + half]} />}
          </div>
        ))}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 rounded-xl border border-[#222] bg-white px-[23px] py-[13px] text-[16px] font-medium transition-[background,transform] duration-150 hover:bg-gray-50 active:scale-[0.99]"
      >
        Show all 50 amenities
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenities-dialog-title"
            className="relative max-h-[min(526px,calc(100vh-32px))] w-[min(832px,calc(100vw-32px))] overflow-y-auto rounded-xl bg-white px-8 pb-8 pt-[78px] animate-scaleIn sm:px-[50px]"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex h-16 items-center bg-white px-8 sm:px-[30px]">
              <button
                type="button"
                aria-label="Close amenities"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <h2
              id="amenities-dialog-title"
              className="mb-6 text-[22px] font-semibold"
            >
              What this place offers
            </h2>
            <div>
              {amenityGroups.map((group) => (
                <section key={group.title} className="mb-8">
                  <h3 className="mb-2 text-[18px] font-medium">
                    {group.title}
                  </h3>
                  <div>
                    {group.items.map((item, index) => (
                      <div
                        key={`${group.title}-${item.label}-${index}`}
                        className="flex items-center gap-4 border-b border-gray-200 py-3 text-[16px]"
                      >
                        {(() => {
                          const Icon = iconMap[item.icon] ?? Utensils;
                          return (
                            <Icon
                              size={24}
                              strokeWidth={1.5}
                              className={`shrink-0 ${item.available === false ? "text-gray-500" : ""}`}
                            />
                          );
                        })()}
                        <span
                          className={
                            item.available === false
                              ? "text-gray-500 line-through"
                              : ""
                          }
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
