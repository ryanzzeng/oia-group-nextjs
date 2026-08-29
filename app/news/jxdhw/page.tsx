import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter } from "../../components/site";
import { NewsFeaturedSlider } from "../../components/news-featured-slider";
import { NewsSeo } from "../../components/news-seo";

const description = "Explore the Jinxi Donghuwan residential project, its prefabricated steel-structure construction and contribution to regional development.";
export const metadata: Metadata = { title: "Jinxi Donghuwan Project", description, alternates: { canonical: "/news/jxdhw/" }, openGraph: { type: "article", title: "Jinxi Donghuwan Project | OIA Group", description, url: "/news/jxdhw/", publishedTime: "2025-10-09", modifiedTime: "2026-08-29", authors: ["OIA Group"], images: [{ url: "/figma/news-donghuwan/hero-seo.webp", alt: "Jinxi Donghuwan Project" }] }, twitter: { card: "summary_large_image", title: "Jinxi Donghuwan Project | OIA Group", description, images: ["/figma/news-donghuwan/hero-seo.webp"] } };

export default function JinxiDonghuwanPage() {
  return <article className="donghu-news-page">
    <NewsSeo title="Jinxi Donghuwan Project" description={description} path="/news/jxdhw/" image="/figma/news-donghuwan/hero-seo.webp" datePublished="2025-10-09" />
    <section className="donghu-news-hero"><Image src="/figma/news-donghuwan/hero-seo.webp" alt="Glass commercial architecture" fill priority sizes="100vw" /><div className="donghu-news-hero-shade" /><div className="donghu-news-hero-copy"><span>News</span><h1>Jinxi<br />Donghuwan<br />Project</h1></div></section>
    <section className="donghu-news-summary"><p>The Jinxi·Donghu Bay Project leverages the region’s combined strengths in local resources and industry, serving as a classic example of excellence in project operation, construction, land development, and property management. It represents Beijing Real Estate’s successful model for improving residential living standards in the area.</p></section>
    <section className="donghu-news-story">
      <div className="donghu-news-aerial"><Image src="/figma/news-donghuwan/aerial.webp" alt="Jinxi Donghu Bay residential masterplan" fill sizes="78vw" /></div>
      <div className="donghu-news-copy"><p>The first phase of the project covers 200 mu (approximately 133,000 square meters), with a total construction area of 380,000 square meters, developed in three phases and involving a total investment of approximately RMB 1.3 billion. The entire project was delivered in 2018. In October 2019, the company successfully acquired the fourth-phase land of Donghu Bay through public bidding, marking the first use of prefabricated steel-structure construction in the area. This approach effectively reduces construction costs and time, while ensuring green, safe, and durable buildings with strong seismic resistance, waterproofing, insulation, and soundproofing features.</p><p>With craftsmanship and meticulous attention to detail, the project highlights the elegance of refined living and the essence of oriental luxury, while also making a meaningful contribution to regional economic development.</p></div>
    </section>
    <NewsFeaturedSlider />
    <BrandedFooter />
  </article>;
}
