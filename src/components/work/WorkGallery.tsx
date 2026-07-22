"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  workCategories,
  workItems,
  type WorkCategory,
} from "@/data/work";
import { Button } from "@/components/shared/Button";

export function WorkGallery() {
  const [active, setActive] = useState<WorkCategory>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? workItems
        : workItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <div>
      <div
        className="mb-10 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Filter work by category"
      >
        {workCategories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={[
                "shrink-0 rounded-sm px-4 py-2 text-sm tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
                selected
                  ? "bg-terracotta text-cream-soft"
                  : "bg-cream-deep text-charcoal-muted hover:text-charcoal",
              ].join(" ")}
              onClick={() => setActive(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <article>
              <div
                className={[
                  "img-zoom relative overflow-hidden",
                  item.aspect === "landscape"
                    ? "aspect-[4/3]"
                    : item.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[3/4]",
                ].join(" ")}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-charcoal-muted">
                  {workCategories.find((c) => c.id === item.category)?.label}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-14 text-center">
        <Button href="/contact" variant="primary" size="lg">
          Enquire about a project
        </Button>
      </div>
    </div>
  );
}
