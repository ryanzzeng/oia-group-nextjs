import Image from "next/image";
import Link from "next/link";
export { SiteHeader } from "./site-header";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Residential Projects", "/projects"],
  ["News", "/news"],
] as const;

export function ImageHero({ className, image, alt, title, eyebrow }: { className: string; image: string; alt: string; title: React.ReactNode; eyebrow?: React.ReactNode }) {
  return <section className={className}>
    <Image src={image} alt={alt} fill priority sizes="100vw" />
    <div className={`${className}-shade`} />
    {eyebrow && <p className={`${className}-eyebrow`}>{eyebrow}</p>}
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
    <nav aria-label="Footer navigation">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <address className="brand-footer-contact">
      <a href="tel:+61296427718">PH: (02) 9642 7718</a>
      <a href="mailto:info@oiagroup.com.au">EMAIL: info@oiagroup.com.au</a>
      <span>Suite 12.01, Level 12, Tower 1, 495 Victoria<br />Avenue, Chatswood, NSW 2067</span>
    </address>
    <div className="brand-footer-legal"><Link className="privacy-label" href="/privacy-policy">Privacy Policy</Link><span>©OIA 2026</span><Link className="brand-footer-mark" href="/" aria-label="OIA Group home"><Image src="/figma/oia-logo.webp" alt="" width={102} height={102} /></Link></div>
  </footer>;
}
