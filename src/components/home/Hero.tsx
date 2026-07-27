"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/data/hero";
import { site } from "@/data/site";
import { Button } from "@/components/shared/Button";

type HeroProps = {
  slides: HeroSlide[];
};

export function Hero({ slides }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [mobileReady, setMobileReady] = useState<boolean[]>(() =>
    slides.map(() => false),
  );

  useEffect(() => {
    if (slides.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    let cancelled = false;

    slides.forEach((slide, i) => {
      const img = new window.Image();
      img.onload = () => {
        if (!cancelled) {
          setMobileReady((current) => {
            const next = [...current];
            next[i] = true;
            return next;
          });
        }
      };
      img.onerror = () => {
        // Keep desktop fallback when Mimg* is not present yet
      };
      img.src = slide.mobile;
    });

    return () => {
      cancelled = true;
    };
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, i) => {
          const mobileSrc = mobileReady[i] ? slide.mobile : slide.desktop;

          return (
            <div
              key={slide.id}
              className={`hero-slide absolute inset-0 ${i === index ? "is-active" : ""}`}
            >
              <Image
                src={mobileSrc}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                unoptimized
                className="object-cover md:hidden"
                style={
                  slide.mobilePosition
                    ? { objectPosition: slide.mobilePosition }
                    : undefined
                }
              />
              <Image
                src={slide.desktop}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                unoptimized
                className="hidden object-cover md:block"
                style={
                  slide.desktopPosition
                    ? { objectPosition: slide.desktopPosition }
                    : undefined
                }
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/45 to-charcoal/25" />
      </div>

      <div className="sr-only" aria-live="polite">
        {slides[index].alt}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cream/70">
          Performing arts studio · {site.location}
        </p>
        <h1 className="font-display text-5xl leading-[0.95] text-cream-soft font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
          Alekhya
          <span className="text-terracotta-soft">Studio</span>
        </h1>
        <p className="mt-5 max-w-lg text-base text-cream/80 md:text-lg">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/work" variant="primary" size="lg">
            View Work
          </Button>
          <Button href={site.calendly} external variant="secondary" size="lg">
            Book a Consultation
          </Button>
        </div>

        <div
          className="mt-12 flex items-center gap-2"
          role="tablist"
          aria-label="Showreel slides"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              className={[
                "h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
                i === index
                  ? "w-8 bg-terracotta-soft"
                  : "w-3 bg-cream/40 hover:bg-cream/70",
              ].join(" ")}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
