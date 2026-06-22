import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Clock, ArrowUpRight } from "lucide-react";
import { withLang } from "../hooks/useLangSync";
import { CATEGORY_META } from "../data/categories";

export default function ArticleCard({ post, lang, featured = false }) {
  const { t } = useTranslation();

  return (
    <NavLink
      to={withLang(lang, `/blog/${post.slug}`)}
      className={`group glass-panel flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-void-raised">
        <img
          src={post.cover}
          alt={post.title[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-cyan-400">
          <span>{CATEGORY_META[post.category][lang].name}</span>
          <span className="text-ink-500">•</span>
          <span className="flex items-center gap-1 text-ink-500">
            <Clock size={12} />
            {post.readTime[lang]} {t("common.minRead")}
          </span>
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-ink-50 transition-colors group-hover:text-cyan-400 sm:text-xl">
          {post.title[lang]}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-ink-300">{post.excerpt[lang]}</p>
        <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-cyan-400">
          {t("common.readMore")}
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </NavLink>
  );
}
