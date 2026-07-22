import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { craftItems } from "@/data/crafts";
import { site } from "@/data/site";

export function ArtsCraftsTeaser() {
  const preview = craftItems.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-cream-deep/60 px-5 py-20 md:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Arts & Crafts"
              title="Handmade décor with soul"
              description="Props, stage florals, ceremonial pieces, and gifting — including a dedicated Arangetram craft collection."
            />
            <Button href="/arts-crafts" variant="ghost" className="shrink-0 self-start">
              Explore crafts
            </Button>
          </div>
        </FadeIn>

        <div className="masonry">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={i * 50}>
              <Link
                href="/arts-crafts"
                className="img-zoom group relative mb-4 block overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={item.height === "tall" ? 800 : item.height === "short" ? 420 : 560}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/65 to-transparent p-3 text-sm text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.title}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact?service=crafts" variant="teal">
            Request a Design
          </Button>
          <Button href={site.instagram} external variant="ghost">
            Follow on Instagram
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
