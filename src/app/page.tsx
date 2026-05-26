const modelSteps = [
  {
    eyebrow: "Separate",
    title: "Customer activity gets its own boundary.",
    body: "Per-customer privacy pools reduce cross-customer leakage while preserving an operator-controlled operating model.",
    accent: "text-[#0a72ef]",
  },
  {
    eyebrow: "Govern",
    title: "Policy sits with the operator.",
    body: "Controls should map to real compliance, treasury, and operational workflows instead of forcing a generic privacy posture.",
    accent: "text-[#de1d8d]",
  },
  {
    eyebrow: "Disclose",
    title: "Authorized disclosure is part of the design.",
    body: "Counterparties, auditors, or regulators need defined disclosure paths. Foglight treats that as infrastructure, not an afterthought.",
    accent: "text-[#ff5b4f]",
  },
];

const operatorFits = [
  "Exchanges and custodians that cannot broadcast customer behavior on public rails.",
  "Stablecoin and payment operators that need private flows without leaving EVM distribution.",
  "Institutional DeFi venues that need privacy boundaries compatible with operating controls.",
  "Infrastructure partners building wallets, data, policy, or settlement surfaces for regulated users.",
];

const boundaries = [
  "Existing EVM rails, not a new-chain detour.",
  "Operator infrastructure, not a consumer wallet wrapper.",
  "Controlled disclosure, not generic opacity.",
  "Defensible product claims only, no fake compliance guarantees.",
];

const architecture = [
  "Customer activity",
  "Per-customer privacy pool",
  "Existing EVM rails",
  "Authorized disclosure",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-20 border-b border-black/[0.08] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-medium uppercase tracking-[-0.02em]"
            aria-label="Foglight home"
          >
            Foglight
          </a>
          <div className="hidden items-center gap-1 text-sm font-medium text-black/60 sm:flex">
            <a className="rounded-md px-3 py-2 transition hover:text-foreground" href="#problem">
              Problem
            </a>
            <a className="rounded-md px-3 py-2 transition hover:text-foreground" href="#model">
              Model
            </a>
            <a className="rounded-md px-3 py-2 transition hover:text-foreground" href="#operators">
              Operators
            </a>
          </div>
          <a
            href="https://x.com/FoglightPrivacy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition hover:bg-black/80"
          >
            Contact
          </a>
        </div>
      </nav>

      <section id="top" className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="inline-flex w-fit items-center rounded-full bg-[#ebf5ff] px-3 py-1 text-xs font-medium text-[#0068d6] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
            Onchain privacy-pool infrastructure
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Per-customer privacy pools for regulated crypto operators.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-black/60 sm:text-xl">
            Existing EVM chains have liquidity, tooling, and distribution. They also leak customer activity. Foglight gives operators customer-level privacy boundaries and authorized disclosure paths without forcing a new chain.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://x.com/FoglightPrivacy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:bg-black/80"
            >
              Talk to Foglight
            </a>
            <a
              href="#model"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition hover:bg-black/[0.03]"
            >
              See the model
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04),0_0_0_1px_#fafafa]">
          <div className="rounded-xl bg-[#171717] p-6 text-white sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <p className="font-mono text-xs font-medium uppercase text-white/45">Operator flow</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">EVM compatible</span>
            </div>
            <ol className="mt-7 space-y-4">
              {architecture.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-medium text-black">
                    {index + 1}
                  </span>
                  <span className="text-base leading-7 text-white/80">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
              <div className="h-1 rounded-full bg-[#0a72ef]" />
              <div className="h-1 rounded-full bg-[#de1d8d]" />
              <div className="h-1 rounded-full bg-[#ff5b4f]" />
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-y border-black/[0.08] bg-[#fafafa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-black/50">The constraint</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Public-chain finance leaks too much for regulated operations.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-black/60">
            <p>
              The problem is not only frontend UX. Transaction visibility exposes customer behavior, flow patterns, treasury decisions, and operational relationships.
            </p>
            <p>
              Regulated operators need privacy boundaries that still support policy, auditability, disclosure, and integration with the EVM rails their counterparties already use.
            </p>
          </div>
        </div>
      </section>

      <section id="model" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase text-black/50">Foglight model</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
            Privacy that maps to how operators actually work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/60">
            Foglight focuses on customer separation, operator policy, authorized disclosure, and compatibility with existing EVM chains.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {modelSteps.map((step) => (
            <article
              key={step.eyebrow}
              className="rounded-lg bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04),0_0_0_1px_#fafafa]"
            >
              <p className={`font-mono text-xs font-medium uppercase ${step.accent}`}>{step.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="operators" className="border-y border-black/[0.08] bg-[#fafafa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-black/50">Operator fit</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Built for teams that cannot treat leakage as acceptable collateral damage.
            </h2>
          </div>
          <div className="grid gap-3">
            {operatorFits.map((fit) => (
              <div key={fit} className="rounded-lg bg-white p-5 text-base leading-7 text-black/65 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                {fit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="font-mono text-xs font-medium uppercase text-black/50">Boundary conditions</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
            The category only works if the framing stays clean.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/60">
            Foglight should be evaluated as privacy-pool infrastructure for regulated operators, with controlled disclosure and existing-chain compatibility as first-class constraints.
          </p>
        </div>
        <div className="rounded-xl bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04),0_0_0_1px_#fafafa]">
          <ul className="divide-y divide-black/[0.08] rounded-lg bg-[#171717] text-white">
            {boundaries.map((boundary) => (
              <li key={boundary} className="p-5 text-base leading-7 text-white/80">
                {boundary}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.08] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-medium uppercase text-black/50">Design-partner surface</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
            If public-chain leakage is blocking your regulated crypto product, talk to Foglight.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            The useful conversation is specific: customer boundaries, disclosure requirements, EVM integration constraints, and what an operator can safely move onchain.
          </p>
          <a
            href="https://x.com/FoglightPrivacy"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:bg-black/80"
          >
            Contact @FoglightPrivacy
          </a>
        </div>
      </section>
    </main>
  );
}
