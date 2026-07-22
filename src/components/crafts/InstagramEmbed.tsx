import Image from "next/image";
import { site } from "@/data/site";
import { instagramFeed } from "@/data/crafts";

export function InstagramEmbed() {
  return (
    <section className="mt-20 border-t border-charcoal/10 pt-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">
            Instagram
          </p>
          <h2 className="mt-2 font-display text-3xl text-charcoal md:text-4xl">
            Craft stories in the feed
          </h2>
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-charcoal-muted underline-offset-4 transition hover:text-terracotta hover:underline"
        >
          Open Instagram profile
        </a>
      </div>

      {/* Instagram-style embed grid — links out to live profile */}
      <blockquote className="sr-only">
        Follow {site.name} on Instagram for arts and crafts updates.
      </blockquote>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
        {instagramFeed.map((item) => (
          <li key={item.id}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="img-zoom relative block aspect-square overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
