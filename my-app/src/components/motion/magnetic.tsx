"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.4, className = "" }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(min-width: 861px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      moveX((e.clientX - (rect.left + rect.width / 2)) * strength);
      moveY((e.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      moveX(0);
      moveY(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <span className={`magnetic-wrap ${className}`} ref={ref} data-hover>
      {children}
    </span>
  );
}