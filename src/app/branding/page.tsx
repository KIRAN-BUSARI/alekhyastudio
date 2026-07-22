import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { getService } from "@/data/services";
import { brandingDeliverables, brandingProjects } from "@/data/branding";
import { site } from "@/data/site";

const service = getService("branding");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function BrandingPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Artist & dance school branding"
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
          <div className="grid gap-10 md:grid-cols-2">
            {brandingProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 70}>
                <article>
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-terracotta">
                    {project.type}
                  </p>
                  <h2 className="mt-1 font-display text-3xl text-charcoal">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-charcoal-muted">{project.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <SectionHeading
              eyebrow="Brand kits"
              title="What a brand package includes"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {brandingDeliverables.map((item) => (
                <li
                  key={item}
                  className="border border-charcoal/10 bg-cream-soft px-5 py-4 text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Build a brand that matches the stage"
        description="From dance logo design to full academy identity — crafted with cultural fluency."
        primary={{ href: "/contact?service=branding", label: "Start Branding" }}
        secondary={{ href: "/websites", label: "Pair with a website" }}
      />
    </>
  );
}
