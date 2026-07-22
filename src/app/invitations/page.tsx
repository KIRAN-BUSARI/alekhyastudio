import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { getService } from "@/data/services";
import { invitationProcess, invitationProjects } from "@/data/invitations";
import { site } from "@/data/site";

const service = getService("invitations");

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function InvitationsPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title="Rangapravesha & Arangetram invitation design"
        description={service.description}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={service.cta.href} variant="primary" size="lg">
            {service.cta.label}
          </Button>
          <Button href={site.whatsapp} external variant="secondary" size="lg">
            WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20">
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Suites"
                title="Invitation stories"
                description="Premium print and digital designs for classical dance debuts and events."
              />
            </FadeIn>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {invitationProjects.map((project, i) => (
                <FadeIn key={project.id} delay={i * 60}>
                  <article>
                    <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-terracotta">
                      {project.type}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-charcoal">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-muted">
                      {project.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Process"
                title="How invitations are crafted"
              />
            </FadeIn>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {invitationProcess.map((item, i) => (
                <FadeIn key={item.step} delay={i * 50}>
                  <li className="list-none">
                    <p className="font-display text-3xl text-terracotta">
                      {item.step}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-muted">{item.text}</p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a debut date?"
        description="Share your ceremony details — we'll propose invitation directions within a few days."
        primary={{
          href: "/contact?service=invite",
          label: "Request an Invitation",
        }}
        secondary={{ href: "/photography", label: "Add photography" }}
      />
    </>
  );
}
