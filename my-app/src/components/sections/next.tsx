import { nextItems } from "@/lib/next";
import { chapterIndex } from "@/lib/chapters";

export function Next() {
  return (
    <section className="next" id="next" aria-label="Next">
      <div className="next-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--violet)" }}>
          {chapterIndex("next")} — Next
        </div>
        <h2 className="display reveal">
          What&apos;s
          <br />
          Next?
        </h2>
      </div>
      <div className="next-grid">
        {nextItems.map((item, i) => (
          <div className="next-card reveal" key={i}>
            <div className="next-badge">{item.badge}</div>
            <div className="next-card-title">{item.title}</div>
            <div className="next-card-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}