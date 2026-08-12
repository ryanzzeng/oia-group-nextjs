import type { Metadata } from "next";
import { NewsPageContent } from "../components/news-page-content";

export const metadata: Metadata = { title: "News", description: "Read company updates, project milestones and development news from OIA Group.", alternates: { canonical: "/news/" } };

export default function News() {
  return <NewsPageContent />;
}
