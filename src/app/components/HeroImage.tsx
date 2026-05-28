"use client";

import { ImageGeneration } from "img-fx";

type HeroImageProps = {
  src: string;
  alt: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <figure
      className="subpage-hero-image"
      data-spotlight=""
      aria-hidden={alt ? undefined : true}
    >
      <ImageGeneration
        preset="pixels-organic"
        theme="dark"
        images={src}
        autoReveal
        revealDelayRange={[1.6, 3.2]}
        revealHoldMs={[3500, 5500]}
        revealFadeOutMs={420}
        className="subpage-hero-fx"
      >
        <div
          className="subpage-hero-fx-target"
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
        />
      </ImageGeneration>
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
    </figure>
  );
}
