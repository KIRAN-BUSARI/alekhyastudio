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
import { pastSites } from "@/data/web";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Website Design & Development",
  description:
    "Process, tech stack, past sites, and pricing tiers for boutique websites by AlekhyaStudio.",
};

export default function WebPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Design & Development"
        title="Digital homes for creative work"
        description="From one-page portfolios to multi-page studio sites — designed for beauty, clarity, and bookings."
      >
        <Button href="/contact?service=web" variant="primary" size="lg">
          Get a Quote
        </Button>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20">
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Process"
                title="How we build"
                description="A clear four-step journey from discovery to launch — collaborative and calm."
              />
            </FadeIn>
            <div className="mt-12">
              <ProcessSteps />
            </div>
          </div>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Tech stack"
                title="Modern, maintainable tools"
                description="We choose stacks that stay fast, accessible, and easy for you to update."
              />
            </FadeIn>
            <FadeIn className="mt-8">
              <TechStack />
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Selected work"
                title="Past sites"
                description="A glimpse of digital experiences we've shaped for creative clients."
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
                title="Pricing tiers"
                description="Transparent starting points — every project is scoped to your needs. Prefer a custom path? Ask for a quote."
              />
            </FadeIn>
            <div className="mt-12">
              <PricingTiers />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for a new site?"
        description="Tell us about your studio, pages, and timeline — we'll send a thoughtful proposal."
        primary={{ href: "/contact?service=web", label: "Get a Quote" }}
        secondary={{ href: site.calendly, label: "Book a call", external: true }}
      />
    </>
  );
}
