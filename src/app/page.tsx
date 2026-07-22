import { Hero } from "@/components/home/Hero";
import { PhotographyTeaser } from "@/components/home/PhotographyTeaser";
import { ArtsCraftsTeaser } from "@/components/home/ArtsCraftsTeaser";
import { DesignTeaser } from "@/components/home/DesignTeaser";
import { WebTeaser } from "@/components/home/WebTeaser";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhotographyTeaser />
      <ArtsCraftsTeaser />
      <DesignTeaser />
      <WebTeaser />
      <AboutTeaser />
      <Testimonials />
      <ContactSection />
    </>
  );
}
