export const site = {
  name: "AlekhyaStudio",
  displayName: "Alekhya Studio",
  tagline: "Presenting India's performing artists — beautifully.",
  mission:
    "We help classical dancers, musicians, and academies present themselves with elegance — on stage, in print, and online.",
  description:
    "Alekhya Studio is a premium creative studio for India's classical performing arts community — dance photography, Rangapravesha and Arangetram invitations, artist branding, portfolio websites, and cultural marketing in Bangalore.",
  email: "hello@alekhyastudio.com",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
  instagram: "https://www.instagram.com/alekhyastudio",
  location: "Bangalore, India",
  calendly: "https://calendly.com/alekhyastudio/session",
} as const;

export const audiences = [
  {
    title: "Artists",
    text: "Bharatanatyam, Kathak, Kuchipudi, Odissi, Mohiniyattam, contemporary, folk, musicians, and choreographers.",
  },
  {
    title: "Institutions",
    text: "Dance schools, music academies, performing arts institutions, cultural organizations, and event organizers.",
  },
  {
    title: "Families & students",
    text: "Rangapravesha and Arangetram students, parents planning debuts, and teachers building a personal brand.",
  },
] as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/photography", label: "Photography" },
  { href: "/invitations", label: "Invitations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = [
  {
    title: "Services",
    links: [
      { href: "/photography", label: "Dance Photography" },
      { href: "/invitations", label: "Rangapravesha Invitations" },
      { href: "/branding", label: "Artist Branding" },
      { href: "/websites", label: "Portfolio Websites" },
      { href: "/marketing", label: "Digital Marketing" },
      { href: "/creative", label: "Creative Design" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "All Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: site.calendly, label: "Book a Consultation", external: true },
    ],
  },
] as const;
