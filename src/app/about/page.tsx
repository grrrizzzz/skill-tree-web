import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skill Tree AI Solutions exists to make AI practical, accessible, and genuinely useful for businesses of all sizes.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent-hover">
              About
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              AI that solves real problems
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              We&apos;re engineers who care about what gets deployed — not
              what gets demoed.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Skill Tree AI Solutions exists to make AI practical,
                accessible, and genuinely useful for businesses of all sizes.
                We believe AI should solve real problems, not chase trends —
                and that the best AI solutions are the ones you barely
                notice, because they just work.
              </p>
              <p>
                We&apos;re engineers at heart. That means we care about what
                gets deployed, not just what gets demoed. Every engagement is
                built on honest advice, transparent tradeoffs, and a
                commitment to your long-term success.
              </p>
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                Why &ldquo;Skill Tree&rdquo;?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                In games, a skill tree is how you grow stronger over time —
                unlocking new abilities, building on what you already know,
                and choosing the path that fits your goals. That&apos;s
                exactly how we think about AI for businesses. You don&apos;t
                need to transform everything at once. You need the right
                next skill, at the right time, with a clear path forward.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Engineering-led",
                  body: "Hands-on builders, not slide-deck consultants.",
                },
                {
                  label: "Vendor-neutral",
                  body: "We recommend what works, not what pays a referral fee.",
                },
                {
                  label: "Outcomes first",
                  body: "Every project is measured against real business value.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
