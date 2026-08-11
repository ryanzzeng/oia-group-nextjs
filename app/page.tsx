import Link from "next/link";

const projects = [
  { name: "43 Bridge Street", place: "Hurstville", tone: "warm" },
  { name: "Australian Projects", place: "Sydney", tone: "stone" },
  { name: "View Point", place: "Hurstville", tone: "blue" },
];

export default function Home() {
  return <>
    <section className="hero"><div className="hero-image warm"></div><div className="hero-copy"><p className="eyebrow">Property · Place · People</p><h1>Tomorrow,<br/>considered today.</h1><Link className="arrow-link" href="/projects">Explore our projects <span>↗</span></Link></div></section>
    <section className="intro grid"><p className="eyebrow">OIA Group</p><div><h2>We shape enduring places through a thoughtful approach to property.</h2><p>Our work brings together design, community and long-term value to create places that belong.</p></div></section>
    <section className="stats">{[["85,497","SQM delivered"],["618","Residences"],["476","In pipeline"],["10,748","Lives impacted"]].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Our projects</h2><Link className="arrow-link" href="/projects">View all <span>↗</span></Link></div><div className="cards">{projects.map(p=><article className="project-card" key={p.name}><div className={`card-image ${p.tone}`}></div><p>{p.place}</p><h3>{p.name}</h3></article>)}</div></section>
    <section className="statement"><p className="eyebrow">Our perspective</p><blockquote>“A good development doesn’t simply occupy a place. It adds something lasting to it.”</blockquote></section>
  </>;
}
