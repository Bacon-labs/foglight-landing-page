import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const problemCards = [
  {
    title: "Everything is readable",
    body: "Balances, counterparties, payroll transfers, vendor payments, trades, and treasury movement can be inspected by anyone with a block explorer.",
  },
  {
    title: "Privacy usually means leaving your rails",
    body: "Most privacy tools push users into systems the operator cannot supervise, or into new chains, app surfaces, and liquidity paths.",
  },
  {
    title: "Manual disclosure breaks under pressure",
    body: "Risk, support, and legal teams need records they can produce through controlled workflows, not screenshots, exports, or user cooperation after an incident.",
  },
];

const mechanismCards = [
  {
    kicker: "01",
    title: "Dedicated customer pool",
    body: "Each Foglight customer gets its own privacy pool, separated from other operators and designed around its own product surface.",
  },
  {
    kicker: "02",
    title: "Private user activity",
    body: "Users can hold and move assets without broadcasting their full activity graph to public chain observers.",
  },
  {
    kicker: "03",
    title: "Authorized visibility",
    body: "Viewing and disclosure workflows preserve the visibility needed for compliance, risk review, support, legal requests, and record production.",
  },
  {
    kicker: "04",
    title: "Existing EVM rails",
    body: "Foglight is built for the EVM chains, assets, wallets, and app surfaces regulated crypto teams already operate.",
  },
];

const comparisonRows = [
  {
    today: "Every user balance, counterparty, and transfer is publicly readable.",
    foglight: "User activity is designed to stay private from public observers and visible through authorized workflows.",
  },
  {
    today: "Privacy usually means sending users to systems your team cannot supervise.",
    foglight: "Each customer gets a dedicated privacy pool with operator-authorized visibility.",
  },
  {
    today: "Compliance teams reconstruct activity from screenshots, exports, or offchain records.",
    foglight: "Authorized teams can produce records through viewing and disclosure workflows.",
  },
  {
    today: "Adding privacy often means new chains, new app surfaces, or separate liquidity paths.",
    foglight: "Privacy is built for the EVM chains and product surfaces your team already supports.",
  },
  {
    today: "Generic privacy tools create unclear operational and legal surfaces.",
    foglight: "The operator keeps a defined compliance, support, risk, and disclosure workflow.",
  },
];

const operatorCards = [
  ["Wallets", "Protect user balances, transfers, and counterparties from public observers."],
  ["Stablecoin issuers", "Support private customer activity without forcing users into external privacy systems."],
  ["Exchanges and neobanks", "Give customers privacy while preserving authorized internal visibility."],
  ["Payment platforms", "Handle commercial flows without exposing counterparties, vendors, and transaction history to the public."],
  ["Chains", "Offer privacy infrastructure to regulated applications in the ecosystem."],
];

