# Foglight Landing Page Brief

Status: encoded into the current page implementation.

## Project context

Foglight is compliant onchain privacy infrastructure for chains, wallet providers, neobanks, and e-money issuers. The company is pre-seed and the landing page has to serve three audiences:

1. VCs arriving from cold DMs, warm intros, or X.
2. Pilot prospects evaluating design-partner conversations.
3. Crypto-native readers discovering Foglight through X.

The page is a single scrollable page that can later expand into deeper product pages.

## Goals

- Establish credibility quickly: positioning, team, track record.
- Create one clear conversion path: talk to Foglight.
- Generate inbound for pilot programs and pre-seed conversations.
- Act as the canonical URL for the X profile and outreach.

## Design references

- `tryharmony.ai/about`: generous whitespace, restrained font sizes, clean section rhythm.
- `contralabs.com`: muted, cool, desaturated feel.
- `templedigitalgroup.com`: simple first-screen impact and subtle hero motion.
- `avici.money`: low text volume with fast comprehension.

## Brand direction

- Deep blue rather than purple.
- Primary blue: `#0047FF` / `#1F4FFF`.
- Background: white / pale neutral.
- Text primary: `#0A0E27`.
- Text secondary: `#5F6478`.
- Accent: soft blue/cyan.
- Avoid pure black, neon colors, gradient backgrounds, and glassmorphism.
- Use one restrained sans family. Current implementation uses Geist Sans.

## Logo assets used

- `public/logo-mark-white-on-blue.png`: primary hero mark.
- `public/logo-mark-blue-on-white.png`: nav mark.
- `public/logo-symbol-blue.png`: footer symbol.
- `public/logo-symbol-white.png`: dark solution section symbol.

## Core copy

H1:

> Compliant Privacy Infrastructure for Existing EVM Chains

Subhead:

> Per-customer privacy pools that let regulated wallets, chains, and neobanks offer bank-level user privacy without launching a new L1.

Key phrase:

> Per-customer privacy pools. Same compliance story as a bank.

## Product vocabulary guardrails

Foglight should be described as per-customer privacy-pool infrastructure for regulated operators on existing EVM chains.

Avoid:

- "privacy accounts" as product framing.
- "bank-grade" or "institutional-grade" as vague marketing copy.
- token language.
- compliance guarantees.
- fake traction, fake testimonials, fake logos, and unverifiable claims.
- cypherpunk jargon when speaking to institutional readers.

## Conversion path

Current CTA links to `@FoglightPrivacy` because no working email inbox, booking link, or form backend was provided.

The page includes a downloadable one pager at `/foglight-onepager-preseed.pdf`.

## Technical foundation

- Repository: `Bacon-labs/foglight-landing-page`.
- Framework: Next.js 16 App Router.
- UI: React 19 + TypeScript.
- Styling: Tailwind CSS v4.
- Package manager: pnpm.
- Deployment target: Vercel.
- Static/server-rendered landing page with no client components.

## Remaining decisions before public launch

1. Confirm final domain and attach it to Vercel.
2. Replace X CTA with a real email/form/booking path.
3. Confirm whether the one pager should be public.
4. Confirm technical claims: sub-second proving, formal verification status, audits, and pilot timing.
5. Decide whether founder photos should be added or whether function-based cards are preferable.
