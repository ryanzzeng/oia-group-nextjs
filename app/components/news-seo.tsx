type NewsSeoProps = {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
};

const baseUrl = "https://oia.group";

export function NewsSeo({ title, description, path, image, datePublished, dateModified = "2026-08-29" }: NewsSeoProps) {
  const pageUrl = new URL(path, baseUrl).toString();
  const imageUrl = new URL(image, baseUrl).toString();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `${pageUrl}#article`,
        headline: title,
        description,
        image: [imageUrl],
        datePublished,
        dateModified,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        author: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "OIA Group" },
        publisher: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "OIA Group" },
        inLanguage: "en-AU",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "News", item: `${baseUrl}/news/` },
          { "@type": "ListItem", position: 3, name: title, item: pageUrl },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
