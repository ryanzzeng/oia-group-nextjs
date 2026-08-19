import type { MetadataRoute } from "next";

const baseUrl = "https://oia.group";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ["", 1, "monthly"],
    ["/about-us/", .8, "yearly"],
    ["/projects/", .9, "monthly"],
    ["/viewall-projects/", .9, "monthly"],
    ["/news/", .7, "weekly"],
    ["/news/bjcad/", .6, "monthly"],
    ["/news/bjgbt/", .6, "monthly"],
    ["/news/jxdhw/", .6, "monthly"],
    ["/news/bjby/", .6, "monthly"],
  ].map(([path, priority, changeFrequency]) => ({ url: `${baseUrl}${path}`, priority: priority as number, changeFrequency: changeFrequency as "weekly" | "monthly" | "yearly" }));
}
