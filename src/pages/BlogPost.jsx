import { useState, useEffect } from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Clock, Calendar, ArrowLeft, User } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ArticleCard from "../components/ArticleCard";
import { withLang } from "../hooks/useLangSync";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";
import { CATEGORY_META } from "../data/categories";
import { loadArticleBody } from "../content/blog/registry";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { SITE_URL, AUTHOR } from "../data/siteConfig";

export default function BlogPost({ lang }) {
  const { slug } = useParams();
  const { t } = useTranslation();
  const post = getPostBySlug(slug);
  const [body, setBody] = useState(null);
  const [loadedKey, setLoadedKey] = useState(null);

  useEffect(() => {
    let active = true;
    if (post) {
      loadArticleBody(lang, slug).then((html) => {
        if (active) {
          setBody(html);
          setLoadedKey(`${lang}-${slug}`);
        }
      });
    }
    return () => {
      active = false;
    };
  }, [lang, slug, post]);

  const isCurrentArticleLoaded = loadedKey === `${lang}-${slug}`;

  if (!post) {
    return <Navigate to={withLang(lang, "/blog")} replace />;
  }

  const related = getRelatedPosts(slug, post.category, 2);

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <SEO
        lang={lang}
        title={post.title[lang]}
        description={post.excerpt[lang]}
        path={`/blog/${slug}`}
        type="article"
        image={post.cover}
        publishedTime={post.date}
        jsonLd={[
          articleSchema({
            lang,
            title: post.title[lang],
            description: post.excerpt[lang],
            slug,
            datePublished: post.date,
            image: post.cover,
            tags: post.tags,
          }),
          breadcrumbSchema([
            { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
            { name: t("nav.blog"), url: `${SITE_URL}/${lang}/blog` },
            { name: post.title[lang], url: `${SITE_URL}/${lang}/blog/${slug}` },
          ]),
        ]}
      />

      <article className="section-pad max-w-3xl">
        <ScrollReveal>
          <NavLink
            to={withLang(lang, "/blog")}
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={14} />
            {t("common.backToBlog")}
          </NavLink>

          <p className="eyebrow mb-3">{CATEGORY_META[post.category][lang].name}</p>
          <h1 className="text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {post.title[lang]}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 border-b border-void-border pb-6 font-mono text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {AUTHOR.name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime[lang]} {t("common.minRead")}
            </span>
          </div>
        </ScrollReveal>

        <div className="mt-8 overflow-hidden rounded-2xl border border-void-border">
          <img
            src={post.cover}
            alt={post.title[lang]}
            className="aspect-[16/9] w-full object-cover"
            loading="eager"
          />
        </div>

        <ScrollReveal delay={0.1}>
          {isCurrentArticleLoaded && body ? (
            <div className="prose-blog mt-10" dangerouslySetInnerHTML={{ __html: body }} />
          ) : (
            <div className="mt-10 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-void-raised" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-void-raised" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-void-raised" />
            </div>
          )}
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-void-border pt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-void-border bg-void-panel/50 px-3 py-1 font-mono text-xs text-ink-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad pt-0">
          <h2 className="mb-6 text-2xl font-bold">{t("blog.relatedArticles")}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
