"use client";

import { useSpotlight } from "./useSpotlight";

type HeroImageProps = {
  src: string;
  alt: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
  const { ref, onPointerMove } = useSpotlight<HTMLElement>();

  return (
    <figure
      ref={ref}
      className="subpage-hero-image"
      data-spotlight=""
      onPointerMove={onPointerMove}
      aria-hidden={alt ? undefined : true}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
    </figure>
  );
}
