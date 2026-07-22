import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Everything an artist needs to be seen"
            description="Photography, invitations, branding, websites, marketing, and creative design — focused on classical performing arts."
          />
        </FadeIn>

        <ul className="mt-14 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 40}>
              <li className="group grid gap-4 py-8 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-8">
                <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
                  {service.eyebrow}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-charcoal md:text-3xl">
                    <Link
                      href={service.href}
                      className="transition hover:text-terracotta"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl text-charcoal-muted">
                    {service.summary}
                  </p>
                </div>
                <Link
                  href={service.cta.href}
                  className="text-sm font-medium text-teal underline-offset-4 transition hover:text-terracotta hover:underline md:justify-self-end"
                >
                  {service.cta.label}
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm tracking-wide text-charcoal-muted underline-offset-4 transition hover:text-terracotta hover:underline"
          >
            Explore all services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
