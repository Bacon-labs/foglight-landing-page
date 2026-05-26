import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const audiences = ["Wallet providers", "EVM chains", "Neobanks", "E-money issuers"];

const problemPoints = [
  "Assets, transactions, counterparties, balances, and trading flows are visible by default.",
  "Monitoring tools can inspect public activity, but they do not make regulated customer activity private.",
  "New privacy networks fragment liquidity. Shared pools create contamination risk. Voluntary disclosure does not match institutional workflows.",
];

const howItWorks = [
  {
    title: "Per-customer pools",
    body: "Each customer gets isolated privacy pools with policy settings tailored to jurisdiction and risk. No shared-pool contamination.",
  },
  {
    title: "Compliance integrations",
    body: "Designed to plug into existing KYC, sanctions, Travel Rule, and policy engines, including Chainalysis, TRM, and Elliptic-style workflows.",
  },
  {
    title: "Customer-held viewing keys",
    body: "Authorized teams can disclose transaction history, balances, and source-of-funds reports, with access logged for audit.",
  },
  {
    title: "EVM-native",
    body: "Deploys on existing EVM chains and uses ERC-4337 bundlers and paymasters instead of Foglight-operated relayers.",
  },
  {
    title: "Built for security",
    body: "Noir circuits, UltraHonk/Barretenberg proving, no trusted setup, and a Lean/Verity path for critical formal verification.",
  },
];

const whyNow = [
  {
    title: "Regulation",
    body: "EU AMLR applies in 2027, pushing regulated crypto businesses toward stronger disclosure, Travel Rule, and monitoring workflows.",
  },
  {
    title: "Market momentum",
    body: "Stablecoins, RWAs, neobanks, and exchanges are moving more activity onchain while Circle Gateway, Coinbase/Base privacy work, and Tempo Zones point at the same infrastructure race.",
  },
  {
    title: "Technology readiness",
    body: "Modern ZK frameworks and consumer hardware make client-side privacy practical enough for mainstream wallet and neobank flows.",
  },
];

