import type { Metadata } from "next";
import { NewsArticlePage, type NewsArticleData } from "../components/news-article-page";

export const metadata: Metadata = { title: "Beijing Jinxi Boyuan Real Estate Co., Ltd", alternates: { canonical: "/news/bjby/" }, robots: { index: false, follow: true } };
const article: NewsArticleData = {
  title: "Beijing Jinxi Boyuan Real Estate Co., Ltd", hero: "/figma/news-single/architecture.webp", heroAlt: "Contemporary Beijing high-rise architecture",
  summary: "Beijing Jinxi Boyuan Real Estate Co., Ltd. brings together development expertise, considered design and disciplined delivery to create high-quality urban projects.",
  sections: [
    { heading: "Integrated Property Development", body: ["The company takes an integrated approach across planning, design, construction and delivery. Each project is shaped by its location, the needs of its community and a commitment to long-term quality.", "Close collaboration between design and delivery teams helps translate ambitious architectural ideas into practical, enduring places."], images: [{ src: "/figma/news-single/architecture.webp", alt: "Jinxi Boyuan development" }] },
    { heading: "Creating Enduring Places", body: ["Projects prioritise well-planned homes, inviting public areas and strong connections to transport, services and the wider city.", "This people-centred approach supports Jinxi Boyuan’s goal of delivering developments that contribute positively to their neighbourhoods and retain value over time."], images: [{ src: "/figma/news-single/tower.webp", alt: "Jinxi office tower" }, { src: "/figma/news-page/oia-oriental-tower.webp", alt: "OIA Oriental tower" }] },
  ],
};
export default function Page() { return <NewsArticlePage article={article} />; }
