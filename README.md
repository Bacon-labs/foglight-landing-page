# Foglight landing page

Public source for the Foglight marketing site at https://foglight.xyz.

Foglight builds privacy infrastructure for regulated EVM operators: per-customer privacy pools, operator-held viewing keys, encrypted traces, and compliance-ready disclosure workflows on existing EVM rails.

The repo is also a small frontend case study: the hero turns Foglight's product model into an interaction. Public metadata stays visible on a bright screen. A keyhole-shaped cursor lens reveals the operator view underneath.

## What to look at

- `src/app/components/MetadataLens.tsx` - hero structure, pointer tracking, public vs operator rows, key cursor.
- `src/app/globals.css` - keyhole SVG mask, clipped reveal, CRT screen glow, scanline/grid texture, hero layout, responsive rules.
- `src/app/components/useSpotlight.ts` - reusable cursor-position hook for spotlight cards and image treatments.
- `scripts/gen-terminal-mark.py` - regenerates the ASCII Foglight mark used inside the metadata panel.
- `public/screen-grid-transparent.svg` - screen-grid tile used on the white glass surface.

## Interaction notes

The keyhole effect is intentionally low-JS:

1. React tracks pointer position inside the stage.
2. The stage receives `--lens-x` and `--lens-y` CSS custom properties.
3. CSS positions a single continuous SVG mask at those coordinates.
4. The mask is clipped to the screen frame so the reveal cannot spill outside the terminal.
5. The same keyhole silhouette is reused as a low-opacity halo.
6. CRT-style glow, a faint scanline layer, and a grid tile make the screen feel emissive without drowning the UI in texture.

The important craft choice is the mask shape. It is one SVG path, not a circle glued to a second tail shape. That avoids seams and makes the reveal read as an optical lens instead of a hover gimmick.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Local fonts plus `next/font`
- pnpm 10
- Node 20.x

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

## Deployment

The project is linked to Vercel. Production is served at https://foglight.xyz.

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

Auto-detected settings: framework `Next.js`, install `pnpm install`, build `pnpm build`, Node `20.x` from `.node-version` and `package.json#engines`.

No environment variables are required.

## Public repo hygiene

This repository is intended to be shareable as public frontend source.

Keep it that way:

- Do not commit `.env*`, Vercel state, credentials, API keys, tokens, or private keys.
- Do not commit investor decks, one-pagers, internal strategy notes, planning docs, or private customer material.
- Keep public copy focused on per-customer privacy pools and operator-held viewing keys.
- Use the X profile for public contact: https://x.com/FoglightPrivacy
