import Image from "next/image";
import { exit } from "@/lib/exit";
import { site } from "@/lib/site";
import { Icon } from "@/components/site/icons";
import { PendingCta } from "@/components/site/pending-cta";

export function Exit() {
  return (
    <section className="exit" id="exit" aria-label="Contact">
      <div className="exit-portrait-wrap" aria-hidden="true">
        <Image
          src="/assets/image.png"
          alt=""
          fill
          sizes="200px"
          className="exit-portrait-img"
          loading="lazy"
        />
      </div>
      <div className="exit-inner">
        <div className="exit-eyebrow mono reveal">{exit.eyebrow}</div>
        <h2 className="display reveal">
          {exit.heading}
          <br />
          <PendingCta
            className="exit-link"
            iconAfter="arrow"
            iconSize={28}
            label={exit.headingLink}
          />
        </h2>
        <div className="exit-subtext reveal">
          <p>{exit.subtext}</p>
        </div>
        <div className="exit-cta reveal">
          <PendingCta
            className="cta-btn primary"
            iconBefore="mail"
            iconSize={16}
            label={exit.ctaPrimary}
          />
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            <Icon name="github" size={16} /> {exit.ctaGitHub}
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            <Icon name="linkedin" size={16} /> {exit.ctaLinkedIn}
          </a>
        </div>
        <div className="exit-meta reveal">
          <div className="exit-col">
            <span className="exit-meta-label mono">{exit.meta.contact}</span>
            <a href={`mailto:${site.email}?subject=Project%20Inquiry%20%E2%80%94%20Omar%20Mohamed`}>
              <Icon name="mail" size={12} /> {site.email}
            </a>
            <a href={`tel:${site.phoneTel}`}>
              <Icon name="phone" size={12} /> {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="phone" size={12} /> {exit.meta.whatsappLabel}
            </a>
          </div>
          <div className="exit-col">
            <span className="exit-meta-label mono">{exit.meta.basedIn}</span>
            <span className="exit-meta-value">{site.location}</span>
          </div>
          <div className="exit-col">
            <span className="exit-meta-label mono">{exit.meta.elsewhere}</span>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={12} /> LinkedIn
            </a>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={12} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}