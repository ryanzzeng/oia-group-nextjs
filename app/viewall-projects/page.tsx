import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero } from "../components/site";
import { ItemListSeo, PageSeo } from "../components/page-seo";

const description = "View OIA Group residential projects across Chatswood, Burwood, Hornsby, the Central Coast and Hunter Valley.";
export const metadata: Metadata = { title: "Project Showcase", description, alternates: { canonical: "/viewall-projects/" }, openGraph: { type: "website", title: "Project Showcase | OIA Group", description, url: "/viewall-projects/", images: [{ url: "/figma/viewall-projects/hero-seo.webp", alt: "The Chatswood Collection" }] }, twitter: { card: "summary_large_image", title: "Project Showcase | OIA Group", description, images: ["/figma/viewall-projects/hero-seo.webp"] } };

const projects = [
  {
    name: "Odara",
    location: "3–5 Help St Chatswood",
    image: "/figma/viewall-projects/odara-latest.webp",
    side: "left",
    phase: "Phase one",
    description: "The proposed high-rise project at 3–5 Help Street is surrounded by Help Street, Cambridge Lane, and McIntosh Street, and is located in the heart of Chatswood. The surrounding area is mainly composed of commercial and residential developments, just steps away from the transport hub and Chatswood pedestrian street — offering both vibrancy and tranquillity.",
  },
  {
    name: "Angophora",
    location: "38–42 Anderson St Chatswood",
    image: "/figma/viewall-projects/angophora-latest.webp",
    side: "right",
    phase: "Phase two",
    description: "On the edge of Chatswood’s CBD, The Angophora proposes a generous model for residential density. The project brings together two residential towers above a shared podium that opens deliberately to the street. Retail tenancies and landscaped edges activate the ground plane, while communal gardens and terraces above create a layered transition from city to home.",
  },
  {
    name: "Lighthouse Burwood",
    location: "2A Elsie St Burwood",
    image: "/figma/viewall-projects/lighthouse-latest.webp",
    side: "left",
    description: "Comprising two luxurious apartments — a 2-bedroom and a 3-bedroom — to be sold together. Ideally located just moments from Westfield Burwood, Burwood Station, parks, and a range of amenities, this residence offers both convenience and breathtaking views stretching from the Blue Mountains in the west to the city skyline in the east.",
  },
  {
    name: "IQ Burwood",
    location: "15–19 Clarence St Burwood",
    image: "/figma/viewall-projects/iq-burwood-latest.webp",
    side: "right",
    description: "New urban oasis! Nestled in the vibrant suburb of Burwood, this modern 1-bedroom apartment offers a perfect blend of style, comfort, and convenience. This residence is ideal for first-time buyers, professionals, or savvy investors looking to capitalise on a prime location.",
  },
  {
    name: "Hornsby Townhouse",
    location: "15 Mildred Avenue Hornsby",
    image: "/figma/viewall-projects/hornsby-latest.webp",
    side: "left",
    description: "Welcome to Mildred Garden. Mildred Garden offers a diverse selection of thoughtfully designed floorplans to cater to various lifestyles.",
  },
  {
    name: "Denman Park Estate",
    location: "1 Almond St Denman",
    image: "/figma/viewall-projects/denman-latest.webp",
    side: "right",
    description: "Comprising 194 residential lots, the estate offers a rare opportunity to be part of a growing regional community surrounded by natural landscapes, local amenities and lifestyle destinations. Located approximately 250km north of Sydney and 130km northwest of Newcastle, Denman Park Estate combines country living with access to established town conveniences and future growth potential.",
  },
  {
    name: "Ridge Park Estate",
    location: "Warnervale Central Coast",
    image: "/figma/viewall-projects/ridge-park-latest.webp",
    side: "left",
    description: "Located in the heart of Warnervale Town Centre, Ridge Park Estate offers 92 residential subdivision lots in one of the Central Coast’s growing communities. With easy access to the M1 Pacific Motorway, Warnervale Station, Sydney, Newcastle and nearby coastal destinations, the estate combines everyday convenience with future growth potential.",
  },
];

export default function ViewAllProjects() {
  return <div className="showcase-page">
    <PageSeo name="OIA Group Project Showcase" description={description} path="/viewall-projects/" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Residential Projects", path: "/projects/" }, { name: "Project Showcase", path: "/viewall-projects/" }]} />
    <ItemListSeo name="OIA Group residential projects" items={projects.map((project) => ({ name: project.name, path: `/viewall-projects/#${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}` }))} />
    <ImageHero className="showcase-hero" image="/figma/viewall-projects/hero-seo.webp" alt="The Chatswood Collection mixed-use development" title="Project showcase" />

    <section className="showcase-intro">
      <div><span>New development</span><h2>The Chatswood Collection</h2></div>
      <p>The Chatswood Collection by OIA Group marks a new milestone in Australian development, bringing together a curated selection of new and upcoming projects that reflect the future of urban living. With a focus on design, connectivity, sustainability and long-term value, each development contributes to the continued evolution of Chatswood as one of Sydney’s most dynamic and desirable destinations.</p>
    </section>

    <section className="showcase-collection">
      <div><Image src="/figma/viewall-projects/collection-latest.webp" alt="The Chatswood Collection residential development" fill sizes="86vw" /></div>
      <h2>The Chatswood Collection</h2>
    </section>

    <section className="showcase-list">
      {projects.map((project) => <article id={project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className={`showcase-project image-${project.side}`} key={project.name}>
        <Link className="card-hit-area" href={`/viewall-projects/#${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} aria-label={`View ${project.name} details`} />
        <div className="showcase-project-image"><Image src={project.image} alt={`${project.name} development`} fill sizes="55vw" /></div>
        <div className="showcase-project-copy">
          <span>Australian projects</span>
          {project.phase && <b className="showcase-phase">{project.phase}</b>}
          <h2>{project.name}</h2>
          <h3>{project.location}</h3>
          <p>{project.description}</p>
        </div>
      </article>)}
    </section>

    <BrandedFooter />
  </div>;
}
