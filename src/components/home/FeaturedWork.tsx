import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { featuredWork } from "@/data/work";

export function FeaturedWork() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A quiet gallery of stage and story"
              description="Dance photography, invitation suites, and brand worlds — curated for classical artists."
            />
            <Button href="/work" variant="ghost" className="shrink-0 self-start">
              View full portfolio
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {featuredWork.map((item, i) => (
            <FadeIn key={item.id} delay={i * 50}>
              <Link
                href="/work"
                className={[
                  "img-zoom group relative block overflow-hidden",
                  i === 0 || i === 3
                    ? "md:row-span-2 min-h-[260px] md:min-h-[420px]"
                    : "min-h-[170px] md:min-h-[200px]",
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
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/75 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
                  <p className="text-sm text-cream-soft">{item.title}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
