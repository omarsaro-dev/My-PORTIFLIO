import type { PipelineNode } from "./content-types";

export const pipeline: PipelineNode[] = [
  { label: "TRIGGER", name: "User Input", desc: "A question is asked. A request arrives.", color: "violet" },
  { label: "PROCESS", name: "AI Processing", desc: "Natural language parsed. Intent understood.", color: "violet" },
  { label: "ORCHESTRATE", name: "n8n Workflow", desc: "Logic branches. Data routed.", color: "orange" },
  { label: "DATABASE", name: "Google Sheets", desc: "Product data. Rows become answers.", color: "orange" },
  { label: "RESPOND", name: "Structured Output", desc: "Answer formatted and returned.", color: "violet" },
];