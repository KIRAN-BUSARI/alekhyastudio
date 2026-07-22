import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { designProjects } from "@/data/design";

export function DesignTeaser() {
  const featured = designProjects[0];

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Design"
              title="Invitations & brand worlds"
              description="From Arangetram invitation suites to boutique brand kits — designed to feel personal, tactile, and timeless."
            />
            <Button href="/design" variant="ghost" className="shrink-0 self-start">
              See design work
            </Button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <figure className="relative">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-charcoal-muted">
                Before
              </p>
              <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featured.before.src}
                  alt={featured.before.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="relative">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-terracotta">
                After
              </p>
              <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featured.after.src}
                  alt={featured.after.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl text-charcoal">
                {featured.title}
              </h3>
              <p className="mt-1 max-w-xl text-charcoal-muted">
                {featured.description}
              </p>
            </div>
            <Button href="/contact?service=design" variant="primary">
              Request a Design
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
