"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import ListingHeader from "@/components/ListingHeader";
import ListingBody from "@/components/ListingBody";
import Description from "@/components/Description";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import LocationAndHost from "@/components/LocationAndHost";
import SubNav from "@/components/SubNav";
import BookingCard from "@/components/BookingCard";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import { listing } from "@/data/listing";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [tourPhotoSrc, setTourPhotoSrc] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SubNav
        price={listing.price}
        reviewCount={listing.reviewCount}
        rating={listing.rating}
      />

      <main className="mx-auto max-w-[1172px] px-6 min-[744px]:px-10 min-[1129px]:px-0">
        <div id="photos">
          <ListingHeader />
          <Gallery
            onOpenTour={(photoSrc) => {
              setTourPhotoSrc(photoSrc ?? null);
              setTourOpen(true);
            }}
          />
        </div>
        {/* Marks the scroll point after which the sticky sub-nav appears */}
        <div id="subnav-sentinel" />

        <div className="mt-2 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_397px] lg:gap-[104px]">
          <div>
            <ListingBody />
            <Description />
            <div id="amenities">
              <Amenities />
            </div>
            <AvailabilityCalendar />
          </div>
          <aside className="hidden lg:block">
            <BookingCard />
          </aside>
        </div>

        <div id="reviews" className="scroll-mt-24">
          <Reviews />
        </div>
        <div id="location" className="scroll-mt-24">
          <LocationAndHost />
        </div>
      </main>

      {tourOpen && (
        <PhotoTour
          initialPhotoSrc={tourPhotoSrc}
          onClose={() => {
            setTourOpen(false);
            setTourPhotoSrc(null);
          }}
          onOpenLightbox={(i) => setLightboxIndex(i)}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
          onBackToGrid={() => {
            setLightboxIndex(null);
            setTourOpen(true);
          }}
        />
      )}
    </div>
  );
}
