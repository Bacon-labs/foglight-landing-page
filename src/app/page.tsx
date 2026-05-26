import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const comparisonBefore = [
  {
    title: "Public chains expose customer activity",
    body: "Balances, counterparties, payroll, treasury movement, and trading behavior are visible to anyone watching the chain.",
  },
  {
    title: "New networks fragment distribution",
    body: "Users, liquidity, integrations, and product logic have to move away from the EVM environment the institution already supports.",
  },
  {
    title: "Shared pools import outside risk",
    body: "A regulated customer can depend on activity and counterparties it did not onboard, monitor, or control.",
  },
  {
    title: "Voluntary disclosure breaks under pressure",
    body: "Compliance and legal teams need reliable records without asking users to cooperate after an incident.",
  },
  {
    title: "Relayers add operator exposure",
    body: "Operator-run relayers create legal and infrastructure surface for a product that should fit existing transaction plumbing.",
  },
];

const comparisonAfter = [
  {
    title: "Dedicated pool per institutional customer",
    body: "Each customer operates its own privacy pool, with policy settings matched to its jurisdiction and risk model.",
  },
  {
    title: "Existing EVM apps and liquidity",
    body: "Foglight runs on the chains, assets, wallets, and app surfaces the institution already uses.",
  },
  {
    title: "Customer-held viewing keys",
    body: "The institution controls authorized visibility for compliance, risk, support, and legal workflows.",
  },
  {
    title: "Encrypted traces with logged access",
    body: "Private activity publishes encrypted traces onchain. Authorized decryptions produce records and leave an audit trail.",
  },
  {
    title: "ERC-4337 transaction path",
    body: "Foglight uses existing bundlers and paymasters instead of operating relayers or charging a transaction fee beyond gas.",
  },
];

const productSteps = [
  {
    step: "01",
    title: "Gated entry",
    body: "Plug into the customer's KYC/KYB, sanctions, Travel Rule, and policy systems before users enter private flows.",
  },
  {
    step: "02",
    title: "Private balances and transfers",
    body: "Contracts, SDKs, and APIs let wallets, chains, issuers, and neobanks add private activity to existing EVM apps.",
  },
  {
    step: "03",
    title: "Encrypted onchain traces",
    body: "Transactions publish encrypted traces that stay hidden from the public but can be decrypted by authorized customer teams.",
  },
  {
    step: "04",
    title: "Disclosure workflows",
    body: "Transaction history, balances, source-of-funds reports, and access logs support compliance, risk, support, and legal requests.",
  },
];

