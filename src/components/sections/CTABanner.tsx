import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-white px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 0%, rgba(13,148,136,0.10), transparent 50%), radial-gradient(circle at 0% 100%, rgba(224,242,254,0.6), transparent 50%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Ready to see what AI can do for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
              Book a free consultation. No obligations, no sales pressure —
              just a clear conversation about what&apos;s possible.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={site.cta.href} size="lg">
                {site.cta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
