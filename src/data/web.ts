export const webProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your art form, audience, and goals — then map pages that support bookings and credibility.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Gallery-led layouts with calm typography — designed to feel like your performance world.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Fast, accessible websites with modern tooling — easy to update after each season.",
  },
  {
    step: "04",
    title: "Launch & Care",
    description:
      "Go-live support, SEO basics, and optional care for content refreshes.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Headless CMS",
  "Vercel",
  "SEO & Analytics",
];

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const pastSites = [
  {
    id: "w1",
    title: "Natya Collective",
    category: "Dance institute",
    description: "Event-forward academy site with showreel gallery and enquiry CTAs.",
    src: u("photo-1460925895917-afdab827c52f"),
    alt: "Laptop mockup showing a dance institute website",
  },
  {
    id: "w2",
    title: "Atelier Maaya",
    category: "Artist portfolio",
    description: "Minimal Bharatanatyam portfolio with filterable galleries and booking.",
    src: u("photo-1522542550221-31fd19575a2d"),
    alt: "Browser mockup of an artist portfolio website",
  },
  {
    id: "w3",
    title: "Sangeetha School",
    category: "Music school",
    description: "Warm institute site for classes, faculty, and concert listings.",
    src: u("photo-1498050108023-c5249f4df085"),
    alt: "Desk with laptop displaying a music school website",
  },
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Artist",
    price: "From ₹25,000",
    description: "A polished portfolio for emerging performers.",
    features: [
      "Up to 5 sections",
      "Gallery-ready layout",
      "Contact & social links",
      "Basic SEO setup",
      "2 revision rounds",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
  {
    id: "studio",
    name: "Institute",
    price: "From ₹55,000",
    description: "Multi-page sites for academies ready to grow.",
    features: [
      "Up to 8 pages",
      "Class & event sections",
      "CMS for easy updates",
      "Performance & accessibility pass",
      "Analytics & launch support",
    ],
    cta: "Get a Quote",
    highlighted: true,
  },
  {
    id: "bespoke",
    name: "Bespoke",
    price: "Let's talk",
    description: "Fully custom builds with advanced interactions.",
    features: [
      "Custom page scope",
      "Booking integrations",
      "Brand + web package",
      "Marketing-ready structure",
      "Ongoing care options",
    ],
    cta: "Request a Proposal",
    highlighted: false,
  },
];
