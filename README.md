# Skill Tree AI Solutions — Website

Marketing and lead-generation website for **Skill Tree AI Solutions**, a
consultancy that helps small and mid-market businesses adopt AI in
practical, engineering-led ways.

The site is a four-page Next.js app (Home, Services, About, Contact) with
a validated contact form that delivers leads via email.

> **Tagline:** Do more, with AI.

---

## Tech stack

| Layer        | Choice                                                  |
| ------------ | ------------------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language     | TypeScript (strict)                                     |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com) (CSS `@theme`) |
| UI helpers   | `lucide-react`, inline SVG                               |
| Forms        | `react-hook-form` + `zod` (`@hookform/resolvers`)        |
| Email        | [Resend](https://resend.com) via the REST API           |
| Package mgr  | `pnpm`                                                  |
| Deployment   | Vercel (planned)                                        |

The design system (colors, spacing, typography) is defined in
`src/app/globals.css` under `@theme`, and documented in
`docs/WEBSITE_DESIGN_BRIEF.md`.

---

## Project layout

```
skill-tree-web/
├── docs/                          # Design brief and project docs
├── public/                        # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (nav, footer, metadata)
│   │   ├── page.tsx               # Home
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── api/contact/route.ts   # POST — validates + sends via Resend
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/                    # Button, Card, Container, Input, ...
│   │   ├── layout/                # Nav, Footer, Logo, SkipLink
│   │   └── sections/              # Hero, ServicesOverview, ContactForm, ...
│   └── lib/
│       ├── site.ts                # Site metadata, nav, services data
│       ├── schemas.ts             # Zod schemas (contact form)
│       └── cn.ts                  # Classname helper
├── SPEC.md                        # Project spec
├── CLAUDE.md                      # Agent notes for Claude Code
└── AGENTS.md
```

---

## Running the site locally

### Prerequisites

- **Node.js 20+** (developed on Node 24)
- **pnpm 10+** — install with `npm install -g pnpm` or `corepack enable`

### 1. Clone and install

```bash
git clone git@github.com:grrrizzzz/skill-tree-web.git
cd skill-tree-web
pnpm install
```

### 2. (Optional) Configure email delivery

The contact form works out of the box **without any secrets** — in
development, submissions are validated and logged to the server console
instead of being emailed. This lets you iterate on the UI without a
Resend account.

When you're ready to deliver real emails:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```bash
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=hello@your-domain.com
CONTACT_FROM_EMAIL=Skill Tree Contact <onboarding@resend.dev>
```

`.env.local` is gitignored and will never be committed.

### 3. Start the dev server

```bash
pnpm dev
```

Open <http://localhost:3000>.

The dev server uses Turbopack, so edits hot-reload in a fraction of a
second. All four pages should be reachable:

- <http://localhost:3000/>
- <http://localhost:3000/services>
- <http://localhost:3000/about>
- <http://localhost:3000/contact>

### 4. Build and run the production bundle

To verify that a production build compiles and serves correctly:

```bash
pnpm build
pnpm start
```

`pnpm start` serves the compiled build on port 3000 by default.

---

## Available scripts

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `pnpm dev`        | Start the dev server on <http://localhost:3000>   |
| `pnpm build`      | Create an optimized production build              |
| `pnpm start`      | Serve the production build                        |
| `pnpm lint`       | Run ESLint (`next lint` / flat config)            |
| `pnpm typecheck`  | Run `tsc --noEmit` (no emit type-checking)        |

The recommended pre-commit flow is `pnpm lint && pnpm typecheck && pnpm build`.

---

## Contact form behavior

- Client-side validation with `react-hook-form` + Zod.
- Server-side validation in `src/app/api/contact/route.ts` re-runs the
  same Zod schema — never trust the client alone.
- A hidden honeypot field (`website`) filters out naive bots. If it is
  filled, the API returns success without sending anything.
- When `RESEND_API_KEY` is set, the route sends email via Resend's REST
  API with the submitter's email as `Reply-To`.
- When it is not set, the route logs the message to the server console
  and still returns success — useful for local development.

---

## Placeholders to update before launch

Search the codebase for the following values and replace with real
information before going to production:

- Contact details in `src/lib/site.ts` (email, phone, LinkedIn URL)
- `metadataBase` URL in `src/app/layout.tsx`
- `site.url` in `src/lib/site.ts` (used by `sitemap.ts` and `robots.ts`)
- Favicon / OG image in `src/app/` and `public/`

---

## Further reading

- `SPEC.md` — project objective, boundaries, and conventions
- `docs/WEBSITE_DESIGN_BRIEF.md` — full design system and page spec
- `CLAUDE.md` — guidance for Claude Code sessions in this repo
