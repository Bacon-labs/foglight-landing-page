const stack = [
  {
    label: "Framework",
    value: "Next.js 16 App Router",
    note: "Vercel-native routing, metadata, and build pipeline.",
  },
  {
    label: "Runtime UI",
    value: "React 19 + TypeScript",
    note: "Typed components on the current stable React line used by create-next-app.",
  },
  {
    label: "Styling",
    value: "Tailwind CSS v4 + Geist",
    note: "Token-first CSS, Vercel-style typography, restrained monochrome base.",
  },
];

const nextDecisions = [
  "Who exactly is this page converting?",
  "What single claim should the hero make?",
  "How technical should the first screen be?",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-10 border-b border-black/[0.08] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-medium uppercase tracking-[-0.02em]"
            aria-label="Foglight home"
          >
            Foglight
          </a>
          <div className="flex items-center gap-2 text-sm font-medium text-black/60">
            <a className="rounded-md px-3 py-2 transition hover:text-foreground" href="#stack">
              Stack
            </a>
            <a className="rounded-md px-3 py-2 transition hover:text-foreground" href="#plan">
              Plan
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="inline-flex w-fit items-center rounded-full bg-[#ebf5ff] px-3 py-1 text-xs font-medium text-[#0068d6] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          Landing page foundation ready
        </div>

        <div className="mt-10 max-w-4xl">
          <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Foglight needs a sharp first screen before it needs decoration.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-black/60 sm:text-xl">
            The repo and modern Vercel-ready React stack are in place. The marketing page should be planned around one conversion target, one defensible claim, and a visual system that makes onchain privacy-pool infrastructure feel precise rather than vague.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#plan"
            className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:bg-black/80"
          >
            Plan the page
          </a>
          <a
            href="#stack"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition hover:bg-black/[0.03]"
          >
            Review stack
          </a>
        </div>
      </section>

      <section id="stack" className="border-y border-black/[0.08] bg-[#fafafa] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase text-black/50">Modern Vercel baseline</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Boring where it should be boring.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/60">
              The stack follows the default Vercel/Next path rather than pulling in premature animation, component, or analytics dependencies before the landing-page strategy is settled.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stack.map((item) => (
              <article
                key={item.label}
                className="rounded-lg bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04),0_0_0_1px_#fafafa]"
              >
                <p className="font-mono text-xs font-medium uppercase text-black/45">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-black/50">Planning checkpoint</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              The page brief is the blocker now.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/60">
              Next step is choosing the audience, message, proof, and design direction before writing final copy or building sections.
            </p>
          </div>

          <div className="rounded-xl bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04),0_0_0_1px_#fafafa]">
            <div className="rounded-lg bg-[#171717] p-6 text-white">
              <p className="font-mono text-xs font-medium uppercase text-white/45">Open questions</p>
              <ol className="mt-6 space-y-4">
                {nextDecisions.map((decision) => (
                  <li key={decision} className="flex gap-3 text-base leading-7 text-white/80">
                    <span className="mt-1 h-5 min-w-5 rounded-full bg-white text-center font-mono text-[11px] font-medium leading-5 text-black">
                      {nextDecisions.indexOf(decision) + 1}
                    </span>
                    {decision}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
