import type { Chapter, SectionId } from "./content-types";

/**
 * Chapter index — single source of truth for section numbering.
 *
 * Legacy numbering (reference-portfolio) was internally inconsistent:
 * the nav used "00" for the hero then skipped "01", "proof" re-used "10",
 * and the numbered eyebrows disagreed with the nav. This list is the
 * corrected, contiguous rendition of the SAME order/labels. It keeps the
 * artist's "VOID / ENTRY = 00" idea and, because EXIT is now slot 12,
 * matches the legacy contact page's own "12 — Contact" numbering.
 */
export const chapters = [
  { id: "hero", idx: "00", label: "VOID / ENTRY" },
  { id: "manifesto", idx: "01", label: "IDENTITY" },
  { id: "services", idx: "02", label: "SERVICES" },
  { id: "mind", idx: "03", label: "MIND" },
  { id: "evolution", idx: "04", label: "EVOLUTION" },
  { id: "system", idx: "05", label: "SYSTEM" },
  { id: "worlds", idx: "06", label: "WORLDS" },
  { id: "machine", idx: "07", label: "MACHINE" },
  { id: "lab", idx: "08", label: "LAB" },
  { id: "proof", idx: "09", label: "PROOF" },
  { id: "now", idx: "10", label: "NOW" },
  { id: "next", idx: "11", label: "NEXT" },
  { id: "exit", idx: "12", label: "EXIT" },
] as const;

export function getChapter(id: SectionId): Chapter {
  const found = chapters.find((chapter) => chapter.id === id);
  if (!found) throw new Error(`Unknown chapter id: ${id}`);
  return found;
}

/** Returns the chapter index prefix, e.g. "04" */
export function chapterIndex(id: SectionId): string {
  return getChapter(id).idx;
}