const integrationRows = [
  ["Entry policy", "Customer KYC/KYB, sanctions screening, Travel Rule, and risk rules before pool access"],
  ["Execution", "Existing EVM chains, wallets, assets, apps, bundlers, paymasters, and liquidity"],
  ["Pool boundary", "One dedicated privacy pool per institutional customer"],
  ["Viewing authority", "Customer-held viewing keys for authorized compliance, risk, support, and legal teams"],
  ["Records", "Encrypted traces, access logs, transaction histories, balances, and source-of-funds reports"],
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  sameAs: ["https://x.com/FoglightPrivacy"],
  description: "Per-customer privacy-pool infrastructure for regulated EVM wallets, chains, stablecoin issuers, and neobanks.",
};

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function CircleCross() {
  return (
    <span className="comparison-icon comparison-icon-before" aria-hidden="true">
      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-none stroke-current stroke-[2]">
        <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CircleCheck() {
  return (
    <span className="comparison-icon comparison-icon-after" aria-hidden="true">
      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-none stroke-current stroke-[2]">
        <path d="M5 10.4 8.5 14 15.5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function HeroMotionField() {
  return (
    <div className="privacy-motion-stage" aria-hidden="true">
      <div className="privacy-card-shell">
        <div className="privacy-card-topline">
          <span>Foglight privacy plane</span>
          <span>authorized visibility</span>
        </div>

        <div className="privacy-map">
          <div className="privacy-map-grid" />
          <svg className="privacy-flow-lines" viewBox="0 0 640 390" fill="none" preserveAspectRatio="none">
            <path className="privacy-line privacy-line-soft" d="M64 202 C156 108 242 106 322 198 C412 303 512 293 584 184" />
            <path className="privacy-line privacy-line-soft privacy-line-soft-two" d="M88 278 C184 252 225 320 316 260 C405 202 478 206 562 254" />
            <path className="privacy-line privacy-line-active privacy-line-active-one" d="M78 205 C170 116 246 120 323 200 C414 294 506 286 574 188" />
            <path className="privacy-line privacy-line-active privacy-line-active-two" d="M98 278 C188 250 230 314 318 260 C402 205 477 210 552 252" />
          </svg>

          <div className="privacy-node privacy-node-entry">
            <span>KYC gate</span>
            <strong>Policy pass</strong>
          </div>
          <div className="privacy-node privacy-node-apps">
            <span>EVM apps</span>
            <strong>Wallets · DeFi</strong>
          </div>
          <div className="privacy-node privacy-node-reveal">
            <span>View key</span>
            <strong>Customer held</strong>
          </div>

          <div className="privacy-core">
            <div className="privacy-core-rings" />
            <Image src="/logo-mark-white-on-blue.png" alt="" width={88} height={88} className="privacy-core-mark" />
            <div>
              <span>Private pool</span>
              <strong>Encrypted traces</strong>
            </div>
          </div>

          <div className="privacy-packet privacy-packet-one" />
          <div className="privacy-packet privacy-packet-two" />
          <div className="privacy-packet privacy-packet-three" />
        </div>

        <div className="privacy-card-footer">
          <div className="motion-wordmark" />
          <div className="privacy-ledger-feed">
            <span>ENTRY CHECKED</span>
            <span>TRACE ENCRYPTED</span>
            <span>REVEAL LOGGED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section id="top" className="hero-shell relative min-h-[860px] overflow-hidden bg-[var(--navy)] text-white md:min-h-screen">
        <div className="hero-orbit-field" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <HeroMotionField />
        </div>

        <header className="relative z-10 mx-auto flex h-24 w-full max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#top" className="flex items-center gap-3" aria-label="Foglight home">
            <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={44} height={44} className="h-11 w-11 rounded-[14px] shadow-[0_18px_55px_rgba(0,71,255,0.3)]" priority />
            <span className="text-[15px] font-semibold tracking-[-0.035em] text-white">Foglight</span>
          </a>

          <nav className="hidden items-center gap-7 text-[14px] text-white/68 md:flex">
            <a className="transition hover:text-white" href="#product">
              Product
            </a>
            <a className="transition hover:text-white" href="#difference">
              Difference
            </a>
            <a className="transition hover:text-white" href="#scope">
              Scope
            </a>
          </nav>

          <a className="button button-light h-11 px-5 text-sm" href={contactHref} target="_blank" rel="noreferrer">
            Talk to Foglight
          </a>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[92rem] flex-col justify-start px-5 pb-20 pt-24 sm:px-8 md:min-h-[calc(100vh-6rem)] md:justify-center md:pt-12 lg:px-16">
          <div className="max-w-5xl">
            <p className="eyebrow text-[var(--blue-ice)]">Compliant privacy infrastructure</p>
            <h1 className="display-title mt-8 max-w-[13ch] text-balance text-[clamp(4.05rem,8.8vw,9.35rem)] leading-[0.88] tracking-[-0.058em] text-white">
              Private activity on existing EVM rails.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/66 sm:text-xl sm:leading-9">
              Foglight lets wallets, chains, stablecoin issuers, and neobanks offer private balances and transactions without launching a new L1 or giving up authorized compliance visibility.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button button-blue h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
                Talk to Foglight
              </a>
              <a className="button button-ghost h-12 px-6 text-sm" href="#product">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-bottom-strip mt-20 grid gap-3 text-sm text-white/58 md:grid-cols-4">
            {[
              "Dedicated customer pool",
              "Existing EVM apps and liquidity",
              "Customer-held viewing keys",
              "Disclosure and audit workflows",
            ].map((item) => (
              <div key={item} className="border-t border-white/12 pt-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="section-shell bg-[var(--paper)]">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="section-intro mx-auto max-w-4xl text-center">
            <p className="eyebrow text-[var(--blue)]">Product</p>
            <h2 className="display-heading mt-5 text-balance text-[clamp(3.15rem,6.4vw,7rem)] leading-[0.92] tracking-[-0.055em]">
              Per-customer privacy pools for regulated crypto products.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Each institutional customer gets an isolated pool. User activity stays hidden from the public, while the customer keeps the keys and workflows needed to produce records when authorized teams need them.
            </p>
          </div>

          <div id="difference" className="comparison-wrap mt-20">
            <div className="comparison-column comparison-before">
              <div className="flex items-center justify-between gap-4">
                <h3 className="comparison-heading">Status quo</h3>
                <span className="comparison-pill">Today</span>
              </div>
              <div className="mt-10 divide-y divide-black/10">
                {comparisonBefore.map((item) => (
                  <article key={item.title} className="comparison-row">
                    <CircleCross />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="comparison-column comparison-after">
              <div className="absolute inset-0 opacity-70" aria-hidden="true">
                <div className="comparison-orbit comparison-orbit-one" />
                <div className="comparison-orbit comparison-orbit-two" />
              </div>
              <div className="relative z-10 flex items-center justify-between gap-4">
                <h3 className="comparison-heading text-white">With Foglight</h3>
                <span className="comparison-pill comparison-pill-after">Private</span>
              </div>
              <div className="relative z-10 mt-10 divide-y divide-white/10">
                {comparisonAfter.map((item) => (
                  <article key={item.title} className="comparison-row comparison-row-after">
                    <CircleCheck />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scope" className="section-shell bg-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--blue)]">How it works</p>
              <h2 className="display-heading mt-5 text-balance text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.92] tracking-[-0.055em]">
                Privacy that fits the stack customers already run.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] lg:justify-self-end">
              Foglight is designed for teams that already have users, assets, policies, and reporting obligations. Early deployments can start with one customer flow and one chain, then expand once the integration pattern is proven.
            </p>
          </div>

          <div className="product-grid mt-16">
            <div className="product-diagram relative overflow-hidden rounded-[2rem] bg-[var(--navy)] p-6 text-white sm:p-8 lg:col-span-2 lg:row-span-2">
              <div className="product-diagram-bg" aria-hidden="true" />
              <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between">
                <div>
                  <Image src="/logo-symbol-white.png" alt="Foglight symbol" width={899} height={498} className="h-auto w-48 opacity-95" />
                  <h3 className="display-heading mt-12 max-w-2xl text-[clamp(2.7rem,5vw,5.8rem)] leading-[0.9] tracking-[-0.055em] text-white">
                    Hide public leakage. Keep <span className="serif-accent">authorized visibility.</span>
                  </h3>
                </div>
                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                  {["Customer gates entry", "Private flow runs", "Authorized team reveals"].map((label, index) => (
                    <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-[var(--blue-ice)]">0{index + 1}</p>
                      <p className="mt-3 text-sm font-medium text-white/86">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {productSteps.map((item) => (
              <article key={item.title} className="product-card">
                <p className="text-xs font-semibold text-[var(--blue)]">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <p className="eyebrow text-[var(--blue)]">Compliance posture</p>
            <h2 className="display-heading mt-5 text-balance text-[clamp(3rem,5.3vw,6.2rem)] leading-[0.92] tracking-[-0.055em]">
              The institution remains the control plane.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-5 sm:p-7">
            <div className="divide-y divide-black/10">
              {integrationRows.map(([left, right]) => (
                <div key={left} className="grid gap-3 py-5 text-sm sm:grid-cols-[0.8fr_1fr] sm:items-center">
                  <p className="font-semibold tracking-[-0.02em] text-[var(--ink)]">{left}</p>
                  <p className="text-[var(--muted)]">{right}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl bg-[var(--paper)] p-5 text-sm leading-6 text-[var(--muted)]">
              Foglight supplies the pool architecture, circuits, contracts, SDKs, and disclosure surfaces. The institution keeps the customer relationship, onboarding policy, monitoring obligations, and authority to produce records when required.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[92rem] rounded-[2.4rem] bg-[var(--navy)] p-7 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--blue-ice)]">Deployment</p>
              <h2 className="display-heading mt-5 max-w-4xl text-balance text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.055em] text-white">
                Bring customer privacy to the chain your users already use.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
                Foglight is built for regulated wallets, chains, stablecoin issuers, and neobanks that need private customer activity, existing EVM distribution, and a clean path for authorized records.
              </p>
            </div>
            <a className="button button-light h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
              Talk to Foglight
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[var(--paper)] px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-symbol-blue.png" alt="Foglight symbol" width={899} height={498} className="h-6 w-auto" />
            <span>Foglight</span>
          </div>
          <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[var(--ink)] transition hover:border-[var(--blue)] hover:text-[var(--blue)]" href="https://x.com/FoglightPrivacy" target="_blank" rel="noreferrer" aria-label="Foglight on X">
            <XLogo />
          </a>
        </div>
      </footer>
    </main>
  );
}
