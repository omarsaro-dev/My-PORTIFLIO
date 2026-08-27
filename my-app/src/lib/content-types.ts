export type LangKey = "en" | "ar";

export type SectionId =
  | "hero"
  | "manifesto"
  | "about"
  | "services"
  | "mind"
  | "evolution"
  | "system"
  | "worlds"
  | "machine"
  | "lab"
  | "proof"
  | "now"
  | "next"
  | "exit";

export type SkillStatus = "practicing" | "learning" | "building" | "exploring";

export type ServiceStatus = "available" | "exploring";

export type WorldStatus = "PRIVATE" | "CONCEPT" | "LIVE";

export type PipelineColor = "violet" | "orange";

export type WorldTagClass = "orange" | "violet";

export type WorldClass = "w1" | "w2" | "w3";

export type CaseStudyId = "01" | "02" | "03";

export interface Chapter {
  id: SectionId;
  idx: string;
  label: string;
}

export interface MindStatement {
  text: string;
  emphasis: string;
}

export interface Skill {
  name: string;
  tag: string;
  status: SkillStatus;
  desc: string;
  x: number;
  y: number;
  connections: number[];
}

export interface Service {
  idx: string;
  title: string;
  desc: string;
  status: ServiceStatus;
}

export interface WorldImage {
  src: string;
  type: string;
  caption: string;
  featured?: boolean;
  width: number;
  height: number;
}

export interface WorldDiagramNode {
  label: string;
  desc: string;
  highlight: boolean;
}

export interface WorldLinks {
  demo: string | null;
  github: string | null;
  casestudy?: CaseStudyId;
}

export interface World {
  idx: string;
  cls: WorldClass;
  tag: string;
  tagCls: WorldTagClass;
  title: [string, string];
  body: string;
  tools: string[];
  images: WorldImage[];
  role: string;
  status: WorldStatus;
  statusNote: string | null;
  links: WorldLinks;
  evidence?: { type: string; label: string };
  diagram?: WorldDiagramNode[];
}

export interface CaseStudy {
  problem: string;
  role: string;
  approach: string;
  solution: string;
  technology: string[];
  challenges: string;
  decisions: string;
  result: string;
  lessons: string;
  next: string;
}

export interface PipelineNode {
  label: string;
  name: string;
  desc: string;
  color: PipelineColor;
}

export interface LabItem {
  idx: string;
  title: string;
  desc: string;
  badge: "LIVE" | "COMING";
}

export interface NowItem {
  name: string;
  status: "learning" | "building" | "exploring";
}

export interface NextItem {
  title: string;
  desc: string;
  badge: string;
}

export interface Metric {
  value: string;
  suffix?: string;
  label: string;
}

export interface LangStrings {
  heroEyebrow: string;
  heroRole1: string;
  heroRole2: string;
  heroRole3: string;
  availability: string;
  viewWork: string;
  startProject: string;
  contact: string;
  work: string;
  services: string;
  about: string;
  caseStudy: string;
  liveDemo: string;
  github: string;
  demoOnRequest: string;
  nextProject: string;
  backToWork: string;
  langToggle: string;
  skipToContent: string;
  close: string;
  scroll: string;
}