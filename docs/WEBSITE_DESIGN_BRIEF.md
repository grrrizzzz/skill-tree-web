# Website Design Brief — Skill Tree AI Solutions

> **Status:** DRAFT — Awaiting approval before implementation
> **Created:** 2026-04-08
> **Format:** Agent-readable specification. Each section contains decisions and constraints that guide implementation.

---

## 1. Project Overview

**Business Name:** Skill Tree AI Solutions
**Website Type:** Business/consulting marketing site
**Primary Goal:** Drive visitors to book a consultation via a contact form
**Launch Scope:** Minimum viable site — 4 core pages, no blog, no e-commerce, no user accounts

---

## 2. Target Audience

The site serves two segments from a single design:

**Segment A — SMB Owners (Primary)**
- Role: Business owners, office managers at companies with 1–50 employees
- Industries: Professional services (dental, legal, accounting), trades, local retail
- Tech comfort: Low to moderate. They use phones, email, maybe a CRM
- What they need to see: Clear outcomes, pricing signals, proof it works, easy way to reach a human

**Segment B — Mid-Market Decision-Makers**
- Role: Directors, VPs, department heads at companies with 50–500 employees
- Industries: Healthcare, financial services, insurance, real estate
- Tech comfort: Moderate to high. They evaluate vendors formally
- What they need to see: Credibility, case studies (future), integration capabilities, security posture

**Design Implication:** Language must be jargon-free but not dumbed down. Lead with business outcomes, not technical features. SMB visitors scan quickly; mid-market visitors read deeper — the design should support both behaviors.

---

## 3. Brand Identity

### 3.1 Tagline

**"Do more, with AI"**

### 3.2 Brand Voice

| Attribute      | What it means in practice                                      |
|----------------|----------------------------------------------------------------|
| Professional   | No slang, no hype. Confident but not arrogant                  |
| Trustworthy    | Specific claims over vague promises. Show, don't tell          |
| Clear          | Short sentences. One idea per paragraph. No jargon walls       |
| Approachable   | Warm but not casual. "We help you" not "We leverage synergies" |

### 3.3 Messaging Hierarchy

Every page should reinforce this message stack, in order of priority:

1. **What you get:** Concrete business outcomes (save time, never miss a call, reduce costs)
2. **How it works:** Brief, plain-language explanation of the service
3. **Why us:** Founder-led, engineering-driven, built on proven AI platforms
4. **What to do next:** Book a consultation (always visible)

---

## 4. Visual Design System

### 4.1 Color Palette

**Philosophy:** Clean and light with purposeful accent color. Conveys professionalism and modern tech without feeling cold.

| Role            | Color       | Hex       | Usage                                              |
|-----------------|-------------|-----------|-----------------------------------------------------|
| Background      | White       | `#FFFFFF` | Page backgrounds, cards                              |
| Surface         | Cool Gray 1 | `#F8F9FA` | Section alternation, subtle card backgrounds         |
| Border          | Cool Gray 3 | `#DEE2E6` | Dividers, card borders, input borders                |
| Text Primary    | Charcoal    | `#212529` | Headings, body text                                  |
| Text Secondary  | Slate       | `#6C757D` | Captions, meta text, placeholder text                |
| Primary Accent  | Deep Teal   | `#0D9488` | CTA buttons, links, active states, key highlights    |
| Primary Hover   | Dark Teal   | `#0F766E` | Button hover, link hover                             |
| Secondary       | Soft Blue   | `#E0F2FE` | Info badges, light callout backgrounds               |
| Success         | Green       | `#059669` | Success messages, positive indicators                |
| Error           | Red         | `#DC2626` | Form validation errors                               |

**Why teal:** Teal sits between blue (trust, corporate) and green (growth, success). It reads as modern and trustworthy without defaulting to generic corporate blue. It also has excellent contrast against white backgrounds for accessibility.

### 4.2 Typography

