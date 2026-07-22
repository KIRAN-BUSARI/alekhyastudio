export const webProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your story, audience, and goals — then map the pages and content that matter most.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Moodboards and UI concepts rooted in your brand. Photography-forward layouts with clear hierarchy.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Fast, accessible front-ends with modern tooling — responsive, SEO-ready, and easy to update.",
  },
  {
    step: "04",
    title: "Launch & Care",
    description:
      "Go-live support, analytics setup, and optional retainers for content refreshes and improvements.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Sanity / Headless CMS",
  "Vercel",
  "SEO & Analytics",
];

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const pastSites = [
  {
    id: "w1",
    title: "Natya Collective",
    category: "Arts organisation",
    description: "Event-forward site with showreel gallery and ticket CTAs.",
    src: u("photo-1460925895917-afdab827c52f"),
    alt: "Laptop mockup showing an arts organisation website",
  },
  {
    id: "w2",
    title: "Atelier Bloom",
    category: "Craft boutique",
    description: "Product storytelling site with masonry lookbooks.",
    src: u("photo-1522542550221-31fd19575a2d"),
    alt: "Browser mockup of a craft boutique ecommerce-style site",
  },
  {
    id: "w3",
    title: "Studio Maaya",
    category: "Photographer",
    description: "Minimal portfolio with filterable galleries and booking.",
    src: u("photo-1498050108023-c5249f4df085"),
    alt: "Desk with laptop displaying a photographer portfolio website",
  },
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "From ₹25,000",
    description: "A polished one-page presence for emerging creators.",
    features: [
      "Up to 5 sections",
      "Mobile-responsive design",
      "Contact form & social links",
      "Basic SEO setup",
      "2 revision rounds",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
  {
    id: "studio",
    name: "Studio",
    price: "From ₹55,000",
    description: "Multi-page sites for studios ready to grow.",
    features: [
      "Up to 8 pages",
      "Custom gallery systems",
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
      "Unlimited page scope",
      "Custom animations",
      "Integrations (booking, shop)",
      "Brand + web package",
      "Ongoing care options",
    ],
    cta: "Request a Proposal",
    highlighted: false,
  },
];
