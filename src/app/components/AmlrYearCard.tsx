"use client";

import { useSpotlight } from "./useSpotlight";

type AmlrYearCardProps = {
  obligations: string[];
};

export default function AmlrYearCard({ obligations }: AmlrYearCardProps) {
  const { ref, onPointerMove } = useSpotlight<HTMLElement>();

  return (
    <article
      ref={ref}
      className="amlr-card"
      data-spotlight=""
      onPointerMove={onPointerMove}
    >
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />

      <div className="amlr-card-anchor">
        <span className="amlr-year-badge">
          <span className="amlr-year-dot" aria-hidden="true" />
          EU · Regulation
        </span>
        <span className="amlr-year-tag" aria-label="Year 2027">
          <span className="amlr-year-digit">2</span>
          <span className="amlr-year-digit">0</span>
          <span className="amlr-year-digit">2</span>
          <span className="amlr-year-digit">7</span>
        </span>
        <p className="amlr-year-caption">
          The EU&apos;s Anti-Money Laundering Regulation comes into effect.
        </p>
        <div className="amlr-year-divider" aria-hidden="true" />
        <p className="amlr-aside">
          Most privacy systems are not designed for AMLR-style institutional obligations.
          Foglight is built around them from day one.
        </p>
      </div>

      <div className="amlr-card-side">
        <p className="amlr-card-side-lead">
          Regulated crypto businesses will be required to support:
        </p>
        <ul className="amlr-list">
          {obligations.map((item, index) => (
            <li key={item}>
              <span className="amlr-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="amlr-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
