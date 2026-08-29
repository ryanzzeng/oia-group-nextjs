import type { Metadata } from "next";
import { NewsArticlePage, type NewsArticleData } from "../components/news-article-page";

export const metadata: Metadata = { title: "Beijing Jinxi Green Building Technology Industry Group", alternates: { canonical: "/news/bjgbt/" }, robots: { index: false, follow: true } };
const article: NewsArticleData = {
  title: "Beijing Jinxi Green Building Technology", hero: "/figma/news-page/city.webp", heroAlt: "Beijing waterfront skyline",
  summary: "Beijing Jinxi Green Building Technology Industry Group Co., Ltd. is a wholly-owned subsidiary of Jinxi Iron and Steel Group. Established in 1986, Jinxi Group has developed into a large-scale integrated enterprise group with nearly 100 subsidiaries in China and overseas and annual sales revenue exceeding RMB 100 billion.",
  sections: [
    { heading: "Prefabricated Steel Structure Green Building Business", body: ["The company’s core business includes industrial facilities, urban renewal projects, and EPC general contracting for industrial parks. Through this model, it has delivered high-quality, fully integrated construction projects in China and overseas.", "Its prefabricated steel structure solutions have been applied to major projects including the Xiong’an New Area Industrial Park and the redevelopment of Beijing Fengtai Railway Station, Asia’s largest railway hub by floor area."], images: [{ src: "/figma/news-single/tower.webp", alt: "Jinxi steel structure development" }] },
    { heading: "Representative EPC Projects", body: ["Following national industrial policies, Jinxi Group has deepened supply-side structural reform and pursued a transformation strategy centred on specialization, industrial extension and high-end development.", "The group has built the world’s largest section-steel production and application base. Its products serve major infrastructure projects and are exported to 33 countries and regions, while its extended industrial chain spans prefabricated construction, power transmission, nuclear power precision valves, new materials and microelectronics."], images: [{ src: "/figma/news-single/plans.webp", alt: "EPC project plans" }, { src: "/figma/news-single/architecture.webp", alt: "Completed EPC project" }] },
  ],
};
export default function Page() { return <NewsArticlePage article={article} />; }
