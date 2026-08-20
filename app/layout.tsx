import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site";
import { MotionEnhancements } from "./components/motion-enhancements";
import { MobileEnquiry } from "./components/mobile-enquiry";

export const metadata: Metadata = {
  metadataBase: new URL("https://oia.group"),
  title: { default: "OIA Group", template: "%s | OIA Group" },
  description: "OIA Group creates premium residential developments across Australia, combining strategic locations, thoughtful design and long-term value.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "OIA Group",
    title: "OIA Group — Premium Residential Developments",
    description: "Thoughtfully designed residential developments created for modern Australian living.",
    url: "/",
    images: [{ url: "/figma/viewall-projects/hero.webp", width: 3500, height: 2060, alt: "OIA Group residential development" }],
  },
  twitter: { card: "summary_large_image", title: "OIA Group", description: "Premium residential developments created for modern Australian living.", images: ["/figma/viewall-projects/hero.webp"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#204c9c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "OIA Group",
      url: "https://oia.group",
      logo: "https://oia.group/figma/projects-page/raw-12.png",
      email: "admin@oiagroup.com.au",
      description: "Premium residential property development and investment company operating across Australia.",
    }).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <MotionEnhancements />
    <main>{children}</main>
    <MobileEnquiry />
  </body></html>;
}
