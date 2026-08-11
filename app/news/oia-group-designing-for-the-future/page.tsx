import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter, ImageHero, PillLink } from "../../components/site";

export const metadata: Metadata = {
  title: "Designing for the Future",
  description: "How OIA Group approaches architecture, sustainability and connected urban living.",
};

export default function NewsArticle() {
  return <article className="article-figma">
    <ImageHero className="article-hero" image="/figma/projects-page/raw-3.png" alt="Contemporary residential towers" title={<>Designing for<br />the future</>} />

    <header className="article-intro">
      <div><span>OIA News</span><time>October 11, 2025</time></div>
      <h2>Creating places that bring together thoughtful design, long-term value and a better everyday experience.</h2>
    </header>

    <section className="article-body">
      <p className="article-lead">OIA Group’s approach to development begins with a simple idea: successful places respond to the people who live in them and the communities around them.</p>
      <p>Across our Australian portfolio, we work with experienced architects, consultants and delivery partners to create homes that balance design quality with genuine practicality. Strategic locations, well-considered floorplans, natural light and durable materials all contribute to places designed for modern living.</p>
      <div className="article-image"><Image src="/figma/intro.png" alt="Blue glass building detail" fill sizes="76vw" /></div>
      <h2>Connected, considered and enduring</h2>
      <p>Sustainability and connectivity are integral to this work. Each project considers its relationship to transport, services, landscape and the wider neighbourhood, while future-ready technologies and efficient construction methods support long-term performance.</p>
      <p>By combining these priorities, OIA Group continues to deliver developments that contribute positively to their setting and create lasting value for residents.</p>
      <PillLink href="/news" arrow="←">Back to news</PillLink>
    </section>
    <BrandedFooter />
  </article>;
}