const boundaries = [
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
  description: "Privacy infrastructure for regulated EVM products, with dedicated customer pools and authorized visibility workflows.",
};

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function HeroGraphic() {
  const ledger = ["0x8A2F", "USDC", "0x41B9", "···", "ETH", "0x90C1", "PAY", "0xEF52"];

  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="chain-rail chain-rail-top">
        <div className="ledger-stream">
          {[...ledger, ...ledger, ...ledger].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="chain-rail chain-rail-bottom">
        <div className="ledger-stream ledger-stream-reverse">
          {[...ledger.slice().reverse(), ...ledger, ...ledger.slice().reverse()].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="privacy-pool">
        <div className="pool-fog" />
        <svg className="pool-paths" viewBox="0 0 560 340" fill="none">
          <path className="path path-muted" d="M46 174 C142 88 252 92 326 170 C392 239 466 244 520 188" />
          <path className="path path-muted path-muted-two" d="M54 238 C156 214 216 272 306 220 C396 168 456 168 512 218" />
          <path className="path path-reveal" d="M52 174 C145 91 250 96 326 170 C392 237 466 240 516 188" />
        </svg>
        <div className="sealed-block sealed-block-one" />
        <div className="sealed-block sealed-block-two" />
        <div className="sealed-block sealed-block-three" />
      </div>

      <div className="foglight-aperture">
        <span className="aperture-ring aperture-ring-one" />
        <span className="aperture-ring aperture-ring-two" />
        <Image src="/logo-mark-white-on-blue.png" alt="" width={104} height={104} className="aperture-mark" priority />
      </div>

      <div className="authorized-beam" />
      <div className="authorized-card">
        <span>Authorized view</span>
        <strong>Record produced</strong>
        <p>Counterparty · amount · access logged</p>
      </div>
      <div className="public-card">
        <span>Public observer</span>
        <strong>Encrypted surface</strong>
        <p>Activity graph hidden</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section id="top" className="hero-shell relative overflow-hidden text-[var(--ivory)]">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-gold" />
          <div className="hero-wordmark" />
        </div>

        <header className="relative z-20 mx-auto flex h-24 w-full max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#top" className="brand-lockup" aria-label="Foglight home">
            <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={44} height={44} className="h-11 w-11 rounded-[14px] shadow-[0_18px_55px_rgba(0,71,255,0.35)]" priority />
            <span>Foglight</span>
          </a>

          <nav className="hidden items-center gap-7 text-[14px] text-[var(--ivory-muted)] md:flex">
            <a className="transition hover:text-[var(--ivory)]" href="#problem">
              Problem
            </a>
            <a className="transition hover:text-[var(--ivory)]" href="#model">
              Model
            </a>
            <a className="transition hover:text-[var(--ivory)]" href="#comparison">
              Comparison
            </a>
          </nav>

          <a className="button button-light h-11 px-5 text-sm" href={contactHref} target="_blank" rel="noreferrer">
            Talk to Foglight
          </a>
        </header>

        <div className="hero-stage relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-[92rem] gap-12 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-16">
          <div className="hero-copy">
            <p className="eyebrow text-[var(--blue-ice)]">Privacy infrastructure for regulated EVM products</p>
            <h1 className="display-title mt-7 text-balance">
              The <span className="serif-accent">privacy</span> of a financial account, on public chains.
            </h1>
            <p className="hero-subcopy">
              Foglight gives each regulated operator its own dedicated privacy pool on the EVM chains it already supports. Users get privacy from public observers. Compliance, risk, and support teams keep authorized visibility.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button button-primary h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
                Talk to Foglight
              </a>
              <a className="button button-ghost h-12 px-6 text-sm" href="#model">
                See how it works
              </a>
            </div>
            <p className="audience-line">Built for wallets, chains, stablecoin issuers, neobanks, exchanges, and payment platforms.</p>
          </div>

          <HeroGraphic />
        </div>
      </section>

      <section id="problem" className="section-shell bg-[var(--paper)]">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="max-w-5xl">
            <p className="eyebrow text-[var(--blue)]">The problem</p>
            <h2 className="display-heading mt-5 text-balance">Public chains turn accounts into glass boxes.</h2>
            <p className="section-lede mt-7 max-w-3xl">
              For consumers and businesses, universal visibility is not useful transparency. It is exposure. Regulated operators need privacy without sending users into systems the operator cannot supervise.
            </p>
          </div>

          <div className="problem-grid mt-14">
            {problemCards.map((card) => (
              <article className="light-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="section-shell bg-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="section-intro mx-auto max-w-5xl text-center">
            <p className="eyebrow text-[var(--blue)]">The model</p>
            <h2 className="display-heading mt-5 text-balance">Dedicated privacy pools for regulated products.</h2>
            <p className="section-lede mx-auto mt-7 max-w-3xl">
              Each customer gets a separate privacy pool for its own product, users, and policies. Public observers see the settlement surface. Authorized teams keep the workflows needed to produce records when required.
            </p>
          </div>

          <div className="mechanism-grid mt-16">
            {mechanismCards.map((card) => (
              <article className="mechanism-card" key={card.title}>
                <p>{card.kicker}</p>
                <h3>{card.title}</h3>
                <span>{card.body}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-16">
          <div className="sticky-copy">
            <p className="eyebrow text-[var(--blue)]">How it works</p>
            <h2 className="display-heading mt-5 text-balance">Privacy from the public. Visibility for authorized teams.</h2>
          </div>
          <div className="explain-panel">
            <p>
              Foglight is built around a simple boundary: user activity should not be public by default, and the operator should still have a controlled path to the records its workflows require.
            </p>
            <p>
              Users transact inside the customer’s dedicated pool. Balances, counterparties, and transfer history are designed to stay hidden from public observers. Authorized viewing and disclosure workflows let compliance, risk, support, and legal teams see what they are permitted to see.
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="section-shell bg-[var(--ink)] text-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="max-w-5xl">
            <p className="eyebrow text-[var(--blue-ice)]">Today vs Foglight</p>
            <h2 className="display-heading mt-5 text-balance text-white">What changes when privacy is built for regulated operators.</h2>
          </div>

          <div className="comparison-table mt-14">
            <div className="comparison-head comparison-cell-muted">Today</div>
            <div className="comparison-head comparison-cell-active">With Foglight</div>
            {comparisonRows.map((row) => (
              <article className="comparison-pair" key={row.today}>
                <div className="comparison-cell comparison-cell-muted">{row.today}</div>
                <div className="comparison-cell comparison-cell-active">{row.foglight}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="section-shell bg-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--blue)]">Built for</p>
              <h2 className="display-heading mt-5 text-balance">Regulated crypto operators that need user privacy without losing controlled visibility.</h2>
            </div>
            <p className="section-lede max-w-2xl lg:justify-self-end">
              Foglight is for teams that already operate in regulated environments and want private customer activity on the rails they already support.
            </p>
          </div>

          <div className="operator-grid mt-14">
            {operatorCards.map(([title, body]) => (
              <article className="operator-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-16">
          <div>
            <p className="eyebrow text-[var(--blue)]">Clear boundaries</p>
            <h2 className="display-heading mt-5 text-balance">Privacy infrastructure, not regulatory theater.</h2>
          </div>
          <div className="boundary-panel">
            {boundaries.map((item) => (
              <div key={item} className="boundary-row">
                <span />
                <p>{item}</p>
              </div>
            ))}
            <p className="boundary-note">
              Foglight gives regulated teams a way to offer user privacy while preserving the visibility their workflows require.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 sm:px-8 lg:px-16">
        <div className="final-cta mx-auto max-w-[92rem]">
          <div>
            <p className="eyebrow text-[var(--blue-ice)]">Foglight</p>
            <h2 className="display-heading mt-5 max-w-5xl text-balance text-white">Add privacy without sending users off your rails.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              If you are building a wallet, chain, stablecoin product, exchange, neobank, or payment platform, talk to Foglight about the privacy workflow your users and compliance team actually need.
            </p>
            <p className="mt-5 text-sm font-semibold text-white/46">30 minutes. Product and architecture first. No deck required.</p>
          </div>
          <a className="button button-light h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
            Talk to Foglight
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[var(--paper)] px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/foglight-wordmark-blue.svg" alt="Foglight" width={180} height={42} className="h-6 w-auto" />
          </div>
          <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[var(--ink)] transition hover:border-[var(--blue)] hover:text-[var(--blue)]" href="https://x.com/FoglightPrivacy" target="_blank" rel="noreferrer" aria-label="Foglight on X">
            <XLogo />
          </a>
        </div>
      </footer>
    </main>
  );
}
