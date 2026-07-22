export type CraftCategory = "all" | "decor" | "props" | "arangetram" | "gifting";

export const craftCategories: { id: CraftCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "decor", label: "Décor" },
  { id: "props", label: "Props" },
  { id: "arangetram", label: "Arangetram" },
  { id: "gifting", label: "Gifting" },
];

export type CraftItem = {
  id: string;
  title: string;
  category: Exclude<CraftCategory, "all">;
  alt: string;
  src: string;
  height: "short" | "medium" | "tall";
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const craftItems: CraftItem[] = [
  {
    id: "c1",
    title: "Floral Arrangement",
    category: "decor",
    alt: "Hand-styled floral arrangement in warm terracotta and cream tones",
    src: u("photo-1490750967868-88aa4486c946"),
    height: "tall",
  },
  {
    id: "c2",
    title: "Festival Lamps",
    category: "decor",
    alt: "Row of glowing festival lamps and diyas with a warm golden glow",
    src: u("photo-1604608672516-f1b9b1d37076"),
    height: "medium",
  },
  {
    id: "c3",
    title: "Stage Blooms",
    category: "arangetram",
    alt: "Fresh flower arrangement styled for a classical dance stage",
    src: u("photo-1523438885200-e635ba2c371e"),
    height: "short",
  },
  {
    id: "c4",
    title: "Ceremonial Tray",
    category: "arangetram",
    alt: "Decorated ceremonial tray with flowers, lamps, and traditional accents",
    src: u("photo-1578662996442-48f60103fc96"),
    height: "tall",
  },
  {
    id: "c5",
    title: "Photo Props Set",
    category: "props",
    alt: "Styled photography props with dried flowers and textured fabrics",
    src: u("photo-1487530811176-3780de880c2d"),
    height: "medium",
  },
  {
    id: "c6",
    title: "Woven Accents",
    category: "props",
    alt: "Handwoven craft accents and natural fiber props for shoots",
    src: u("photo-1452860606245-08befc0ff44b"),
    height: "short",
  },
  {
    id: "c7",
    title: "Return Favours",
    category: "gifting",
    alt: "Hand-wrapped gifting favours with dried botanicals and ribbon",
    src: u("photo-1513885535751-8b9238bd345a"),
    height: "medium",
  },
  {
    id: "c8",
    title: "Keepsake Boxes",
    category: "gifting",
    alt: "Small keepsake gift boxes arranged on linen for an event",
    src: u("photo-1549465220-1a8b9238cd48"),
    height: "tall",
  },
  {
    id: "c9",
    title: "Garland Detail",
    category: "arangetram",
    alt: "Close-up of handcrafted floral garland for stage décor",
    src: u("photo-1519378058457-4c29a0a2efac"),
    height: "medium",
  },
  {
    id: "c10",
    title: "Botanical Wall",
    category: "decor",
    alt: "Lush botanical wall décor with layered greenery and blooms",
    src: u("photo-1465146633011-14f8e0781093"),
    height: "tall",
  },
  {
    id: "c11",
    title: "Clay Studio Work",
    category: "props",
    alt: "Handmade ceramic and craft pieces arranged on a worktable",
    src: u("photo-1610701596007-11502861dcfa"),
    height: "medium",
  },
  {
    id: "c12",
    title: "Painted Crafts",
    category: "gifting",
    alt: "Hand-painted craft objects drying on a studio table",
    src: u("photo-1513364776144-60967b0f800f"),
    height: "short",
  },
];

export const instagramFeed = [
  {
    id: "ig1",
    src: u("photo-1490750967868-88aa4486c946", 600),
    alt: "Instagram craft post: floral arrangement",
  },
  {
    id: "ig2",
    src: u("photo-1604608672516-f1b9b1d37076", 600),
    alt: "Instagram craft post: festival lamps",
  },
  {
    id: "ig3",
    src: u("photo-1523438885200-e635ba2c371e", 600),
    alt: "Instagram craft post: stage blooms",
  },
  {
    id: "ig4",
    src: u("photo-1513885535751-8b9238bd345a", 600),
    alt: "Instagram craft post: gift wrapping detail",
  },
  {
    id: "ig5",
    src: u("photo-1452860606245-08befc0ff44b", 600),
    alt: "Instagram craft post: woven studio props",
  },
  {
    id: "ig6",
    src: u("photo-1519378058457-4c29a0a2efac", 600),
    alt: "Instagram craft post: floral garland detail",
  },
];
