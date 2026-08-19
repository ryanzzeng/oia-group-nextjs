"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PillLink } from "./site";

const stories = [
  { href: "/news/bjcad", image: "/figma/news-single/tower.png", title: "Beijing Jinxi Centennial Architectural Design" },
  { href: "/news/bjgbt", image: "/figma/news-page/city.png", title: "Beijing Jinxi Green Building Technology Industry Group" },
  { href: "/news/jxdhw", image: "/figma/news-donghuwan/aerial.png", title: "Jinxi Donghuwan Project" },
  { href: "/news/bjby", image: "/figma/news-boyuan/hero-hd.png", title: "Beijing Jinxi Boyuan Real Estate Co" },
];

export function NewsFeaturedSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const next = (index + stories.length) % stories.length;
    const track = trackRef.current;
    const card = track?.children.item(next) as HTMLElement | null;
    if (track && card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActive(next);
  };

  const syncActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const nearest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - track.scrollLeft) < Math.abs(cards[best].offsetLeft - track.scrollLeft) ? index : best, 0);
    setActive(nearest);
  };

  return <section className="news-featured-slider">
    <div className="news-featured-heading"><button type="button" onClick={() => goTo(active - 1)} aria-label="Previous featured news">←</button><h2>Featured News</h2><button type="button" onClick={() => goTo(active + 1)} aria-label="Next featured news">→</button></div>
    <div className="news-featured-track" ref={trackRef} onScroll={syncActive}>
      {stories.map((story) => <Link className="news-featured-card" href={story.href} key={story.href}><Image src={story.image} alt="" fill sizes="(max-width: 760px) 78vw, 31vw" /><span>{story.title}</span></Link>)}
    </div>
    <div className="news-featured-dots" aria-label="Featured news slides">{stories.map((story, index) => <button key={story.href} type="button" className={active === index ? "is-active" : ""} onClick={() => goTo(index)} aria-label={`Go to featured news ${index + 1}`} aria-current={active === index ? "true" : undefined} />)}</div>
    <PillLink href="/news">View all news</PillLink>
  </section>;
}
