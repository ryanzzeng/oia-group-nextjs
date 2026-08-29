import type { Metadata } from "next";
import { NewsPageContent } from "../components/news-page-content";
import { ItemListSeo, PageSeo } from "../components/page-seo";

const description = "Read company updates, project milestones and development news from OIA Group.";
export const metadata: Metadata = {
  title: "News",
  description,
  alternates: { canonical: "/news/" },
  openGraph: { type: "website", title: "OIA Group News", description, url: "/news/", images: [{ url: "/figma/intro.webp", alt: "OIA Group news" }] },
  twitter: { card: "summary_large_image", title: "OIA Group News", description, images: ["/figma/intro.webp"] },
};

export default function News() {
  return <>
    <PageSeo name="OIA Group News" description={description} path="/news/" breadcrumbs={[{ name: "Home", path: "/" }, { name: "News", path: "/news/" }]} />
    <ItemListSeo name="OIA Group news" items={[
      { name: "Beijing Jinxi Centennial Architectural Design", path: "/news/bjcad/" },
      { name: "Beijing Jinxi Green Building Technology Industry Group", path: "/news/bjgbt/" },
      { name: "Jinxi Donghuwan Project", path: "/news/jxdhw/" },
      { name: "Beijing Jinxi Boyuan Real Estate", path: "/news/bjby/" },
    ]} />
    <NewsPageContent />
  </>;
}
