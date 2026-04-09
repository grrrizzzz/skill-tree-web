import Link from "next/link";
import { Bot, Compass, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { services, type Service } from "@/lib/site";

const iconMap = {
  Bot,
  Compass,
  Wrench,
  GraduationCap,
} as const;

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What we help with
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Four focused services. Each one built around real business
            outcomes — not technology for its own sake.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent-hover">
        <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm text-text-secondary">
        {service.shortDescription}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        Learn more
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </Card>
  );
}
