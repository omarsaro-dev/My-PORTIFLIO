import { mindStatements } from "@/lib/mind";

export function Mind() {
  return (
    <section className="mind" id="mind" aria-label="Mind">
      {mindStatements.map((statement, i) => (
        <div key={i} className="mind-statement">
          <div className="mind-statement-text">
            {statement.text.split(" ").map((word, j) => {
              const isEmphasis =
                word.replace(/[.,]/, "").toLowerCase() ===
                statement.emphasis.toLowerCase();
              return (
                <span key={j}>
                  {j > 0 && " "}
                  {isEmphasis ? <em>{word}</em> : word}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}