import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter, PillLink } from "../../components/site";

export const metadata: Metadata = {
  title: "Beijing Jinxi Centennial Architectural Design",
  description: "Beijing Jinxi Centennial Architectural Design and its development history.",
  alternates: { canonical: "/news-single-page/" },
};

const history = [
  ["1995", "REG Founded Beijing Saibosi Metal Structure Engineering Co., Ltd."],
  ["2005", "As the lead compiling unit, completed the formulation of the national architectural standard design atlas Steel Structure Housing and the industry standard Steel Structure Residential."],
  ["2008", "Jointly developed steel structure technologies with Baosteel Group, including the external sleeve-type new beam-column connection and slotted steel plate shear wall. These technologies passed expert review by the Ministry of Housing and Urban-Rural Development."],
  ["2009", "Obtained the ISO 9001:2008 Certificate and the China Steel Structure Manufacturing Enterprise Qualification Certificate. Undertook the national “863” program project on new steel structure public building systems and key technologies for energy-saving, environmentally friendly enclosure materials."],
  ["2018", "Jinxi Group made a strategic investment in Saibosi. Jinxi Group became the only steel enterprise in China with a complete steel structure industry chain."],
  ["2019", "Participated in two sub-projects under China’s 13th Five-Year Plan major R&D program, setting a new precedent in the industry."],
];

export default function NewsArticle() {
  return <article className="article-figma single-news">
    <section className="single-news-hero">
      <Image src="/figma/news-single/hero.png" alt="Beijing Jinxi office towers" fill priority sizes="100vw" />
      <div className="single-news-overlay" />
      <div className="single-news-title"><span>News</span><h1>Beijing Jinxi Centennial Architectural Design</h1></div>
      <p className="single-news-byline">By <a href="mailto:contact.aoigroup@gmail.com">contact.aoigroup@gmail.com</a> <span>Company</span></p>
    </section>

    <section className="single-news-summary">
      <p>Beijing Jinxi Centennial Architectural Design Co., Ltd. is a wholly-owned subsidiary of Jinxi Group (Hebei Jinxi Iron and Steel Group). Founded in 1986, Jinxi Group has grown into a large-scale integrated enterprise group with 12 national high-tech enterprises, 3 listed companies, 4 provincial-level specialized and innovative SMEs, and 1 national-level “Little Giant” enterprise, owning nearly 100 subsidiaries both domestically and internationally. The group’s annual sales revenue exceeds RMB 100 billion.</p>
    </section>

    <section className="single-news-overview">
      <div className="single-news-tower"><Image src="/figma/news-single/tower.png" alt="Jinxi tower" fill sizes="30vw" /></div>
      <div className="single-news-copy">
        <p>Since 2003, Jinxi Group has been ranked among the Top 500 Enterprises in China for 22 consecutive years, and has been awarded honors such as the National May Day Labor Award and National Civilized Unit.</p>
        <p>Adhering to its market positioning as a promoter and practitioner of prefabricated steel-structure architecture, the group has successfully developed a comprehensive industrial chain for steel-structure building, pioneering a distinctive Jinxi-style path for industry innovation and sustainable growth.</p>
        <p>Beijing Jinxi Centennial Architectural Design Co., Ltd. is a high-tech enterprise in China specializing in prefabricated steel-structure green buildings. Through the integration and restructuring of Jinxi Group’s assets and business operations, the company has established a comprehensive industrial chain encompassing R&amp;D, design, manufacturing, and construction of prefabricated steel-structure green buildings.</p>
        <p>With production bases strategically deployed across the country, the company has become a technological leader, market pioneer, and key industry driver in the field of intelligent manufacturing for prefabricated steel-structure green architecture.</p>
      </div>
    </section>

    <section className="single-news-history">
      <h2>Development History</h2>
      <div className="single-news-timeline">
        {history.map(([year, text], index) => <div className={`single-news-milestone milestone-${index + 1}`} key={year}>
          <h3>{year}</h3><p>{text}</p>
        </div>)}
        <div className="single-news-plans"><Image src="/figma/news-single/plans.png" alt="Architectural plans" fill sizes="38vw" /></div>
      </div>
    </section>

    <section className="single-news-featured">
      <h2>Featured News</h2>
      <div className="single-news-gallery">
        {["waterfront.png", "tower.png", "architecture.png", "waterfront.png"].map((image, index) => <div key={`${image}-${index}`}><Image src={`/figma/news-single/${image}`} alt="" fill sizes="28vw" /></div>)}
      </div>
      <PillLink href="/news">View all news</PillLink>
    </section>

    <BrandedFooter />
  </article>;
}
