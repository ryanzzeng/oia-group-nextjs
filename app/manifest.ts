import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OIA Group",
    short_name: "OIA",
    description: "OIA Group is a Sydney residential property developer creating premium developments across Australia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#204c9c",
    lang: "en-AU",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
