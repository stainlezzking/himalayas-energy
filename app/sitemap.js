export default async function sitemap() {
  const pages = [
    "",
    "about.html",
    "contact.html",
    "services.html",
    "sustainability.html",
  ];

  return pages.map((slug) => ({
    url: `https://himalayasenergy.com/${slug}`,
    lastModified: new Date(),
  }));
}
