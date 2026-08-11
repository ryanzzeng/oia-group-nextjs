import type { Metadata } from "next";
export const metadata: Metadata = { title: "News" };
const stories=["OIA Group announces its latest residential development","A considered approach to urban renewal","Designing for the way communities live","Project milestone reached in Hurstville"];
export default function News(){return <><section className="page-title dark"><p className="eyebrow">Journal</p><h1>News & perspectives</h1></section><section className="news-grid">{stories.map((s,i)=><article key={s}><div className={`news-image ${["blue","stone","warm"][i%3]}`}></div><p className="eyebrow">{i%2?"Perspective":"News"} · 2026</p><h2>{s}</h2><p>Exploring the ideas, collaborations and progress shaping OIA Group.</p></article>)}</section></>}
