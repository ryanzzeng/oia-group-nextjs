import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "OIA Group", template: "%s | OIA Group" },
  description: "OIA Group creates enduring places across Australia.",
};

const nav = [["About", "/about-us"], ["Projects", "/projects"], ["News", "/news"]];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header"><Link className="wordmark" href="/">OIA</Link><nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="contact-link" href="mailto:info@oia.group">Contact</Link></header>
    <main>{children}</main>
    <footer><div><span className="wordmark">OIA</span><p>Creating considered places<br/>for people and communities.</p></div><div className="footer-links">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href="mailto:info@oia.group">info@oia.group</a></div><p className="legal">© {new Date().getFullYear()} OIA Group</p></footer>
  </body></html>;
}
