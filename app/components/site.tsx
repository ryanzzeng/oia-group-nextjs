import Image from "next/image";
import Link from "next/link";
export { SiteHeader } from "./site-header";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Residential Projects", "/projects"],
  ["News", "/news"],
  ["Contact", "/contact"],
] as const;

export function ImageHero({ className, image, alt, title }: { className: string; image: string; alt: string; title: React.ReactNode }) {
  return <section className={className}>
    <Image src={image} alt={alt} fill priority sizes="100vw" />
    <div className={`${className}-shade`} />
    <h1>{title}</h1>
  </section>;
}

export function PillLink({ href, children, className = "", arrow = "→" }: { href: string; children: React.ReactNode; className?: string; arrow?: "→" | "←" | "↗" }) {
  const isBack = arrow === "←";
  return <Link className={`oia-button ${isBack ? "oia-button-back" : ""} ${className}`.trim()} href={href}>
    <span>{children}</span>
    <b aria-hidden="true"><Image src="/figma/ui/arrow.svg" alt="" width={15} height={18} /></b>
  </Link>;
}

export function BrandedFooter({ className = "brand-footer" }: { className?: string }) {
  return <footer className={className}>
    <div className="brand-footer-intro"><h2>Contact us</h2><a href="mailto:admin@oiagroup.com.au">admin@oiagroup.com.au</a></div>
    <nav aria-label="Footer navigation">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <div className="brand-footer-legal"><Link href="#">Privacy Policy</Link><span>©OIA 2026</span><Link className="brand-footer-mark" href="/" aria-label="OIA Group home"><Image src="/figma/projects-page/raw-12.png" alt="" width={102} height={102} /></Link></div>
  </footer>;
}
