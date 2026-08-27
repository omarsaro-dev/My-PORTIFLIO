import type { Metric } from "./content-types";

export interface ManifestoLine {
  text: string;
  accent: boolean;
}

export interface PersonalityKeyword {
  text: string;
  x: string;
  y: string;
}

export const manifestoLines: ManifestoLine[] = [
  { text: "I build digital experiences", accent: false },
  { text: "where code meets design", accent: false },
  { text: "and technology meets curiosity.", accent: true },
];

export const personalityKeywords: PersonalityKeyword[] = [
  { text: "BUILD", x: "6%", y: "10%" },
  { text: "LEARN", x: "85%", y: "8%" },
  { text: "EXPERIMENT", x: "3%", y: "72%" },
  { text: "DESIGN", x: "90%", y: "65%" },
  { text: "CODE", x: "12%", y: "42%" },
  { text: "AUTOMATE", x: "82%", y: "35%" },
  { text: "CREATE", x: "48%", y: "3%" },
  { text: "BREAK", x: "72%", y: "88%" },
  { text: "REBUILD", x: "25%", y: "92%" },
];

export const about = {
  eyebrow: "Who is Omar?",
  statementIntro: "I don't just write code.",
  statementLead: "I design",
  statementEmphasis: "digital experiences",
  statementBottom: ".",
  portrait: {
    src: "/assets/image.png",
    alt: "Omar Mohamed — portrait",
    label: "Omar Mohamed — Cairo, 2026",
  },
  paragraphs: [
    {
      before: "Omar Mohamed is a ",
      strong: "15-year-old frontend developer",
      after:
        " building interfaces that hold up to the same scrutiny as the brands they represent — precise typography, deliberate motion, and layouts with nothing left to chance.",
    },
    {
      before:
        "The second half of the practice is automation: using tools like ",
      strong: "n8n",
      after:
        " to give clients systems that keep working after the project ships.",
    },
    {
      before: "Two disciplines, one standard — ",
      strong: "if it doesn't feel considered, it isn't finished.",
      after: "",
    },
  ],
  metrics: [
    { value: "15", label: "Years old — building since day one" },
    { value: "2", suffix: "+", label: "Years hands-on frontend practice" },
    { value: "3", label: "Disciplines bridged in every project" },
  ] satisfies Metric[],
} as const;