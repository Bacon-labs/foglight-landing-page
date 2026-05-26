import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const reportRows = [
  ["Model", "Dedicated privacy pool per customer"],
  ["Public view", "Settlement surface only"],
  ["Authorized view", "Counterparty · amount · access logged"],
  ["Deployment", "Existing EVM chains and product surfaces"],
];

const problemRows = [
  {
    label: "Public default",
    old: "Balances, counterparties, payroll, vendors, trades, and treasury flows are readable by default.",
    foglight: "User activity can move behind a customer-specific privacy pool while settlement remains on supported EVM rails.",
  },
  {
    label: "Operator control",
    old: "Privacy tools usually move users into systems the operator cannot supervise.",
    foglight: "The operator keeps authorized visibility workflows for compliance, risk, support, legal requests, and records.",
  },
  {
    label: "Records",
    old: "Teams reconstruct activity from screenshots, exports, or user cooperation after the fact.",
    foglight: "Authorized teams can produce disclosure records through defined viewing workflows.",
  },
];

const systemCells = [
  ["01", "Customer pool", "A separate privacy pool for each regulated operator."],
  ["02", "Private activity", "Users get privacy from public observers on supported EVM rails."],
  ["03", "View authority", "Internal teams keep controlled visibility when a record is required."],
  ["04", "Clear boundary", "Public mixer, new-chain, and regulatory-approval claims are outside the surface."],
];

const operators = [
  "Wallets",
  "Chains",
  "Stablecoin issuers",
  "Neobanks",
  "Exchanges",
  "Payment platforms",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  sameAs: ["https://x.com/FoglightPrivacy"],
  description:
    "Privacy infrastructure for regulated EVM products, with dedicated customer pools and authorized visibility workflows.",
};

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PrivacyMap() {
  const nodes = [
    ["wallet", "19%", "67%"],
    ["kyc", "36%", "55%"],
    ["pool", "54%", "42%"],
    ["view key", "72%", "31%"],
    ["record", "81%", "55%"],
    ["observer", "47%", "77%"],
  ];

  return (
    <div className="privacy-map" aria-hidden="true">
      <div className="map-dust" />
      <svg className="map-lines" viewBox="0 0 720 430" fill="none">
        <path d="M135 289 C222 238 265 237 386 181 C480 137 526 120 585 103" />
        <path d="M259 237 C344 265 448 232 584 103" />
        <path d="M386 181 C471 229 522 237 619 236" />
        <path className="line-muted" d="M337 331 C381 285 415 241 386 181" />
      </svg>
      {nodes.map(([label, left, top]) => (
        <span className={`map-node map-node-${label.replace(" ", "-")}`} style={{ left, top }} key={label}>
          <i />
          {label}
        </span>
      ))}
    </div>
  );
}

function ReportCard() {
  return (
    <div className="report-card" aria-label="Foglight privacy report visual">
      <div className="report-scan" />
      <div className="report-top">
        <div className="report-wordmark" aria-hidden="true" />
        <Image src="/logo-mark-blue-on-white.png" alt="" width={62} height={62} className="report-seal" priority />
      </div>
      <div className="report-grid">
        {reportRows.map(([label, value]) => (
          <div className="report-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="report-footer">
        <span>Foglight report</span>
        <span>Existing EVM rails</span>
        <span>2026</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section id="top" className="hero-brutalist">
        <div className="noise-field" aria-hidden="true" />
        <header className="topbar">
          <a href="#top" className="brand-lockup" aria-label="Foglight home">
            <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={38} height={38} priority />
            <span>Foglight</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#problem">Problem</a>
            <a href="#model">Model</a>
            <a href="#comparison">Comparison</a>
          </nav>
          <a className="button button-dark" href={contactHref} target="_blank" rel="noreferrer">
            Talk to Foglight
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Compliant privacy infrastructure for existing EVM chains</p>
            <h1 className="hero-title">Private flows on public chains.</h1>
            <p className="hero-lede">
              Foglight gives regulated wallets, chains, stablecoin issuers, and neobanks their own privacy pool on supported EVM rails. Users get privacy from public observers. Operators keep authorized visibility.
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href={contactHref} target="_blank" rel="noreferrer">
                Talk to Foglight
              </a>
              <a className="button button-outline" href="#model">
                See the model
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <PrivacyMap />
            <ReportCard />
          </div>
        </div>

        <div className="hero-index" aria-label="Product summary">
          <div>
            <span>Report</span>
            <strong>Private activity</strong>
          </div>
          <div>
            <span>Switch</span>
            <strong>Public graph → authorized view</strong>
          </div>
          <div>
            <span>Outcome</span>
            <strong>Customer privacy without a new chain</strong>
          </div>
        </div>
      </section>

      <section id="problem" className="split-section">
        <div className="section-kicker">The default is exposure</div>
        <div className="split-copy">
          <h2>Public chains turn accounts into glass boxes.</h2>
          <p>
            Onchain transparency is useful for settlement. It is a bad default for customer relationships, business flows, payroll, vendor payments, treasury movement, and regulated consumer products.
          </p>
        </div>
        <div className="line-graph" aria-hidden="true">
          <svg viewBox="0 0 620 360" fill="none">
            <path d="M92 280 L188 164 L284 216 L396 94 L520 132" />
            <circle cx="92" cy="280" r="8" />
            <circle cx="188" cy="164" r="8" />
            <circle cx="284" cy="216" r="8" />
            <circle cx="396" cy="94" r="8" />
            <circle cx="520" cy="132" r="8" />
          </svg>
          <span className="graph-label graph-label-one">wallet</span>
          <span className="graph-label graph-label-two">pool</span>
          <span className="graph-label graph-label-three">authorized view</span>
        </div>
      </section>

      <section id="model" className="system-table-section">
        <div className="table-heading">
          <p className="eyebrow">Foglight model</p>
          <h2>One pool per customer. One defined visibility surface.</h2>
        </div>
        <div className="system-table">
          {systemCells.map(([number, title, body]) => (
            <article className="system-cell" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="comparison-section">
        <div className="section-kicker">Today vs Foglight</div>
        <h2>What changes when privacy is designed for regulated operators.</h2>
        <div className="comparison-table">
          <div className="comparison-head">
            <span>Current pattern</span>
            <span>With Foglight</span>
          </div>
          {problemRows.map((row) => (
            <div className="comparison-row" key={row.label}>
              <div className="row-label">{row.label}</div>
              <p>{row.old}</p>
              <p>{row.foglight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="operator-section">
        <div>
          <p className="eyebrow">Built for regulated crypto products</p>
          <h2>Privacy becomes a product primitive instead of an escape hatch.</h2>
        </div>
        <div className="operator-grid">
          {operators.map((operator) => (
            <span key={operator}>{operator}</span>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-wordmark" aria-hidden="true" />
        <p className="eyebrow">Private by default where the public has no reason to see</p>
        <h2>Give users privacy from observers without losing the records your team needs.</h2>
        <a className="button button-light" href={contactHref} target="_blank" rel="noreferrer">
          Talk to Foglight
        </a>
      </section>

      <footer className="site-footer">
        <a href="#top" className="brand-lockup dark" aria-label="Foglight home">
          <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={34} height={34} />
          <span>Foglight</span>
        </a>
        <span>Compliant privacy infrastructure for existing EVM chains.</span>
        <a href={contactHref} target="_blank" rel="noreferrer" aria-label="Foglight on X">
          <XLogo />
          @FoglightPrivacy
        </a>
      </footer>
    </main>
  );
}
