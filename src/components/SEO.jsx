import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, AUTHOR, LANGUAGES } from "../data/siteConfig";

/**
 * Centralized SEO component. Renders:
 * - title / meta description
 * - canonical URL
 * - hreflang alternate links for all 3 languages + x-default
 * - Open Graph + Twitter Card tags
 * - optional JSON-LD structured data (passed as jsonLd prop, array or object)
 *
 * `path` should be the UNPREFIXED path (e.g. "/blog/python-for-beginners"),
 * the component prefixes it per language for hreflang/canonical generation.
 */
export default function SEO({
  lang,
  title,
  description,
  path = "/",
  image,
  type = "website",
  jsonLd = null,
  noindex = false,
  publishedTime = null,
  modifiedTime = null,
}) {
  const cleanPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}/${lang}${cleanPath}`;
  const ogImage = image || `${SITE_URL}/images/og-default.svg`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical + hreflang alternates */}
      <link rel="canonical" href={canonicalUrl} />
      {LANGUAGES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={l.htmlLang}
          href={`${SITE_URL}/${l.code}${cleanPath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/uz${cleanPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta
        property="og:locale"
        content={lang === "uz" ? "uz_UZ" : lang === "ru" ? "ru_RU" : "en_US"}
      />
      {LANGUAGES.filter((l) => l.code !== lang).map((l) => (
        <meta
          key={l.code}
          property="og:locale:alternate"
          content={l.code === "uz" ? "uz_UZ" : l.code === "ru" ? "ru_RU" : "en_US"}
        />
      ))}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && <meta property="article:author" content={AUTHOR.name} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@sanjar_dev" />

      {/* JSON-LD structured data */}
      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
