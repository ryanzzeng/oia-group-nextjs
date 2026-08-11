import type { Metadata } from "next";
export const metadata: Metadata = { title: "Projects" };
const data=["43 Bridge Street","View Point Hurstville","Australian Projects","Central Residence","Harbour House","Parkside"];
export default function Projects(){return <><section className="page-title"><p className="eyebrow">Portfolio</p><h1>Our projects</h1></section><section className="project-grid">{data.map((name,i)=><article key={name}><div className={`project-tile ${["warm","stone","blue"][i%3]}`}></div><div><span>{String(i+1).padStart(2,"0")}</span><h2>{name}</h2><p>Sydney, NSW</p></div></article>)}</section></>}