| Element          | Font                    | Weight  | Size (desktop) | Size (mobile) |
|------------------|-------------------------|---------|----------------|---------------|
| H1 (page title)  | Inter                   | 700     | 48px / 3rem    | 32px / 2rem   |
| H2 (section)     | Inter                   | 600     | 36px / 2.25rem | 28px / 1.75rem|
| H3 (subsection)  | Inter                   | 600     | 24px / 1.5rem  | 20px / 1.25rem|
| Body             | Inter                   | 400     | 16px / 1rem    | 16px / 1rem   |
| Body (small)     | Inter                   | 400     | 14px / 0.875rem| 14px / 0.875rem|
| Button text      | Inter                   | 500     | 16px / 1rem    | 16px / 1rem   |
| Nav links        | Inter                   | 500     | 15px / 0.9375rem| 16px / 1rem  |

**Why Inter:** Open-source, excellent readability at all sizes, wide language support, industry standard for clean SaaS/consulting sites. Available via Google Fonts.

**Line height:** 1.6 for body text, 1.2 for headings.

### 4.3 Spacing System

Use an 8px base grid. All spacing values are multiples of 8:

| Token   | Value | Usage                              |
|---------|-------|------------------------------------|
| `xs`    | 4px   | Tight gaps (icon + label)          |
| `sm`    | 8px   | Inline spacing, small gaps         |
| `md`    | 16px  | Default padding, gaps between items|
| `lg`    | 24px  | Section internal padding           |
| `xl`    | 32px  | Card padding, component spacing    |
| `2xl`   | 48px  | Between page sections              |
| `3xl`   | 64px  | Major section breaks               |
| `4xl`   | 96px  | Hero top/bottom padding            |

### 4.4 Component Patterns

**Buttons:**
- Primary: Teal background (`#0D9488`), white text, 8px border-radius, 12px 24px padding
- Secondary: White background, teal border, teal text. Same radius and padding
- Hover: Darken background by one shade, subtle shadow lift

**Cards:**
- White background, 1px border (`#DEE2E6`), 12px border-radius, `xl` padding
- Optional subtle shadow: `0 1px 3px rgba(0,0,0,0.1)`

**Inputs:**
- 1px border (`#DEE2E6`), 8px border-radius, `md` padding
- Focus: teal border, subtle teal ring

### 4.5 Iconography

Use Lucide icons (open-source, consistent, works with React). Icons should be 24px default, stroke width 1.5. Teal color for decorative icons, charcoal for functional icons.

### 4.6 Imagery Strategy

**Phase 1 (launch):** No stock photos. Use abstract geometric patterns, subtle gradients, or icon-based illustrations to avoid the "generic AI company" look. Placeholder slots for future case study images.

**Phase 2 (post-launch):** Add real photos (founder headshot, client logos with permission) as they become available.

---

## 5. Page Specifications

### 5.1 Navigation (Global)

**Desktop:** Horizontal top nav, fixed on scroll. Logo/wordmark left, nav links center or right, CTA button ("Book a Consultation") rightmost.

**Mobile:** Hamburger menu. Logo left, hamburger right. Menu opens as full-width drawer.

**Nav Items:**
- Home
- Services
- About
- Contact (styled as primary button)

### 5.2 Footer (Global)

Three-column layout on desktop, stacked on mobile:
- **Column 1:** Logo/wordmark, tagline, copyright
- **Column 2:** Quick links (same as nav + Privacy Policy)
- **Column 3:** Contact info (email, phone if desired), social links (LinkedIn at minimum)

---

### 5.3 Home Page

**Purpose:** Establish what Skill Tree AI Solutions does, build confidence, drive to consultation

**Sections in order:**

1. **Hero**
   - Headline: "Do more, with AI"
   - Subheading: "Helping businesses reach their goals with Artificial Intelligence"
   - Primary CTA button: "Book a Free Consultation"
   - Optional: subtle background pattern or gradient, no stock photo
   - No auto-playing video or animation beyond subtle CSS transitions

2. **Services Overview**
   - 3–4 cards, one per service offering
   - Each card: icon + title + 2-sentence description + "Learn More" link to Services page
   - Services to feature:
     - Specialized AI Agents
     - AI Consulting
     - Custom AI Development
     - AI Training & Workshops

