"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Residential Projects", "/projects"],
  ["News", "/news"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 80);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => href === "/"
    ? pathname === "/"
    : pathname.startsWith(href) || (href === "/projects" && pathname.startsWith("/viewall-projects"));

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <Link className="header-logo" href="/" aria-label="OIA Group home"><Image src="/figma/projects-page/raw-12.png" alt="" width={87} height={87} priority loading="eager" /></Link>
    <nav aria-label="Primary navigation">{navigation.map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} aria-current={isActive(href) ? "page" : undefined} key={href} href={href}>{label}</Link>)}</nav>
    <button className={`mobile-menu-button${menuOpen ? " is-open" : ""}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(value => !value)}><span /><span /></button>
    <div className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`} id="mobile-navigation">
      <nav aria-label="Mobile navigation">{navigation.map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} aria-current={isActive(href) ? "page" : undefined} key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav>
    </div>
  </header>;
}
