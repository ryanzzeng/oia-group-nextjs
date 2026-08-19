"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const values = [
  ["SMART LIVING", "Integrate technology, sustainability, and convenience to improve residents’ quality of life."],
  ["ECO CONSTRUCTION", "Designing and building properties in ways that reduce environmental impact, conserve resources, and promote long-term sustainability."],
  ["HUMAN IN MIND", "Homes and communities are designed around the needs, comfort, and lifestyle of the people who live in them."],
  ["ATTRACTIVE LOCATION", "Integrate technology, sustainability, and convenience to improve residents’ quality of life."],
  ["MODERN TECHNOLOGY", "Not only built with advanced methods but also equipped with future-ready innovations that enhance daily life."],
  ["AWARDED DESIGN", "Homes and communities designed with the same quality, innovation, and beauty that win international recognition."],
];

export function ProjectValuesReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setRevealed(true);
      observer.disconnect();
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={`projects-values projects-values-reveal${revealed ? " is-revealed" : ""}`}>
    {values.map(([title, body], index) => <article key={title} style={{ "--reveal-index": index } as CSSProperties}>
      <div><h2>{title}</h2><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
      <p>{body}</p>
    </article>)}
  </section>;
}
