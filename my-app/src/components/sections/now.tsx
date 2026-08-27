import { nowColumns } from "@/lib/now";
import { chapterIndex } from "@/lib/chapters";

export function Now() {
  return (
    <section className="now" id="now" aria-label="Now">
      <div className="now-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--orange)" }}>
          {chapterIndex("now")} — Now
        </div>
        <h2 className="display reveal">Right Now</h2>
      </div>
      <div className="now-grid">
        {nowColumns.map((column) => (
          <div className="now-column reveal" key={column.label}>
            <div className="now-label" style={{ color: column.labelColor }}>
              {column.label}
            </div>
            {column.items.map((item) => (
              <div className="now-item" key={item.name}>
                <span className="now-item-name">{item.name}</span>
                <span className={`now-status ${item.status}`}>{item.status}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}