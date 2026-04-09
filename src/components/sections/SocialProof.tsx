import { Clock, Shield, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    body: "AI that works while you sleep — no shifts, no overtime, no missed messages.",
  },
  {
    icon: Shield,
    title: "No Long-Term Contracts",
    body: "Start small, prove the value, and scale when you're ready. No lock-in.",
  },
  {
    icon: Wrench,
    title: "Built by Engineers",
    body: "Hands-on technical expertise, not resellers reading from a vendor script.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Delivered with your success in mind
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Every engagement is built on a few simple principles.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-surface p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-accent">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{b.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
