"use client";

import Link from "next/link";
import { useState, type PointerEvent } from "react";

const contactHref = "https://x.com/FoglightPrivacy";
const sdkCommand = "npx @foglight/sdk init";

type Row = { ts: string; field: string; publicView: string; operatorView: string };

const logRows: Row[] = [
  { ts: "00:01:47.218", field: "tx",           publicView: "0xa65f…c7fb",                 operatorView: "0xa65f…c7fb" },
  { ts: "00:01:47.218", field: "method",       publicView: "0x70521ae9",                  operatorView: "swap(wstETH→USDC)" },
  { ts: "00:01:47.218", field: "pool.id",      publicView: "0x3cff…9b19",                 operatorView: "0x3cff…9b19" },
  { ts: "00:01:47.218", field: "amount0",      publicView: "0.045711629348 wstETH",       operatorView: "0.045711629348 wstETH" },
  { ts: "00:01:47.218", field: "amount1",      publicView: "−201.024500 USDC",            operatorView: "−201.024500 USDC" },
  { ts: "00:01:47.218", field: "sender",       publicView: "foglight.eth",                operatorView: "0x278d…f8D2" },
  { ts: "00:01:47.218", field: "recipient",    publicView: "foglight.eth",                operatorView: "cust:ACME-EU-00482" },
  { ts: "00:01:47.218", field: "viewing_key",  publicView: "—",                           operatorView: "op.acme.eu  scope=tx" },
  { ts: "00:01:47.218", field: "jurisdiction", publicView: "—",                           operatorView: "EU-FR  tier=2" },
  { ts: "00:01:47.218", field: "counterparty", publicView: "foglight.eth",                operatorView: "0x51d7…91f2  kyc.verified" },
  { ts: "00:01:47.301", field: "travel_rule",  publicView: "—",                           operatorView: "0x9f2b…ae04" },
  { ts: "00:01:47.301", field: "audit",        publicView: "—",                           operatorView: "records.exportable" },
];

// Generated from /public/foglight-wordmark-blue.svg via
// scripts/gen-terminal-mark.py — ascii-magic-style dot ramp (· ◦ • ●).
const terminalMark = [
  "         ·◦◦◦◦•◦••••••••◦•◦·          •●◦",
  "      ·◦••••••••••••••••••••          ·••·",
  "    ◦•••••••••••••••••••••••   ◦•••••••••••••••••·",
  "  ·•••••••••••••••••••••••••·  ·◦◦◦◦◦◦••◦◦◦◦◦◦◦◦◦·",
  " ·••••••••••••••••••••••••••·        •••",
  "·•••••••••••••••••••••••••••◦        ••◦",
  "••••••••••••••••••••••••••••◦        ·••◦",
  "••••••••••••••••••••••••••••◦  ·◦◦◦◦◦◦•••◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦·",
  "•••◦◦◦◦•••••••••••••••••••••◦  ◦••••••••••••••••••••••••••• ",
  "•••    ·••••••••••••••••••••◦        ·••◦",
  "◦••◦    ◦•••••••••••••••••••◦        •••·",
  " •••◦    ·◦•••••••••••••••••◦        ••◦",
  "  •••◦·     ·◦◦•••••••••••••·        ◦••·",
  "   ◦•••◦·      ◦••••••••••••   ••••••••••••••••••·",
  "    ·◦•••••◦◦··◦••••••••••••   ·······◦••◦◦◦◦◦◦···",
  "       ·◦••••••••••••••••••◦          ◦••",
  "           ················           ◦◦·",
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-symbol" src="/foglight-wordmark-blue.svg" alt="" />
          <span className="brand-wordmark">Foglight</span>
        </Link>
      </header>

      <div className="screen-frame" aria-hidden="true">
        <div className="screen-glow" />
        <div className="screen-surface" />
      </div>

      <div className="metadata-reveal" aria-hidden="true">
        <div className="metadata-panel">
          <div className="terminal-mark" aria-hidden="true">
            {terminalMark.map((line, i) => (
              <span key={`tm-${i}`}>{line}</span>
            ))}
          </div>

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
                  <span className="col-public">{row.publicView}</span>
                  <span className="col-arrow" aria-hidden="true">→</span>
                  <span className="col-operator">{row.operatorView}</span>
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
                Talk to us
              </a>
              <div className="sdk-install" role="group" aria-label="Foglight SDK install (coming soon)">
                <span className="sdk-prompt">$</span>
                <code className="sdk-cmd">{sdkCommand}</code>
                <span className="sdk-badge">coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
