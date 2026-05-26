"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";

const contactHref = "https://x.com/FoglightPrivacy";

const metadataRows = [
  ["TX STREAM", "0x7f29...c10e · customer_pool_1842 · settlement pending"],
  ["CHAIN", "supported EVM rails · no new L1 · no new L2"],
  ["POOL", "per-customer privacy pool · isolated activity set"],
  ["VIEWING KEY", "operator-held · scoped review · exportable records"],
  ["PUBLIC VIEW", "balance graph hidden · counterparties hidden · timing softened"],
  ["OPERATOR VIEW", "authorized visibility for support, risk, and compliance"],
  ["FALLBACK", "records workflow preserved · migration path planned"],
  ["BOUNDARY", "not a mixer · not a compliance guarantee · not regulatory approval"],
];

const eventLines = [
  "block=23841992  pool=0x9E...A4  proof=accepted",
  "viewer=compliance_ops  scope=customer_1842  status=granted",
  "public_graph=redacted  operator_record=available",
  "counterparty_hash=0x51d7...91f2  amount_commitment=sealed",
  "fallback_route=export_records -> migrate_pool -> resume_settlement",
];

export default function MetadataLens() {
  function updateLens(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--lens-x", `${x}px`);
    event.currentTarget.style.setProperty("--lens-y", `${y}px`);
    event.currentTarget.style.setProperty("--lens-opacity", "1");
  }

  function hideLens(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--lens-opacity", "0.72");
  }

  return (
    <section
      className="lens-stage"
      onPointerMove={updateLens}
      onPointerEnter={updateLens}
      onPointerLeave={hideLens}
    >
      <div className="ambient-noise" aria-hidden="true" />

      <header className="hero-nav" aria-label="Foglight navigation">
        <Link className="brand-lockup" href="/" aria-label="Foglight home">
          <Image src="/logo-symbol-blue.png" alt="" width={38} height={38} priority />
          <span>Foglight</span>
        </Link>
        <a className="nav-cta" href={contactHref} target="_blank" rel="noreferrer">
          Talk to Foglight
        </a>
      </header>

      <div className="hero-copy outside-copy">
        <p className="hero-kicker">Compliant Privacy Infrastructure for Existing EVM Chains</p>
        <h1>The privacy of a financial account, on public chains.</h1>
        <p className="hero-subhead">
          Your users get the privacy they&apos;d expect from a bank account. Your compliance team keeps the keys. Runs on the EVM chains you already support.
        </p>
      </div>

      <div className="screen-frame" aria-hidden="true">
        <div className="screen-glow" />
        <div className="screen-surface">
          <div className="screen-copy">
            <p>Per-customer privacy pools for regulated EVM products.</p>
            <span>Move the cursor to inspect hidden transaction metadata.</span>
          </div>
        </div>
      </div>

      <div className="metadata-reveal" aria-hidden="true">
        <div className="metadata-panel">
          <div className="metadata-topline">
            <span>FOGLIGHT PRIVATE ACTIVITY LAYER</span>
            <span>LIVE INSPECTION</span>
          </div>
          <div className="metadata-grid">
            {metadataRows.map(([label, value]) => (
              <div className="metadata-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="event-log">
            {eventLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div className="lens-log-stack">
            {eventLines.concat(eventLines.slice(0, 2)).map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="lens-ring" aria-hidden="true" />

      <div className="hero-actions">
        <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">
          Talk to Foglight
        </a>
        <a className="button button-secondary" href="/foglight-onepager-preseed.pdf" target="_blank" rel="noreferrer">
          Open one-pager
        </a>
      </div>

      <footer className="hero-footer">
        <a href={contactHref} target="_blank" rel="noreferrer">@FoglightPrivacy</a>
        <span>Per-customer privacy pools.</span>
        <span>Operator-held viewing keys.</span>
      </footer>
    </section>
  );
}
