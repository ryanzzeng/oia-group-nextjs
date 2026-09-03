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
    images: [{ url: "/figma/og-image.webp", width: 1200, height: 630, alt: "OIA Group residential development" }],
  },
  twitter: { card: "summary_large_image", title: "OIA Group", description: "Premium residential developments created for modern Australian living.", images: ["/figma/og-image.webp"] },
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
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://oia.group/#organization",
          name: "OIA Group",
          legalName: "Oriental Investment Australia Pty Ltd",
          url: "https://oia.group/",
          logo: {
            "@type": "ImageObject",
            url: "https://oia.group/figma/oia-logo.webp",
            width: 256,
            height: 256,
          },
          email: "info@oiagroup.com.au",
          telephone: "+61 2 9642 7718",
          description: "Sydney-based residential property development and investment company operating across Australia.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Suite 12.01, Level 12, Tower 1, 495 Victoria Avenue",
            addressLocality: "Chatswood",
            addressRegion: "NSW",
            postalCode: "2067",
            addressCountry: "AU",
          },
          areaServed: { "@type": "Country", name: "Australia" },
          parentOrganization: { "@type": "Organization", name: "China Oriental Group Company Limited" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+61 2 9642 7718",
            email: "info@oiagroup.com.au",
            contactType: "customer enquiries",
            areaServed: "AU",
            availableLanguage: "English",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://oia.group/#website",
          url: "https://oia.group/",
          name: "OIA Group",
          description: "Premium residential and mixed-use property developments across Sydney and Australia.",
          publisher: { "@id": "https://oia.group/#organization" },
          inLanguage: "en-AU",
        },
      ],
    }).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <MotionEnhancements />
    <main>{children}</main>
    <MobileEnquiry />
  </body></html>;
}
