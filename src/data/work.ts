import { photographyItems } from "./photography";
import { invitationProjects } from "./invitations";
import { brandingProjects } from "./branding";
import { creativeProjects } from "./creative";
import { pastSites } from "./web";

export type WorkCategory =
  | "all"
  | "photography"
  | "invitations"
  | "branding"
  | "websites"
  | "marketing"
  | "creative";

export const workCategories: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "photography", label: "Photography" },
  { id: "invitations", label: "Invitations" },
  { id: "branding", label: "Branding" },
  { id: "websites", label: "Websites" },
  { id: "marketing", label: "Marketing" },
  { id: "creative", label: "Creative" },
];

export type WorkItem = {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all">;
  alt: string;
  src: string;
  aspect: "portrait" | "landscape" | "square";
};

export const workItems: WorkItem[] = [
  ...photographyItems.slice(0, 10).map((item) => ({
    id: `w-${item.id}`,
    title: item.title,
    category: "photography" as const,
    alt: item.alt,
    src: item.src,
    aspect: item.aspect,
  })),
  ...invitationProjects.map((item) => ({
    id: `w-${item.id}`,
    title: item.title,
    category: "invitations" as const,
    alt: item.alt,
    src: item.src,
    aspect: "landscape" as const,
  })),
  ...brandingProjects.map((item) => ({
    id: `w-${item.id}`,
    title: item.title,
    category: "branding" as const,
    alt: item.alt,
    src: item.src,
    aspect: "landscape" as const,
  })),
  ...pastSites.map((item) => ({
    id: `w-${item.id}`,
    title: item.title,
    category: "websites" as const,
    alt: item.alt,
    src: item.src,
    aspect: "landscape" as const,
  })),
  {
    id: "w-m1",
    title: "Instagram Grid System",
    category: "marketing",
    alt: "Curated social media visual grid for an artist brand",
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "w-m2",
    title: "Event Promotion Kit",
    category: "marketing",
    alt: "Event promotion creative for a classical dance showcase",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  ...creativeProjects.map((item) => ({
    id: `w-${item.id}`,
    title: item.title,
    category: "creative" as const,
    alt: item.alt,
    src: item.src,
    aspect: "square" as const,
  })),
];

export const featuredWork = workItems.filter((item) =>
  ["w-p3", "w-p17", "w-p19", "w-inv1", "w-b1", "w-w1"].includes(item.id),
);
