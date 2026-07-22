const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const invitationProjects = [
  {
    id: "inv1",
    title: "Rangapravesha Ivory Suite",
    type: "Rangapravesha",
    description:
      "A calm ivory-and-terracotta invitation suite with floral motifs, ceremony details, and matching digital RSVP.",
    src: u("photo-1464366400600-7168b8af9bc3"),
    alt: "Premium Rangapravesha invitation suite styled with floral accents",
  },
  {
    id: "inv2",
    title: "Arangetram Gold Leaf",
    type: "Arangetram",
    description:
      "Editorial Arangetram invitation design with calligraphy accents and print-ready stationery.",
    src: u("photo-1478146896981-b80fe463b330"),
    alt: "Arangetram invitation card with dried flowers and warm paper tones",
  },
  {
    id: "inv3",
    title: "Digital Debut Invite",
    type: "Digital",
    description:
      "Shareable digital invitation for dance events — designed for WhatsApp and email without losing craft.",
    src: u("photo-1515378791036-0648a3ef77b2"),
    alt: "Digital invitation design draft on a studio desk",
  },
];

export const invitationProcess = [
  {
    step: "01",
    title: "Brief",
    text: "Date, venue, guru lineage, colour mood, and print vs digital needs.",
  },
  {
    step: "02",
    title: "Concept",
    text: "Two refined directions rooted in classical aesthetics — never generic templates.",
  },
  {
    step: "03",
    title: "Craft",
    text: "Typography, motifs, and layout refined for both print and screen.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Print-ready files, digital versions, and optional stationery add-ons.",
  },
];
