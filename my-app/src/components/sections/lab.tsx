import { labItems } from "@/lib/lab";
import { chapterIndex } from "@/lib/chapters";

export function Lab() {
  return (
    <section className="lab" id="lab" aria-label="Lab">
      <div className="lab-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--violet)" }}>
          {chapterIndex("lab")} — Lab
        </div>
        <h2 className="display reveal">
          Experiments
          <br />
          & Playgrounds
        </h2>
      </div>
      <div className="lab-grid">
        {labItems.map((item) => (
          <div className="lab-card reveal" key={item.idx}>
            <div className={`lab-badge${item.badge === "LIVE" ? " ready" : ""}`}>
              {item.badge}
            </div>
            <div className="lab-idx mono">{item.idx}</div>
            <div className="lab-title">{item.title}</div>
            <div className="lab-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}