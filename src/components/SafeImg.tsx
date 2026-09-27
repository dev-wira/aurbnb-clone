"use client";

import { useState } from "react";
import { imgUrl, imgFallback } from "@/lib/img";

export default function SafeImg({
  src: localSrc,
  tag,
  lock,
  w = 900,
  h = 700,
  alt,
  className,
}: {
  src?: string;
  tag?: string;
  lock?: number;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={
        localSrc ??
        (failed
          ? imgFallback(lock ?? 0, w, h)
          : imgUrl(tag ?? "", lock ?? 0, w, h))
      }
      alt={alt}
      className={className}
      onError={localSrc ? undefined : () => setFailed(true)}
      loading="lazy"
    />
  );
}
