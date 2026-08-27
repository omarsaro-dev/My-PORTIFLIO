import type { NowItem } from "./content-types";

export const nowColumns = [
  {
    label: "Currently Learning",
    labelColor: "var(--orange)",
    items: [
      { name: "GSAP", status: "learning" },
      { name: "Three.js", status: "learning" },
      { name: "WebGL", status: "exploring" },
    ] satisfies NowItem[],
  },
  {
    label: "Currently Building",
    labelColor: "#22c55e",
    items: [
      { name: "Interactive Web Experiences", status: "building" },
      { name: "AI Automation Projects", status: "building" },
    ] satisfies NowItem[],
  },
  {
    label: "Currently Exploring",
    labelColor: "var(--violet)",
    items: [
      { name: "Creative Technology", status: "exploring" },
      { name: "AI Interfaces", status: "exploring" },
      { name: "Automation Systems", status: "exploring" },
    ] satisfies NowItem[],
  },
] as const;