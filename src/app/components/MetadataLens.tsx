"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type PointerEvent } from "react";

const contactHref = "https://x.com/FoglightPrivacy";
const sdkCommand = "npx @foglight/sdk init";

type Row = { ts: string; field: string; redacted: string; decoded: string };

const logRows: Row[] = [
  { ts: "00:01:47.218", field: "tx", redacted: "0xa65f…c7fb", decoded: "0xa65f…c7fb" },
  { ts: "00:01:47.218", field: "method", redacted: "0x70521ae9", decoded: "swap(wstETH→USDC)" },
  { ts: "00:01:47.218", field: "pool.id", redacted: "0x3cff…9b19", decoded: "0x3cff…9b19" },
  { ts: "00:01:47.218", field: "amount0", redacted: "████████████", decoded: "562.739469 wstETH" },
  { ts: "00:01:47.218", field: "amount1", redacted: "████████████", decoded: "−118.006490 USDC" },
  { ts: "00:01:47.218", field: "sender", redacted: "████████████", decoded: "0x278d…f8D2" },
  { ts: "00:01:47.218", field: "recipient", redacted: "████████████", decoded: "cust:ACME-EU-00482" },
  { ts: "00:01:47.218", field: "viewing_key", redacted: "—", decoded: "op.acme.eu  scope=tx" },
  { ts: "00:01:47.218", field: "jurisdiction", redacted: "—", decoded: "EU-FR  tier=2" },
  { ts: "00:01:47.218", field: "counterparty", redacted: "████████████", decoded: "0x51d7…91f2  kyc.verified" },
  { ts: "00:01:47.301", field: "travel_rule", redacted: "—", decoded: "0x9f2b…ae04" },
  { ts: "00:01:47.301", field: "audit", redacted: "—", decoded: "records.exportable" },
];

export default function MetadataLens() {
  const [lensActive, setLensActive] = useState(false);

  function updateLens(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--lens-x", `${x}px`);
    event.currentTarget.style.setProperty("--lens-y", `${y}px`);
    if (!lensActive) setLensActive(true);
  }

  function hideLens() {
    setLensActive(false);
  }

  return (
    <section
      className={`lens-stage ${lensActive ? "lens-active" : "lens-idle"}`}
      onPointerMove={updateLens}
      onPointerEnter={updateLens}
      onPointerLeave={hideLens}
    >
      <div className="ambient-noise" aria-hidden="true" />

      <header className="hero-nav" aria-label="Foglight navigation">
        <Link className="brand-lockup" href="/" aria-label="Foglight home">
          <Image src="/logo-symbol-blue.png" alt="" width={34} height={34} priority />
          <span>Foglight</span>
        </Link>
      </header>

      <div className="screen-frame" aria-hidden="true">
        <div className="screen-glow" />
        <div className="screen-surface" />
      </div>

      <div className="metadata-reveal" aria-hidden="true">
        <div className="metadata-panel">
          <div className="metadata-topline">
            <span>foglight · viewing-key trace</span>
            <span>uniswap-v4 · pool 0x3cff…9b19</span>
          </div>
          <div className="log-table">
            <div className="log-header">
              <span className="col-ts">time</span>
              <span className="col-field">field</span>
              <span className="col-public">public chain view</span>
              <span className="col-arrow" aria-hidden="true">→</span>
              <span className="col-operator">operator view · viewing key</span>
            </div>
            <div className="log-body">
              {logRows.map((row, i) => (
                <div className="log-row" key={`r-${i}`}>
                  <span className="col-ts">{row.ts}</span>
                  <span className="col-field">{row.field}</span>
                  <span className="col-public">{row.redacted}</span>
                  <span className="col-arrow" aria-hidden="true">→</span>
                  <span className="col-operator">{row.decoded}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-block">
        <div className="hero-block-top">
          <p className="hero-kicker">
            <span className="hero-kicker-line" aria-hidden="true" />
            Compliant privacy infrastructure for existing EVM chains
          </p>
        </div>
        <div className="hero-block-main">
          <h1 className="hero-title">
            The privacy of a financial <em>account</em>,<br />on public chains.
          </h1>
          <div className="hero-block-side">
            <p className="hero-subhead">
              Your users get the privacy they&apos;d expect from a bank account. Your compliance team keeps the keys. Runs on the EVM chains you already support.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">
                Talk to Foglight
              </a>
              <div className="sdk-install" role="group" aria-label="Foglight SDK install (coming soon)">
                <span className="sdk-prompt">$</span>
                <code className="sdk-cmd">{sdkCommand}</code>
                <span className="sdk-badge">coming soon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-block-rule" aria-hidden="true" />
        <footer className="hero-footer">
          <a href={contactHref} target="_blank" rel="noreferrer">@FoglightPrivacy</a>
          <span>Per-customer privacy pools.</span>
          <span>Operator-held viewing keys.</span>
        </footer>
      </div>
    </section>
  );
}
