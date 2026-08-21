"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PillLink } from "./site";

export function HomeIntroSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`home-intro-slider home-intro-banner${entered ? " is-entered" : ""}`}>
      <div className="home-intro-image">
        <Image src="/figma/home-1.webp" alt="Modern OIA Group architecture viewed from below" fill sizes="(max-width: 760px) 86vw, 42vw" />
      </div>
      <div className="home-intro-copy">
        <h2>OIA Group</h2>
        <p>Oriental Investment Australia Pty Ltd (OIA Group) is the core Australian flagship of China Oriental Group Company Limited (0581.HK), a Hong Kong-listed company. Backed by the strong financial capabilities of its parent group, with total assets exceeding AUD 10.7 billion and annual revenue of approximately AUD 8.55 billion, OIA Group has established a strong presence in Sydney’s premium property development sector.</p>
        <p>Building on a proven track record that includes the successful delivery of the IQ Burwood and Lighthouse Burwood residential projects, the acquisition of the 10,000-square-metre View Point commercial office property in Hurstville, and the development of more than 600,000 square metres of major land subdivision projects including Ridge Park and Denman Park, the company is now focused on two major mixed-use developments in Chatswood: Phase One at 3–5 Help Street and Phase Two at 38–42 Anderson Street.</p>
        <p>In parallel, OIA Group is developing an ultra-luxury freestanding residence at 21 March Street, Bellevue Hill, and a collection of luxury townhouses at 2 Forsyth Street, Killara. Through an ongoing commitment to exceptional quality, the company continues to shape sophisticated urban living in some of Sydney’s most sought-after locations.</p>
        <PillLink href="/about-us">About Us</PillLink>
      </div>
    </section>
  );
}
