import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  PricingTiers,
  ProcessSteps,
  TechStack,
} from "@/components/web/WebSections";
import { CTABanner } from "@/components/shared/CTABanner";
import { getService } from "@/data/services";
import { pastSites } from "@/data/web";
import { site } from "@/data/site";

const service = getService("websites");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Artist portfolio & institute websites"
        description={service.description}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={service.cta.href} variant="primary" size="lg">
            {service.cta.label}
          </Button>
          <Button href={site.whatsapp} external variant="secondary" size="lg">
            WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20">
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Process"
                title="How we build artist websites"
                description="A clear four-step journey from discovery to launch."
              />
            </FadeIn>
            <div className="mt-12">
              <ProcessSteps />
            </div>
          </div>

          <div>
            <FadeIn>
              <SectionHeading eyebrow="Stack" title="Modern, maintainable tools" />
            </FadeIn>
            <FadeIn className="mt-8">
              <TechStack />
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Selected sites"
                title="Past websites"
                description="Portfolios and institutes designed for bookings and credibility."
              />
            </FadeIn>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pastSites.map((item, i) => (
                <FadeIn key={item.id} delay={i * 70}>
                  <article>
                    <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-charcoal-muted">
                      {item.category}
                    </p>
                    <h3 className="font-display text-2xl text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal-muted">
                      {item.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Investment"
                title="Website packages"
                description="Transparent starting points — every project is scoped to your art and audience."
              />
            </FadeIn>
            <div className="mt-12">
              <PricingTiers />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a dance institute or artist website?"
        description="Get a quote for portfolio sites, academy sites, and redesigns built for enquiries."
        primary={{ href: "/contact?service=web", label: "Get a Website Quote" }}
        secondary={{
          href: site.calendly,
          label: "Book a call",
          external: true,
        }}
      />
    </>
  );
}
