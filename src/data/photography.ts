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
    alt: "Classical dancer performing on stage with warm stage lighting",
    src: u("photo-1547153760-18fc86324498"),
    aspect: "portrait",
  },
  {
    id: "p4",
    title: "Abhinaya",
    category: "arangetram",
    alt: "Close-up of a classical dancer’s expressive hand gesture",
    src: u("photo-1508700115892-45ecd05ae2ad"),
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
    alt: "Cinematic still from a live dance performance recording",
    src: u("photo-1518611012118-696072aa579a"),
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
    alt: "Portrait of a dancer in costume before a performance",
    src: u("photo-1518834107812-67b0b7c58434"),
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
];

export const heroSlides = [
  {
    src: u("photo-1547153760-18fc86324498", 2000),
    alt: "Classical dancer mid-performance under warm stage lights",
  },
  {
    src: u("photo-1610030469983-98e550d6193c", 2000),
    alt: "Portrait in golden-hour outdoor light wearing traditional attire",
  },
  {
    src: u("photo-1492691527719-9d1e07e534b4", 2000),
    alt: "Cinematic photography moment with soft bokeh and warm tones",
  },
  {
    src: u("photo-1508700115892-45ecd05ae2ad", 2000),
    alt: "Expressive dance gesture captured in dramatic side light",
  },
  {
    src: u("photo-1548013146-72479768bada", 2000),
    alt: "Warm cultural architecture and atmosphere at golden hour",
  },
];
