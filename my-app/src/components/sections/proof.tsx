import { proof } from "@/lib/proof";
import { Icon } from "@/components/site/icons";

export function Proof() {
  return (
    <section className="proof" id="proof" aria-label="Proof of Work">
      <div className="proof-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--orange)" }}>
          {proof.eyebrow}
        </div>
        <h2 className="display reveal">{proof.heading}</h2>
      </div>
      <div className="proof-content">
        <div className="proof-statement reveal">
          <h3 className="display">{proof.statementHeading}</h3>
          <p>{proof.statement}</p>
        </div>
        <div className="proof-grid">
          {proof.cards.map((card) => (
            <div className="proof-card reveal" key={card.title}>
              <div className="proof-card-icon">
                <Icon name={card.icon as "github" | "external" | "mail"} size={28} />
              </div>
              <div className="proof-card-title mono">{card.title}</div>
              <div className="proof-card-desc">{card.desc}</div>
              {card.href ? (
                <a
                  href={card.href}
                  className="proof-card-link"
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {card.linkLabel}{" "}
                  <Icon name={card.external ? "external" : "arrow"} size={12} />
                </a>
              ) : (
                <span
                  className="proof-card-link mono"
                  style={{ color: "var(--grey-dim)" }}
                >
                  {card.linkLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}