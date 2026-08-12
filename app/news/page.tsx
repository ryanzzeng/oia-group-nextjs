import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero, PillLink } from "../components/site";

export const metadata: Metadata = { title: "News", description: "Read company updates, project milestones and development news from OIA Group.", alternates: { canonical: "/news/" } };

const articleHref = "/news-single-page";

export default function News() {
  return <div className="news-figma">
    <ImageHero className="news-hero" image="/figma/intro.png" alt="Contemporary blue glass architecture" title="Recent news" />

    <section className="figma-news-intro">
      <h2>OIA GROUP<br />introducing a new way to showcase properties</h2>
      <p>OIA Group creates premium residential developments designed for modern Australian living. Guided by quality, sustainability and strategic location, the group delivers thoughtfully designed homes and communities that offer lasting value, lifestyle convenience and refined living experiences.</p>
    </section>

    <main className="figma-news-content" id="news-list">
      <article className="figma-news-story figma-news-story-first">
        <Link className="card-hit-area" href={articleHref} aria-label="Read Beijing Jinxi Centennial Architectural Design" />
        <div className="figma-news-copy">
          <span>News</span>
          <h2>Beijing Jinxi Centennial Architectural Design</h2>
          <time dateTime="2025-10-09">Published October 9th 2025</time>
          <PillLink href={articleHref}>Read more</PillLink>
        </div>
        <div className="figma-news-city">
          <Image src="/figma/news-single/tower.png" alt="Beijing Jinxi tower" fill sizes="(max-width: 760px) 86vw, 49vw" />
          <div aria-hidden="true" />
        </div>
      </article>

      <article className="figma-news-story figma-news-story-featured">
        <Link className="card-hit-area" href={articleHref} aria-label="Read Beijing Jinxi Green Building Technology Industry Group" />
        <div className="figma-news-copy">
          <span>News</span>
          <h2>Beijing Jinxi Green Building Technology Industry Group</h2>
          <time dateTime="2025-10-11">Published October 11th 2025</time>
          <PillLink href={articleHref}>Read more</PillLink>
        </div>
        <div className="figma-news-city">
          <Image src="/figma/news-page/city.png" alt="Waterfront skyline at dusk" fill sizes="(max-width: 760px) 86vw, 49vw" />
          <div aria-hidden="true" />
        </div>
      </article>

      <div className="figma-news-all"><PillLink href="#news-list">View all news</PillLink></div>
    </main>

    <BrandedFooter />
  </div>;
}
