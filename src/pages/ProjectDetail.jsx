import { useParams, NavLink, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { withLang } from "../hooks/useLangSync";
import { getProjectBySlug } from "../data/projects";
import { projectSchema, breadcrumbSchema } from "../lib/schema";
import { SITE_URL } from "../data/siteConfig";

const STATUS_LABEL_KEY = {
  completed: "statusCompleted",
  "in-progress": "statusInProgress",
};

export default function ProjectDetail({ lang }) {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to={withLang(lang, "/projects")} replace />;
  }

  return (
    <>
      <SEO
        lang={lang}
        title={project.title[lang]}
        description={project.summary[lang]}
        path={`/projects/${slug}`}
        image={project.cover}
        jsonLd={[
          projectSchema({
            lang,
            title: project.title[lang],
            description: project.summary[lang],
            slug,
            tech: project.tech,
          }),
          breadcrumbSchema([
            { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
            { name: t("nav.projects"), url: `${SITE_URL}/${lang}/projects` },
            { name: project.title[lang], url: `${SITE_URL}/${lang}/projects/${slug}` },
          ]),
        ]}
      />

      <article className="section-pad max-w-3xl">
        <ScrollReveal>
          <NavLink
            to={withLang(lang, "/projects")}
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={14} />
            {t("common.backToProjects")}
          </NavLink>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-400">
              {t(`projects.${STATUS_LABEL_KEY[project.status]}`)}
            </span>
            <span className="font-mono text-xs text-ink-500">{project.year}</span>
          </div>

          <h1 className="mt-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {project.title[lang]}
          </h1>
          <p className="mt-4 text-lg text-ink-300">{project.summary[lang]}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FaGithub size={15} />
                {t("common.sourceCode")}
              </a>
            )}
            {project.links?.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={15} />
                {t("common.liveDemo")}
              </a>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-void-border">
            <img
              src={project.cover}
              alt={project.title[lang]}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10">
          <h2 className="mb-3 font-display text-xl font-semibold">{t("projects.techUsed")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-void-border bg-void-panel/50 px-3.5 py-1.5 font-mono text-sm text-ink-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10">
          <h2 className="mb-3 font-display text-xl font-semibold">{t("projects.keyFeatures")}</h2>
          <ul className="space-y-2.5">
            {project.features[lang].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-300">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-cyan-400" />
                {feature}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 space-y-6">
          <div className="glass-panel p-6">
            <h3 className="mb-2 font-mono text-sm text-cyan-400">{t("projects.challenge")}</h3>
            <p className="text-ink-300">{project.challenge[lang]}</p>
          </div>
          <div className="glass-panel p-6">
            <h3 className="mb-2 font-mono text-sm text-cyan-400">{t("projects.solution")}</h3>
            <p className="text-ink-300">{project.solution[lang]}</p>
          </div>
          <div className="glass-panel p-6">
            <h3 className="mb-2 font-mono text-sm text-cyan-400">{t("projects.result")}</h3>
            <p className="text-ink-300">{project.result[lang]}</p>
          </div>
        </ScrollReveal>
      </article>
    </>
  );
}
