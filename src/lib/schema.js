import { SITE_URL, SITE_NAME, AUTHOR } from "../data/siteConfig";

/** schema.org Person markup — the core entity for personal-brand SEO/AI discovery. */
export function personSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR.fullName,
    url: SITE_URL,
    image: `${SITE_URL}${AUTHOR.avatar}`,
    jobTitle: AUTHOR.jobTitle[lang],
    description: AUTHOR.jobTitle[lang],
    email: `mailto:${AUTHOR.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "ru" ? "Ташкент" : lang === "en" ? "Tashkent" : "Toshkent",
      addressCountry: "UZ",
    },
    sameAs: [AUTHOR.github, AUTHOR.linkedin, AUTHOR.twitter, AUTHOR.telegram],
    knowsAbout: [
      "Python Development",
      "Telegram Bot Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Databases",
      "Software Engineering",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent / Freelance",
    },
  };
}

/** WebSite schema with SearchAction — helps search engines understand the site as a whole. */
export function websiteSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: AUTHOR.jobTitle[lang],
    inLanguage: lang,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

/** BlogPosting schema for an individual article. */
export function articleSchema({ lang, title, description, slug, datePublished, image, tags }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/${lang}/blog/${slug}/#article`,
    headline: title,
    description,
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/images/og-default.svg`,
    datePublished,
    dateModified: datePublished,
    inLanguage: lang,
    keywords: tags?.join(", "),
    mainEntityOfPage: `${SITE_URL}/${lang}/blog/${slug}`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

/** BreadcrumbList schema — helps search engines render breadcrumb rich results. */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** SoftwareSourceCode / CreativeWork schema for a portfolio project. */
export function projectSchema({ lang, title, description, slug, tech }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/${lang}/projects/${slug}/#project`,
    name: title,
    description,
    creator: { "@id": `${SITE_URL}/#person` },
    keywords: tech?.join(", "),
    inLanguage: lang,
  };
}

/** ProfilePage schema for the About page. */
export function profilePageSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: lang,
  };
}
