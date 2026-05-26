import Image from "next/image";
import { WorkflowDisclosure } from "./components/WorkflowDisclosure";

const contactHref = "https://x.com/FoglightPrivacy";

const heroRows = [
  ["Public view", "Settlement surface only"],
  ["Customer pool", "Activity behind your boundary"],
  ["Team records", "Keys stay with your team"],
  ["Existing rails", "Supported EVM chains"],
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

const problemCards = [
  {
    title: "Public data becomes competitive intelligence.",
    body: "Balances, counterparties, vendors, payroll, treasury flows, and user behavior are readable by anyone watching the chain.",
  },
  {
    title: "Existing privacy tools push users away.",
    body: "They send your users into systems your team can't touch.",
  },
  {
    title: "Manual disclosure breaks under pressure.",
    body: "When something goes wrong, you can't be reconstructing activity from screenshots or chasing users for cooperation.",
  },
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

function HeroReport() {
  return (
    <div className="artifact artifact-hero" aria-label="Foglight report visual">
      <div className="artifact-top">
        <div className="artifact-scan" aria-hidden="true" />
        <div className="hero-crt-field" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
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

function ProblemDiagram() {
  return (
    <div className="glass-diagram" aria-hidden="true">
      <span className="graph-caption graph-caption-left">public graph</span>
      <span className="graph-caption graph-caption-center">privacy pool</span>
      <span className="graph-caption graph-caption-right">team records</span>
      <svg viewBox="0 0 720 420" fill="none">
        <path className="public-path" d="M86 270 C166 156 245 185 318 236 C403 296 440 96 538 132 C606 156 642 214 680 170" />
        <path className="private-line" d="M318 236 C382 198 449 171 538 132" />
        <circle cx="86" cy="270" r="8" />
        <circle cx="318" cy="236" r="8" />
        <circle cx="538" cy="132" r="8" />
        <circle cx="680" cy="170" r="8" />
      </svg>
      <div className="diagram-node node-one">
        <span>0x7a</span>
        <strong>payroll</strong>
      </div>
      <div className="diagram-node node-two">
        <span>0x2c</span>
        <strong>vendor</strong>
      </div>
      <div className="diagram-node node-three">
        <span>0x91</span>
        <strong>treasury</strong>
      </div>
      <div className="observer-chip">public observer reads every edge</div>
      <div className="privacy-boundary">
        <span>customer privacy pool</span>
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
          <a href="#workflow">Workflow</a>
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
        <div className="problem-grid">
          <div className="problem-lead section-panel light-panel glow-card">
            <div className="panel-label">Problem</div>
            <h2>Public chains turn accounts into glass boxes.</h2>
            <p>
              For consumers and businesses, universal visibility isn&apos;t transparency. It&apos;s exposure, and a reason to choose something else.
            </p>
          </div>
          <div className="problem-diagram-card section-panel graph-panel glow-card">
            <ProblemDiagram />
          </div>
          {problemCards.map((card) => (
            <article className="problem-card glow-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="report-section report-section-dark workflow-section">
        <WorkflowDisclosure />
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
