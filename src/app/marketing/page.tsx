import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { getService } from "@/data/services";
import { marketingOffers, marketingProcess } from "@/data/marketing";
import { site } from "@/data/site";

const service = getService("marketing");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function MarketingPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Digital marketing for classical artists"
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
                eyebrow="Offerings"
                title="Elegant presence, consistent reach"
              />
            </FadeIn>
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {marketingOffers.map((offer, i) => (
                <FadeIn key={offer.title} delay={i * 60}>
                  <li className="border-l-2 border-teal/40 pl-5">
                    <h3 className="font-display text-2xl text-charcoal">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-charcoal-muted">{offer.text}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <FadeIn>
            <SectionHeading eyebrow="Approach" title="How we work together" />
            <ol className="mt-8 space-y-4">
              {marketingProcess.map((step, index) => (
                <li key={step} className="flex gap-4 text-charcoal">
                  <span className="font-display text-xl text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Grow with grace"
        description="Instagram branding, content, event promotion, and SEO — designed for performing artists."
        primary={{ href: "/contact?service=marketing", label: "Plan Marketing" }}
        secondary={{ href: "/branding", label: "Need a brand first?" }}
      />
    </>
  );
}
