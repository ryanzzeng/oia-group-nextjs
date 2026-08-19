import type { Metadata } from "next";
import Image from "next/image";
import { BrandedFooter } from "../../components/site";
import { NewsFeaturedSlider } from "../../components/news-featured-slider";

export const metadata: Metadata = { title: "Beijing Jinxi Green Building Technology Industry Group", alternates: { canonical: "/news/bjgbt/" } };
const companyOverview = "Beijing Jinxi Green Building Technology Industry Group Co., Ltd. (Jinxi Green Building) is a wholly-owned subsidiary of Jinxi Iron and Steel Group Co., Ltd. (Hebei Jinxi Iron and Steel Group). Established in 1986, Jinxi Group was reorganized in 2009 with Jinxi Steel Co., Ltd. as its core. It has since developed into a large-scale integrated enterprise group comprising 12 national high-tech enterprises, 3 listed companies, 4 provincial-level specialized and innovative SMEs, and 1 national-level “Little Giant” enterprise, with nearly 100 subsidiaries domestically and abroad, and annual sales revenue exceeding RMB 100 billion.";
const transformation = [
  "Following national industrial policies, Jinxi Group has deepened supply-side structural reform, continuously optimized its product and industrial structure, and pursued a transformation strategy centered on specialization, extension, and high-end development, charting a unique Jinxi-style path of green, low-carbon, and high-quality growth.",
  "Specialization: Strengthening its core steel business, Jinxi has built the world’s largest section steel production and application base, producing 152 series and 428 specifications of products such as H-beams, steel sheet piles, high-speed rail poles, I-beams, channels, and angles. These products are widely used in major national projects such as the Greater Bay Area’s cross-sea bridges, Xiong’an New Area, Beijing Winter Olympics, and Beijing Daxing International Airport, and are exported to 33 countries and regions. Jinxi holds over 90% market share in high-speed rail pole production.",
  "Industrial Extension: By extending its industrial chain, the group promotes industrial upgrading, expanding into sectors such as ultra-high-voltage power transmission towers (Huijintong, stock code: 603577), prefabricated steel-structure construction, nuclear power precision valves (Jiangsu Shentong, stock code: 002438), new materials, and microelectronics.",
  "High-Tech Innovation: As a high-tech enterprise, Jinxi focuses on developing high-end, green products across advanced steel profiles, nuclear power valves, new material rollers, ultra-high-voltage transmission towers, and microelectronics, continuously enhancing its core competitiveness.",
];

export default function BeijingJinxiGreenBuildingPage() {
  return <article className="green-news-page">
    <section className="green-news-hero"><Image src="/figma/news-page/city.png" alt="Beijing waterfront business district" fill priority sizes="100vw" /><div className="green-news-hero-shade" /><div className="green-news-hero-copy"><span>News</span><h1>Beijing Jinxi<br />Green Building<br />Technology</h1></div></section>
    <section className="green-news-summary"><p>{companyOverview}</p></section>
    <section className="green-news-business"><h2>Prefabricated Steel Structure<br />Green Building Business</h2><p>The company’s core business includes industrial facilities, urban renewal projects, and EPC general contracting for industrial parks. Through this business model, the company has delivered a wide range of high-quality, fully integrated construction projects both in China and overseas.<br />In China, its prefabricated steel structure solutions have been applied to major projects including the Xiong’an New Area Industrial Park and the redevelopment of Beijing Fengtai Railway Station, Asia’s largest railway hub by floor area.</p><div className="green-news-wide-image"><Image src="/figma/news-green/prefabricated-building.png" alt="Prefabricated steel structure office building" fill sizes="86vw" /></div></section>
    <section className="green-news-epc">
      <h2>Representative EPC Projects</h2><h3>26,000 m² Jinxi New Materials Technology Co., Ltd. New PC Plant Phase I Project</h3>
      <div className="green-news-image-pair first"><div><Image src="/figma/news-green/pc-plant-plan.png" alt="New PC plant masterplan" fill sizes="46vw" /></div><div><Image src="/figma/news-green/pc-plant.png" alt="New PC plant" fill sizes="34vw" /></div></div>
      <div className="green-news-long-copy">{transformation.map((text) => <p key={text}>{text}</p>)}</div>
      <h2>Representative EPC Projects</h2><h3>8,275 m² Expansion of the Canteen and Construction of a New Student Services Centre at Jiangxi County Vocational &amp; Technical Education Centre</h3>
      <div className="green-news-image-pair second"><div><Image src="/figma/news-green/student-centre-aerial.png" alt="Student services centre aerial view" fill sizes="40vw" /></div><div><Image src="/figma/news-green/student-centre-render.png" alt="Student services centre rendering" fill sizes="46vw" /></div></div>
    </section>
    <NewsFeaturedSlider />
    <BrandedFooter />
  </article>;
}
