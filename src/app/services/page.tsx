import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/shared/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services for Performing Artists",
  description:
    "Dance photography, Rangapravesha invitations, artist branding, portfolio websites, classical dance marketing, and creative design by Alekhya Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete creative practice for artists"
        description="Six offerings designed around classical dance, music, and the institutions that nurture them."
      >
        <Button href="/contact" variant="primary" size="lg">
          Start an Enquiry
        </Button>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 40}>
                <li className="grid gap-6 py-10 lg:grid-cols-[1fr_1.2fr_auto] lg:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-2 font-display text-3xl text-charcoal md:text-4xl">
                      <Link
                        href={service.href}
                        className="transition hover:text-terracotta"
                      >
                        {service.title}
                      </Link>
                    </h2>
                  </div>
                  <div>
                    <p className="text-charcoal-muted">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
                      {service.highlights.slice(0, 4).map((item, index, arr) => (
                        <li
                          key={item}
                          className="text-xs uppercase tracking-[0.12em] text-charcoal/55"
                        >
                          {item}
                          {index < arr.length - 1 ? (
                            <span className="mx-2 text-charcoal/25">·</span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                    <Button href={service.href} variant="ghost" size="sm">
                      Learn more
                    </Button>
                    <Button href={service.cta.href} variant="primary" size="sm">
                      {service.cta.label}
                    </Button>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        title="Not sure where to begin?"
        description="Book a consultation — we'll map photography, invitations, branding, or web to your milestone."
        primary={{
          href: site.calendly,
          label: "Book a Consultation",
          external: true,
        }}
        secondary={{ href: "/work", label: "View work first" }}
      />
    </>
  );
}
