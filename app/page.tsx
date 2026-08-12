import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero, PillLink } from "./components/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const figures = [
  ["8,549.7", "Revenue (AUD)"],
  ["61.8", "Profit 2025 (AUD)"],
  ["47.6", "Profit attributable"],
  ["10,714.8", "Total assets"],
];

const news = [
  { title: "Beijing Jinxi Centennial Architectural Design Co., Ltd", date: "October 9, 2025", image: "/figma/intro.png", featured: true },
  { title: "JinXi DongHuWan Project", date: "October 9, 2025", image: "/figma/project-detail.webp" },
  { title: "Beijing Jinxi Green Building Technology Industry Group Co., Ltd", date: "October 11, 2025", image: "/figma/projects-page/raw-3.webp" },
];

export default function Home() {
  return <div className="oia-home">
    <ImageHero className="oia-hero" image="/figma/viewall-projects/hero.webp" alt="OIA residential development on a landscaped city street" title={<>Your home,<br />our priority</>} />

    <section className="oia-intro">
      <div className="intro-visual"><Image src="/figma/intro.png" alt="Contemporary blue glass architecture" fill sizes="45vw" /></div>
      <div className="intro-copy">
        <h2>OIA Group</h2>
        <p><b>Introduction</b> Established in 2016, China Oriental Investment is a wholly-owned subsidiary of China Oriental Group Co Ltd (0581.HK) in Australia. As a crucial overseas business branch of the group, the company specialises in real estate investment.</p>
        <p>The company identifies and develops promising residential, commercial and land projects. Its portfolio includes IQ Burwood, Lighthouse Burwood, View Point Hurstville, Ridge Park Estate and Denman Park Estate.</p>
        <PillLink href="/about-us">About us</PillLink>
      </div>
    </section>

    <section className="finance">
      <h2>Our financial profile</h2>
      <div className="figure-grid">{figures.map(([value, label]) => <article key={label}><p>{label}</p><strong>{value}</strong><span>Million</span></article>)}</div>
    </section>

    <section className="projects-showcase">
      <Image src="/figma/projects.webp" alt="Warm, contemporary apartment interior" fill sizes="100vw" />
      <div className="projects-shade" />
      <h2>Our projects</h2>
    </section>

    <section className="project-story">
      <div className="project-story-image"><Image src="/figma/project-detail.webp" alt="Refined residential lobby" fill sizes="48vw" /></div>
      <div><p>OIA Group is a property development and investment company focused on creating modern, high-quality residential spaces across Australia.</p><p>With an emphasis on smart living, sustainable construction, strategic locations and human-centred design, our developments combine lifestyle convenience, long-term value and refined contemporary living.</p><PillLink href="/projects">View our projects</PillLink></div>
    </section>

    <aside className="partners">OIA Group has built strong partnerships with a wide network of reputable collaborators, including leading architects, contractors and service providers.</aside>

    <section className="featured-news">
      <h2>Featured news</h2>
      <div className="news-mosaic">{news.map((item) => <Link href="/news/oia-group-designing-for-the-future" key={item.title}><article className={item.featured ? "featured" : ""}><div className="news-photo"><Image src={item.image} alt="" fill sizes={item.featured ? "38vw" : "30vw"} /></div><div className="news-overlay"><h3>{item.title}</h3><time>{item.date}</time></div></article></Link>)}</div>
      <PillLink href="/news">View all news</PillLink>
    </section>
    <BrandedFooter />
  </div>;
}
