import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter } from "../../components/site";
import { NewsFeaturedSlider } from "../../components/news-featured-slider";
import { NewsSeo } from "../../components/news-seo";

const description = "Learn about Beijing Jinxi Boyuan Real Estate, its integrated development strategy and prefabricated green-building operations across China.";
export const metadata: Metadata = { title: "Beijing Jinxi Boyuan Real Estate", description, alternates: { canonical: "/news/bjby/" }, openGraph: { type: "article", title: "Beijing Jinxi Boyuan Real Estate | OIA Group", description, url: "/news/bjby/", images: [{ url: "/figma/news-boyuan/hero-hd.webp", alt: "Beijing Jinxi Boyuan Real Estate" }] }, twitter: { card: "summary_large_image", title: "Beijing Jinxi Boyuan Real Estate | OIA Group", description, images: ["/figma/news-boyuan/hero-hd.webp"] } };

export default function BeijingJinxiBoyuanPage() {
  return <article className="boyuan-news-page">
    <NewsSeo title="Beijing Jinxi Boyuan Real Estate" description={description} path="/news/bjby/" image="/figma/news-boyuan/hero-hd.webp" datePublished="2025-10-09" />
    <section className="boyuan-news-hero"><Image src="/figma/news-boyuan/hero-hd.webp" alt="Modern Beijing commercial architecture" fill priority quality={95} sizes="100vw" /><div className="boyuan-news-hero-shade" /><div className="boyuan-news-hero-copy"><span>News</span><h1>Beijing Jinxi<br />Boyuan Real<br />Estate</h1></div></section>
    <section className="boyuan-news-summary"><p>Beijing Jinxi Boyuan Real Estate Co., Ltd. (referred to as “Beijing Real Estate”) is a wholly-owned subsidiary of Jinxi Iron and Steel Group Co., Ltd. (“Jinxi Group”), a large-scale enterprise group and Hong Kong-listed company (China Oriental Group Holdings Limited, stock code: 00581). Established in December 2009, the company integrates real estate development, investment and financing, and project management as its core businesses, with subsidiaries in Hebei, Suzhou, and Guangxi.</p></section>
    <section className="boyuan-news-story">
      <div className="boyuan-news-map"><Image src="/figma/news-boyuan/map.webp" alt="Beijing Real Estate business locations across China" fill sizes="80vw" /></div>
      <div className="boyuan-news-copy"><p>With a registered capital of RMB 100 million and headquartered in Beijing, Beijing Real Estate actively implements the strategy of “transformation, upgrading, and innovative development.” Centered on urban integrated development and investment-financing operations, it explores the deep integration of real estate, finance, and project management, forming a “3+X” strategic layout across major economic regions including the Beijing-Tianjin-Hebei area, the Yangtze River Delta, the Pearl River Delta, and central-western China.</p><p>Positioned as a promoter and practitioner of steel-structure prefabricated housing, the company has pioneered a distinctive Jinxi-style development path, continuously deepening and refining its business model, and is committed to the development of green real estate and the promotion and application of prefabricated steel-structure buildings.</p></div>
    </section>
    <NewsFeaturedSlider />
    <BrandedFooter />
  </article>;
}
