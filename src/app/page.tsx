import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Audience } from "@/components/home/Audience";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SignatureOffering } from "@/components/home/SignatureOffering";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Audience />
      <FeaturedWork />
      <SignatureOffering />
      <ServicesOverview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
