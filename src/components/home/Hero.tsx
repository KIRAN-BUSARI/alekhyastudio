"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/photography";
import { site } from "@/data/site";
import { Button } from "@/components/shared/Button";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0" aria-hidden>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0 ${i === index ? "is-active" : ""}`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(43,38,32,0.35)_100%)]" />
      </div>

      {/* Visually hidden live region for slideshow alt text accessibility */}
      <div className="sr-only" aria-live="polite">
        {heroSlides[index].alt}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cream/70">
          Creative studio · {site.location}
        </p>
        <h1 className="font-display text-5xl leading-[0.95] text-cream-soft sm:text-6xl md:text-7xl lg:text-8xl">
          Alekhya
          <span className="text-terracotta-soft">Studio</span>
        </h1>
        <p className="mt-5 max-w-md text-base text-cream/80 md:text-lg">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/photography" variant="primary" size="lg">
            View Portfolio
          </Button>
          <Button href={site.calendly} external variant="secondary" size="lg">
            Book a Session
          </Button>
        </div>

        <div
          className="mt-12 flex items-center gap-2"
          role="tablist"
          aria-label="Showreel slides"
        >
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              className={[
                "h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
                i === index ? "w-8 bg-terracotta-soft" : "w-3 bg-cream/40 hover:bg-cream/70",
              ].join(" ")}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
