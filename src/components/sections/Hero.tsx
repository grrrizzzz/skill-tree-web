import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(13,148,136,0.10), transparent 45%), radial-gradient(circle at 80% 100%, rgba(224,242,254,0.7), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <Container>
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-accent-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI consulting, agents & training
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
              Helping businesses reach their goals with Artificial
              Intelligence — practical solutions, built by engineers, deployed
              in days.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={site.cta.href} size="lg">
                {site.cta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg">
                Explore our services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