const team = [
  {
    name: "Guillaume Palayer",
    role: "Operations, fundraising, customer discovery, compliance positioning. Founded BaconLabs SA in Geneva.",
  },
  {
    name: "Zefram Lou",
    role: "Protocol engineering, ZK architecture, product design. Solidity architect behind 88mph, Timeless, and Bunni. Sudoswap contributor.",
  },
  {
    name: "Szeth Vallano",
    role: "Frontend, mobile, wallet, and client-side product. Co-founder of Timeless and Bunni.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  legalName: "BaconLabs SA",
  url: "https://foglight.xyz",
  sameAs: ["https://x.com/FoglightPrivacy"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Geneva",
    addressCountry: "CH",
  },
  description:
    "Compliant privacy infrastructure for existing EVM chains, wallet providers, and neobanks.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Foglight home">
            <Image
              src="/logo-mark-blue-on-white.png"
              alt="Foglight logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-[14px]"
              priority
            />
            <span className="text-[15px] font-semibold tracking-[-0.03em] text-[var(--ink)]">Foglight</span>
          </a>

          <nav className="hidden items-center gap-1 text-[13px] font-medium text-[var(--muted)] md:flex">
            <a className="rounded-full px-4 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--ink)]" href="#product">
              Product
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--ink)]" href="#why-now">
              Why now
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--ink)]" href="#team">
              Team
            </a>
          </nav>

          <a className="button-primary h-10 px-4 text-[13px]" href={contactHref} target="_blank" rel="noreferrer">
            Talk to us
          </a>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="eyebrow text-[var(--blue)]">Pre-seed · design-partner pilots</div>
          <h1 className="mt-7 text-balance text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[var(--ink)]">
            Compliant Privacy Infrastructure for Existing EVM Chains
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            Per-customer privacy pools that let regulated wallets, chains, and neobanks offer bank-level user privacy without launching a new L1.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary h-12 px-5 text-sm" href={contactHref} target="_blank" rel="noreferrer">
              Talk to us
            </a>
            <a className="button-secondary h-12 px-5 text-sm" href="/foglight-onepager-preseed.pdf" download>
              Read the one pager
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <span key={audience} className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-0 lg:pl-4">
          <div className="hero-card relative overflow-hidden rounded-[34px] border border-[var(--line)] bg-[linear-gradient(145deg,#f7f9ff_0%,#ffffff_46%,#edf4ff_100%)] p-5 shadow-[0_30px_90px_rgba(0,38,120,0.12)] sm:p-7">
            <div className="absolute inset-0 opacity-80" aria-hidden="true">
              <div className="motion-line motion-line-a" />
              <div className="motion-line motion-line-b" />
              <div className="motion-line motion-line-c" />
              <div className="motion-line motion-line-d" />
              <div className="motion-pulse motion-pulse-a" />
              <div className="motion-pulse motion-pulse-b" />
            </div>

            <div className="relative flex min-h-[500px] flex-col justify-between rounded-[26px] border border-white/70 bg-white/68 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-mark-white-on-blue.png"
                    alt="Foglight mark"
                    width={58}
                    height={58}
                    className="h-[58px] w-[58px] rounded-[18px] shadow-[0_18px_35px_rgba(0,71,255,0.24)]"
                    priority
                  />
                  <div>
                    <p className="text-sm font-semibold tracking-[-0.03em] text-[var(--ink)]">Foglight pool</p>
                    <p className="text-xs text-[var(--muted)]">Customer-held visibility</p>
                  </div>
                </div>
                <span className="rounded-full bg-[var(--blue-soft)] px-3 py-1 text-xs font-semibold text-[var(--blue)]">
                  EVM-native
                </span>
              </div>

              <div className="mx-auto my-10 grid w-full max-w-[520px] gap-3 sm:grid-cols-[1fr_44px_1fr] sm:items-center">
                <div className="surface-panel p-5">
                  <p className="eyebrow text-[var(--muted)]">Public chain</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)]">Transparent by default</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Counterparties, balances, and flow patterns leak into the open market.</p>
                </div>
                <div className="hidden h-px bg-[linear-gradient(90deg,transparent,var(--blue),transparent)] sm:block" />
                <div className="surface-panel border-[rgba(0,71,255,0.26)] bg-[linear-gradient(180deg,#ffffff,#f4f8ff)] p-5 shadow-[0_18px_45px_rgba(0,71,255,0.12)]">
                  <p className="eyebrow text-[var(--blue)]">Foglight</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)]">Private by customer</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">User activity is hidden from the public and visible to authorized teams.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "User transacts"],
                  ["02", "Encrypted onchain"],
                  ["03", "Customer discloses"],
                ].map(([number, label]) => (
                  <div key={number} className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                    <p className="text-xs font-semibold text-[var(--blue)]">{number}</p>
                    <p className="mt-2 text-sm font-semibold tracking-[-0.03em] text-[var(--ink)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="section-grid">
          <div>
            <p className="eyebrow text-[var(--blue)]">The problem</p>
            <h2 className="section-title mt-5">Public blockchains expose everything by default.</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            <p>
              Transparency is useful for settlement. It is brutal for user privacy. Public rails expose customer data that banks, e-money issuers, and regulated wallets would never broadcast in traditional finance.
            </p>
            <p>
              Regulated entities need a way to offer privacy without giving up KYC, sanctions controls, Travel Rule workflows, support operations, audit logs, or authorized disclosure.
            </p>
            <div className="grid gap-3 pt-3">
              {problemPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[var(--line)] bg-white p-4 text-sm leading-6 text-[var(--muted)]">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--blue)]">The solution</p>
            <h2 className="section-title mt-5">Per-customer privacy pools. Same compliance story as a bank.</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Foglight deploys dedicated privacy pools for each institutional customer. User data is hidden from the public, visible to the customer’s authorized compliance, risk, and support teams, and compatible with existing EVM applications.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-[30px] border border-[var(--line)] bg-[var(--ink)] p-6 text-white sm:p-8">
              <p className="eyebrow text-white/52">Architecture posture</p>
              <h3 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.06em]">No new L1. No shared pool. No Foglight relayer.</h3>
              <p className="mt-6 text-base leading-7 text-white/64">
                The point is to make privacy available through the wallets, chains, issuers, and applications users already touch, while keeping disclosure authority with the regulated customer.
              </p>
              <Image
                src="/logo-symbol-white.png"
                alt="Foglight symbol"
                width={899}
                height={498}
                className="mt-12 h-auto w-full max-w-sm opacity-95"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {howItWorks.map((item, index) => (
                <article key={item.title} className={index === 4 ? "surface-panel p-6 sm:col-span-2" : "surface-panel p-6"}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--blue-soft)] text-sm font-semibold text-[var(--blue)]">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.045em] text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--blue)]">Why now</p>
              <h2 className="section-title mt-5">The privacy gap is becoming an institutional blocker.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              The buyers are no longer abstract crypto users. They are regulated operators that need public-chain distribution and bank-style privacy controls at the same time.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {whyNow.map((item) => (
              <article key={item.title} className="surface-panel p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.055em] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-grid">
          <div>
            <p className="eyebrow text-[var(--blue)]">Who it is for</p>
            <h2 className="section-title mt-5">Designed for regulated crypto operators, not generic anonymity.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Pilot programs", "Wallets, chains, neobanks, stablecoin and e-money issuers that need a design-partner path to compliant privacy."],
              ["Pre-seed investors", "Investors looking for the privacy infrastructure layer under stablecoins, RWAs, neobanks, and regulated public-chain activity."],
              ["Crypto-native readers", "Builders who understand that public-chain transparency is a product defect for mainstream finance."],
              ["Future product pages", "A single-page foundation that can later split into product overviews, technical pages, and case-specific deployments."],
            ].map(([title, body]) => (
              <article key={title} className="surface-panel p-6">
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-[var(--ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--blue)]">Team</p>
            <h2 className="section-title mt-5">Built by a team that’s been shipping DeFi since 2017.</h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="surface-panel p-6">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blue-soft)] text-base font-semibold text-[var(--blue)]">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-[var(--ink)]">{member.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{member.role}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[28px] border border-[var(--line)] bg-white p-6 sm:p-7">
            <p className="text-sm leading-6 text-[var(--muted)]">
              <span className="font-semibold text-[var(--ink)]">Track record:</span> building together since 2017. Bunni reached $2.5B in cumulative swap volume and $80M peak TVL. 88mph reached $80M peak TVL.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="rounded-[36px] bg-[var(--ink)] p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="eyebrow text-white/52">Talk to us</p>
                <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl">
                  Building public-chain finance that can’t leak customer data?
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href={contactHref} target="_blank" rel="noreferrer" className="rounded-[26px] border border-white/12 bg-white/[0.06] p-6 transition hover:bg-white/[0.1]">
                  <p className="text-sm font-semibold text-white">Pilot programs</p>
                  <p className="mt-4 text-sm leading-6 text-white/62">Building a wallet, chain, or neobank? Let’s talk about a design-partner pilot.</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-white">Get in touch →</span>
                </a>
                <a href={contactHref} target="_blank" rel="noreferrer" className="rounded-[26px] border border-white/12 bg-white/[0.06] p-6 transition hover:bg-white/[0.1]">
                  <p className="text-sm font-semibold text-white">Pre-seed investors</p>
                  <p className="mt-4 text-sm leading-6 text-white/62">Investing in compliant infrastructure? Foglight is raising a pre-seed.</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-white">Contact Foglight →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-symbol-blue.png" alt="Foglight symbol" width={899} height={498} className="h-6 w-auto" />
            <span>Foglight, BaconLabs SA, Geneva</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-[var(--ink)]" href="https://x.com/FoglightPrivacy" target="_blank" rel="noreferrer">
              X
            </a>
            <a className="transition hover:text-[var(--ink)]" href="/foglight-onepager-preseed.pdf" download>
              One pager
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
