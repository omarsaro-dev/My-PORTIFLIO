import { evolution } from "@/lib/evolution";
import { chapterIndex } from "@/lib/chapters";

export function Evolution() {
  return (
    <section className="evolution" id="evolution" aria-label="Evolution">
      <div className="evolution-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--orange)" }}>
          {chapterIndex("evolution")} — Evolution
        </div>
        <h2 className="display reveal">The Evolution</h2>
      </div>
      <div className="evolution-stream">
        <div className="evolution-line" aria-hidden="true" />
        {evolution.map((node) => (
          <div className="evo-node" key={node.idx}>
            <div className="evo-dot-wrap">
              <div className="evo-dot" aria-hidden="true" />
            </div>
            <div>
              <div className="evo-idx mono">{node.idx}</div>
              <h4 className="evo-title">{node.title}</h4>
              <p className="evo-body">{node.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}