import type { Metadata } from "next";
import { NewsPageContent } from "../components/news-page-content";

const description = "Read company updates, project milestones and development news from OIA Group.";
export const metadata: Metadata = {
  title: "News",
  description,
  alternates: { canonical: "/news/" },
  openGraph: { type: "website", title: "OIA Group News", description, url: "/news/", images: [{ url: "/figma/intro.webp", alt: "OIA Group news" }] },
  twitter: { card: "summary_large_image", title: "OIA Group News", description, images: ["/figma/intro.webp"] },
};

export default function News() {
  return <NewsPageContent />;
}
