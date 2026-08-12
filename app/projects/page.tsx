import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero, PillLink } from "../components/site";
import { ProjectEnquiry } from "../components/project-enquiry";

export const metadata: Metadata = { title: "Projects", description: "Explore OIA Group’s premium residential developments and approach to modern Australian living.", alternates: { canonical: "/projects/" } };

const figures = [
  ["LAND", "412", "Sqm"],
  ["CAR PARK", "519", "Parking Space"],
  ["BUILT", "170", "Apartments"],
  ["TOTAL ROOM", "262", "Rooms"],
];

const values = [
  ["SMART LIVING", "Integrate technology, sustainability, and convenience to improve residents’ quality of life."],
  ["ECO CONSTRUCTION", "Designing and building properties in ways that reduce environmental impact, conserve resources, and promote long-term sustainability."],
  ["HUMAN IN MIND", "Homes and communities are designed around the needs, comfort, and lifestyle of the people who live in them."],
  ["ATTRACTIVE LOCATION", "Integrate technology, sustainability, and convenience to improve residents’ quality of life."],
  ["MODERN TECHNOLOGY", "Not only built with advanced methods but also equipped with future-ready innovations that enhance daily life."],
  ["AWARDED DESIGN", "Homes and communities designed with the same quality, innovation, and beauty that win international recognition."],
];

export default function Projects() {
  return <div className="projects-figma">
    <ImageHero className="projects-hero" image="/figma/projects-page/raw-6.png" alt="Contemporary OIA bedroom interior" title="Our projects" />

    <section className="projects-intro">
      <h2><span>OIA Group</span><br />introducing a new way to showcase properties</h2>
      <p>OIA Group creates premium residential developments designed for modern Australian living. Guided by quality, sustainability and strategic location, the group delivers thoughtfully designed homes and communities that offer lasting value, lifestyle convenience and refined living experiences.</p>
    </section>

    <section className="projects-figures" aria-label="Project statistics">
      {figures.map(([label, value, unit]) => <article key={label}><h3>{label}</h3><strong>{value}</strong><p>{unit}</p></article>)}
    </section>

    <section className="featured-projects">
      <Link className="featured-tall interactive-image" href="/viewall-projects" aria-label="View featured projects">
        <Image src="/figma/projects-page/raw-9.png" alt="Landscaped mixed-use residential development" fill sizes="48vw" />
        <h2>Featured<br />projects</h2>
      </Link>
      <div className="featured-stack">
        <Link className="interactive-image" href="/viewall-projects" aria-label="View residential townhouse project"><Image src="/figma/projects-page/raw-7.png" alt="Residential townhouse development" fill sizes="48vw" /></Link>
        <Link className="interactive-image" href="/viewall-projects" aria-label="View residential tower project"><Image src="/figma/projects-page/raw-3.png" alt="Modern residential towers" fill sizes="48vw" /></Link>
      </div>
    </section>

    <PillLink className="projects-pill" href="/viewall-projects" arrow="→">View all projects</PillLink>

    <section className="projects-gallery" id="projects-gallery">
      <Image src="/figma/projects.png" alt="Premium apartment living and dining room" fill sizes="94vw" />
    </section>

    <section className="projects-values">
      {values.map(([title, body], index) => <article key={title}><div><h2>{title}</h2><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div><p>{body}</p></article>)}
    </section>

    <ProjectEnquiry />

    <BrandedFooter />
  </div>;
}
