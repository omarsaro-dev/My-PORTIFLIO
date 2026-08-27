"use client";

import { chapters } from "@/lib/chapters";

export function Rail() {
  return (
    <div className="rail" aria-hidden="true">
      {chapters.map((ch) => (
        <div
          key={ch.id}
          className="rail-item"
          data-rail-item={ch.id}
          style={{ pointerEvents: "none" }}
        >
          <span className="rail-dot" />
        </div>
      ))}
    </div>
  );
}

export function ChapterProgress() {
  return (
    <div className="chapter-progress" aria-hidden="true">
      <div className="chapter-progress-fill" style={{ width: "0%" }} />
    </div>
  );
}

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function Vignette() {
  return <div className="vignette" aria-hidden="true" />;
}