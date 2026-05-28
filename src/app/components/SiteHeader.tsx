import Link from "next/link";
import FoglightLogo from "./FoglightLogo";

const contactHref = "https://x.com/FoglightPrivacy";

type SiteHeaderProps = {
  variant?: "default" | "dark";
};

export default function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const className = ["site-header", variant === "dark" ? "site-header-dark" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className} aria-label="Foglight navigation">
      <Link className="brand-lockup" href="/" aria-label="Foglight home">
        <FoglightLogo className="brand-symbol-logo" />
        <span className="brand-wordmark">Foglight</span>
      </Link>
      <div className="site-header-right">
        <nav className="site-header-nav" aria-label="Subpages">
          <Link href="/product">Product</Link>
          <span aria-hidden="true">·</span>
          <Link href="/about">About</Link>
        </nav>
        <a
          className="nav-x-link"
          href={contactHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Foglight on X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
