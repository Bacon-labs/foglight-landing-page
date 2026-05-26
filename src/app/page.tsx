import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const problemCards = [
  {
    title: "Everything is readable.",
    body: "Balances, counterparties, payroll, vendor payments, trades, and treasury flows are visible to competitors, analysts, and anyone watching.",
  },
  {
    title: "Privacy usually means leaving your rails.",
    body: "Most privacy products send users into a separate app, chain, or flow your team cannot operate.",
  },
  {
    title: "Manual disclosure breaks under pressure.",
    body: "When support, risk, or compliance asks what happened, screenshots and user cooperation are not enough.",
  },
];

const comparisonRows = [
  {
    label: "User privacy",
    current: "Customer activity is public or pushed into a separate privacy flow.",
    foglight:
      "Per-customer pools give users account privacy while settlement stays on supported EVM chains.",
  },
  {
    label: "Operator control",
    current: "Risk and compliance teams rely on manual reconstruction when something needs review.",
    foglight:
      "Operator-held viewing keys and records workflows keep review inside your stack.",
  },
  {
    label: "Product surface",
    current: "Privacy becomes another app, another chain, or another workflow for users to learn.",
    foglight:
      "Foglight runs behind the wallet, neobank, chain, or payment product you already ship.",
  },
  {
    label: "Vendor risk",
    current: "If your privacy vendor disappears, can you still operate?",
    foglight:
      "Yes. Customer pools are designed so your team retains records and migration paths even if Foglight is gone.",
  },
];

const boundaryRows = [
  "Not a public mixer.",
  "Not a new L1 or L2.",
  "Not a compliance guarantee.",
  "Not a claim of regulatory approval.",
  "Not a way for users to hide protocol activity from authorized operator visibility.",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  sameAs: ["https://x.com/FoglightPrivacy"],
  description:
    "Per-customer privacy pools for regulated EVM products, with operator-held records and migration paths.",
};

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function HeroReport() {
  return (
    <div className="artifact artifact-hero" aria-label="Foglight report visual">
      <div className="artifact-top">
        <div className="artifact-scan" aria-hidden="true" />
        <div className="hero-type-lockup">
          <p className="eyebrow">Compliant Privacy Infrastructure for Existing EVM Chains</p>
          <h1>The privacy of a financial account, on public chains.</h1>
          <p>
            Your users get the privacy they&apos;d expect from a bank account. Your compliance team keeps the keys. Runs on the EVM chains you already support.
          </p>
        </div>
      </div>

      <div className="artifact-grid hero-audience">
        <p>Per-customer privacy pools for wallets, neobanks, chains, and payment apps.</p>
      </div>
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

      <div className="hero-problem-transition" aria-hidden="true" />

      <section id="problem" className="report-section report-section-light problem-section">
        <div className="problem-grid">
          <div className="problem-lead section-panel light-panel glow-card">
            <h2>Public chains turn accounts into glass boxes.</h2>
            <p>
              For regulated wallets, chains, and payment apps, public-by-default activity leaks customer behavior and business data. Foglight adds per-customer privacy pools without changing your EVM rails.
            </p>
          </div>
          {problemCards.map((card, index) => (
            <article className={`problem-card problem-card-${index + 1} glow-card`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="report-section report-section-dark">
        <div className="comparison-artifact">
          <div className="comparison-title">
            <p className="eyebrow">Today vs Foglight</p>
            <h2>What changes when you add Foglight.</h2>
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
            <h2>What Foglight is not.</h2>
            <p>
              Foglight has a narrow job: keep customer activity private from public observers while preserving operator-held access to the records a regulated product needs.
            </p>
          </div>
          <div className="artifact-grid boundary-grid">
            {boundaryRows.map((line) => (
              <div className="artifact-row boundary-line" key={line}>
                <strong>{line}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="report-section report-section-dark final-section">
        <div className="final-artifact">
          <div className="final-copy">
            <h2>Bring account privacy to your EVM product.</h2>
            <p>
              If you run a wallet, neobank, stablecoin app, exchange, chain, or payment platform, we&apos;ll map how Foglight fits: customer pools, viewing keys, records workflow, and fallback plan.
            </p>
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
        <span>Per-customer privacy pools for regulated EVM products.</span>
        <a href={contactHref} target="_blank" rel="noreferrer" aria-label="Foglight on X">
          <XLogo />
          @FoglightPrivacy
        </a>
      </footer>
    </main>
  );
}
