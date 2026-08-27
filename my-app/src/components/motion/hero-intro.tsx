"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function HeroIntro({ loaded }: { loaded: boolean }) {
  useEffect(() => {
    if (!loaded) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 860;

    const revealAll = () => {
      document
        .querySelectorAll(
          ".hero-eyebrow, .hero-name .char, .hero-role, .hero-availability, .hero-cta-row, .scroll-cue",
        )
        .forEach((el) => {
          const elt = el as HTMLElement;
          elt.style.opacity = "1";
          elt.style.transform = "none";
          elt.style.filter = "none";
        });
    };

    if (reduce || mobile) {
      revealAll();
      return;
    }

    gsap
      .timeline({ defaults: { ease: "power4.out" }, delay: 0.15 })
      .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to(
        ".hero-name .char",
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.1, stagger: 0.028 },
        0.15,
      )
      .to(".hero-role", { opacity: 1, duration: 0.9 }, 1.0)
      .to(".hero-availability", { opacity: 1, y: 0, duration: 0.7 }, 1.1)
      .to(".hero-cta-row", { opacity: 1, y: 0, duration: 0.7 }, 1.2)
      .to(".scroll-cue", { opacity: 1, duration: 0.9 }, 1.3);
  }, [loaded]);

  return null;
}