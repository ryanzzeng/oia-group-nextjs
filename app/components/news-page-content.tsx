"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BrandedFooter, ImageHero, PillLink } from "./site";

const stories = [
  { title: "Beijing Jinxi Centennial Architectural Design", date: "2025-10-09", label: "Published October 9th 2025", image: "/figma/news-single/tower.webp", alt: "Beijing Jinxi tower", href: "/news/bjcad" },
  { title: "Beijing Jinxi Green Building Technology Industry Group", date: "2025-10-11", label: "Published October 11th 2025", image: "/figma/news-page/city.webp", alt: "Waterfront skyline at dusk", href: "/news/bjgbt" },
  { title: "JinXi DongHuWan Project", date: "2025-10-09", label: "Published October 9th 2025", image: "/figma/news-main.webp", alt: "JinXi DongHuWan commercial building", href: "/news/jxdhw" },
  { title: "Beijing Jinxi Boyuan Real Estate Co, Ltd", date: "2025-10-09", label: "Published October 9th 2025", image: "/figma/news-single/architecture.webp", alt: "Contemporary high-rise architecture", href: "/news/bjby" },
];

export function NewsPageContent() {
  const [expanded, setExpanded] = useState(false);

  const showAll = () => {
    setExpanded(true);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return <div className="news-figma">
    <ImageHero className="news-hero" image="/figma/intro.webp" alt="Contemporary blue glass architecture" title={expanded ? "All news" : "Recent news"} />

    {!expanded && <section className="figma-news-intro">
      <h2>OIA GROUP<br />introducing a new way to showcase properties</h2>
      <p>OIA Group creates premium residential developments designed for modern Australian living. Guided by quality, sustainability and strategic location, the group delivers thoughtfully designed homes and communities that offer lasting value, lifestyle convenience and refined living experiences.</p>
    </section>}

    <div className={`figma-news-content${expanded ? " is-expanded" : ""}`} id="news-list">
      {stories.slice(0, expanded ? 4 : 2).map((story, index) => <article className={`figma-news-story ${index === 0 ? "figma-news-story-first" : "figma-news-story-featured"}`} key={story.title}>
        <Link className="card-hit-area" href={story.href} aria-label={`Read ${story.title}`} />
        <div className="figma-news-copy">
          <span>News</span>
          <h2>{story.title}</h2>
          <time dateTime={story.date}>{story.label}</time>
          <PillLink href={story.href}>Read more</PillLink>
        </div>
        <div className="figma-news-city">
          <Image src={story.image} alt={story.alt} fill sizes="(max-width: 760px) 86vw, 49vw" />
          <div aria-hidden="true" />
        </div>
      </article>)}

      {!expanded && <div className="figma-news-all">
        <button className="oia-button figma-news-expand" type="button" onClick={showAll} aria-controls="news-list" aria-expanded="false">
          <span>View all news</span>
          <b aria-hidden="true"><Image src="/figma/ui/arrow.svg" alt="" width={15} height={18} /></b>
        </button>
      </div>}
    </div>
    <BrandedFooter />
  </div>;
}
