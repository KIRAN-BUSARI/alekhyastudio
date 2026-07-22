import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function Manifesto() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
          Our purpose
        </p>
        <h2 className="mt-5 font-display text-3xl leading-snug text-charcoal md:text-5xl">
          {site.mission}
        </h2>
      </FadeIn>
    </section>
  );
}
