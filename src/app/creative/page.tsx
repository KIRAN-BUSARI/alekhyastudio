import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { getService } from "@/data/services";
import { creativeProjects } from "@/data/creative";
import { site } from "@/data/site";

const service = getService("creative");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function CreativePage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Creative design & event branding"
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
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Studio craft"
              title="Posters, certificates, and event worlds"
              description="Design that supports performances, academies, and cultural gatherings."
            />
          </FadeIn>

          <div className="mt-12 masonry">
            {creativeProjects.map((item, i) => (
              <FadeIn key={item.id} delay={i * 40}>
                <article className="img-zoom relative mb-4 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={700}
                    height={560}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                  <div className="mt-2 mb-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-charcoal-muted">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg text-charcoal">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need posters or event branding?"
        description="From certificates to merchandise concepts — designed for classical performances."
        primary={{
          href: "/contact?service=creative",
          label: "Request Creative Work",
        }}
        secondary={{ href: "/marketing", label: "Promote the event" }}
      />
    </>
  );
}
