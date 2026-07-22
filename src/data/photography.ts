export type PhotoCategory =
  | "all"
  | "outdoor"
  | "arangetram"
  | "portfolio"
  | "headshot"
  | "video";

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "outdoor", label: "Outdoor" },
  { id: "arangetram", label: "Arangetram" },
  { id: "portfolio", label: "Portfolio" },
  { id: "headshot", label: "Headshots" },
  { id: "video", label: "Videography" },
];

export type PhotoItem = {
  id: string;
  title: string;
  category: Exclude<PhotoCategory, "all">;
  alt: string;
  src: string;
  aspect: "portrait" | "landscape" | "square";
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photographyItems: PhotoItem[] = [
  {
    id: "p1",
    title: "Golden Hour Portrait",
    category: "outdoor",
    alt: "Woman in traditional attire photographed in warm outdoor light",
    src: u("photo-1610030469983-98e550d6193c"),
    aspect: "portrait",
  },
  {
    id: "p2",
    title: "Temple Courtyard",
    category: "outdoor",
    alt: "Architectural courtyard bathed in soft afternoon light",
    src: u("photo-1524492412937-b28074a5d7da"),
    aspect: "landscape",
  },
  {
    id: "p3",
    title: "First Stage",
    category: "arangetram",
    alt: "Young dancer in traditional Indian costume performing gracefully on stage",
    src: u("photo-1768491815837-87a90744f9e6"),
    aspect: "portrait",
  },
  {
    id: "p4",
    title: "Namaskaram",
    category: "arangetram",
    alt: "Classical dancer in traditional attire greeting with folded hands",
    src: u("photo-1774425243305-02ae44fdefd1"),
    aspect: "square",
  },
  {
    id: "p5",
    title: "Editorial Light",
    category: "portfolio",
    alt: "Fashion portfolio portrait with soft natural window light",
    src: u("photo-1534528741775-53994a69daeb"),
    aspect: "portrait",
  },
  {
    id: "p6",
    title: "Studio Neutrals",
    category: "portfolio",
    alt: "Minimal studio portrait against a warm neutral backdrop",
    src: u("photo-1531746020798-e6953c6e8e04"),
    aspect: "portrait",
  },
  {
    id: "p7",
    title: "Professional Presence",
    category: "headshot",
    alt: "Warm professional headshot of a woman smiling softly",
    src: u("photo-1573496359142-b8d87734a5a2"),
    aspect: "square",
  },
  {
    id: "p8",
    title: "Quiet Confidence",
    category: "headshot",
    alt: "Clean corporate headshot with soft cream background tones",
    src: u("photo-1560250097-0b93528c311a"),
    aspect: "portrait",
  },
  {
    id: "p9",
    title: "Stage Film Still",
    category: "video",
    alt: "Cinematic still of classical dancers performing on a lit stage",
    src: u("photo-1774425243355-a6c4858a5e63"),
    aspect: "landscape",
  },
  {
    id: "p10",
    title: "Behind the Lens",
    category: "video",
    alt: "Videographer filming a celebration with soft bokeh lights",
    src: u("photo-1492691527719-9d1e07e534b4"),
    aspect: "landscape",
  },
  {
    id: "p11",
    title: "Monsoon Walk",
    category: "outdoor",
    alt: "Couple walking through green landscape in soft monsoon light",
    src: u("photo-1516589178581-6cd7833ae3b2"),
    aspect: "landscape",
  },
  {
    id: "p12",
    title: "Arangetram Portrait",
    category: "arangetram",
    alt: "Woman performing a traditional Indian classical dance pose",
    src: u("photo-1764014792666-0f9e3c8442a9"),
    aspect: "portrait",
  },
  {
    id: "p13",
    title: "Heritage Walk",
    category: "outdoor",
    alt: "Traditional attire portrait near historic architecture",
    src: u("photo-1609137144813-7d9921338f24"),
    aspect: "portrait",
  },
  {
    id: "p14",
    title: "Festive Light",
    category: "outdoor",
    alt: "Portrait illuminated by warm festive lamps and soft glow",
    src: u("photo-1605649487212-47bdab064df7"),
    aspect: "square",
  },
  {
    id: "p15",
    title: "Profile Softbox",
    category: "headshot",
    alt: "Soft studio headshot of a woman looking toward camera",
    src: u("photo-1580489944761-15a19d654956"),
    aspect: "square",
  },
  {
    id: "p16",
    title: "Concert Frame",
    category: "video",
    alt: "Cinematic concert lighting suitable for performance videography",
    src: u("photo-1470225620780-dba8ba36b745"),
    aspect: "landscape",
  },
  {
    id: "p17",
    title: "Bharatanatyam Ensemble",
    category: "arangetram",
    alt: "Group of Bharatanatyam dancers standing in formation on stage",
    src: u("photo-1688820661462-a44e4b2770e8"),
    aspect: "landscape",
  },
  {
    id: "p18",
    title: "Twin Mudras",
    category: "arangetram",
    alt: "Two women performing traditional Indian classical dance together",
    src: u("photo-1746983062953-74c19d0dfc5d"),
    aspect: "landscape",
  },
  {
    id: "p19",
    title: "Costume Duet",
    category: "arangetram",
    alt: "Two Indian dancers in traditional costumes mid-performance",
    src: u("photo-1746983047239-cb817eba7d05"),
    aspect: "portrait",
  },
  {
    id: "p20",
    title: "Orange & Violet",
    category: "arangetram",
    alt: "Classical dancer in orange and purple costume striking a pose",
    src: u("photo-1740456977659-bdd269417fc0"),
    aspect: "portrait",
  },
  {
    id: "p21",
    title: "Anjali Hasta",
    category: "arangetram",
    alt: "Two dancers in traditional Indian attire with hands clasped",
    src: u("photo-1774425243343-09786fbbfe84"),
    aspect: "square",
  },
  {
    id: "p22",
    title: "Hasta Detail",
    category: "arangetram",
    alt: "Close portrait of a dancer in classical costume with hands clasped",
    src: u("photo-1774425243379-5f74f9da5a83"),
    aspect: "portrait",
  },
  {
    id: "p23",
    title: "Temple Festival Dance",
    category: "arangetram",
    alt: "Two women in traditional Indian attire dancing at a temple festival",
    src: u("photo-1645264090488-a019de493023"),
    aspect: "landscape",
  },
  {
    id: "p24",
    title: "Costume Ready",
    category: "arangetram",
    alt: "Dancer in yellow and red traditional saree costume before performance",
    src: u("photo-1722440044170-8df784901428"),
    aspect: "portrait",
  },
];

export const heroSlides = [
  {
    src: u("photo-1768491815837-87a90744f9e6", 2000),
    alt: "Young classical dancer in traditional costume performing gracefully",
  },
  {
    src: u("photo-1746983047239-cb817eba7d05", 2000),
    alt: "Two Indian classical dancers performing in traditional costumes",
  },
  {
    src: u("photo-1688820661462-a44e4b2770e8", 2000),
    alt: "Bharatanatyam ensemble standing in formation on stage",
  },
  {
    src: u("photo-1764014792666-0f9e3c8442a9", 2000),
    alt: "Woman performing a traditional Indian classical dance",
  },
  {
    src: u("photo-1610030469983-98e550d6193c", 2000),
    alt: "Portrait in golden-hour outdoor light wearing traditional attire",
  },
];
