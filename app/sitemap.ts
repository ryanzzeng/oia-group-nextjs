import type { MetadataRoute } from "next";

const baseUrl = "https://oia.group";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ["", "2026-08-29"],
    ["/about-us/", "2026-08-29"],
    ["/projects/", "2026-08-29"],
    ["/viewall-projects/", "2026-08-29"],
    ["/news/", "2026-08-29"],
    ["/news/bjcad/", "2026-08-29"],
    ["/news/bjgbt/", "2026-08-29"],
    ["/news/jxdhw/", "2026-08-29"],
    ["/news/bjby/", "2026-08-29"],
  ].map(([path, lastModified]) => ({ url: `${baseUrl}${path}`, lastModified }));
}
