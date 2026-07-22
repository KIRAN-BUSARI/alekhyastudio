export type DesignProject = {
  id: string;
  title: string;
  type: "invitation" | "brand";
  description: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const designProjects: DesignProject[] = [
  {
    id: "d1",
    title: "Arangetram Invitation Suite",
    type: "invitation",
    description:
      "A warm editorial invitation set with floral motifs, calligraphy accents, and matching digital RSVP artwork.",
    before: {
      src: u("photo-1515378791036-0648a3ef77b2"),
      alt: "Plain draft invitation layout before design refinement",
    },
    after: {
      src: u("photo-1464366400600-7168b8af9bc3"),
      alt: "Finished ornate invitation suite with floral and gold accents",
    },
  },
  {
    id: "d2",
    title: "Boutique Brand Identity",
    type: "brand",
    description:
      "Logo system, colour palette, and stationery for a craft-led lifestyle brand — soft, tactile, and memorable.",
    before: {
      src: u("photo-1586281380349-632531db7ed4"),
      alt: "Rough brand sketches and early logo concepts on paper",
    },
    after: {
      src: u("photo-1634942537034-2531766767d1"),
      alt: "Polished brand kit mockup with logo, cards, and packaging",
    },
  },
  {
    id: "d3",
    title: "Wedding Save-the-Date",
    type: "invitation",
    description:
      "Minimal typography meets cultural motifs — designed for print and shareable digital formats.",
    before: {
      src: u("photo-1454165804606-c3d57bc86b40"),
      alt: "Text-only content draft for a save-the-date card",
    },
    after: {
      src: u("photo-1478146896981-b80fe463b330"),
      alt: "Finished save-the-date card styled with dried flowers",
    },
  },
];

export const brandDeliverables = [
  "Logo mark & wordmark",
  "Colour & type system",
  "Business cards & stationery",
  "Social templates",
  "Brand guidelines PDF",
];
