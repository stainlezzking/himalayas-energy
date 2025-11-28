export default async function sitemap() {
  const pages = ["", "about", "contact", "services", "sustainability"];

  return pages.map((slug) => ({
    url: `https://himalayasenergyltd.com/${slug}`,
    lastModified: new Date(),
  }));
}
