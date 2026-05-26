# Foglight landing page

Vercel-ready landing page for Foglight: compliant privacy infrastructure for existing EVM chains.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Geist via `next/font`
- pnpm 10 lockfile
- Node >=20.18.0

This uses the standard Vercel-native path: static/server-rendered App Router page, no client components, no animation library, no component kit, no CMS, and no analytics package yet.

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

Set `NEXT_PUBLIC_SITE_URL` to the production URL once the domain is final. The default metadata URL is `https://foglight.xyz`, but that domain still needs DNS/Vercel setup before launch.

## Design direction encoded

The page follows the supplied brief:

- deep institutional blue, not purple
- pale neutral background, deep blue-black text, muted secondary text
- generous whitespace and restrained hierarchy inspired by Harmony
- muted, cool color posture inspired by Contra Labs
- subtle CSS-only hero motion inspired by Temple Digital Group
- compact, low-text clarity inspired by Avici
- no glassmorphism, neon crypto palette, token content, fake testimonials, fake customer logos, or invented traction

## Current conversion path

The primary CTA links to `@FoglightPrivacy` because no live email inbox, booking link, or form backend was provided. Replace this with a real form, Resend/Plunk/Formspree endpoint, or booking URL before serious outreach.

The one pager is included at `/foglight-onepager-preseed.pdf`.
