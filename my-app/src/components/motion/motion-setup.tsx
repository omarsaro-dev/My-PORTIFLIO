"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { chapters } from "@/lib/chapters";
import { universeState } from "@/components/motion/digital-universe";

gsap.registerPlugin(ScrollTrigger);

export function MotionSetup({ ready = true }: { ready?: boolean }) {
  useEffect(() => {
    if (!ready) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const fill = document.querySelector<HTMLElement>(".chapter-progress-fill");
      if (fill) fill.style.width = progress * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sectionIds = chapters.map((ch) => ch.id);
    const triggers: ScrollTrigger[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveChapter(id),
        onEnterBack: () => setActiveChapter(id),
      });
      triggers.push(st);
    });

    function setActiveChapter(id: string) {
      const idx = chapters.findIndex((ch) => ch.id === id);
      if (idx >= 0) universeState.chapter = idx;
      document
        .querySelectorAll("[data-nav-link]")
        .forEach((link) => {
          const active = link.getAttribute("data-nav-link") === id;
          link.classList.toggle("active", active);
        });
      document
        .querySelectorAll("[data-rail-item]")
        .forEach((item) => {
          item.classList.toggle("active", item.getAttribute("data-rail-item") === id);
        });
    }

    const cleanup: Array<() => void> = [];
    if (!reduce) {
      cleanup.push(wireHero());
      cleanup.push(wireReveals());
      cleanup.push(wireManifesto());
      cleanup.push(wireAboutCounters());
      cleanup.push(wireMindPin());
      cleanup.push(wireEvolution());
      cleanup.push(wireSystemConstellation());
      cleanup.push(wireWorlds());
      cleanup.push(wireMachine());
      cleanup.push(wireDiagram());
      cleanup.push(wireServices());
    } else {
      cleanup.push(forceRevealAll());
    }

    const forceRevealTimer = window.setTimeout(() => {
      if (reduce) return;
      document.querySelectorAll(".reveal").forEach((el) => {
        const elt = el as HTMLElement;
        if (parseFloat(getComputedStyle(elt).opacity) < 0.1) {
          elt.style.opacity = "1";
          elt.style.transform = "none";
        }
      });
    }, 6000);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((t) => t.kill());
      window.clearTimeout(forceRevealTimer);
      window.clearTimeout(refreshTimer);
      cleanup.forEach((fn) => fn());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

/* ---------- reveal system (opacity is zeroed by CSS, gsap animates in) ---------- */
function forceRevealAll() {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
  return () => {};
}

function wireHero() {
  const hero = document.getElementById("hero");
  if (!hero) return () => {};
  const imgwrap = hero.querySelector<HTMLElement>(".hero-imagewrap");

  const cleanups: Array<() => void> = [];
  if (imgwrap) {
    const scrollTween = gsap.to(imgwrap, {
      scale: 1.18,
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    cleanups.push(() => scrollTween.kill());

    const mobile = window.innerWidth < 860;
    if (!mobile) {
      const rotX = gsap.quickTo(imgwrap, "rotationX", { duration: 0.6, ease: "power3" });
      const rotY = gsap.quickTo(imgwrap, "rotationY", { duration: 0.6, ease: "power3" });
      const onMove = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom) return;
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        rotY((px - 0.5) * 6);
        rotX((0.5 - py) * 4);
      };
      window.addEventListener("mousemove", onMove);
      cleanups.push(() => {
        window.removeEventListener("mousemove", onMove);
      });
    }
  }
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- reveal system (opacity is zeroed by CSS, gsap animates in) ---------- */
function wireReveals() {
  const targets = document.querySelectorAll<HTMLElement>(".reveal:not([data-revealed])");
  targets.forEach((el, i) => {
    el.dataset.revealed = "1";
    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: (i % 4) * 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });
  return () => {};
}

/* ---------- manifesto : lines reveal + accent + keyword drift ---------- */
function wireManifesto() {
  const section = document.getElementById("manifesto");
  if (!section) return () => {};
  const lines = section.querySelectorAll<HTMLElement>(".manifesto-line");
  gsap.set(lines, { y: 30 });
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  })
    .to(lines, {
      opacity: (i: number, el: HTMLElement) => (el.classList.contains("accent") ? 1 : 0.12),
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
    });

  const keywords = section.querySelectorAll<HTMLElement>(".personality-keyword");
  gsap.set(keywords, { opacity: 0.3 });
  keywords.forEach((el, i) => {
    gsap.to(el, {
      opacity: 0.3,
      duration: 1.5,
      delay: 0.3 + i * 0.1,
      scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none none" },
    });
    gsap.to(el, {
      y: () => (Math.random() - 0.5) * 20,
      x: () => (Math.random() - 0.5) * 15,
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.3,
    });
  });

  const onMove = (e: MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    keywords.forEach((el, i) => {
      gsap.to(el, {
        x: cx * 20 * (0.5 + (i % 3) * 0.3),
        y: cy * 15 * (0.5 + (i % 3) * 0.3),
        duration: 1,
        ease: "power2.out",
      });
    });
  };
  window.addEventListener("mousemove", onMove);
  return () => window.removeEventListener("mousemove", onMove);
}

