import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter, ImageHero, PillLink } from "./components/site";
import { FeaturedNewsCarousel } from "./components/featured-news-carousel";
import { HomeIntroSlider } from "./components/home-intro-slider";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const figures = [
  ["8,549.7", "Revenue (AUD)"],
  ["61.8", "Profit 2025 (AUD)"],
  ["47.6", "Profit attributable"],
  ["10,714.8", "Total assets"],
];

export default function Home() {
  return <div className="oia-home">
    <ImageHero className="oia-hero" image="/figma/viewall-projects/hero.webp" alt="OIA residential development on a landscaped city street" title={<>Your home,<br />our priority</>} />

    <HomeIntroSlider />

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

    <FeaturedNewsCarousel />
    <BrandedFooter />
  </div>;
}
