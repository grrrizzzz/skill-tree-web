import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Skill Tree AI Solutions. Book a free consultation — no obligations, no sales pressure.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-accent-hover">
              Contact
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Tell us what you&apos;re trying to solve. We&apos;ll respond
              within one business day with honest, useful next steps.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-border bg-white p-10 text-text-secondary">
                    Loading form…
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-lg font-semibold text-text-primary">
                  Other ways to reach us
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="group inline-flex items-start gap-3 text-text-primary"
                    >
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-accent">
                        <Mail size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-text-secondary">
                          Email
                        </span>
                        <span className="block font-medium group-hover:text-accent">
                          {site.contact.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
                      className="group inline-flex items-start gap-3 text-text-primary"
                    >
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-accent">
                        <Phone size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-text-secondary">
                          Phone
                        </span>
                        <span className="block font-medium group-hover:text-accent">
                          {site.contact.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-start gap-3 text-text-primary"
                    >
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-accent">
                        <LinkedInIcon size={18} />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-text-secondary">
                          LinkedIn
                        </span>
                        <span className="block font-medium group-hover:text-accent">
                          Connect with us
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-secondary text-accent-hover">
                    <Clock size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      Response time
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      We typically respond within 24 hours, Monday through
                      Friday. {site.contact.hours}.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
