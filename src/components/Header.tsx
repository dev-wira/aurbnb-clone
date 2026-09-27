"use client";

import { Search, Menu, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto grid h-[88px] w-full max-w-[1172px] grid-cols-[1fr_auto_1fr] items-center px-6 min-[744px]:px-10 min-[1129px]:px-0">
        <a
          href="#"
          className="inline-flex shrink-0 items-center justify-self-start text-[var(--rausch)]"
        >
          <img
            src="/images/branding/airbnb-logo.png"
            alt="airbnb"
            className="h-10 w-auto min-[1129px]:h-[58px]"
          />
        </a>

        <div className="hidden h-12 w-[604px] items-center justify-between justify-self-center rounded-[40px] border border-[var(--line)] bg-white px-2 shadow-[0_1px_4px_#00000014] transition-shadow duration-200 [transition-timing-function:ease] min-[1129px]:inline-flex">
          <div className="flex items-center gap-3 rounded-full px-2 py-2">
            <span className="text-[24px] leading-none" aria-hidden="true">
              🏠
            </span>
            <span className="text-[18px] font-medium">Anywhere</span>
          </div>
          <span className="h-7 border-l border-gray-300" />
          <div className="px-2 py-2 text-[18px] font-medium">Anytime</div>
          <span className="h-7 border-l border-gray-300" />
          <div className="px-2 py-2 text-[18px] text-gray-500">Add guests</div>
          <button className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF385C] text-white">
            <Search size={17} />
          </button>
        </div>

        <div className="inline-flex shrink-0 items-center justify-self-end gap-2">
          <span className="hidden rounded-full px-3 py-2 text-[18px] font-medium hover:bg-gray-100 min-[1129px]:inline">
            Become a host
          </span>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 min-[1129px]:h-[60px] min-[1129px]:w-[60px] min-[1129px]:bg-gray-100">
            <Globe size={18} className="min-[1129px]:h-6 min-[1129px]:w-6" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md min-[1129px]:h-[60px] min-[1129px]:w-[60px] min-[1129px]:border-0 min-[1129px]:bg-gray-100 min-[1129px]:shadow-none">
            <Menu size={16} className="min-[1129px]:h-7 min-[1129px]:w-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
