import Image from "next/image";

const contactHref = "https://x.com/FoglightPrivacy";

const comparisonBefore = [
  {
    title: "Bridge to a new chain or privacy app",
    body: "Liquidity, users, and product logic leave the EVM environment they already use.",
  },
  {
    title: "Wait for shielding and proofs",
    body: "Privacy feels like a separate workflow instead of a native account state.",
  },
  {
    title: "Limited to transfers or basic swaps",
    body: "Institutional DeFi, support, and reporting workflows remain out of reach.",
  },
  {
    title: "Restricted assets and deposit sizes",
    body: "Operators inherit constraints from the privacy network or shared pool.",
  },
  {
    title: "Extra transaction fees",
    body: "Users pay more than gas for privacy, often through relayers or liquidity routes.",
  },
  {
    title: "Compliance teams still lack clean workflows",
    body: "Disclosure, audit logs, and source-of-funds reports are bolted on after the fact.",
  },
];

const comparisonAfter = [
  {
    title: "Stay on the user’s preferred EVM chain",
    body: "No new L1, no separate liquidity layer, no migration narrative for users.",
  },
  {
    title: "Use existing wallets, apps, and liquidity",
    body: "Foglight is an account/privacy layer for flows operators already run.",
  },
  {
    title: "Private balances and activity inside familiar flows",
    body: "Users get privacy where they transact instead of visiting a privacy island.",
  },
  {
    title: "Fast client-side proving on modern devices",
    body: "The proving path is designed around normal wallet and mobile UX constraints.",
  },
  {
    title: "No Foglight transaction fee beyond gas",
    body: "The model avoids Foglight-operated relayers and per-transaction toll booths.",
  },
  {
    title: "Built-in disclosure and audit workflows",
    body: "Customer-held visibility keys support compliance, risk, support, and legal requests.",
  },
];

const productSteps = [
  {
    step: "01",
    title: "Gated entry",
    body: "The customer’s existing KYC/KYB, sanctions, Travel Rule, and policy systems decide who can enter private account flows.",
  },
  {
    step: "02",
    title: "Per-customer pools",
    body: "Each institution gets isolated pools for its own customers, avoiding shared-pool contamination and cross-customer risk inheritance.",
  },
  {
    step: "03",
    title: "Private Account SDK",
    body: "Smart contracts, SDKs, and APIs add private balances and private activity to existing EVM apps and wallets.",
  },
  {
    step: "04",
    title: "Encrypted traces",
    body: "Transactions publish encrypted traces onchain. Authorized decryptions are logged so privacy access is auditable.",
  },
];

const integrationRows = [
  ["KYC / KYB", "Before entry"],
  ["Sanctions screening", "Before and during use"],
  ["Travel Rule", "Customer policy engine"],
  ["Viewing keys", "Customer-held"],
  ["Audit logs", "Authorized access only"],
];

const logoAsciiTexture = String.raw`
KYC_GATE  VIEW_KEY  PRIVACY_POOL  EVM_TRACE  DISCLOSE  AUDIT_LOG  CUSTOMER_HELD
  01 ░▒▓ ENCRYPTED BALANCE ▓▒░  02 PRIVATE TRANSFER  03 AUTHORIZED REVEAL
TRACE: 0x71f...  POOL: A17  KEY: customer-held  POLICY: pass  GAS: base
      ░░▒▒▓▓████▓▓▒▒░░        foglight          ░░▒▒▓▓████▓▓▒▒░░
PUBLIC: masked       COMPLIANCE: visible-on-request       USER: private
  KYC_GATE  VIEW_KEY  PRIVACY_POOL  EVM_TRACE  DISCLOSE  AUDIT_LOG  CUSTOMER_HELD
    01 ░▒▓ ENCRYPTED BALANCE ▓▒░  02 PRIVATE TRANSFER  03 AUTHORIZED REVEAL
TRACE: 0x71f...  POOL: A17  KEY: customer-held  POLICY: pass  GAS: base
      ░░▒▒▓▓████▓▓▒▒░░        foglight          ░░▒▒▓▓████▓▓▒▒░░
PUBLIC: masked       COMPLIANCE: visible-on-request       USER: private
`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foglight",
  sameAs: ["https://x.com/FoglightPrivacy"],
  description: "Compliant privacy infrastructure for existing EVM chains, wallets, stablecoin issuers, and neobanks.",
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

