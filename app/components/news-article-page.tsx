import Image from "next/image";
import { BrandedFooter, PillLink } from "./site";

export type NewsArticleData = { title: string; hero: string; heroAlt: string; summary: string; sections: Array<{ heading?: string; body: string[]; images?: Array<{ src: string; alt: string }> }> };

const featured = [
  { src: "/figma/news-page/city.png", alt: "Waterfront skyline" },
  { src: "/figma/news-single/tower.png", alt: "Jinxi tower" },
  { src: "/figma/news-single/architecture.png", alt: "Contemporary architecture" },
];

export function NewsArticlePage({ article }: { article: NewsArticleData }) {
  return <article className="article-figma single-news single-news-generic">
    <section className="single-news-hero">
      <Image src={article.hero} alt={article.heroAlt} fill priority sizes="100vw" />
      <div className="single-news-overlay" />
      <div className="single-news-title"><span>News</span><h1>{article.title}</h1></div>
      <p className="single-news-byline">By <a href="mailto:contact.aoigroup@gmail.com">contact.aoigroup@gmail.com</a> <span>Company</span></p>
    </section>
    <section className="single-news-summary"><p>{article.summary}</p></section>
    <div className="single-news-article-sections">
      {article.sections.map((section, index) => <section className="single-news-article-section" key={`${section.heading ?? "section"}-${index}`}>
        {section.heading && <h2>{section.heading}</h2>}
        <div className="single-news-article-copy">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        {section.images && <div className={`single-news-article-images count-${section.images.length}`}>{section.images.map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 86vw, 46vw" /></div>)}</div>}
      </section>)}
    </div>
    <section className="single-news-featured"><h2>Featured News</h2><div className="single-news-gallery">{featured.map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} fill sizes="28vw" /></div>)}</div><PillLink href="/news">View all news</PillLink></section>
    <BrandedFooter />
  </article>;
}
