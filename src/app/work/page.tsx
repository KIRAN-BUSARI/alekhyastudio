import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { WorkGallery } from "@/components/work/WorkGallery";
import { CTABanner } from "@/components/shared/CTABanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of dance photography, Rangapravesha invitations, artist branding, websites, and creative design by Alekhya Studio.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work for the classical stage"
        description="Explore photography, invitations, branding, websites, marketing, and creative design for performing artists."
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <WorkGallery />
        </div>
      </section>
      <CTABanner
        title="Ready to create yours?"
        description="Tell us about your art form and milestone — we'll recommend the right path."
        primary={{ href: "/contact", label: "Send an Enquiry" }}
        secondary={{
          href: site.calendly,
          label: "Book a Consultation",
          external: true,
        }}
      />
    </>
  );
}
