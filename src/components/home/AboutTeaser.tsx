import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { about } from "@/data/about";

export function AboutTeaser() {
  const person = about.team[0];

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="img-zoom relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:max-w-none">
            <Image
              src={person.src}
              alt={person.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <SectionHeading
            eyebrow="About the studio"
            title={about.headline}
            description={about.story[0]}
          />
          <p className="mt-4 max-w-xl text-charcoal-muted">{about.story[1]}</p>
          <p className="mt-6 text-sm font-medium text-charcoal">
            {person.name}
            <span className="font-normal text-charcoal-muted"> · {person.role}</span>
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Read our story
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
