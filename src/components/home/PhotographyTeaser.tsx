import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { photographyItems } from "@/data/photography";

const preview = photographyItems.filter((item) =>
  ["p1", "p3", "p5", "p7", "p10", "p13"].includes(item.id),
);

export function PhotographyTeaser() {
  return (
    <section className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Photography & Videography"
              title="Light that holds a moment"
              description="Outdoor sessions, Arangetram photo & film, portfolio shoots, and headshots — crafted with warmth and cultural sensitivity."
            />
            <Button href="/photography" variant="ghost" className="shrink-0 self-start md:self-auto">
              View full gallery
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              <Link
                href="/photography"
                className={[
                  "img-zoom group relative block overflow-hidden",
                  i === 0 || i === 3 ? "md:row-span-2 min-h-[280px] md:min-h-[420px]" : "min-h-[180px] md:min-h-[200px]",
                ].join(" ")}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
                  <p className="text-sm text-cream-soft">{item.title}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/contact?service=photo" variant="primary">
            Book a Shoot
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
