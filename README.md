# Foglight landing page

Vercel-ready landing page for Foglight.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Geist Sans / Geist Mono via `next/font`
- pnpm 10 lockfile

This intentionally starts with the most standard Vercel path: Next.js App Router, TypeScript, Tailwind, and a minimal dependency graph. No animation library, component kit, analytics, or CMS is installed yet. Add those only after the landing-page brief justifies them.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Vercel deployment guidance

Import `Bacon-labs/foglight-landing-page` into Vercel as a Next.js project.

Expected auto-detection:

- Framework preset: Next.js
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: managed by Next.js, leave default
- Node version: use Node >=20.18, matching `.node-version` and `package.json#engines`

## Design direction currently encoded

The scaffold borrows Vercel-style discipline rather than a finished Foglight brand:

- Geist type system
- white canvas, near-black text
- shadow-as-border cards instead of heavy borders
- restrained blue badge as functional status, not decoration
- generous spacing and compressed display type

This is a baseline, not the final art direction. Final copy, section order, proof points, and conversion target should be planned before expanding the page.
