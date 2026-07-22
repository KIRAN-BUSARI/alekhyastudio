import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { audiences } from "@/data/site";

export function Audience() {
  return (
    <section className="border-y border-charcoal/8 bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Who we serve"
            title="Made for the performing arts ecosystem"
            description="Artists, institutions, and families preparing for debuts — everyone who needs presence with cultural grace."
          />
        </FadeIn>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {audiences.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <li>
                <h3 className="font-display text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">{item.text}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
