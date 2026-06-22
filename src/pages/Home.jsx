import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Send, Code2, BrainCircuit, Bot, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ArticleCard from "../components/ArticleCard";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";
import TerminalHero from "../components/TerminalHero";
import { withLang } from "../hooks/useLangSync";
import { BLOG_POSTS } from "../data/blogPosts";
import { PROJECTS } from "../data/projects";
import { SKILLS, AUTHOR } from "../data/siteConfig";
import { personSchema, websiteSchema } from "../lib/schema";

const HIGHLIGHT_ICONS = [Code2, BrainCircuit, Bot, ShieldCheck];

export default function Home({ lang }) {
  const { t } = useTranslation();
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const featuredProjects = PROJECTS.slice(0, 3);

  const highlights = [
    { uz: "Python", en: "Python", ru: "Python" },
    { uz: "Sun'iy intellekt", en: "Artificial Intelligence", ru: "Искусственный интеллект" },
    { uz: "Telegram botlar", en: "Telegram Bots", ru: "Telegram-боты" },
    { uz: "Kiberxavfsizlik", en: "Cybersecurity", ru: "Кибербезопасность" },
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={t("seo.siteTitle")}
        description={t("seo.siteDescription")}
        path="/"
        jsonLd={[personSchema(lang), websiteSchema(lang)]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-grid-pattern bg-grid">
        <div className="absolute inset-0 bg-glow-radial" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow mb-5"
            >
              {t("home.heroEyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              {t("home.heroGreeting")}{" "}
              <span className="gradient-text">{AUTHOR.name}</span>
              <span className="text-cyan-400">.</span>
              <br />
              {t("home.heroRole")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-lg text-balance text-lg text-ink-300"
            >
              {t("home.heroDescription")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <NavLink to={withLang(lang, "/projects")} className="btn-primary">
                {t("home.ctaPrimary")}
                <ArrowRight size={16} />
              </NavLink>
              <NavLink to={withLang(lang, "/contact")} className="btn-ghost">
                {t("home.ctaSecondary")}
                <Send size={15} />
              </NavLink>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-2">
              {highlights.map((h, i) => {
                const Icon = HIGHLIGHT_ICONS[i];
                return (
                  <span
                    key={h.en}
                    className="flex items-center gap-1.5 rounded-full border border-void-border bg-void-panel/50 px-3 py-1.5 font-mono text-xs text-ink-300"
                  >
                    <Icon size={12} className="text-cyan-400" />
                    {h[lang]}
                  </span>
                );
              })}
            </div>
          </div>

          <TerminalHero />
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-pad">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-2">
            <p className="eyebrow">{t("blog.eyebrow")}</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">{t("home.featuredArticles")}</h2>
                <p className="mt-2 text-ink-300">{t("home.featuredArticlesSubtitle")}</p>
              </div>
              <NavLink
                to={withLang(lang, "/blog")}
                className="flex items-center gap-1.5 font-mono text-sm text-cyan-400 hover:text-cyan-300"
              >
                {t("common.viewAll")} <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <ArticleCard post={post} lang={lang} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-pad">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-2">
            <p className="eyebrow">{t("projects.eyebrow")}</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">{t("home.featuredProjects")}</h2>
                <p className="mt-2 text-ink-300">{t("home.featuredProjectsSubtitle")}</p>
              </div>
              <NavLink
                to={withLang(lang, "/projects")}
                className="flex items-center gap-1.5 font-mono text-sm text-cyan-400 hover:text-cyan-300"
              >
                {t("common.viewAll")} <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} lang={lang} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Skills preview */}
      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-2">~/sanjar/skills</p>
          <h2 className="mb-2 text-3xl font-bold">{t("home.skillsTitle")}</h2>
          <p className="mb-10 text-ink-300">{t("home.skillsSubtitle")}</p>
        </ScrollReveal>

        <div className="glass-panel grid grid-cols-1 gap-x-12 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <ScrollReveal>
          <div className="glass-panel relative overflow-hidden p-10 text-center sm:p-16">
            <div className="absolute inset-0 bg-glow-radial opacity-60" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                {t("home.ctaSectionTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-ink-300">
                {t("home.ctaSectionSubtitle")}
              </p>
              <NavLink to={withLang(lang, "/contact")} className="btn-primary mt-8">
                {t("home.ctaSecondary")}
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
