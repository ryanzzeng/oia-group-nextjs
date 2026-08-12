import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandedFooter, ImageHero, PillLink } from "../components/site";
import { ProjectEnquiry } from "../components/project-enquiry";

export const metadata: Metadata = { title: "Project Showcase", description: "View OIA Group residential projects across Chatswood, Burwood, Hornsby, the Central Coast and Hunter Valley.", alternates: { canonical: "/viewall-projects/" } };

const projects = [
  {
    name: "Chatswood Help St",
    location: "3–5 Help St Chatswood",
    image: "/figma/viewall-projects/chatswood.png",
    side: "left",
    description: "The proposed high-rise project at 3–5 Help Street is located in the heart of Chatswood. Just steps from the transport hub and pedestrian precinct, it offers both vibrancy and tranquillity.",
  },
  {
    name: "Angophora",
    location: "Chatswood",
    image: "/figma/viewall-projects/angophora.png",
    side: "right",
    description: "On the edge of Chatswood’s CBD, The Angophora brings together two residential towers above a shared podium. Retail, landscaped edges, communal gardens and terraces create a layered transition from city to home.",
  },
  {
    name: "Hornsby Townhouse",
    location: "8 Galston Rd Hornsby",
    image: "/figma/viewall-projects/hornsby.png",
    side: "right",
    description: "Welcome to Mildred Garden. A diverse selection of thoughtfully designed floorplans caters to a variety of contemporary lifestyles.",
  },
  {
    name: "Lighthouse Burwood",
    location: "Light House Burwood",
    image: "/figma/viewall-projects/lighthouse.png",
    side: "left",
    description: "Two luxurious apartments — a two-bedroom and a three-bedroom residence — moments from Westfield Burwood, Burwood Station, parks and amenities, with views from the Blue Mountains to the city skyline.",
  },
  {
    name: "IQ Burwood",
    location: "15–19 Clarence St Burwood",
    image: "/figma/viewall-projects/iq-burwood.png",
    side: "right",
    description: "A modern urban oasis in vibrant Burwood, combining style, comfort and convenience in a prime location for residents and investors.",
  },
  {
    name: "Ridge Park Estate",
    location: "Warnervale Central Coast",
    image: "/figma/viewall-projects/ridge-park.png",
    side: "left",
    description: "Located in Warnervale Town Centre, Ridge Park Estate offers 92 residential lots with easy access to the M1, Warnervale Station, Sydney, Newcastle and nearby coastal destinations.",
  },
  {
    name: "Denman Park Estate",
    location: "Denman Town Hunter Valley",
    image: "/figma/viewall-projects/denman.png",
    side: "right",
    description: "Comprising 194 residential lots, Denman Park Estate offers country living surrounded by natural landscapes, local amenities and lifestyle destinations, with access to established town conveniences.",
  },
];

function ProjectLink() {
  return <PillLink className="showcase-pill" href="/projects" arrow="→">View project</PillLink>;
}

export default function ViewAllProjects() {
  return <div className="showcase-page">
    <ImageHero className="showcase-hero" image="/figma/viewall-projects/hero.png" alt="The Angophora mixed-use development in Chatswood" title="Project showcase" />

    <section className="showcase-intro">
      <div><span>New development</span><h2>The Chatswood Collection</h2></div>
      <p>The Chatswood Collection by OIA Group marks a new milestone in Australian development, bringing together a curated selection of new and upcoming projects that reflect the future of urban living. With a focus on design, connectivity, sustainability and long-term value, each development contributes to the continued evolution of Chatswood as one of Sydney’s most dynamic and desirable destinations.</p>
    </section>

    <section className="showcase-collection">
      <Image src="/figma/viewall-projects/collection.png" alt="Refined bedroom in The Chatswood Collection" fill sizes="88vw" />
    </section>

    <section className="showcase-list">
      {projects.map((project) => <article className={`showcase-project image-${project.side}`} key={project.name}>
        <Link className="card-hit-area" href="/projects" aria-label={`View ${project.name}`} />
        <div className="showcase-project-image"><Image src={project.image} alt={`${project.name} development`} fill sizes="55vw" /></div>
        <div className="showcase-project-copy">
          <span>Australian projects</span>
          <h2>{project.name}</h2>
          <h3>{project.location}</h3>
          <p>{project.description}</p>
          <ProjectLink />
        </div>
      </article>)}
    </section>

    <ProjectEnquiry />

    <BrandedFooter />
  </div>;
}
