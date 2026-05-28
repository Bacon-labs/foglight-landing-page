import Link from "next/link";
import FoglightLogo from "./FoglightLogo";

const contactHref = "https://x.com/FoglightPrivacy";
const emailHref = "mailto:hi@foglight.xyz";

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Foglight footer">
      <div className="site-footer-surface" aria-hidden="true">
        <div className="site-footer-surface-scan" />
      </div>

      <div className="site-footer-inner">
        <div className="site-footer-lead">
          <h2 className="site-footer-heading">
            Building compliant privacy that meets <em>users</em> where they already are.
          </h2>
        </div>

        <div className="site-footer-side">
          <div className="site-footer-brandline">
            <Link className="site-footer-brand" href="/" aria-label="Foglight home">
              <FoglightLogo className="site-footer-brand-logo" />
            </Link>
            <div className="site-footer-brandline-icons">
              <a
                className="site-footer-icon"
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Foglight on X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                className="site-footer-icon"
                href={emailHref}
                aria-label="Email Foglight"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="site-footer-col">
            <Link href="/product">Product</Link>
            <Link href="/about">About</Link>
            <a href={contactHref} target="_blank" rel="noreferrer">
              Talk to us
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-meta-row">
        <span className="site-footer-meta">© {new Date().getFullYear()} Foglight</span>
        <span className="site-footer-meta">
          Icons by{" "}
          <a href="https://isocons.app" target="_blank" rel="noreferrer">
            isocons.app
          </a>
          {" · "}Images by{" "}
          <a href="https://grainrad.com" target="_blank" rel="noreferrer">
            Grainrad.com
          </a>
        </span>
      </div>
    </footer>
  );
}
