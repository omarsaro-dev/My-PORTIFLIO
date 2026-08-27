import { pipeline } from "@/lib/machine";
import { chapterIndex } from "@/lib/chapters";

export function Machine() {
  return (
    <section className="machine" id="machine" aria-label="AI Machine">
      <div className="machine-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--violet)" }}>
          {chapterIndex("machine")} — Machine
        </div>
        <h2 className="display reveal">AI × Automation</h2>
      </div>
      <div className="pipeline">
        {pipeline.map((node, i) => (
          <div className="pipeline-node" key={i}>
            <div className="pipeline-dot" aria-hidden="true" />
            <div className="pipeline-box">
              <div
                className="pipeline-label mono"
                style={{
                  color: node.color === "violet" ? "var(--violet)" : "var(--orange)",
                }}
              >
                {node.label}
              </div>
              <div className="pipeline-name">{node.name}</div>
              <div className="pipeline-desc">{node.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}