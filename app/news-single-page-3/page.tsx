import type { Metadata } from "next";
import { NewsArticlePage, type NewsArticleData } from "../components/news-article-page";

export const metadata: Metadata = { title: "JinXi DongHuWan Project", alternates: { canonical: "/news/jxdhw/" }, robots: { index: false, follow: true } };
const article: NewsArticleData = {
  title: "JinXi DongHuWan Project", hero: "/figma/news-main.webp", heroAlt: "JinXi DongHuWan mixed-use development",
  summary: "JinXi DongHuWan is a landmark mixed-use project shaped around contemporary urban life, combining architectural quality, connected public space and a strong sense of place.",
  sections: [
    { heading: "A Connected Urban Destination", body: ["The project brings residential, commercial and community uses together within a cohesive masterplan. Carefully considered circulation, landscaped connections and active street edges create a welcoming destination for residents and visitors.", "Its architecture balances a confident modern identity with practical, enduring spaces designed to support the neighbourhood over the long term."], images: [{ src: "/figma/news-main.webp", alt: "JinXi DongHuWan exterior" }] },
    { heading: "Designing for Long-Term Value", body: ["Material selection, efficient planning and integrated landscape design work together to deliver a development that is both distinctive and resilient.", "The result reflects OIA Group’s commitment to thoughtful property development: well located, carefully designed and focused on lasting value."], images: [{ src: "/figma/project-detail.webp", alt: "Architectural detail" }, { src: "/figma/news-single/waterfront.webp", alt: "Waterfront city context" }] },
  ],
};
export default function Page() { return <NewsArticlePage article={article} />; }
