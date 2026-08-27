import Image from "next/image";
import { caseStudies, nextCaseStudyId, worlds } from "@/lib/worlds";
import { chapterIndex } from "@/lib/chapters";
import { lang } from "@/lib/lang";
import type { CaseStudyId, World } from "@/lib/content-types";
import { Icon } from "@/components/site/icons";

interface CaseSection {
  label: string;
  text?: string;
  items?: string[];
}

function Diagram({ nodes }: { nodes: NonNullable<World["diagram"]> }) {
  return (
    <div className="system-diagram">
      <div className="system-diagram-title">Conceptual Workflow</div>
      <div className="diagram-flow">
        {nodes.map((node, i) => (
          <div key={i}>
            <div className={`diagram-node${node.highlight ? " highlight" : ""}`}>
              <div className="diagram-node-label">{node.label}</div>
              <div>{node.desc}</div>
            </div>
            {i < nodes.length - 1 && (
              <div className="diagram-arrow" aria-hidden="true">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function buildSections(caseStudy: (typeof caseStudies)[CaseStudyId]): CaseSection[] {
  return [
    { label: "THE PROBLEM", text: caseStudy.problem },
    { label: "MY ROLE", text: caseStudy.role },
    { label: "THE APPROACH", text: caseStudy.approach },
    { label: "THE SOLUTION", text: caseStudy.solution },
    { label: "TECHNOLOGY", items: caseStudy.technology },
    { label: "CHALLENGES", text: caseStudy.challenges },
    { label: "DECISIONS", text: caseStudy.decisions },
    { label: "RESULT", text: caseStudy.result },
    { label: "LESSONS", text: caseStudy.lessons },
    { label: "NEXT ITERATION", text: caseStudy.next },
  ];
}

function CaseStudy({ id, world }: { id: CaseStudyId; world: World }) {
  const data = caseStudies[id];
  const t = lang.en;
  const nextId = nextCaseStudyId(id);
  const nextWorld = worlds.find((w) => w.links.casestudy === nextId);
  const sections = buildSections(data);

  return (
    <details className="case-study" id={`case-${id}`}>
      <summary className="cta-btn case-study-toggle">
        {t.caseStudy} <Icon name="arrow" size={14} />
      </summary>
      <div className="case-study-panel">
        <div className="case-study-header">
          <div>
            <div className="case-study-idx mono">{world.idx}</div>
            <div className="case-study-title display">{world.title.join(" ")}</div>
          </div>
        </div>
        <div className="case-study-body">
          {sections.map((section, i) => (
            <div key={i} className="cs-section">
              <div className="cs-label mono">{section.label}</div>
              {section.text && <p className="cs-text">{section.text}</p>}
              {section.items && (
                <div className="cs-tags">
                  {section.items.map((item) => (
                    <span key={item} className="cs-tag">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="case-study-footer">
          <a className="cta-btn" href="#worlds">
            <Icon name="back" size={14} /> {t.backToWork}
          </a>
          {nextWorld && (
            <a className="cta-btn" href={`#case-${nextId}`}>
              {t.nextProject} <Icon name="chevronRight" size={14} />
            </a>
          )}
        </div>
      </div>
    </details>
  );
}

function WorldCase({ world }: { world: World }) {
  return (
    <article className={`world ${world.cls}`} aria-label={world.title.join(" ")}>
      <div className="world-bg" aria-hidden="true">
        <div className="world-bg-inner" />
      </div>
      <div className="world-grid">
        <div className="world-index reveal">{world.idx}</div>
        <div>
          <div className={`world-tag mono ${world.tagCls} reveal`}>{world.tag}</div>
          <h3 className="reveal">
            {world.title[0]}
            <br />
            {world.title[1]}
          </h3>
          <p className="reveal">{world.body}</p>
          <div className="world-trust reveal">
            {world.role && (
              <span className="world-trust-item mono">
                <span className="trust-label">Role</span> {world.role}
              </span>
            )}
            {world.status && (
              <span
                className={`world-trust-item mono status-${world.status.toLowerCase()}`}
              >
                <span className="trust-label">Status</span> {world.status}
              </span>
            )}
            {world.statusNote && (
              <span className="world-trust-note mono">{world.statusNote}</span>
            )}
          </div>
          <div className="world-tools">
            {world.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <div className="world-actions">
            {world.links.demo && (
              <a
                href={world.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <Icon name="external" size={14} /> LIVE DEMO
                <Icon name="external" size={10} />
              </a>
            )}
            {world.links.github && (
              <a
                href={world.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                <Icon name="github" size={14} /> GITHUB
                <Icon name="external" size={10} />
              </a>
            )}
            {world.links.casestudy && (
              <CaseStudy id={world.links.casestudy} world={world} />
            )}
            {!world.links.demo && !world.links.github && (
              <span className="world-action-pending mono">DEMO AVAILABLE ON REQUEST</span>
            )}
          </div>
          <div className="world-gallery">
            {world.evidence && (
              <div className="world-evidence-label mono">{world.evidence.label}</div>
            )}
            {world.images.map((image, idx) => (
              <figure
                key={idx}
                className={`gallery-item${image.featured ? " featured" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={`${world.title.join(" ")} — ${image.caption}`}
                  width={image.width}
                  height={image.height}
                  className="gallery-image"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <figcaption className="gallery-caption">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
          {world.diagram && (
            <Diagram nodes={world.diagram} />
          )}
        </div>
      </div>
    </article>
  );
}

export function Worlds() {
  return (
    <section id="worlds" aria-label="Project Worlds">
      <div className="worlds-intro">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--orange)" }}>
          {chapterIndex("worlds")} — Worlds
        </div>
        <h2 className="display reveal">
          Selected
          <br />
          Worlds
        </h2>
      </div>
      {worlds.map((world) => (
        <WorldCase key={world.idx} world={world} />
      ))}
    </section>
  );
}