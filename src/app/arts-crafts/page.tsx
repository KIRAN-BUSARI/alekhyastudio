import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { MasonryGrid } from "@/components/crafts/MasonryGrid";
import { InstagramEmbed } from "@/components/crafts/InstagramEmbed";
import { CTABanner } from "@/components/shared/CTABanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Arts & Crafts",
  description:
    "Handcrafted décor, props, and Arangetram-specific crafts — garlands, stage décor, ceremonial and gifting items.",
};

export default function ArtsCraftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Arts & Crafts"
        title="Handmade pieces for celebrations"
        description="An Instagram-inspired masonry of décor and props — with a dedicated Arangetram craft collection."
      >
        <Button href="/contact?service=crafts" variant="primary" size="lg">
          Request a Design
        </Button>
      </PageHero>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <MasonryGrid />
          <InstagramEmbed />
        </div>
      </section>
      <CTABanner
        title="Need custom stage décor?"
        description="From floral torans to return favours — we craft pieces that photograph beautifully."
        primary={{ href: "/contact?service=crafts", label: "Request a Design" }}
        secondary={{
          href: site.instagram,
          label: "Instagram",
          external: true,
        }}
      />
    </>
  );
}
