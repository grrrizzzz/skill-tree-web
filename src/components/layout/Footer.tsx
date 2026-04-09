import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-text-secondary">
              {site.tagline}. Helping businesses reach their goals with
              practical, engineering-led artificial intelligence.
            </p>
            <p className="text-xs text-text-secondary">
              © {year} {site.name}. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent"
                >
                  <Mail size={16} aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent"
                >
                  <Phone size={16} aria-hidden="true" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
              </li>
              <li className="pt-2 text-xs text-text-secondary">
                {site.contact.hours}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
