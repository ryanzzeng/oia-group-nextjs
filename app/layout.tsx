import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site";

export const metadata: Metadata = {
  title: { default: "OIA Group", template: "%s | OIA Group" },
  description: "OIA Group creates enduring places across Australia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <SiteHeader />
    <main>{children}</main>
  </body></html>;
}
