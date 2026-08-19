"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const figures = [
  ["LAND", 412, "Sqm"],
  ["CAR PARK", 519, "Parking Space"],
  ["BUILT", 170, "Apartments"],
  ["TOTAL ROOM", 262, "Rooms"],
] as const;

export function PropertyProfile() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setRevealed(true);
      const startedAt = performance.now();
      const tick = (now: number) => {
        const linear = Math.min((now - startedAt) / 1200, 1);
        setProgress(1 - Math.pow(1 - linear, 3));
        if (linear < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.28 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={`projects-profile${revealed ? " is-revealed" : ""}`} aria-label="Property profile">
    <h2>Property Profile</h2>
    <div className="projects-figures">
      {figures.map(([label, value, unit], index) => <article key={label} style={{ "--reveal-index": index } as CSSProperties}>
        <h3>{label}</h3><strong>{Math.round(value * progress)}</strong><p>{unit}</p>
      </article>)}
    </div>
  </section>;
}
