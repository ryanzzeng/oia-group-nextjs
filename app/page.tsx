import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter, ImageHero, PillLink } from "./components/site";
import { FeaturedNewsCarousel } from "./components/featured-news-carousel";
import { HomeIntroSlider } from "./components/home-intro-slider";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <div className="oia-home">
    <ImageHero className="oia-hero" image="/figma/hero.webp" alt="OIA residential development on a landscaped city street" title={<>Your home,<br />our priority</>} />

    <HomeIntroSlider />

    <section className="projects-showcase">
      <Image src="/figma/home-2.webp" alt="Illuminated entrance to an OIA residential development" fill sizes="100vw" />
      <div className="projects-shade" />
      <h2>Our projects</h2>
    </section>

    <section className="project-story">
      <div className="project-story-image"><Image src="/figma/project-detail.webp" alt="Refined residential lobby" fill sizes="48vw" /></div>
      <div><p>OIA Group is a property development and investment company focused on creating modern, high quality residential spaces across Australia. With an emphasis on smart living, sustainable construction, strategic locations and human centred design, OIA Group delivers developments that combine lifestyle convenience, long term value and refined contemporary living.</p><PillLink href="/projects">View our projects</PillLink></div>
    </section>

    <aside className="partners">OIA Group has built strong partnerships with a wide network of reputable collaborators, including leading architects, contractors and service providers.</aside>

    <FeaturedNewsCarousel />
    <BrandedFooter />
  </div>;
}
