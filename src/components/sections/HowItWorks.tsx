import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "Tell us your challenge",
    body: "Share what's slowing your business down. We'll listen carefully and ask the right questions.",
  },
  {
    title: "We design the solution",
    body: "Our team maps out the right AI approach for your goals, timeline, and budget — no cookie-cutter answers.",
  },
  {
    title: "You see results",
    body: "We build, deploy, and support the solution so you can focus on running your business.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A simple, three-step engagement designed to deliver value quickly
            and minimize risk.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-border bg-white p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent md:block"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
