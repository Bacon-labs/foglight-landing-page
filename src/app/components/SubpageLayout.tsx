import type { ReactNode } from "react";
import HeroImage from "./HeroImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type HeroImage = {
  src: string;
  alt: string;
};

type SubpageLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  headerAction?: ReactNode;
  heroImage?: HeroImage;
  children: ReactNode;
  variant?: "default" | "patterned";
};

export default function SubpageLayout({
  eyebrow,
  title,
  lede,
  headerAction,
  heroImage,
  children,
  variant = "default",
}: SubpageLayoutProps) {
  const mainClass = [
    "subpage",
    "subpage-reveal",
    variant === "patterned" ? "subpage-patterned" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="page-shell">
      <main className={mainClass}>
        {variant === "patterned" ? (
          <div className="subpage-pattern" aria-hidden="true" />
        ) : null}

        <SiteHeader />

        <article className="subpage-article">
          <p className="subpage-eyebrow">
            <span className="subpage-eyebrow-line" aria-hidden="true" />
            {eyebrow}
          </p>
          <div className="subpage-title-row">
            <h1 className="subpage-title">{title}</h1>
            {headerAction ? <div className="subpage-title-action">{headerAction}</div> : null}
          </div>
          {lede ? <p className="subpage-lede">{lede}</p> : null}
          {heroImage ? <HeroImage src={heroImage.src} alt={heroImage.alt} /> : null}
          <div className="subpage-body">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
