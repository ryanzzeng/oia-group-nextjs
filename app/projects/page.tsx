import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero, PillLink } from "../components/site";
import { PropertyProfile } from "../components/property-profile";
import { ProjectValuesReveal } from "../components/project-values-reveal";
import { PageSeo } from "../components/page-seo";

const description = "Explore OIA Group’s premium residential developments and approach to modern Australian living.";
export const metadata: Metadata = { title: "Residential Projects", description, alternates: { canonical: "/projects/" }, openGraph: { type: "website", title: "Residential Projects | OIA Group", description, url: "/projects/", images: [{ url: "/figma/projects-page/projects-hero-enhanced.webp", alt: "OIA Group residential projects" }] }, twitter: { card: "summary_large_image", title: "Residential Projects | OIA Group", description, images: ["/figma/projects-page/projects-hero-enhanced.webp"] } };

export default function Projects() {
  return <div className="projects-figma">
    <PageSeo name="OIA Group Residential Projects" description={description} path="/projects/" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Residential Projects", path: "/projects/" }]} />
    <ImageHero className="projects-hero" image="/figma/projects-page/projects-hero-enhanced.webp" alt="Contemporary OIA bedroom interior" title="Our projects" />

    <section className="projects-intro">
      <h2><span>OIA Group</span><br />introducing a new way to showcase properties</h2>
      <p>OIA Group creates premium residential developments designed for modern Australian living. Guided by quality, sustainability and strategic location, the group delivers thoughtfully designed homes and communities that offer lasting value, lifestyle convenience and refined living experiences.</p>
    </section>

    <PropertyProfile />

    <section className="featured-projects">
      <Link className="featured-tall interactive-image" href="/viewall-projects" aria-label="View featured projects">
        <Image src="/figma/projects-page/raw-9.webp" alt="Landscaped mixed-use residential development" fill sizes="48vw" />
        <h2>Featured<br />projects</h2>
      </Link>
      <div className="featured-stack">
        <Link className="interactive-image" href="/viewall-projects" aria-label="View residential townhouse project"><Image src="/figma/projects-page/raw-7.webp" alt="Residential townhouse development" fill sizes="48vw" /></Link>
        <Link className="interactive-image" href="/viewall-projects" aria-label="View residential tower project"><Image src="/figma/projects-page/raw-3.webp" alt="Modern residential towers" fill sizes="48vw" /></Link>
      </div>
    </section>

    <PillLink className="projects-pill" href="/viewall-projects" arrow="→">View all projects</PillLink>

    <section className="projects-gallery" id="projects-gallery">
      <Image src="/figma/projects.webp" alt="Premium apartment living and dining room" fill sizes="94vw" />
    </section>

    <ProjectValuesReveal />

    <BrandedFooter />
  </div>;
}
