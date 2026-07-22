const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const brandingProjects = [
  {
    id: "b1",
    title: "Natya Collective Identity",
    type: "Dance school",
    description:
      "Logo system, colour palette, and stationery for a classical dance academy.",
    src: u("photo-1634942537034-2531766767d1"),
    alt: "Brand kit mockup with logo cards and packaging for a dance academy",
  },
  {
    id: "b2",
    title: "Solo Artist Mark",
    type: "Artist branding",
    description:
      "A quiet wordmark and social system for a Bharatanatyam performer.",
    src: u("photo-1586281380349-632531db7ed4"),
    alt: "Brand sketches and logo concepts on paper for an artist identity",
  },
];

export const brandingDeliverables = [
  "Logo mark & wordmark",
  "Colour & type system",
  "Business cards & stationery",
  "Social templates",
  "Brand guidelines PDF",
];
