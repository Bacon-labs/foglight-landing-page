# Foglight landing page

Landing page for Foglight, deployed on Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Fonts via `next/font`: DM Serif Display, Playfair Display, DM Sans, Geist Mono
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

The project is linked to Vercel. Production is served at `https://foglight.xyz`.

```bash
# preview deployment
vercel

# production deployment
vercel --prod
```

Auto-detected settings: framework `Next.js`, install `pnpm install`, build `pnpm build`, Node `20.x` (matches `.node-version` and `package.json#engines`). No environment variables are required.
