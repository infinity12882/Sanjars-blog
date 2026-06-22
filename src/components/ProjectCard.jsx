import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { withLang } from "../hooks/useLangSync";

const STATUS_STYLES = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  live: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
};

export default function ProjectCard({ project, lang }) {
  const { t } = useTranslation();

  return (
    <div className="glass-panel group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[16/9] w-full overflow-hidden bg-void-raised">
        <img
          src={project.cover}
          alt={project.title[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${STATUS_STYLES[project.status === "completed" ? "completed" : "in-progress"]}`}
          >
            {t(`projects.status${project.status === "completed" ? "Completed" : "InProgress"}`)}
          </span>
          <span className="font-mono text-xs text-ink-500">{project.year}</span>
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold text-ink-50 sm:text-xl">
          {project.title[lang]}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm text-ink-300">{project.summary[lang]}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-void-border bg-void-raised px-2 py-0.5 font-mono text-[11px] text-ink-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <NavLink
            to={withLang(lang, `/projects/${project.slug}`)}
            className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            {t("common.viewProject")}
            <ArrowUpRight size={14} />
          </NavLink>
          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-void-border text-ink-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <FaGithub size={14} />
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-void-border text-ink-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
