const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const creativeProjects = [
  {
    id: "cr1",
    title: "Performance Poster",
    category: "Poster",
    src: u("photo-1492684223066-81342ee5ff30"),
    alt: "Dramatic stage lighting suitable for a classical performance poster",
  },
  {
    id: "cr2",
    title: "Academy Brochure",
    category: "Brochure",
    src: u("photo-1454165804606-c3d57bc86b40"),
    alt: "Printed brochure and planning materials on a desk",
  },
  {
    id: "cr3",
    title: "Certificate Suite",
    category: "Certificate",
    src: u("photo-1586281380349-632531db7ed4"),
    alt: "Elegant paper design work for certificates and stationery",
  },
  {
    id: "cr4",
    title: "Event Branding",
    category: "Event",
    src: u("photo-1514525253161-7a46d19cd819"),
    alt: "Event atmosphere with warm lighting for cultural branding",
  },
  {
    id: "cr5",
    title: "Merchandise Concept",
    category: "Merchandise",
    src: u("photo-1558618666-fcd25c85cd64"),
    alt: "Creative craft and merchandise design materials",
  },
  {
    id: "cr6",
    title: "Presentation Design",
    category: "Presentation",
    src: u("photo-1460925895917-afdab827c52f"),
    alt: "Laptop showing a polished presentation design",
  },
];
