// Generates robots.txt and sitemap.xml into /public before the Vite build runs,
// so they ship as static files at the site root. Run via `npm run build`
// (wired as a "prebuild" script) or manually with `node scripts/gen-seo-files.mjs`.
import fs from "fs";
import path from "path";

const SITE_URL = "https://sanjar.dev";
const LANGS = ["uz", "en", "ru"];
const STATIC_PATHS = ["", "/about", "/blog", "/projects", "/contact"];

const BLOG_SLUGS = [
  "python-for-beginners",
  "aiogram-telegram-bot-guide",
  "machine-learning-fundamentals",
  "cybersecurity-basics",
  "mysql-best-practices",
];

const PROJECT_SLUGS = [
  "telegram-test-bot",
  "ecoguardian-ai",
  "ai-medical-assistant",
];

const allPaths = [
  ...STATIC_PATHS,
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
  ...PROJECT_SLUGS.map((s) => `/projects/${s}`),
];

function buildUrlEntry(pathSuffix) {
  const alternates = LANGS.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${pathSuffix}" />`
  ).join("\n");
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/uz${pathSuffix}" />`;

  return LANGS.map(
    (lang) => `  <url>
    <loc>${SITE_URL}/${lang}${pathSuffix}</loc>
${alternates}
${xDefault}
    <changefreq>${pathSuffix === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${pathSuffix === "" ? "1.0" : pathSuffix.startsWith("/blog") || pathSuffix.startsWith("/projects") ? "0.7" : "0.8"}</priority>
  </url>`
  ).join("\n");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPaths.map(buildUrlEntry).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const publicDir = path.resolve("public");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log(`Generated sitemap.xml with ${allPaths.length * LANGS.length} URLs and robots.txt`);
