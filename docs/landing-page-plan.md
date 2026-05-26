# Foglight landing page plan

## Purpose

Create the canonical Foglight landing page for:

1. VCs evaluating the pre-seed.
2. Pilot prospects: wallet providers, chains, neobanks, e-money issuers.
3. Crypto-native readers arriving from X.

The page should establish category, credibility, and a single conversion path without overexplaining crypto.

## Positioning

Foglight is compliant onchain privacy infrastructure for existing EVM chains.

Core line:

> Per-customer privacy pools that let regulated wallets, chains, and neobanks offer bank-level user privacy without launching a new L1.

Guardrails:

- Say "same compliance story as a bank," not "bank-grade."
- Avoid "privacy accounts" as product framing.
- Avoid compliance guarantees.
- Avoid token, roadmap, pricing, Discord, Telegram, testimonials, fake logos, and invented customer claims.
- Use the one pager as the denser artifact. Keep the landing page tighter.

## Design direction

References from the brief:

- Harmony: whitespace, hierarchy, section spacing.
- Contra Labs: muted, cool, restrained color use.
- Temple Digital Group: simple hero impact and subtle background motion.
- Avici: low text volume, fast comprehension.

Encoded visual system:

- Primary blue: `#0047FF` / `#1F4FFF`.
- Background: `#FBFCFF` with pale blue surfaces.
- Primary text: `#0A0E27`.
- Secondary text: `#5F6478`.
- Accent: pale blue/cyan only.
- Typography: single Geist Sans family via `next/font`.
- Motion: CSS-only line/pulse field, disabled by `prefers-reduced-motion`.

## Page structure

1. Header
   - Logo top-left.
   - Minimal nav: Product, Why now, Team.
   - CTA: Talk to us.

2. Hero
   - H1: "Compliant Privacy Infrastructure for Existing EVM Chains."
   - Subhead from brief.
   - CTA: Talk to us.
   - Secondary CTA: Read the one pager.
   - Animated privacy/infrastructure card.

3. Problem
   - Public blockchains expose everything by default.
   - Two short explanatory paragraphs.
   - Three concrete problem chips.

4. Solution / How it works
   - Per-customer privacy pools.
   - Same compliance story as a bank.
   - Five blocks: per-customer pools, compliance integrations, customer-held viewing keys, EVM-native, built for security.

5. Why now
   - Regulation: EU AMLR 2027.
   - Market momentum: Circle Gateway, Coinbase/Base privacy work, Tempo Zones.
   - Technology readiness: modern ZK frameworks and consumer hardware.

6. Who it is for
   - Pilot programs.
   - Pre-seed investors.
   - Crypto-native readers.
   - Future product-page expansion.

7. Team
   - Guillaume Palayer.
   - Zefram Lou.
   - Szeth Vallano.
   - Track record: Bunni and 88mph metrics as supplied in the brief.

8. Contact
   - Two paths: pilot programs and pre-seed investors.
   - Currently both link to `@FoglightPrivacy` pending a live email/form endpoint.

9. Footer
   - Logo, BaconLabs SA Geneva attribution, X, one pager.

## Technical notes

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, pnpm.
- No client components.
- No analytics installed yet. Plausible or Cloudflare Analytics would match the brand better than heavier trackers.
- One pager copied to `public/foglight-onepager-preseed.pdf`.
- Logo assets copied to `public/`.
- Generated Open Graph route at `/opengraph-image`.
- `NEXT_PUBLIC_SITE_URL` should be set in Vercel once the production domain is final.

## Open decisions

- Confirm contact path: email inbox, booking link, or form provider.
- Confirm whether `foglight.xyz` is owned and should be attached to Vercel. DNS currently appears parked at Afternic and has null MX from public lookup.
- Confirm whether the one pager should remain downloadable publicly.
- Confirm whether the team section should include photos or remain function-based cards.
- Confirm exact wording for technical claims such as sub-second proving and formal verification before broad public launch.
