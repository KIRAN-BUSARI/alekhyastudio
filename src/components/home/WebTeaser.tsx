import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { pastSites, webProcess } from "@/data/web";

export function WebTeaser() {
  return (
    <section className="relative overflow-hidden bg-teal px-5 py-20 text-cream md:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(193,80,46,0.22),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Website Design & Development"
              title="Sites that feel like your studio"
              description="Thoughtful process, modern stack, and photography-forward layouts — built to convert inquiries into bookings."
              light
            />
            <Button href="/web" variant="secondary" className="shrink-0 self-start">
              Explore web services
            </Button>
          </div>
        </FadeIn>

        <div className="mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {webProcess.map((item, i) => (
            <FadeIn key={item.step} delay={i * 80}>
              <p className="font-display text-3xl text-terracotta-soft">
                {item.step}
              </p>
              <h3 className="mt-2 font-display text-xl text-cream-soft">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pastSites.map((siteItem, i) => (
            <FadeIn key={siteItem.id} delay={i * 70}>
              <article className="group">
                <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={siteItem.src}
                    alt={siteItem.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-cream/50">
                  {siteItem.category}
                </p>
                <h3 className="font-display text-xl text-cream-soft">
                  {siteItem.title}
                </h3>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="/web#pricing" variant="primary" size="lg">
            Get a Quote
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
