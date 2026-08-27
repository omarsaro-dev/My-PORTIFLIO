import type { Skill } from "./content-types";

export const skills: Skill[] = [
  { name: "HTML", tag: "Markup", status: "practicing", desc: "Semantic, accessible markup.", x: 15, y: 30, connections: [1, 2] },
  { name: "CSS", tag: "Styling", status: "practicing", desc: "Layout, typography, responsive design.", x: 35, y: 15, connections: [0, 2] },
  { name: "JavaScript", tag: "Language", status: "practicing", desc: "Logic, interactivity, the engine.", x: 55, y: 25, connections: [0, 1, 3, 4] },
  { name: "React", tag: "Framework", status: "practicing", desc: "Component architecture.", x: 75, y: 12, connections: [2] },
  { name: "GSAP", tag: "Motion", status: "learning", desc: "Animation as a design language.", x: 25, y: 60, connections: [2, 7] },
  { name: "Three.js", tag: "3D", status: "learning", desc: "Three-dimensional web experiences.", x: 65, y: 55, connections: [2, 6] },
  { name: "WebGL", tag: "Graphics", status: "exploring", desc: "Low-level graphics on the web.", x: 85, y: 45, connections: [5] },
  { name: "GSAP Scroll", tag: "Scroll", status: "learning", desc: "Scroll-driven animation.", x: 10, y: 75, connections: [4] },
  { name: "n8n", tag: "Workflows", status: "building", desc: "Visual workflow automation.", x: 40, y: 80, connections: [9, 10] },
  { name: "AI Automation", tag: "Systems", status: "building", desc: "Intelligent workflow systems.", x: 60, y: 82, connections: [8, 10] },
  { name: "APIs", tag: "Integration", status: "building", desc: "REST, webhooks, data flows.", x: 80, y: 75, connections: [8, 9] },
  { name: "Figma", tag: "Design", status: "practicing", desc: "Visual design and prototyping.", x: 50, y: 48, connections: [0, 1] },
];