const routes = [
  "", "/projects", "/concepts", "/resume",
  "/work/pikabox", "/work/fortune-ecash", "/work/agriflow", "/work/advenio",
  "/work/mlearn", "/work/toedur", "/work/simplia", "/work/chii-neema", "/work/tickety",
  "/brand/amarachi", "/brand/everything-riri", "/brand/kindhearts",
  "/brand/daftari-kenya", "/brand/brea-cakes",
  "/posterfolio", "/logofolio",
];

export default function sitemap() {
  const base = "https://vincentmzeembindyo.design";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
