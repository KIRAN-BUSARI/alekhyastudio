import { Button } from "./Button";

type CTABannerProps = {
  title: string;
  description: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
};

export function CTABanner({
  title,
  description,
  primary,
  secondary,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-teal px-6 py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cream/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-cream-soft md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-cream/75">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={primary.href}
            external={primary.external}
            variant="primary"
            size="lg"
          >
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              external={secondary.external}
              variant="secondary"
              size="lg"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
