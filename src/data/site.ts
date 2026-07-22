export const site = {
  name: "AlekhyaStudio",
  tagline: "Stories told in light, craft, and colour.",
  description:
    "A boutique creative studio for photography, videography, arts & crafts, graphic design, and web experiences — rooted in culture, crafted with care.",
  email: "hello@alekhyastudio.com",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
  instagram: "https://www.instagram.com/alekhyastudio",
  location: "Bangalore, India",
  calendly: "https://calendly.com/alekhyastudio/session",
} as const;

export const navLinks = [
  { href: "/photography", label: "Photography" },
  { href: "/arts-crafts", label: "Arts & Crafts" },
  { href: "/design", label: "Design" },
  { href: "/web", label: "Web" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  {
    title: "Services",
    links: [
      { href: "/photography", label: "Photography & Video" },
      { href: "/arts-crafts", label: "Arts & Crafts" },
      { href: "/design", label: "Invitation & Brand" },
      { href: "/web", label: "Web Design" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: site.calendly, label: "Book a Session", external: true },
    ],
  },
] as const;
