import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/shared/Button";
import { ContactFormWithParams } from "@/components/shared/ContactFormWithParams";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a session, request a design, or get a quote — contact AlekhyaStudio via form, WhatsApp, or Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book, request, or enquire"
        description="Choose the path that fits — photography bookings, craft & design requests, or a web quote."
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
                Booking calendar
              </h3>
              <p className="mt-2 text-sm text-charcoal-muted">
                Prefer to pick a time? Open the calendar for consultation and
                session slots.
              </p>
              <div className="mt-4">
                <Button href={site.calendly} external variant="primary">
                  Open calendar
                </Button>
              </div>
              <div
                className="mt-6 flex aspect-[4/3] items-center justify-center border border-dashed border-charcoal/15 bg-cream text-center text-sm text-charcoal-muted"
                aria-hidden
              >
                <p className="max-w-[14rem]">
                  Embed your Calendly or booking widget here when ready.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h2 className="mb-6 font-display text-3xl text-charcoal">
              Send a message
            </h2>
            <ContactFormWithParams />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
