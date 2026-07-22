export type ServiceId =
  | "photography"
  | "invitations"
  | "branding"
  | "websites"
  | "marketing"
  | "creative";

export type Service = {
  id: ServiceId;
  href: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  cta: { label: string; href: string };
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    id: "photography",
    href: "/photography",
    title: "Dance Photography & Videography",
    shortTitle: "Photography",
    eyebrow: "Capture",
    summary:
      "Classical dance photography, stage documentation, costume portraits, and performance film.",
    description:
      "From Bharatanatyam photography to Rangapravesha and Arangetram coverage — we photograph movement, mudra, and emotion with editorial care.",
    cta: { label: "Book a Shoot", href: "/contact?service=photo" },
    highlights: [
      "Dance & Bharatanatyam photography",
      "Rangapravesha / Arangetram coverage",
      "Stage & costume photography",
      "Artist portraits & headshots",
      "Dance videography",
    ],
    seoTitle: "Dance Photography & Bharatanatyam Photography",
    seoDescription:
      "Premium dance photography, Bharatanatyam photography, Rangapravesha and Arangetram photography, stage photography, and classical dance videography in Bangalore.",
  },
  {
    id: "invitations",
    href: "/invitations",
    title: "Rangapravesha & Arangetram Invitations",
    shortTitle: "Invitations",
    eyebrow: "Invite",
    summary:
      "Premium print and digital invitation suites for debuts and dance events.",
    description:
      "Invitation design that honours tradition — Rangapravesha invitation design, Arangetram invitation design, and dance event stationery with quiet luxury.",
    cta: { label: "Request an Invitation", href: "/contact?service=invite" },
    highlights: [
      "Rangapravesha invitation design",
      "Arangetram invitation design",
      "Digital invitations & RSVP",
      "Premium print suites",
      "Matching event stationery",
    ],
    seoTitle: "Rangapravesha & Arangetram Invitation Design",
    seoDescription:
      "Elegant Rangapravesha invitation design and Arangetram invitation design — digital and premium print invitations for classical dance events.",
  },
  {
    id: "branding",
    href: "/branding",
    title: "Artist & Academy Branding",
    shortTitle: "Branding",
    eyebrow: "Identity",
    summary:
      "Logos, brand systems, and visual identity for artists and dance schools.",
    description:
      "Performing arts branding that feels cultural and contemporary — dance logo design, academy identity, and artist brand kits.",
    cta: { label: "Start Branding", href: "/contact?service=branding" },
    highlights: [
      "Artist branding",
      "Dance school branding",
      "Logo & brand identity",
      "Stationery & social templates",
      "Brand guidelines",
    ],
    seoTitle: "Dance Branding & Artist Brand Identity",
    seoDescription:
      "Artist branding, dance school branding, dance logo design, and performing arts brand identity for classical dancers and academies.",
  },
  {
    id: "websites",
    href: "/websites",
    title: "Artist & Institute Websites",
    shortTitle: "Websites",
    eyebrow: "Presence",
    summary:
      "Portfolio and institute websites designed for bookings and credibility.",
    description:
      "Artist portfolio websites, dance institute websites, and music school sites — photography-forward, fast, and enquiry-ready.",
    cta: { label: "Get a Website Quote", href: "/contact?service=web" },
    highlights: [
      "Artist portfolio websites",
      "Dance institute websites",
      "Music school websites",
      "Website redesign",
      "Booking & enquiry flows",
    ],
    seoTitle: "Dance Website Design & Artist Portfolios",
    seoDescription:
      "Dance website design, artist portfolio websites, dance school and music school websites, and performing arts web redesign in Bangalore.",
  },
  {
    id: "marketing",
    href: "/marketing",
    title: "Digital Marketing for Artists",
    shortTitle: "Marketing",
    eyebrow: "Reach",
    summary:
      "Instagram branding, content, event promotion, and SEO for performing artists.",
    description:
      "Classical dance marketing that stays elegant — social media management, Instagram branding, content creation, and SEO for artists and academies.",
    cta: { label: "Plan Marketing", href: "/contact?service=marketing" },
    highlights: [
      "Social media management",
      "Instagram branding",
      "Content creation",
      "Event promotion",
      "SEO optimization",
    ],
    seoTitle: "Dance Social Media & Classical Dance Marketing",
    seoDescription:
      "Dance social media management, Instagram branding, classical dance marketing, event promotion, and SEO for performing artists.",
  },
  {
    id: "creative",
    href: "/creative",
    title: "Creative Design & Event Branding",
    shortTitle: "Creative",
    eyebrow: "Craft",
    summary:
      "Posters, certificates, brochures, merchandise, and full event branding.",
    description:
      "Creative design for performances and institutions — posters, brochures, certificates, merchandise, and presentation design.",
    cta: { label: "Request Creative Work", href: "/contact?service=creative" },
    highlights: [
      "Posters & brochures",
      "Certificates",
      "Event branding",
      "Merchandise",
      "Presentation design",
    ],
    seoTitle: "Dance Event Branding & Creative Design",
    seoDescription:
      "Posters, brochures, certificates, event branding, and merchandise design for classical dance performances and academies.",
  },
];

export function getService(id: ServiceId) {
  return services.find((service) => service.id === id)!;
}
