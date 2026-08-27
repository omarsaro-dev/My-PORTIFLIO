"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TheVoid({ onComplete }: { onComplete: () => void }) {
  const reduce = typeof window !== "undefined" && prefersReducedMotion();
  const [nameShow, setNameShow] = useState(reduce);
  const [subShow, setSubShow] = useState(reduce);
  const [counterShow, setCounterShow] = useState(reduce);
  const [lineShow, setLineShow] = useState(reduce);
  const [counter, setCounter] = useState(reduce ? "08.2" : "00.0");
  const [progress, setProgress] = useState(reduce ? 100 : 0);
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(() => onComplete(), 300);
      return () => clearTimeout(t);
    }

    const t1 = setTimeout(() => setNameShow(true), 300);
    const t2 = setTimeout(() => setSubShow(true), 900);
    const t3 = setTimeout(() => {
      setCounterShow(true);
      setLineShow(true);
    }, 1300);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 1.2 + 0.3;
      if (current >= 8.2) {
        current = 8.2;
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
        setTimeout(() => onComplete(), 1800);
      }
      setCounter(current.toFixed(1));
      setProgress(Math.min(100, (current / 8.2) * 100));
    }, 50);

    const hardTimeout = setTimeout(() => {
      clearInterval(interval);
      setCounter("8.2");
      setProgress(100);
      setDone(true);
      setTimeout(() => onComplete(), 300);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
      clearTimeout(hardTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`void ${done ? "done" : ""}`} aria-hidden="true">
      <div className={`void-name ${nameShow ? "show" : ""}`}>OMAR</div>
      <div className={`void-sub ${subShow ? "show" : ""}`}>
        Initializing Experience
      </div>
      <div className={`void-counter ${counterShow ? "show" : ""}`}>
        {counter}
      </div>
      <div className={`void-line ${lineShow ? "show" : ""}`}>
        <div className="void-line-fill" style={{ width: progress + "%" }} />
      </div>
    </div>
  );
}