# Foglight Landing Page Plan

> **For Hermes:** Use subagent-driven-development skill only if this plan grows into a multi-page site. Current scope is a single production-quality landing page.

**Goal:** Build a first Foglight landing page that explains the category and creates a design-partner contact surface.

**Architecture:** Single static Next.js App Router page at `/`, using server-rendered React components, Tailwind CSS v4, and no client-side JavaScript. The page stays credible by avoiding fake metrics, invented testimonials, and unverified roadmap claims.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Geist fonts, pnpm, Vercel deployment target.

---

## Default assumptions after clarification timeout

1. Primary audience: regulated crypto operators, especially exchanges, custodians, stablecoin/payment operators, institutional DeFi teams, and EVM infrastructure partners.
2. Conversion goal: design-partner conversation through @FoglightPrivacy until a formal contact form/domain exists.
3. Hero claim: public chains expose too much for regulated finance; Foglight provides onchain per-customer privacy-pool infrastructure on existing EVM rails, with authorized disclosure built in.
4. Proof available now: category logic, architecture principles, and product posture. No fake partner logos, audits, benchmarks, screenshots, or metrics.
5. Technical depth: medium. Explain the model clearly enough for operators and infrastructure people; defer deeper docs until a docs surface exists.
6. Visual direction: Vercel-clean baseline, not a cloned Vercel page. Monochrome, Geist, precise spacing, shadow-as-border cards, restrained blue/pink/red accents only where they clarify flow.
7. Language guardrail: use “onchain per-customer privacy-pool infrastructure.” Avoid “privacy accounts,” wallet/account-level framing, mixer/evasion framing, and claims of regulatory approval.
8. Repo visibility: keep private until the user explicitly switches it public.

## Page structure

1. Navigation
   - Foglight wordmark
   - Anchors: Problem, Model, Operators
   - CTA: Contact @FoglightPrivacy

2. Hero
   - Category line: Onchain privacy-pool infrastructure
   - H1: Per-customer privacy pools for regulated crypto operators.
   - Body: Existing EVM chains have liquidity, tooling, and distribution. They also leak customer activity. Foglight adds customer-level privacy boundaries and authorized disclosure paths without asking operators to move to a new chain.
   - CTAs: Talk to Foglight, See the model

3. Problem
   - Public-chain finance leaks customer behavior
   - The issue is not only UX. It is operating-model exposure.
   - Operators need customer separation, policy controls, auditability, disclosure paths, and chain compatibility.

4. Model
   - Separate: per-customer activity is isolated into privacy pools
   - Govern: operator policy defines disclosure and control boundaries
   - Disclose: authorized paths support counterparties, auditors, or regulators when needed
   - Settle: works with existing EVM rails instead of inventing a new chain

5. Operator fit
   - Exchanges and custodians
   - Stablecoin and payments operators
   - Institutional DeFi venues
   - EVM infrastructure partners

6. Boundary conditions
   - No new chain thesis
   - No consumer wallet-wrapper positioning
   - No generic “hide everything” privacy story
   - No fake compliance guarantees

7. Architecture panel
   - Customer activity → Per-customer privacy pool → Existing EVM rails → Authorized disclosure
   - Keep abstract, no fake dashboard.

8. Final CTA
   - Design partner ask
   - Link to @FoglightPrivacy

## Implementation tasks

### Task 1: Replace scaffold copy with real landing page

**Objective:** Turn `src/app/page.tsx` into a single-page Foglight landing page.

**Files:**
- Modify: `src/app/page.tsx`

**Verification:**
- Run `pnpm lint`
- Run `pnpm typecheck`
- Run `pnpm build`
- Smoke test HTTP content includes hero and CTA copy

### Task 2: Update metadata

**Objective:** Make browser metadata match the page.

**Files:**
- Modify: `src/app/layout.tsx`

**Verification:**
- `pnpm typecheck`
- `pnpm build`

### Task 3: Preserve deployment guidance

**Objective:** Keep `README.md` useful for Vercel import.

**Files:**
- Modify if needed: `README.md`

**Verification:**
- README names stack, commands, and Vercel defaults.

## What not to build yet

- Contact form without a real destination and consent/storage decision.
- Analytics before the deployment domain and privacy posture are decided.
- CMS before copy iteration proves the page needs non-developer editing.
- Animation library before motion has a purpose.
- Partner logos, audits, metrics, screenshots, or claims not supplied by the user.
