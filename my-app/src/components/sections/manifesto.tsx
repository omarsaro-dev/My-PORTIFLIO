import { manifestoLines, personalityKeywords } from "@/lib/identity";

export function Manifesto() {
  return (
    <section className="manifesto" id="manifesto" aria-label="Identity">
      <div className="personality-keywords" aria-hidden="true">
        {personalityKeywords.map((keyword) => (
          <span
            key={keyword.text}
            className="personality-keyword"
            style={{ left: keyword.x, top: keyword.y }}
          >
            {keyword.text}
          </span>
        ))}
      </div>
      <div className="manifesto-content">
        <div className="manifesto-lines">
          {manifestoLines.map((line) => (
            <div
              key={line.text}
              className={`manifesto-line${line.accent ? " accent" : ""}`}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}