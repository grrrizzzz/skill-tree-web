# SPEC — Skill Tree AI Solutions Website

Status: **Draft v1** · Owner: Mike Grissom · Last updated: 2026-04-09

---

## 1. Objective

Build a marketing / lead-generation website for **Skill Tree AI Solutions**, a consultancy serving SMB and startup founders who want help adopting AI. The site's job is to:

1. Communicate what Skill Tree does and why a founder should trust them.
2. Convert visitors into qualified leads via a contact form.
3. Be fast, accessible, and credible — feel like a serious consultancy, not a template.

**Target audience:** SMB / startup founders (typically non-technical or semi-technical). Copy should be plain-English and ROI-focused, not jargon-heavy.

**Non-goals (v1):** No auth, no dashboards, no CMS, no blog, no interactive AI demos, no e-commerce.

---

## 2. Commands

All commands run from the project root. (To be created during initial scaffold.)

| Command | Purpose |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start Next.js dev server (http://localhost:3000) |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run `tsc --noEmit` |
| `pnpm format` | Run Prettier |

Package manager: **pnpm** (default). Switch only if the user requests it.

---

## 3. Project Structure

**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, deployed to **Vercel**.

```
skill-tree-web/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Home (hero + value prop + CTA)
│   ├── services/
│   │   └── page.tsx       # Services / offerings
│   ├── contact/
│   │   └── page.tsx       # Contact form
│   └── api/
│       └── contact/
│           └── route.ts   # POST handler → Resend
├── components/
│   ├── ui/                # Primitive components (Button, Input, etc.)
│   ├── layout/            # Header, Footer, Container
│   └── sections/          # Hero, ServiceCard, CTA, etc.
├── lib/
│   ├── resend.ts          # Resend client + send helper
│   └── validation.ts      # Zod schemas (contact form)
├── content/               # Static copy (services list, etc.) as TS or MDX
├── public/                # Images, favicon, og-image
├── styles/globals.css     # Tailwind base + global tokens
├── SPEC.md
├── CLAUDE.md
└── README.md
```

**Routing:** App Router only. Server components by default; mark `'use client'` only when needed (form interactivity).

---

## 4. Code Style

- **TypeScript strict mode** on. No `any` without a comment justifying it.
- **Tailwind** for all styling. No CSS-in-JS, no separate `.module.css` unless unavoidable.
- **Design tokens** live in `tailwind.config.ts` (colors, fonts, spacing). Components consume tokens, never hardcoded hex values.
- **Visual direction: editorial / trustworthy.** Serif headings (e.g., Fraunces or similar), clean sans-serif body (Inter), structured layouts, generous whitespace, restrained palette. Conveys consultancy credibility — not "techy startup landing page."
- **Components are server-first.** Add `'use client'` only at the leaves that need interactivity.
- **Forms** validated with Zod on both client and server.
- **Accessibility:** semantic HTML, labelled inputs, visible focus states, color contrast ≥ WCAG AA.
- **SEO:** per-page `metadata` exports, OpenGraph image, sitemap, robots.txt.
- **Imports:** absolute via `@/*` alias.
- **Linting:** `next/core-web-vitals` + Prettier. Fix lint errors, don't suppress.

---

## 5. Testing Strategy

v1 is a small marketing site — heavy unit testing is overkill. Focus testing where it matters:

- **Type safety** (`pnpm typecheck`) is the primary correctness gate.
- **Lint** (`pnpm lint`) runs in CI.
- **Manual smoke test** before each deploy: home → services → contact → submit a real test email and verify it arrives.
- **Contact API route**: add a minimal Vitest test for the Zod validation + the route handler's happy/sad paths once the route exists. Mock the Resend client.
- **Lighthouse CI** (optional, nice-to-have): performance ≥ 90, accessibility = 100 on key pages.

No E2E framework in v1. Revisit if the site grows beyond marketing.

---

## 6. Boundaries

### Always
- Use server components by default; only opt into client components at the interaction boundary.
- Validate all form input with Zod, on both client and server.
- Keep bundle size lean — every client component is a deliberate choice.
- Pull copy/content from `content/` files, not hardcoded JSX, so non-devs can edit.

### Ask first
- **Before deploying to Vercel** (production or preview promotion). Never `vercel --prod` or merge to `main` without explicit approval.
- Before adding **any new npm dependency** — confirm necessity and check bundle impact.
- Before adding a **new top-level route** or restructuring `app/`.
- Before changing **brand/visual tokens** (colors, fonts) once they're set.

### Never
- **No analytics or tracking** (Google Analytics, Plausible, PostHog, Meta Pixel, etc.) unless explicitly requested. Privacy-respecting by default.
- No third-party chat widgets, popups, or cookie banners by default.
- No committing secrets — Resend API key lives in `.env.local` and Vercel env vars only.
- No Tailwind arbitrary values for things that should be design tokens (e.g., `text-[#1a1a1a]`).
- No `force-dynamic` or `revalidate` hacks to paper over caching issues — fix the root cause.

---

## 7. Open Questions

These should be resolved before or during the scaffold step:

1. **Brand assets** — Is there a logo, color palette, or wordmark already? If not, pick neutral defaults and mark as placeholder.
2. **Domain** — Is there a registered domain? Where are DNS records managed?
3. **Resend account** — Does one exist? What "from" address should leads be sent to?
4. **Services list** — What 3–5 service offerings should the Services page describe?
5. **Founder bio / proof** — Any testimonials, prior clients, or credentials to feature on the home page for trust?
