"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PillLink } from "./site";

export function FeaturedNewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const getStops = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    return [0, max / 2, max];
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const stops = getStops();
    if (!track || !stops.length) return;
    track.scrollTo({ left: stops[index], behavior: "smooth" });
  }, [getStops]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const stops = getStops();
      const nearest = stops.reduce((best, stop, index) =>
        Math.abs(stop - track.scrollLeft) < Math.abs(stops[best] - track.scrollLeft) ? index : best, 0);
      setActive(nearest);
    };

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 761 || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = track.scrollWidth - track.clientWidth;
      const canMove = (event.deltaY > 0 && track.scrollLeft < max - 1) || (event.deltaY < 0 && track.scrollLeft > 1);
      if (!canMove) return;
      event.preventDefault();
      track.scrollLeft += event.deltaY;
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("wheel", onWheel);
    };
  }, [getStops]);

  return (
    <section className="featured-news">
      <h2>Featured news</h2>
      <div className="featured-news-shell">
        <div
          ref={trackRef}
          className="featured-news-track"
          tabIndex={0}
          aria-label="Featured news carousel"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); goTo(Math.min(2, active + 1)); }
            if (event.key === "ArrowLeft") { event.preventDefault(); goTo(Math.max(0, active - 1)); }
          }}
        >
        <Link className="feature-card feature-card--lead" href="/news/bjcad/" style={{ position: "relative" }}>
          <Image src="/figma/news-single/hero.webp" alt="Beijing Jinxi glass towers" fill sizes="(max-width: 760px) 84vw, 36vw" priority={false} />
          <span className="feature-card-shade" />
          <span className="feature-card-copy feature-card-copy--top">
            <time dateTime="2025-10-09">October 9 2025</time>
            <strong>Beijing Jinxi Centennial Architectural Design Co., Ltd</strong>
          </span>
        </Link>

        <div className="feature-card-stack">
          <Link className="feature-card" href="/news/jxdhw/" style={{ position: "relative" }}>
            <Image src="/figma/news-main.webp" alt="JinXi DongHuWan commercial building" fill sizes="(max-width: 760px) 84vw, 29vw" />
            <span className="feature-card-shade" />
            <span className="feature-card-copy">
              <strong>JinXi DongHuWan<br />Project</strong>
              <time dateTime="2025-10-09">October 9 2025</time>
            </span>
          </Link>
          <Link className="feature-card" href="/news/bjgbt/" style={{ position: "relative" }}>
            <Image src="/figma/news-page/city.webp" alt="Beijing waterfront skyline" fill sizes="(max-width: 760px) 84vw, 29vw" />
            <span className="feature-card-shade" />
            <span className="feature-card-copy">
              <strong>Beijing Jinxi Green Building<br />Technology Industry Group<br />Co., Ltd</strong>
              <time dateTime="2025-10-11">October 11 2025</time>
            </span>
          </Link>
        </div>

        <article className="feature-card feature-card--end" style={{ position: "relative" }}>
          <Link className="feature-card-link" href="/news/bjcad/" aria-label="Read OIA China Oriental Group news" />
          <Image src="/figma/news-page/oia-oriental-tower.webp" alt="OIA China Oriental Group office tower" fill sizes="(max-width: 760px) 84vw, 32vw" />
          <span className="feature-card-shade" />
          <span className="feature-card-copy feature-card-copy--top">
            <time>October 9 2025</time>
            <strong>OIA<br />China<br />Oriental<br />Group</strong>
          </span>
        </article>
        </div>
        <button
          className="feature-next"
          type="button"
          aria-label={active === 2 ? "Return to the first featured story" : "Scroll to the next featured story"}
          onClick={() => goTo(active === 2 ? 0 : active + 1)}
        >
          {active === 2 ? "←" : "→"}
        </button>
      </div>

      <div className="feature-dots" aria-label="Featured news pages">
        {[0, 1, 2].map((index) => <button key={index} type="button" className={active === index ? "is-active" : ""} aria-label={`Go to featured news page ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)} />)}
      </div>
      <PillLink href="/news">View all news</PillLink>
    </section>
  );
}
