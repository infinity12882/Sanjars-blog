import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, FUTURE_PROJECTS } from "../data/projects";
import { breadcrumbSchema } from "../lib/schema";
import { SITE_URL } from "../data/siteConfig";

export default function Projects({ lang }) {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        lang={lang}
        title={t("projects.title")}
        description={t("projects.subtitle")}
        path="/projects"
        jsonLd={breadcrumbSchema([
          { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
          { name: t("nav.projects"), url: `${SITE_URL}/${lang}/projects` },
        ])}
      />

      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-3">{t("projects.eyebrow")}</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{t("projects.title")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-300">{t("projects.subtitle")}</p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} lang={lang} />
            </ScrollReveal>
          ))}
        </div>

        {/* Future projects roadmap */}
        <ScrollReveal delay={0.1} className="mt-20">
          <div className="mb-8 flex items-center gap-2">
            <Sparkles size={20} className="text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold">{t("projects.futureProjectsTitle")}</h2>
              <p className="mt-1 text-sm text-ink-300">{t("projects.futureProjectsSubtitle")}</p>
            </div>
          </div>

          <div className="relative space-y-6 border-l border-void-border pl-8">
            {FUTURE_PROJECTS.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[34px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500 shadow-glow-cyan" />
                <div className="glass-panel p-5">
                  <h3 className="font-display font-semibold text-ink-50">{item.title[lang]}</h3>
                  <p className="mt-2 text-sm text-ink-300">{item.description[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
