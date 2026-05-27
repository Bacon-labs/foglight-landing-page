import Link from "next/link";
import type { ReactNode } from "react";

type SubpageLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
};

const contactHref = "https://x.com/FoglightPrivacy";

export default function SubpageLayout({ eyebrow, title, lede, children }: SubpageLayoutProps) {
  return (
    <main className="subpage">
      <header className="subpage-nav" aria-label="Foglight navigation">
        <Link className="brand-lockup" href="/" aria-label="Foglight home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-symbol" src="/foglight-wordmark-blue.svg" alt="" />
          <span className="brand-wordmark">Foglight</span>
        </Link>
        <nav className="subpage-nav-links" aria-label="Subpages">
          <Link href="/about">About</Link>
          <span aria-hidden="true">·</span>
          <Link href="/product">Product</Link>
          <span aria-hidden="true">·</span>
          <a href={contactHref} target="_blank" rel="noreferrer">
            Talk to us
          </a>
        </nav>
      </header>

      <article className="subpage-article">
        <p className="subpage-eyebrow">
          <span className="subpage-eyebrow-line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="subpage-title">{title}</h1>
        {lede ? <p className="subpage-lede">{lede}</p> : null}
        <div className="subpage-body">{children}</div>

        <div className="subpage-footer">
          <Link href="/" className="subpage-back" aria-label="Back to home">
            ← Back to home
          </Link>
          <a
            className="subpage-cta"
            href={contactHref}
            target="_blank"
            rel="noreferrer"
          >
            Talk to us
          </a>
        </div>
      </article>
    </main>
  );
}
