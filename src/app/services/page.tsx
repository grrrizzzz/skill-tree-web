import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specialized AI agents, AI consulting, custom AI development, and training. Practical AI services from Skill Tree AI Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent-hover">
              Services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Practical AI, four ways
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Whether you need a turnkey solution, expert guidance, custom
              engineering, or training for your team — we&apos;ll meet you
              where you are.
            </p>
            <nav
              aria-label="Services on this page"
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.slug}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="space-y-24">
            {services.map((service, idx) => (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-24"
              >
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <p className="text-sm font-medium uppercase tracking-wide text-accent">
                      0{idx + 1} — Service
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                      {service.lead}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                      {service.secondary}
                    </p>
                    <ButtonLink
                      href={`/contact?service=${service.id}`}
                      className="mt-8"
                    >
                      Discuss this service
                    </ButtonLink>
                  </div>

                  <aside className="lg:col-span-5">
                    <div className="rounded-2xl border border-border bg-surface p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                        Key benefits
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-sm text-text-primary"
                          >
                            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Check
                                size={14}
                                strokeWidth={2.5}
                                aria-hidden="true"
                              />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
