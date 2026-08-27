import Image from "next/image";
import { about } from "@/lib/identity";

export function About() {
  return (
    <section className="about-section" id="about" aria-label="About">
      <div className="about-grid">
        <div className="about-portrait-wrap reveal">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={1200}
            height={1600}
            className="about-portrait-img"
            loading="lazy"
          />
          <span className="about-portrait-label">{about.portrait.label}</span>
        </div>
        <div>
          <div className="about-eyebrow mono reveal">{about.eyebrow}</div>
          <h2 className="about-statement reveal">
            {about.statementIntro}
            <br />
            {about.statementLead} <em>{about.statementEmphasis}</em>
            {about.statementBottom}
          </h2>
        </div>
        <div className="about-body">
          {about.paragraphs.map((paragraph, i) => (
            <p className="reveal" key={i}>
              {paragraph.before}
              <b>{paragraph.strong}</b>
              {paragraph.after}
            </p>
          ))}
          <div className="metrics reveal">
            {about.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="metric-num">
                  <span>{metric.value}</span>
                  {metric.suffix}
                </div>
                <div className="metric-label mono">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}