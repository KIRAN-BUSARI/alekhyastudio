import { existsSync, statSync } from "fs";
import { join } from "path";

export type HeroSlide = {
  id: string;
  desktop: string;
  mobile: string;
  alt: string;
  /** CSS object-position for desktop crop (e.g. "62% center") */
  desktopPosition?: string;
  /** CSS object-position for mobile crop */
  mobilePosition?: string;
};

function withCacheBust(publicPath: string) {
  try {
    const full = join(process.cwd(), "public", publicPath);
    if (!existsSync(full)) return publicPath;
    const mtime = Math.floor(statSync(full).mtimeMs);
    return `${publicPath}?v=${mtime}`;
  } catch {
    return publicPath;
  }
}

function slide(
  n: number,
  alt: string,
  positions?: Pick<HeroSlide, "desktopPosition" | "mobilePosition">,
): HeroSlide {
  return {
    id: String(n),
    desktop: withCacheBust(`/images/hero/img${n}.webp`),
    mobile: withCacheBust(`/images/hero/Mimg${n}.webp`),
    alt,
    ...positions,
  };
}

/** Call from a Server Component so file mtimes bust browser/Next image cache. */
export function getHeroSlides(): HeroSlide[] {
  return [
    slide(1, "Classical dancer in traditional costume performing on stage", {
      desktopPosition: "62% center",
    }),
    slide(2, "Bharatanatyam performance captured in warm stage light"),
    slide(3, "Indian classical dance ensemble in formation"),
    slide(4, "Expressive classical dance portrait with traditional attire"),
    slide(5, "Young dancer in classical costume mid-performance"),
  ];
}
