import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter, ImageHero, PillLink } from "../components/site";

export const metadata: Metadata = { title: "About Us", description: "Learn about OIA Group’s residential property development portfolio, design approach and investment experience in Australia.", alternates: { canonical: "/about-us/" } };

export default function About() {
  return <div className="about-figma">
    <ImageHero className="about-hero" image="/figma/about/hero.png" alt="OIA residential tower overlooking Sydney" title="About us" />

    <section className="about-introduction">
      <h2><span>OIA Group</span><br />introducing a new way to showcase properties</h2>
      <div>
        <p>Currently, the company is undertaking several premium residential projects. Mildred Garden in Hornsby involves the construction of 20 well-designed, high-quality townhouses in a vibrant and convenient neighbourhood. The Killara luxury townhouse project consists of seven exclusive residences in Sydney’s prestigious Upper North Shore, combining exceptional design, craftsmanship and sophistication.</p>
        <p>In addition, Australia Oriental Investment is developing a luxury duplex project in Epping, premium detached villas in Bellevue Hill, and a high-end residential tower in Chatswood.</p>
        <p>These projects reflect the company’s commitment to superior architecture, prime locations and distinctive, high-quality living experiences. Through these developments, Australia Oriental Investment continues to enhance its reputation in the Australian property market, delivering long-term value and a refined lifestyle for residents.</p>
      </div>
    </section>

    <section className="about-project-image">
      <Image src="/figma/about/project-banner.png" alt="Bright, refined apartment interior" fill sizes="88vw" />
    </section>

    <section className="about-projects-link">
      <p>OIA Group is a property development and investment company with projects across Australia and China, delivering high-quality developments that combine strategic locations, thoughtful design and long-term community value.</p>
      <PillLink className="about-pill" href="/projects">Australian projects</PillLink>
    </section>

    <section className="about-values">
      <Image src="/figma/about/values.png" alt="OIA architecture, interiors and residential design" fill sizes="88vw" />
      <div className="about-value-shades"><i /><i /><i /></div>
      <div className="about-value-labels"><h2>Smart living</h2><h2>Eco construction</h2><h2>Awarded design</h2></div>
    </section>
    <BrandedFooter />
  </div>;
}