/* ---------- about : stat counters ---------- */
function wireAboutCounters() {
  const holder = document.getElementById("about");
  if (!holder) return () => {};
  const nums = holder.querySelectorAll<HTMLElement>(".metric-num > span");
  const cleanups: Array<() => void> = [];
  nums.forEach((numRef) => {
    const target = parseFloat(numRef.textContent ?? "0");
    numRef.textContent = "0";
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: numRef,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        numRef.textContent = String(Math.round(obj.val));
      },
    });
    cleanups.push(() => tween.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- mind : reveal statements as they enter viewport (stacked layout) ---------- */
function wireMindPin() {
  const section = document.getElementById("mind");
  if (!section) return () => {};
  const statements = section.querySelectorAll<HTMLElement>(".mind-statement");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    },
    { threshold: 0.35 },
  );
  statements.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}

/* ---------- evolution : line draw + node reveal + active dots ---------- */
function wireEvolution() {
  const section = document.getElementById("evolution");
  if (!section) return () => {};
  const line = section.querySelector<HTMLElement>(".evolution-line");
  const nodes = section.querySelectorAll<HTMLElement>(".evo-node");
  gsap.set(nodes, { opacity: 0, y: 30 });
  const cleanups: Array<() => void> = [];
  nodes.forEach((el, i) => {
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.06,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });
    cleanups.push(() => tween.kill());
    const act = ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      onEnter: () => el.classList.add("active"),
      onLeaveBack: () => el.classList.remove("active"),
    });
    cleanups.push(() => act.kill());
  });
  if (line) {
    const tw = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      },
    );
    cleanups.push(() => tw.kill());
  }
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- system : constellation nodes + lines fade-pulse ---------- */
function wireSystemConstellation() {
  const section = document.getElementById("system");
  if (!section) return () => {};
  const nodes = section.querySelectorAll<HTMLElement>(".skill-node");
  gsap.fromTo(
    nodes,
    { opacity: 0, scale: 0.6 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.06,
      ease: "power2.out",
      scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" },
    },
  );
  return () => {};
}

/* ---------- worlds : world galleries scale-in ---------- */
function wireWorlds() {
  const section = document.getElementById("worlds");
  if (!section) return () => {};
  const galleries = section.querySelectorAll<HTMLElement>(".world-gallery");
  const cleanups: Array<() => void> = [];
  galleries.forEach((frame) => {
    const tw = gsap.fromTo(
      frame,
      { scale: 0.92, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: frame,
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
    cleanups.push(() => tw.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- machine : pipeline nodes slide in + flow ---------- */
function wireMachine() {
  const section = document.getElementById("machine");
  if (!section) return () => {};
  const nodes = section.querySelectorAll<HTMLElement>(".pipeline-node");
  const cleanups: Array<() => void> = [];
  nodes.forEach((el, i) => {
    const tw = gsap.from(el.querySelector(".pipeline-box"), {
      opacity: 0,
      x: i % 2 === 0 ? -30 : 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
    });
    cleanups.push(() => tw.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- worlds diagrams + lab cards ---------- */
function wireDiagram() {
  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>(".system-diagram").forEach((diag) => {
    const nodes = diag.querySelectorAll<HTMLElement>(".diagram-node");
    const arrows = diag.querySelectorAll<HTMLElement>(".diagram-arrow");
    gsap.set(nodes, { opacity: 0, y: 10 });
    gsap.set(arrows, { opacity: 0 });
    const tw = gsap.to(nodes, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: diag, start: "top 80%", toggleActions: "play none none none" },
    });
    const tw2 = gsap.to(arrows, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.15,
      delay: 0.3,
      scrollTrigger: { trigger: diag, start: "top 80%", toggleActions: "play none none none" },
    });
    cleanups.push(() => tw.kill(), () => tw2.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- services : rows reveal ---------- */
function wireServices() {
  const section = document.getElementById("services");
  if (!section) return () => {};
  const items = section.querySelectorAll<HTMLElement>(".service-item");
  const cleanups: Array<() => void> = [];
  items.forEach((el, i) => {
    const tw = gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: (i % 4) * 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      },
    );
    cleanups.push(() => tw.kill());
  });
  return () => cleanups.forEach((fn) => fn());
}