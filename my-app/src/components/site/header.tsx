import { chapters } from "@/lib/chapters";
import { lang } from "@/lib/lang";
import { OmLogo } from "@/components/site/logo";

export function Header() {
  const t = lang.en;
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <header className="site-header">
        <a href="#hero" className="site-logo" aria-label="Omar Mohamed — back to top">
          <OmLogo size={28} />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ol className="site-nav-list">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  className="site-nav-link mono"
                  href={`#${chapter.id}`}
                  data-nav-link={chapter.id}
                >
                  <span className="site-nav-idx">{chapter.idx}</span>
                  {chapter.label}
                </a>
              </li>
            ))}
            <li>
              <a className="site-nav-link mono" href="#about" data-nav-link="about">
                {t.about}
              </a>
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
}