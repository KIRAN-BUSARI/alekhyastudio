import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FilterableGallery } from "@/components/photography/FilterableGallery";
import { CTABanner } from "@/components/shared/CTABanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { getService } from "@/data/services";
import { site } from "@/data/site";

const service = getService("photography");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function PhotographyPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Dance photography & classical performance film"
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

      <section className="px-5 py-12 md:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <ul className="flex flex-wrap gap-2">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-charcoal/10 bg-cream-soft px-3 py-1.5 text-sm text-charcoal-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <FilterableGallery />
        </div>
      </section>

      <CTABanner
        title="Planning a Rangapravesha or Arangetram?"
        description="Book classical dance photography and videography with a team that understands the stage."
        primary={{ href: "/contact?service=photo", label: "Book a Shoot" }}
        secondary={{ href: "/invitations", label: "Pair with invitations" }}
      />
    </>
  );
}
