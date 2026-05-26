import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const heroRows = [
  ["Report", "Foglight privacy infrastructure"],
  ["Switch", "Public graph → customer privacy pool"],
  ["Built for", "Wallets, neobanks, and chains"],
  ["Outcome", "Privacy without a new L1"],
];

const comparisonRows = [
  {
    label: "Public default",
    current:
      "Your users' balances, counterparties, payroll, vendors, trades, and treasury flows are readable by default.",
    foglight:
      "User activity can move behind a customer-specific privacy pool while settlement stays on supported EVM rails.",
  },
  {
    label: "Privacy tools",
    current: "Existing privacy tools push your users into systems your team can't touch.",
    foglight:
      "Your compliance team keeps the keys. Your team sees the records it needs when it needs them.",
  },
  {
    label: "When something goes wrong",
    current:
      "You can't be reconstructing activity from screenshots or chasing users for cooperation.",
    foglight: "Your team can produce real records through defined viewing workflows.",
  },
  {
    label: "Failure mode",
    current: "A privacy vendor can become a new dependency if records or migration depend on it staying online.",
    foglight:
      "Customer pools are designed so your team retains the ability to produce records and migrate.",
  },
];

const boundaryRows = [
  ["Not a public mixer", "Foglight is built for operators that need customer privacy and records."],
  ["Not a new L1", "It runs on the EVM chains your product already supports."],
  ["Not a compliance guarantee", "Your legal and compliance teams still define the policy."],
  ["Not regulatory theater", "The product boundary is narrow enough to evaluate."],
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  sameAs: ["https://x.com/FoglightPrivacy"],
  description:
    "Privacy infrastructure for regulated crypto products, with customer-specific privacy pools on existing EVM chains.",
};

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ReportMark() {
  return (
    <div className="report-mark" aria-hidden="true">
      <div className="report-mark-word">Foglight</div>
      <Image src="/logo-mark-blue-on-white.png" alt="" width={76} height={76} priority />
    </div>
  );
}

function HeroReport() {
  return (
    <div className="artifact artifact-hero" aria-label="Foglight report visual">
      <div className="artifact-top">
        <div className="artifact-scan" aria-hidden="true" />
        <ReportMark />
        <div className="hero-type-lockup">
          <p className="eyebrow">Privacy infrastructure for regulated operators</p>
          <h1>The privacy of a financial account, on public chains.</h1>
          <p>
            Your users get the privacy they&apos;d expect from a bank account. Your compliance team keeps the keys. Runs on the EVM chains you already support.
          </p>
        </div>
      </div>

      <div className="artifact-grid hero-ledger">
        {heroRows.map(([label, value]) => (
          <div className="artifact-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniGraph() {
  return (
    <div className="mini-graph" aria-hidden="true">
      <svg viewBox="0 0 720 220" fill="none">
        <path d="M43 157 C124 89 188 104 255 139 C347 188 388 51 486 78 C557 98 598 159 680 95" />
        <path className="private-line" d="M255 139 C338 114 414 107 486 78" />
        <circle cx="43" cy="157" r="6" />
        <circle cx="255" cy="139" r="6" />
        <circle cx="486" cy="78" r="6" />
        <circle cx="680" cy="95" r="6" />
      </svg>
      <span className="graph-caption graph-caption-left">public graph</span>
      <span className="graph-caption graph-caption-center">privacy pool</span>
      <span className="graph-caption graph-caption-right">team records</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell text-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <header className="topbar">
        <a href="#top" className="brand-lockup" aria-label="Foglight home">
          <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={38} height={38} priority />
          <span>Foglight</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#comparison">Comparison</a>
          <a href="#boundaries">Boundaries</a>
        </nav>
        <a className="button button-light" href={contactHref} target="_blank" rel="noreferrer">
          Talk to Foglight
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="page-noise" aria-hidden="true" />
        <div className="hero-frame">
          <HeroReport />
          <div className="hero-actions">
            <a className="button button-blue" href={contactHref} target="_blank" rel="noreferrer">
              Talk to Foglight
            </a>
            <a className="button button-ghost" href="#comparison">
              See the comparison
            </a>
          </div>
        </div>
      </section>

      <section id="problem" className="report-section report-section-light">
        <div className="section-artifact problem-artifact">
          <div className="section-panel light-panel">
            <div className="panel-label">Problem</div>
            <h2>Public chains turn accounts into glass boxes.</h2>
            <p>
              For consumers and businesses, universal visibility isn&apos;t transparency. It&apos;s exposure, and a reason to choose something else.
            </p>
          </div>
          <div className="section-panel graph-panel">
            <MiniGraph />
          </div>
        </div>
      </section>

      <section id="comparison" className="report-section report-section-dark">
        <div className="comparison-artifact">
          <div className="comparison-title">
            <p className="eyebrow">Today vs Foglight</p>
            <h2>Today, and with Foglight.</h2>
          </div>
          <div className="comparison-table" role="table" aria-label="Today compared with Foglight">
            <div className="comparison-head" role="row">
              <span />
              <span>Current pattern</span>
              <span>With Foglight</span>
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" role="row" key={row.label}>
                <div className="row-label">{row.label}</div>
                <p>{row.current}</p>
                <p>{row.foglight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="boundaries" className="report-section report-section-light">
        <div className="boundary-artifact artifact">
          <div className="artifact-top boundary-top">
            <div className="artifact-scan" aria-hidden="true" />
            <p className="eyebrow">Clear boundaries</p>
            <h2>Privacy infrastructure, not regulatory theater.</h2>
            <p>
              A narrower product is easier to trust. Foglight gives users privacy from public observers while keeping the records your team needs inside your operating model.
            </p>
          </div>
          <div className="artifact-grid boundary-grid">
            {boundaryRows.map(([label, body]) => (
              <div className="artifact-row" key={label}>
                <span>{label}</span>
                <strong>{body}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="report-section report-section-dark final-section">
        <div className="final-artifact">
          <div className="final-copy">
            <p className="eyebrow">30 minutes. Product and architecture first.</p>
            <h2>Add privacy without sending users off your rails.</h2>
            <p>No deck required.</p>
          </div>
          <a className="button button-blue" href={contactHref} target="_blank" rel="noreferrer">
            Talk to Foglight
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#top" className="brand-lockup compact" aria-label="Foglight home">
          <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={34} height={34} />
          <span>Foglight</span>
        </a>
        <span>Privacy infrastructure for regulated operators.</span>
        <a href={contactHref} target="_blank" rel="noreferrer" aria-label="Foglight on X">
          <XLogo />
          @FoglightPrivacy
        </a>
      </footer>
    </main>
  );
}
