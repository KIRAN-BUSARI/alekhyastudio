import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/shared/Button";
import { photographyItems } from "@/data/photography";

export function SignatureOffering() {
  const image =
    photographyItems.find((item) => item.id === "p3") ?? photographyItems[0];

  return (
    <section className="relative overflow-hidden bg-teal px-5 py-20 text-cream md:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(193,80,46,0.25),transparent_40%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="img-zoom relative aspect-[4/5] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta-soft">
            Signature offering
          </p>
          <h2 className="mt-4 font-display text-4xl text-cream-soft md:text-5xl">
            Rangapravesha &amp; Arangetram, held with care
          </h2>
          <p className="mt-5 text-cream/75 leading-relaxed">
            Debut photography and invitation design crafted for classical
            milestones — Bharatanatyam, Kathak, and beyond. We document the
            stage and invite the guest list with the same quiet luxury.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/photography" variant="primary">
              Book a Shoot
            </Button>
            <Button href="/invitations" variant="secondary">
              Request an Invitation
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
