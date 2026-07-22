import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/shared/Button";
import { ContactFormWithParams } from "@/components/shared/ContactFormWithParams";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation or enquire about dance photography, Rangapravesha invitations, branding, websites, and marketing with Alekhya Studio in Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book, enquire, or consult"
        description="Choose photography, invitations, branding, websites, marketing, or creative — or schedule a consultation."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <h2 className="font-display text-3xl text-charcoal">Studio details</h2>
            <dl className="mt-8 space-y-6 text-charcoal-muted">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-charcoal/50">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-charcoal transition hover:text-terracotta"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-charcoal/50">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-charcoal transition hover:text-terracotta"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-charcoal/50">
                  Location
                </dt>
                <dd className="mt-1 text-charcoal">{site.location}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.whatsapp} external variant="teal">
                WhatsApp
              </Button>
              <Button href={site.instagram} external variant="ghost">
                Instagram
              </Button>
            </div>

            <div className="mt-10 border border-charcoal/10 bg-cream-soft p-6">
              <h3 className="font-display text-2xl text-charcoal">
                Consultation calendar
              </h3>
              <p className="mt-2 text-sm text-charcoal-muted">
                Prefer to pick a time? Open the calendar for consultation slots.
              </p>
              <div className="mt-4">
                <Button href={site.calendly} external variant="primary">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h2 className="mb-6 font-display text-3xl text-charcoal">
              Send an enquiry
            </h2>
            <ContactFormWithParams />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
