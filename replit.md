# MASHALL Website

A modern, emotionally warm, and professionally designed website for MASHALL (Mental And Social Health for ALL) — a Pakistan-based NGO making mental health care accessible, stigma-free, and community-centered.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/mashall run dev` — run the website (port from env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, Wouter routing
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/mashall/src/` — MASHALL website frontend (React + Vite)
- `artifacts/api-server/src/routes/forms.ts` — Contact and volunteer form API routes
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth for API contracts)
- `lib/db/src/schema/submissions.ts` — Contact and volunteer DB tables
- `lib/api-client-react/src/generated/` — Generated React Query hooks
- `lib/api-zod/src/generated/` — Generated Zod validation schemas

## Architecture decisions

- Presentation-first NGO website with a shared Express backend for form submissions
- Form submissions stored in PostgreSQL (contact_submissions, volunteer_submissions tables)
- OpenAPI-first contract: spec gates codegen which generates typed React hooks and Zod validators
- Framer Motion for all animations (scroll-triggered, counters, hover effects)
- Poppins (headings) + Inter (body) fonts from Google Fonts

## Product

Five-page NGO website with:
- Home: hero, vision/mission, leadership messages, animated Pakistan mental health statistics
- Our Model: 5 pillars with interactive cards and hover animations
- Our Team: board members, management, and external advisors with profile cards
- Get Involved: donate, partner, and volunteer sections with working form
- Contact Us: contact form with FAQ accordion

## Color Palette

- Teal (primary): #168A84
- Soft Green: #9BCB63
- Orange: #EE6C2D
- Coral Red: #DE4B4B
- Golden Yellow: #E9A52A
- Warm Cream: #ECE6D7
- Soft Off-White: #F8F7F2
- Light Grey: #EEF1F3

## User preferences

- No emojis in the UI
- Poppins for headings, Inter for body text

## Gotchas

- After changing `lib/api-spec/openapi.yaml`, always run codegen: `pnpm --filter @workspace/api-spec run codegen`
- After changing DB schema, run `pnpm run typecheck:libs` to rebuild lib types before typechecking the API server
- Run `pnpm --filter @workspace/db run push` after schema changes to apply to dev database

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
