"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/shared/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-cream/95 shadow-[0_1px_0_rgba(43,38,32,0.08)] backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className={[
            "font-display text-2xl tracking-tight transition-colors md:text-[1.7rem]",
            solid ? "text-charcoal" : "text-cream-soft",
          ].join(" ")}
          aria-label={`${site.displayName} home`}
        >
          Alekhya<span className="text-terracotta">Studio</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "text-sm tracking-wide transition-colors hover:text-terracotta",
                solid ? "text-charcoal-muted" : "text-cream/85",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? solid
                    ? "text-terracotta"
                    : "text-cream"
                  : "",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={site.calendly}
            external
            variant={solid ? "primary" : "secondary"}
            size="sm"
          >
            Book a Consultation
          </Button>
        </nav>

        <button
          type="button"
          className={[
            "inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
            solid ? "text-charcoal" : "text-cream-soft",
          ].join(" ")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span
              className={[
                "h-px w-full bg-current transition",
                open ? "translate-y-[3.5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-px w-full bg-current transition",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-px w-full bg-current transition",
                open ? "-translate-y-[3.5px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          "border-t border-charcoal/10 bg-cream lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-3 text-lg text-charcoal transition hover:bg-cream-deep hover:text-terracotta"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm px-3 py-3 text-lg text-charcoal transition hover:bg-cream-deep hover:text-terracotta"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4 px-3">
            <Button href={site.calendly} external variant="primary" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
