"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  craftCategories,
  craftItems,
  type CraftCategory,
} from "@/data/crafts";
import { Button } from "@/components/shared/Button";
import { site } from "@/data/site";

export function MasonryGrid() {
  const [active, setActive] = useState<CraftCategory>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? craftItems
        : craftItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter crafts by collection"
      >
        {craftCategories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={[
                "rounded-sm px-4 py-2 text-sm tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
                selected
                  ? "bg-teal text-cream-soft"
                  : "bg-cream-deep text-charcoal-muted hover:text-charcoal",
              ].join(" ")}
              onClick={() => setActive(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {active === "arangetram" ? (
        <p className="mb-8 max-w-2xl text-charcoal-muted">
          Arangetram collection — garlands, stage décor, ceremonial trays, and
          keepsake gifting pieces designed for debut performances.
        </p>
      ) : null}

      <div className="masonry">
        {items.map((item) => (
          <article key={item.id} className="img-zoom relative overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={
                item.height === "tall" ? 900 : item.height === "short" ? 480 : 640
              }
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <div className="mt-2 mb-4 px-0.5">
              <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
              <p className="text-xs uppercase tracking-[0.14em] text-charcoal-muted">
                {craftCategories.find((c) => c.id === item.category)?.label}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button href="/contact?service=crafts" variant="primary" size="lg">
          Request a Design
        </Button>
        <Button href={site.instagram} external variant="ghost" size="lg">
          See more on Instagram
        </Button>
      </div>
    </div>
  );
}
