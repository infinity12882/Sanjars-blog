import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ArticleCard from "../components/ArticleCard";
import { BLOG_POSTS } from "../data/blogPosts";
import { CATEGORY_META, CATEGORY_SLUGS } from "../data/categories";
import { breadcrumbSchema } from "../lib/schema";
import { SITE_URL } from "../data/siteConfig";

export default function Blog({ lang }) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const filteredPosts = useMemo(
    () =>
      activeCategory
        ? BLOG_POSTS.filter((p) => p.category === activeCategory)
        : BLOG_POSTS,
    [activeCategory]
  );

  function setCategory(slug) {
    if (!slug) {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  }

  return (
    <>
      <SEO
        lang={lang}
        title={t("blog.title")}
        description={t("blog.subtitle")}
        path="/blog"
        jsonLd={breadcrumbSchema([
          { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
          { name: t("nav.blog"), url: `${SITE_URL}/${lang}/blog` },
        ])}
      />

      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-3">{t("blog.eyebrow")}</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{t("blog.title")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-300">{t("blog.subtitle")}</p>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("")}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                !activeCategory
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                  : "border-void-border text-ink-300 hover:border-cyan-500/40 hover:text-cyan-400"
              }`}
            >
              {t("blog.allCategories")}
            </button>
            {CATEGORY_SLUGS.map((slug) => (
              <button
                key={slug}
                onClick={() => setCategory(slug)}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  activeCategory === slug
                    ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                    : "border-void-border text-ink-300 hover:border-cyan-500/40 hover:text-cyan-400"
                }`}
              >
                {CATEGORY_META[slug][lang].name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Posts grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={Math.min(i * 0.06, 0.3)}>
              <ArticleCard post={post} lang={lang} />
            </ScrollReveal>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="mt-10 text-center text-ink-300">{t("blog.noArticles")}</p>
        )}
      </section>
    </>
  );
}
