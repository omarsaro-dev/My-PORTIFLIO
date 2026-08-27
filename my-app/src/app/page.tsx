import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        {/* SHELL v0 — Phase 1 */}
        <section className="flex min-h-dvh flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-5xl">
            <span className="shell-note">SHELL v0 — PHASE 1</span>

            <p className="mono mt-10 text-sm tracking-widest text-[--orange] uppercase">
              Frontend Developer &amp; AI Automation Enthusiast
            </p>

            <h1 className="display mt-4 text-[clamp(3.5rem,14vw,10rem)] text-[--white]">
              OMAR
            </h1>

            <div className="mono mt-1 text-[clamp(0.875rem,1.8vw,1.125rem)] tracking-[0.25em] text-[--grey]">
              <span className="block text-[--white]">MOHAMED</span>
              Cairo, Egypt
            </div>

            <div className="mt-12 flex items-center gap-3">
              <span
                className="availability-dot"
                aria-hidden="true"
              />
              <span className="mono text-xs tracking-widest text-[--grey] uppercase">
                {site.availability}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[--grey] sm:text-base">
              Cinematic interactive experiences where code meets design, motion
              meets interaction, and technology meets curiosity.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[--line] px-6 py-8 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-2 text-xs text-[--grey-dim] sm:flex-row sm:items-center sm:justify-between">
          <span className="mono">
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="mono">{site.domain}</span>
        </div>
      </footer>
    </>
  );
}