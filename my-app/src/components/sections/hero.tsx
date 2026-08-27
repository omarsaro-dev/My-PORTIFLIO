import Image from "next/image";
import { lang } from "@/lib/lang";
import { Icon } from "@/components/site/icons";
import { PendingCta } from "@/components/site/pending-cta";
import { SplitWord } from "@/components/motion/split-word";

export function Hero() {
  const t = lang.en;
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero-imagewrap">
        <Image
          src="/assets/image.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="hero-image"
          aria-hidden
        />
        <div className="hero-glowbeam" aria-hidden="true" />
        <div className="hero-scanlines" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow mono">{t.heroEyebrow}</div>
        <h1 className="hero-name display">
          <SplitWord text="OMAR" />
          <SplitWord text="MOHAMED" outline />
        </h1>
        <div className="hero-foot">
          <div className="hero-text-group">
            <p className="hero-role">
              {t.heroRole1} <b>{t.heroRole2}</b> {t.heroRole3}
            </p>
            <div className="hero-availability mono">
              <span className="availability-dot" aria-hidden="true" />
              {t.availability}
            </div>
            <div className="hero-cta-row">
              <a href="#worlds" className="cta-btn primary">
                <Icon name="arrowDown" size={14} /> {t.viewWork}
              </a>
              <PendingCta iconAfter="arrow" label={t.startProject} />
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span className="mono">{t.scroll}</span>
            <div className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}