import { skills } from "@/lib/skills";
import { chapterIndex } from "@/lib/chapters";

interface Connection {
  from: number;
  to: number;
}

const connections: Connection[] = skills.flatMap((skill, index) =>
  (skill.connections ?? [])
    .map((target) => (target > index ? { from: index, to: target } : null))
    .filter((connection): connection is Connection => connection !== null),
);

export function System() {
  return (
    <section className="system" id="system" aria-label="Skills System">
      <div className="system-head">
        <div className="about-eyebrow mono reveal" style={{ color: "var(--orange)" }}>
          {chapterIndex("system")} — System
        </div>
        <h2 className="display reveal">The System</h2>
      </div>

      <div className="constellation">
        <svg
          className="constellation-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {connections.map((connection, i) => (
            <line
              key={i}
              className="constellation-line"
              x1={skills[connection.from].x}
              y1={skills[connection.from].y}
              x2={skills[connection.to].x}
              y2={skills[connection.to].y}
            />
          ))}
        </svg>
        <div className="constellation-canvas">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-node"
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            >
              <div className="skill-node-dot" aria-hidden="true" />
              <div className="skill-node-name">{skill.name}</div>
              <div className={`skill-node-status ${skill.status}`}>
                {skill.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-list">
        {skills.map((skill, i) => (
          <div className="skill-row" key={skill.name}>
            <span className="skill-idx mono">{String(i + 1).padStart(2, "0")}</span>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-tag">{skill.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}