import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/shared/Button";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Enquire"
            title="Begin a conversation"
            description="Book a consultation, or send a few details — we'll guide the right next step for your art."
          />
          <ul className="mt-8 space-y-4 text-charcoal-muted">
            <li>
              <span className="block text-xs uppercase tracking-[0.16em] text-charcoal/50">
                Email
              </span>
              <a
                href={`mailto:${site.email}`}
                className="text-charcoal transition hover:text-terracotta"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.16em] text-charcoal/50">
                Location
              </span>
              {site.location}
            </li>
            <li className="flex flex-wrap gap-3 pt-2">
              <Button href={site.whatsapp} external variant="teal" size="sm">
                WhatsApp
              </Button>
              <Button href={site.calendly} external variant="primary" size="sm">
                Book a Consultation
              </Button>
            </li>
          </ul>
        </FadeIn>
        <FadeIn delay={100}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
