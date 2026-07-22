import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { DesignShowcase } from "@/components/design/DesignShowcase";
import { FadeIn } from "@/components/shared/FadeIn";
import { CTABanner } from "@/components/shared/CTABanner";
import { brandDeliverables } from "@/data/design";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Invitation design and brand identity — logos, brand kits, and mockup-ready visual systems by AlekhyaStudio.",
};

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Graphic Design"
        title="Invitations & brand recognition"
        description="Before-and-after stories of invitation suites and boutique brand systems — crafted to feel personal and polished."
      >
        <Button href="/contact?service=design" variant="primary" size="lg">
          Request a Design
        </Button>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <DesignShowcase />

          <FadeIn className="mt-24 border-t border-charcoal/10 pt-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
              Brand kits
            </p>
            <h2 className="mt-2 font-display text-3xl text-charcoal md:text-4xl">
              What a brand package includes
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {brandDeliverables.map((item) => (
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
        title="Have an invitation date in mind?"
        description="Share your event details and we'll propose a design direction within a few days."
        primary={{ href: "/contact?service=design", label: "Request a Design" }}
        secondary={{ href: "/photography", label: "Pair with photography" }}
      />
    </>
  );
}
