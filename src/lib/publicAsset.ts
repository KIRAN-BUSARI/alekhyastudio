import { existsSync, statSync } from "fs";
import { join } from "path";

/** Append file mtime so replaced public assets bust browser/Next caches. Server-only. */
export function publicAsset(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) {
    return path;
  }

  try {
    const relative = path.split("?")[0].replace(/^\//, "");
    const full = join(process.cwd(), "public", relative);
    if (!existsSync(full)) return path;
    const mtime = Math.floor(statSync(full).mtimeMs);
    return `${path.split("?")[0]}?v=${mtime}`;
  } catch {
    return path;
  }
}

export function withBustedSrc<T extends { src: string }>(items: T[]): T[] {
  return items.map((item) => ({ ...item, src: publicAsset(item.src) }));
}
