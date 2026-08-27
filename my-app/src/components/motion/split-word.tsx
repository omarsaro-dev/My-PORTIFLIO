export function SplitWord({ text, outline }: { text: string; outline?: boolean }) {
  return (
    <span className={`word${outline ? " outline" : ""}`}>
      {text.split("").map((c, i) => (
        <span className="char" key={i}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}