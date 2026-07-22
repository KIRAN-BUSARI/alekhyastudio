import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FilterableGallery } from "@/components/photography/FilterableGallery";
import { CTABanner } from "@/components/shared/CTABanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Photography & Videography",
  description:
    "Outdoor photography, Arangetram photo & film, portfolio shoots, and professional headshots by AlekhyaStudio.",
};

export default function PhotographyPage() {
  return (
    <>
      <PageHero
        eyebrow="Photography & Videography"
        title="Portfolio of light and movement"
        description="Filter by outdoor, Arangetram, portfolio, headshots, or videography — then book a session when you're ready."
      >
        <Button href={site.calendly} external variant="primary" size="lg">
          Book a Shoot
        </Button>
      </PageHero>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FilterableGallery />
        </div>
      </section>
      <CTABanner
        title="Ready for your session?"
        description="Tell us the occasion, location, and vibe — we'll craft a shoot plan around you."
        primary={{ href: site.calendly, label: "Book a Shoot", external: true }}
        secondary={{ href: "/contact?service=photo", label: "Ask a Question" }}
      />
    </>
  );
}