3. **How It Works**
   - 3-step visual flow: "Tell us your challenge → We design the solution → You see results"
   - Numbered steps, connected by a line or arrow pattern
   - Keep it high-level — this is about the consulting engagement, not a specific product

4. **Social Proof / Trust Section**
   - Headline: "Delivered with your success in mind"
   - Phase 1: 2-3 short benefit statements with icons (e.g., "24/7 Availability", "No Long-Term Contracts", "Built by Engineers")
   - Phase 2: Real testimonials and client logos

5. **CTA Banner**
   - Full-width tinted background (surface color or light teal tint)
   - "Ready to see what AI can do for your business?"
   - Primary button: "Book a Free Consultation"

### 5.4 Services Page

**Purpose:** Detail each service offering so visitors can self-qualify

**Layout:** Single page with sections for each service (anchor-linked from nav or cards)

**Per Service Section:**
- Service name (H2)
- 2-3 paragraph description: what it is, who it's for, what outcomes to expect
- 3-5 bullet points of key features/benefits
- CTA: "Discuss This Service" → links to Contact page with service pre-selected

**Services to detail:**

1. **Specialized AI Agents**
   - Purpose-built AI agents for specific business functions (e.g., phone answering, scheduling, lead qualification, customer support)
   - Target: businesses that want productized AI solutions deployed quickly without custom development
   - Outcomes: 24/7 availability, reduced staffing costs, consistent customer experience, faster response times

2. **AI Consulting**
   - AI strategy assessment, use-case identification, vendor/tool evaluation
   - Target: businesses that know AI matters but don't know where to start
   - Outcomes: clear roadmap, prioritized opportunities, avoid costly missteps

3. **Custom AI Development**
   - Bespoke AI solutions: chatbots, automation, data pipelines, integrations
   - Target: businesses with specific workflow problems that off-the-shelf tools don't solve
   - Outcomes: tailored solution, reduced manual work, competitive advantage

4. **AI Training & Workshops**
   - Hands-on training for teams on AI tools, prompt engineering, workflow automation
   - Target: organizations wanting to upskill employees
   - Outcomes: team confidence with AI, immediate productivity gains

### 5.5 About Page

**Purpose:** Build trust through mission and philosophy (founder section deferred to Phase 2)

**Sections:**

1. **Mission / Philosophy**
   - 1-2 paragraphs on why Skill Tree AI Solutions exists
   - Theme: AI should be practical, accessible, and deliver real business value