function LogoMotionField() {
  return (
    <div className="logo-motion-stage" aria-hidden="true">
      <div className="logo-motion-glow" />
      <div className="logo-wordmark logo-wordmark-blue" />
      <div className="logo-wordmark logo-wordmark-white" />
      <div className="logo-ascii-mask">
        <pre>{logoAsciiTexture}</pre>
      </div>
      <div className="logo-scanline" />
      <div className="logo-spark logo-spark-a" />
      <div className="logo-spark logo-spark-b" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section id="top" className="hero-shell relative min-h-[940px] overflow-hidden bg-[var(--navy)] text-white md:min-h-screen">
        <div className="hero-orbit-field" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-label orbit-label-a">KYC gate</div>
          <div className="orbit-label orbit-label-b">Encrypted traces</div>
          <div className="orbit-label orbit-label-c">EVM apps</div>
          <div className="orbit-dot orbit-dot-a" />
          <div className="orbit-dot orbit-dot-b" />
          <div className="orbit-dot orbit-dot-c" />
          <LogoMotionField />
        </div>

        <header className="relative z-10 mx-auto flex h-24 w-full max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#top" className="flex items-center gap-3" aria-label="Foglight home">
            <Image src="/logo-mark-white-on-blue.png" alt="Foglight logo" width={44} height={44} className="h-11 w-11 rounded-[14px] shadow-[0_18px_55px_rgba(0,71,255,0.3)]" priority />
            <span className="text-[15px] font-semibold tracking-[-0.035em] text-white">Foglight</span>
          </a>

          <nav className="hidden items-center gap-7 text-[14px] text-white/68 md:flex">
            <a className="transition hover:text-white" href="#model">
              Model
            </a>
            <a className="transition hover:text-white" href="#difference">
              Difference
            </a>
            <a className="transition hover:text-white" href="#product">
              Product
            </a>
          </nav>

          <a className="button button-light h-11 px-5 text-sm" href={contactHref} target="_blank" rel="noreferrer">
            Talk to us
          </a>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[92rem] flex-col justify-start px-5 pb-20 pt-24 sm:px-8 md:justify-center md:pt-12 lg:px-16">
          <div className="max-w-5xl">
            <p className="eyebrow text-[var(--blue-ice)]">Compliant privacy infrastructure</p>
            <h1 className="display-title mt-8 max-w-[13ch] text-balance text-[clamp(4.2rem,9vw,9.6rem)] leading-[0.88] tracking-[-0.055em] text-white">
              Privacy for existing EVM rails.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/66 sm:text-xl sm:leading-9">
              Foglight lets wallets, chains, stablecoin issuers, and neobanks add private balances and transactions without launching a new network or losing compliance visibility.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button button-blue h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
                Contact Foglight
              </a>
              <a className="button button-ghost h-12 px-6 text-sm" href="#difference">
                See the model
              </a>
            </div>
          </div>

          <div className="hero-bottom-strip mt-20 grid gap-3 text-sm text-white/58 md:grid-cols-4">
            {[
              "Per-customer privacy pools",
              "Customer-held viewing keys",
              "Existing wallets and liquidity",
              "Disclosure and audit workflows",
            ].map((item) => (
              <div key={item} className="border-t border-white/12 pt-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="section-shell bg-[var(--paper)]">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="section-intro mx-auto max-w-4xl text-center">
            <p className="eyebrow text-[var(--blue)]">The model</p>
            <h2 className="display-heading mt-5 text-balance text-[clamp(3.2rem,6.6vw,7.2rem)] leading-[0.92] tracking-[-0.055em]">
              Keep the chain. Change what the public can see.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Current privacy products ask users and liquidity to move somewhere else. Foglight is designed as a private account layer for the EVM environments operators already support.
            </p>
          </div>

          <div id="difference" className="comparison-wrap mt-20">
            <div className="comparison-column comparison-before">
              <div className="flex items-center justify-between gap-4">
                <h3 className="comparison-heading">Status quo</h3>
                <span className="comparison-pill">Before</span>
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
                <span className="comparison-pill comparison-pill-after">After</span>
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

      <section id="product" className="section-shell bg-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--blue)]">Product shape</p>
              <h2 className="display-heading mt-5 text-balance text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.92] tracking-[-0.055em]">
                A private account layer for existing rails.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] lg:justify-self-end">
              Foglight adds private balances, private activity, and customer-controlled disclosure to existing onchain products. The compliance stack stays with the regulated customer.
            </p>
          </div>

          <div className="product-grid mt-16">
            <div className="product-diagram relative overflow-hidden rounded-[2rem] bg-[var(--navy)] p-6 text-white sm:p-8 lg:col-span-2 lg:row-span-2">
              <div className="product-diagram-bg" aria-hidden="true" />
              <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between">
                <div>
                  <Image src="/logo-symbol-white.png" alt="Foglight symbol" width={899} height={498} className="h-auto w-48 opacity-95" />
                  <h3 className="display-heading mt-12 max-w-2xl text-[clamp(2.7rem,5vw,5.8rem)] leading-[0.9] tracking-[-0.055em] text-white">
                    Same user flow. Less public leakage.
                  </h3>
                </div>
                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                  {["User enters", "Activity encrypts", "Customer discloses"].map((label, index) => (
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
              Foglight does not become the data custodian.
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
              The customer keeps disclosure authority. Foglight supplies the account layer, circuits, SDK, and compliance workflow surfaces needed to make privacy usable inside regulated products.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[92rem] rounded-[2.4rem] bg-[var(--navy)] p-7 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--blue-ice)]">Design partners</p>
              <h2 className="display-heading mt-5 max-w-4xl text-balance text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.055em] text-white">
                Building an onchain product that can’t leak customer data?
              </h2>
            </div>
            <a className="button button-light h-12 px-6 text-sm" href={contactHref} target="_blank" rel="noreferrer">
              Talk to us
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
