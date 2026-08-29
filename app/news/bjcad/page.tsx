import type { Metadata } from "next";
import Page, { description } from "../oia-group-designing-for-the-future/page";

export const metadata: Metadata = {
  title: "Beijing Jinxi Centennial Architectural Design",
  description,
  alternates: { canonical: "/news/bjcad/" },
  openGraph: { type: "article", title: "Beijing Jinxi Centennial Architectural Design | OIA Group", description, url: "/news/bjcad/", publishedTime: "2025-10-09", modifiedTime: "2026-08-29", authors: ["OIA Group"], images: [{ url: "/figma/news-single/hero.webp", alt: "Beijing Jinxi Centennial Architectural Design" }] },
  twitter: { card: "summary_large_image", title: "Beijing Jinxi Centennial Architectural Design | OIA Group", description, images: ["/figma/news-single/hero.webp"] },
};

export default Page;
