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
    ["/news-single-page/", .6, "monthly"],
    ["/contact/", .8, "yearly"],
  ].map(([path, priority, changeFrequency]) => ({ url: `${baseUrl}${path}`, priority: priority as number, changeFrequency: changeFrequency as "weekly" | "monthly" | "yearly" }));
}