2. **Why "Skill Tree"?**
   - Brief, memorable explanation of the name (if there's a story — if not, skip this)

3. **CTA**
   - Same consultation CTA banner as home page

> **Phase 2 addition:** Founder section with name, title, bio (3-4 sentences), headshot photo, and emphasis on engineering background / hands-on builder positioning.

### 5.6 Contact Page

**Purpose:** Convert visitors into leads

**Layout:**

1. **Contact Form** (left or top)
   - Fields:
     - Name (required)
     - Email (required)
     - Phone (optional)
     - Company name (optional)
     - Service interested in (dropdown: Specialized AI Agents / AI Consulting / Custom Development / Training / Not Sure)
     - Message (textarea, required)
   - Submit button: "Send Message"
   - Success state: "Thanks! I'll be in touch within 1 business day."
   - Error state: Inline field validation + summary message

2. **Contact Info** (right or bottom)
   - Email address
   - Phone number (if desired)
   - LinkedIn profile link
   - Business hours or "Typically responds within 24 hours"

---

## 6. Responsive Design Requirements

**Breakpoints:**

| Name    | Min Width | Target Devices              |
|---------|-----------|------------------------------|
| Mobile  | 0px       | Phones                       |
| Tablet  | 768px     | Tablets, small laptops       |
| Desktop | 1024px    | Laptops, desktops            |
| Wide    | 1280px    | Large monitors               |

**Max content width:** 1200px, centered with auto margins

**Mobile-first approach:** Design and build for mobile first, then enhance for larger screens.

**Key mobile behaviors:**
- Nav collapses to hamburger
- Multi-column layouts stack to single column
- Hero text sizes reduce (see typography table)
- Cards stack vertically
- Touch targets minimum 44px × 44px

---

## 7. Technical Specification

### 7.1 Recommended Stack

| Layer           | Technology        | Rationale                                           |
|-----------------|-------------------|-----------------------------------------------------|
| Framework       | Next.js (App Router) | SSR for SEO, file-based routing, great agent/IDE support, React ecosystem |
| Styling         | Tailwind CSS      | Utility-first, fast iteration, consistent spacing, excellent docs |
| Language        | TypeScript        | Type safety, better IDE support, catches errors early |
| Icons           | Lucide React      | Consistent, open-source, tree-shakeable             |
| Font            | Inter (Google Fonts) | Free, high-quality, widely supported              |
| Form handling   | React Hook Form + Zod | Lightweight, type-safe validation                |
| Email delivery  | Resend or Formspree | Contact form submission → email notification      |
| Deployment      | Vercel            | Zero-config for Next.js, free tier is sufficient    |
| Analytics       | Plausible or Vercel Analytics | Privacy-friendly, simple, no cookie banner needed |

### 7.2 Why This Stack for Agentic Development

- **Next.js + TypeScript:** Most AI coding agents (Claude, Cursor, Copilot) have deep training data on this stack. File-based routing makes structure predictable. Type errors surface at build time, not in production.
- **Tailwind CSS:** Agents produce better Tailwind than custom CSS — utility classes are deterministic and composable. No separate stylesheet files to manage.
- **App Router:** Layouts, loading states, and metadata are co-located with pages. An agent can modify a page without understanding the full routing setup.
- **Zod schemas:** Validation logic is declarative and type-safe — agents can generate and modify schemas reliably.

### 7.3 Project Structure

```
skill-tree-web/
├── public/                  # Static assets (favicon, og-image, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (nav, footer, fonts)
│   │   ├── page.tsx         # Home page
│   │   ├── services/
│   │   │   └── page.tsx     # Services page
│   │   ├── about/
│   │   │   └── page.tsx     # About page
│   │   └── contact/
│   │       └── page.tsx     # Contact page
│   ├── components/
│   │   ├── ui/              # Reusable primitives (Button, Card, Input)
│   │   ├── layout/          # Nav, Footer, Container
│   │   └── sections/        # Page-specific sections (Hero, ServiceCard, etc.)
│   └── lib/
│       ├── constants.ts     # Colors, spacing tokens, site metadata
│       └── schemas.ts       # Zod validation schemas
├── tailwind.config.ts       # Tailwind theme (colors, fonts, spacing)
├── tsconfig.json
├── package.json
└── next.config.ts
```

### 7.4 SEO Requirements

- Unique `<title>` and `<meta description>` per page
- Open Graph tags for social sharing (og:title, og:description, og:image)
- Semantic HTML: proper heading hierarchy, landmarks (`<nav>`, `<main>`, `<footer>`)
- `robots.txt` and `sitemap.xml` generation
- Fast load times (target: Lighthouse score > 90 on all categories)

### 7.5 Accessibility Requirements

- WCAG 2.1 AA compliance as the baseline
- All interactive elements keyboard-navigable
- Color contrast ratio ≥ 4.5:1 for text, ≥ 3:1 for large text
- Form inputs have associated labels
- Skip-to-content link
- Alt text on all images
- Focus indicators visible on all interactive elements

---

## 8. Implementation Phases

### Phase 1 — Launch (This Sprint)
- [ ] Project setup (Next.js, Tailwind, TypeScript, file structure)
- [ ] Design system: colors, typography, spacing in Tailwind config
- [ ] Reusable components: Button, Card, Input, Container, Nav, Footer
- [ ] Home page: all 5 sections
- [ ] Services page: all 4 service sections
- [ ] About page: founder section + mission
- [ ] Contact page: working form with validation (email delivery can be Formspree initially)
- [ ] SEO: metadata, sitemap, robots.txt
- [ ] Mobile responsiveness: all pages tested at all breakpoints
- [ ] Deploy to Vercel

### Phase 2 — Enhance (Post-Launch)
- [ ] Add Founder section to About page (name, title, bio, headshot)
- [ ] Client logos / testimonials as they come in
- [ ] Blog section for content marketing
- [ ] Pricing page (once pricing is finalized)
- [ ] Analytics integration
- [ ] Contact form upgrade: replace Formspree with Resend for better control
- [ ] Cal.com embed as alternative booking method

### Phase 3 — Growth
- [ ] Case studies page
- [ ] Interactive demo or product preview for AI Phone Agent
- [ ] FAQ page
- [ ] Newsletter signup
- [ ] A/B testing on hero copy and CTA placement

---

## 9. Content Needed Before Implementation

The following content must be written (or approved as placeholder) before building pages:

| Content                        | Status      | Owner  |
|--------------------------------|-------------|--------|
| Business tagline               | ✅ Final     | —      |
| Home page hero subheading      | ✅ Final     | —      |
| Home page service card descriptions (4) | Placeholder | Mike (review) |
| Home page "How It Works" copy  | Placeholder | Mike (review) |
| Social proof benefit statements | Placeholder | Mike (review) |
| Services page descriptions (4) | Placeholder | Mike (review) |
| Mission / philosophy statement | Placeholder | Mike (review) |
| "Why Skill Tree?" story (optional) | Placeholder | Mike (review) |
| Contact email address          | Placeholder | Mike   |
| Business phone number (optional) | Placeholder | Mike |
| LinkedIn profile URL           | Placeholder | Mike   |
| Founder bio (Phase 2)          | Not started | Mike   |

**Note for agents:** Agents MUST fill all placeholder content with realistic copy that matches the brand voice (professional, trustworthy, clear, approachable). Mark all placeholder text with `{PLACEHOLDER}` so it can be found and replaced later. Use the placeholder copy below as a starting point.

### 9.1 Placeholder Copy Library

Agents should use the following placeholder content during implementation. Wrap each with the `{PLACEHOLDER}` marker in source code comments so it can be located later.

**Hero (final, no placeholder):**
- Headline: "Do more, with AI"
- Subheading: "Helping businesses reach their goals with Artificial Intelligence"
- CTA: "Book a Free Consultation"

**Home — Service Card Descriptions (2 sentences each):**

- *Specialized AI Agents* — "Purpose-built AI agents that handle real business tasks, from answering calls to qualifying leads. Deploy in days, not months."
- *AI Consulting* — "Strategic guidance to identify where AI will deliver the most value for your business. We help you choose the right tools, the right use cases, and the right path forward."
- *Custom AI Development* — "Bespoke AI solutions built around your unique workflows. When off-the-shelf tools aren't enough, we design and build what you need."
- *AI Training & Workshops* — "Hands-on training that gives your team practical skills with today's AI tools. Walk away with real workflows you can use tomorrow."

**Home — How It Works (3 steps):**

1. *Tell us your challenge* — "Share what's slowing your business down. We'll listen carefully and ask the right questions."
2. *We design the solution* — "Our team maps out the right AI approach for your goals, timeline, and budget — no cookie-cutter answers."
3. *You see results* — "We build, deploy, and support the solution so you can focus on running your business."

**Home — Social Proof / Trust Section:**

- Headline: "Delivered with your success in mind"
- Benefit 1 (icon: Clock): "24/7 Availability — AI that works while you sleep"
- Benefit 2 (icon: Shield): "No Long-Term Contracts — start small, scale when ready"
- Benefit 3 (icon: Wrench): "Built by Engineers — hands-on expertise, not resellers"

**Home — CTA Banner:**

- Headline: "Ready to see what AI can do for your business?"
- Subheading: "Book a free consultation. No obligations, no sales pressure."
- Button: "Book a Free Consultation"

**Services Page — Specialized AI Agents:**

- Lead paragraph: "Specialized AI agents are purpose-built digital workers that handle specific business functions around the clock. From answering phones and scheduling appointments to qualifying leads and routing customer inquiries, our agents deliver consistent results without the overhead of hiring, training, and managing additional staff."
- Secondary paragraph: "Each agent is tuned for a specific job — which means faster deployment, more reliable results, and a clear return on investment. We handle the setup, integration, and ongoing tuning so you can focus on running your business."
- Key benefits:
  - Deploy in days, not months
  - 24/7 coverage with no overtime costs
  - Consistent quality on every interaction
  - Seamless integration with your existing tools
  - Transparent performance metrics

**Services Page — AI Consulting:**

- Lead paragraph: "Most businesses know AI matters but aren't sure where to start. Our consulting engagements cut through the hype to identify the specific opportunities where AI will deliver real value for your business — and the ones that aren't worth pursuing yet."
- Secondary paragraph: "We start with a thorough assessment of your workflows, tools, and goals. Then we deliver a clear, prioritized roadmap with concrete next steps, honest tradeoffs, and realistic timelines."
- Key benefits:
  - Unbiased, vendor-neutral recommendations
  - Clear ROI analysis for every proposed initiative
  - Practical roadmap you can execute on
  - Help choosing the right tools and partners
  - Avoid costly missteps and vendor lock-in

**Services Page — Custom AI Development:**

- Lead paragraph: "When off-the-shelf tools can't solve your specific problem, custom development bridges the gap. We design and build tailored AI solutions — chatbots, automation pipelines, data integrations, internal tools — that fit your workflows exactly."
- Secondary paragraph: "Our engineering-first approach means we focus on what works in production, not what looks good in a demo. Every project is built to be maintainable, documented, and handed off cleanly."
- Key benefits:
  - Solutions tailored to your exact requirements
  - Built on proven, well-supported AI platforms
  - Fully documented and maintainable code
  - Integration with your existing systems
  - Clear ownership and IP transfer

**Services Page — AI Training & Workshops:**

- Lead paragraph: "The biggest gap in AI adoption isn't the technology — it's knowing how to use it effectively. Our training sessions give your team hands-on experience with the tools that matter, using real examples from your own business."
- Secondary paragraph: "Workshops are tailored to your team's role and skill level, from non-technical staff learning prompt basics to engineers building production AI features. Every session ends with workflows your team can use immediately."
- Key benefits:
  - Hands-on, practical exercises (not lecture slides)
  - Customized to your team's actual work
  - Leave with workflows you can use tomorrow
  - Covers ChatGPT, Claude, and leading AI tools
  - Remote or on-site delivery

**About Page — Mission / Philosophy:**

- Paragraph 1: "Skill Tree AI Solutions exists to make AI practical, accessible, and genuinely useful for businesses of all sizes. We believe AI should solve real problems, not chase trends — and that the best AI solutions are the ones you barely notice, because they just work."
- Paragraph 2: "We're engineers at heart. That means we care about what gets deployed, not just what gets demoed. Every engagement is built on honest advice, transparent tradeoffs, and a commitment to your long-term success."

**About Page — Why "Skill Tree"?:**

- "In games, a skill tree is how you grow stronger over time — unlocking new abilities, building on what you already know, and choosing the path that fits your goals. That's exactly how we think about AI for businesses. You don't need to transform everything at once. You need the right next skill, at the right time, with a clear path forward."

**Contact Page — Supporting Copy:**

- Form heading: "Tell us about your project"
- Form subheading: "Fill out the form below and we'll get back to you within 1 business day."
- Success message: "Thanks! We've received your message and will be in touch within 1 business day."
- Contact info heading: "Other ways to reach us"
- Response time note: "We typically respond within 24 hours, Monday through Friday."

**Placeholder Contact Details (replace before launch):**

- Email: `hello@skilltreeai.com` `{PLACEHOLDER}`
- Phone: `(555) 123-4567` `{PLACEHOLDER}`
- LinkedIn: `https://linkedin.com/company/skill-tree-ai` `{PLACEHOLDER}`
- Business hours: "Monday–Friday, 9am–5pm PT"

---

## 10. Acceptance Criteria

A page is "done" when it meets ALL of the following:

1. Matches the section spec in this document
2. Renders correctly at all 4 breakpoints (mobile, tablet, desktop, wide)
3. All interactive elements are keyboard-accessible
4. Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
5. No TypeScript errors (`tsc --noEmit` passes)
6. No lint errors (ESLint passes)
7. Content matches brand voice guidelines
8. Primary CTA ("Book a Consultation") is visible without scrolling on desktop
