"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const initialStart = new Date(2026, 9, 18);
const initialEnd = new Date(2026, 9, 23);

function sameDay(left: Date | null, right: Date) {
  return Boolean(
    left &&
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate(),
  );
}

function formatDate(date: Date | null) {
  return date
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date)
    : "Add date";
}

export default function AvailabilityCalendar() {
  const [firstMonth, setFirstMonth] = useState(new Date(2026, 9, 1));
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: initialStart,
    end: initialEnd,
  });

  const months = [0, 1].map(
    (offset) =>
      new Date(firstMonth.getFullYear(), firstMonth.getMonth() + offset, 1),
  );
  const nights =
    range.start && range.end
      ? Math.round((range.end.getTime() - range.start.getTime()) / 86400000)
      : 0;

  const selectDate = (date: Date) => {
    if (!range.start || range.end) {
      setRange({ start: date, end: null });
    } else if (date < range.start) {
      setRange({ start: date, end: range.start });
    } else {
      setRange({ start: range.start, end: date });
    }
  };

  return (
    <section className="border-t border-[var(--line-soft)] py-8">
      <h3 className="text-[22px] font-medium">
        {nights ? `${nights} nights in Candolim` : "Select dates"}
      </h3>
      <p className="mb-[22px] mt-[6px] text-[14px] text-[var(--muted2)]">
        {formatDate(range.start)} - {formatDate(range.end)}
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {months.map((month, index) => {
          const year = month.getFullYear();
          const monthIndex = month.getMonth();
          const firstWeekday = new Date(year, monthIndex, 1).getDay();
          const dayCount = new Date(year, monthIndex + 1, 0).getDate();
          const days = Array.from(
            { length: dayCount },
            (_, day) => new Date(year, monthIndex, day + 1),
          );

          return (
            <div key={`${year}-${monthIndex}`}>
              <div className="mb-5 flex h-8 items-center justify-between">
                {index === 0 ? (
                  <button
                    type="button"
                    aria-label="Previous month"
                    className="rounded-full p-2 hover:bg-gray-100"
                    onClick={() =>
                      setFirstMonth(
                        (current) =>
                          new Date(
                            current.getFullYear(),
                            current.getMonth() - 1,
                            1,
                          ),
                      )
                    }
                  >
                    <ChevronLeft size={16} />
                  </button>
                ) : (
                  <span className="w-8" />
                )}
                <span className="font-medium">
                  {new Intl.DateTimeFormat("en", {
                    month: "long",
                    year: "numeric",
                  }).format(month)}
                </span>
                {index === 1 ? (
                  <button
                    type="button"
                    aria-label="Next month"
                    className="rounded-full p-2 hover:bg-gray-100"
                    onClick={() =>
                      setFirstMonth(
                        (current) =>
                          new Date(
                            current.getFullYear(),
                            current.getMonth() + 1,
                            1,
                          ),
                      )
                    }
                  >
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <span className="w-8" />
                )}
              </div>

              <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500">
                {weekDays.map((day, dayIndex) => (
                  <span key={`${day}-${dayIndex}`} className="py-2">
                    {day}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 text-center">
                {Array.from({ length: firstWeekday }, (_, blank) => (
                  <span key={`blank-${blank}`} className="h-10" />
                ))}
                {days.map((date) => {
                  const isStart = sameDay(range.start, date);
                  const isEnd = sameDay(range.end, date);
                  const unavailable =
                    year === 2026 &&
                    monthIndex === 10 &&
                    [18, 19, 20, 21, 22, 23, 24, 29, 30].includes(
                      date.getDate(),
                    );
                  const isBetween = Boolean(
                    range.start &&
                    range.end &&
                    date > range.start &&
                    date < range.end,
                  );
                  const selected = isStart || isEnd;

                  return (
                    <button
                      type="button"
                      key={date.getDate()}
                      aria-pressed={selected}
                      disabled={unavailable}
                      onClick={() => selectDate(date)}
                      className={`mx-auto my-0.5 grid h-10 w-10 place-items-center rounded-full text-sm transition-colors ${
                        unavailable
                          ? "cursor-not-allowed text-gray-300"
                          : "hover:border hover:border-black"
                      } ${
                        selected
                          ? "bg-[#222222] font-semibold text-white hover:border-[#222222]"
                          : isBetween
                            ? "rounded-none bg-gray-100 text-gray-900"
                            : unavailable
                              ? ""
                              : "text-gray-800"
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-end">
        <button type="button" className="text-sm font-medium underline">
          Clear dates
        </button>
      </div>
    </section>
  );
}
