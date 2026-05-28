import Image from "next/image";

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
      <Image
        src={src}
        alt={alt}
        fill
        fetchPriority="high"
        loading="eager"
        sizes="(max-width: 960px) calc(100vw - 2rem), 896px"
      />
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
    </figure>
  );
}
