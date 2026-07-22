"use client";

import Image from "next/image";
import { useState } from "react";
import { designProjects } from "@/data/design";
import { Button } from "@/components/shared/Button";

export function DesignShowcase() {
  return (
    <div className="space-y-20">
      {designProjects.map((project) => (
        <BeforeAfter key={project.id} project={project} />
      ))}
      <div className="text-center">
        <Button href="/contact?service=design" variant="primary" size="lg">
          Request a Design
        </Button>
      </div>
    </div>
  );
}

function BeforeAfter({
  project,
}: {
  project: (typeof designProjects)[number];
}) {
  const [showAfter, setShowAfter] = useState(true);
  const active = showAfter ? project.after : project.before;

  return (
    <article>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
            {project.type === "invitation" ? "Invitation" : "Brand identity"}
          </p>
          <h2 className="mt-1 font-display text-3xl text-charcoal md:text-4xl">
            {project.title}
          </h2>
          <p className="mt-2 max-w-2xl text-charcoal-muted">
            {project.description}
          </p>
        </div>
        <div
          className="flex rounded-sm bg-cream-deep p-1"
          role="group"
          aria-label={`Toggle before and after for ${project.title}`}
        >
          <button
            type="button"
            className={[
              "rounded-sm px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
              !showAfter ? "bg-cream text-charcoal shadow-sm" : "text-charcoal-muted",
            ].join(" ")}
            aria-pressed={!showAfter}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            type="button"
            className={[
              "rounded-sm px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
              showAfter ? "bg-cream text-charcoal shadow-sm" : "text-charcoal-muted",
            ].join(" ")}
            aria-pressed={showAfter}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>
      </div>

      <div className="img-zoom relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-charcoal/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cream">
          {showAfter ? "After" : "Before"}
        </span>
      </div>

      <div className="mt-4 hidden gap-4 md:grid md:grid-cols-2">
        <div className="img-zoom relative aspect-[4/3] overflow-hidden opacity-90">
          <Image
            src={project.before.src}
            alt={project.before.alt}
            fill
            sizes="50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="img-zoom relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.after.src}
            alt={project.after.alt}
            fill
            sizes="50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
