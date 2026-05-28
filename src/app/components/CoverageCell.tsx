"use client";

import { useSpotlight } from "./useSpotlight";

type CoverageCellProps = {
  index: number;
  icon: string;
  title: string;
  body: string;
};

export default function CoverageCell({ index, icon, title, body }: CoverageCellProps) {
  const { ref, onPointerMove } = useSpotlight<HTMLElement>();

  return (
    <article
      ref={ref}
      className="coverage-cell"
      role="listitem"
      data-spotlight=""
      onPointerMove={onPointerMove}
    >
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
      <span className="coverage-cell-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="coverage-cell-icon" src={icon} alt="" aria-hidden="true" />
      <h3 className="coverage-cell-title">{title}</h3>
      <p className="coverage-cell-body">{body}</p>
    </article>
  );
}
