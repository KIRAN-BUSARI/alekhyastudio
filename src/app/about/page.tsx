import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/shared/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { about } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, philosophy, and people behind AlekhyaStudio — a boutique creative practice in Bangalore.",
};

export default function AboutPage() {
  const person = about.team[0];

  return (
    <>
      <PageHero
        eyebrow="About"
        title={about.headline}
        description="A boutique studio devoted to photography, craft, and design — culturally rooted, warmly modern."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <FadeIn>
            <div className="img-zoom relative aspect-[4/5] overflow-hidden">
              <Image
                src={person.src}
                alt={person.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 font-display text-2xl text-charcoal">
              {person.name}
            </p>
            <p className="text-sm text-charcoal-muted">{person.role}</p>
            <p className="mt-3 text-charcoal-muted">{person.bio}</p>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
                Our story
              </p>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-charcoal-muted">
                {about.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="mt-14">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
                Philosophy
              </p>
              <ul className="mt-6 space-y-6">
                {about.philosophy.map((item) => (
                  <li key={item.title} className="border-l-2 border-teal/40 pl-5">
                    <h2 className="font-display text-2xl text-charcoal">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-charcoal-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn className="mt-10">
              <Button href="/contact" variant="primary">
                Say hello
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        title="Work with us"
        description={`Based in ${site.location} — available for sessions, crafts, design, and web projects.`}
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: site.calendly, label: "Book a Session", external: true }}
      />
    </>
  );
}
