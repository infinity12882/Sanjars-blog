import { useTranslation } from "react-i18next";
import { GraduationCap, Target, Languages as LanguagesIcon, Download } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SkillBar from "../components/SkillBar";
import { SKILLS, AUTHOR } from "../data/siteConfig";
import { personSchema, profilePageSchema, breadcrumbSchema } from "../lib/schema";
import { SITE_URL } from "../data/siteConfig";

export default function About({ lang }) {
  const { t } = useTranslation();

  const education = [
    { degree: t("about.education1Degree"), desc: t("about.education1Desc") },
    { degree: t("about.education2Degree"), desc: t("about.education2Desc") },
  ];

  const goals = [t("about.goals1"), t("about.goals2"), t("about.goals3")];
  const languages = [t("about.lang1"), t("about.lang2"), t("about.lang3")];

  const stack = [
    "Python", "FastAPI", "Django", "Aiogram", "PostgreSQL", "MySQL",
    "Redis", "Docker", "React", "Vite", "Tailwind CSS", "Git",
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={t("about.title")}
        description={t("about.bio1")}
        path="/about"
        jsonLd={[
          personSchema(lang),
          profilePageSchema(lang),
          breadcrumbSchema([
            { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
            { name: t("nav.about"), url: `${SITE_URL}/${lang}/about` },
          ]),
        ]}
      />

      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-3">{t("about.eyebrow")}</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{t("about.title")}</h1>
          <p className="mt-3 text-lg text-ink-300">{t("about.subtitle")}</p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Bio + avatar */}
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="glass-panel p-6 sm:p-8">
              <h2 className="mb-4 font-display text-xl font-semibold">{t("about.bioTitle")}</h2>
              <div className="space-y-4 text-ink-300">
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
                <p>{t("about.bio3")}</p>
              </div>
              <a
                href="/sanjar-cv.pdf"
                download
                className="btn-ghost mt-6 inline-flex"
              >
                <Download size={15} />
                {t("about.downloadCV")}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-panel flex flex-col items-center p-6 text-center sm:p-8">
              <div className="mb-4 h-28 w-28 overflow-hidden rounded-2xl border-2 border-cyan-500/40 bg-void-raised">
                <img
                  src={AUTHOR.avatar}
                  alt={AUTHOR.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-50">{AUTHOR.name}</h3>
              <p className="mt-1 font-mono text-sm text-cyan-400">{AUTHOR.jobTitle[lang]}</p>
              <p className="mt-1 text-sm text-ink-500">{AUTHOR.location[lang]}</p>

              <div className="mt-6 w-full border-t border-void-border pt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-ink-100">
                  <LanguagesIcon size={15} className="text-cyan-400" />
                  {t("about.languagesTitle")}
                </div>
                <ul className="space-y-1.5 text-left text-sm text-ink-300">
                  {languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Education */}
        <ScrollReveal delay={0.1} className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-cyan-400" />
            <h2 className="text-2xl font-bold">{t("about.educationTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.degree} className="glass-panel p-6">
                <h3 className="font-display font-semibold text-ink-50">{edu.degree}</h3>
                <p className="mt-2 text-sm text-ink-300">{edu.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={0.1} className="mt-14">
          <h2 className="mb-6 text-2xl font-bold">{t("about.skillsTitle")}</h2>
          <div className="glass-panel grid grid-cols-1 gap-x-12 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
            ))}
          </div>
        </ScrollReveal>

        {/* Stack */}
        <ScrollReveal delay={0.1} className="mt-14">
          <h2 className="mb-6 text-2xl font-bold">{t("about.stackTitle")}</h2>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-void-border bg-void-panel/50 px-4 py-2 font-mono text-sm text-ink-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Goals */}
        <ScrollReveal delay={0.1} className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <Target size={20} className="text-cyan-400" />
            <h2 className="text-2xl font-bold">{t("about.goalsTitle")}</h2>
          </div>
          <ul className="space-y-3">
            {goals.map((goal, i) => (
              <li key={i} className="glass-panel flex gap-4 p-5">
                <span className="font-mono text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-300">{goal}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>
    </>
  );
}
