import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import { withLang } from "../hooks/useLangSync";

export default function NotFound({ lang }) {
  const { t } = useTranslation();

  return (
    <>
      <SEO lang={lang} title={t("notFound.title")} description={t("notFound.description")} path="/404" noindex />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <p className="font-mono text-7xl font-bold text-cyan-500/30 sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{t("notFound.title")}</h1>
        <p className="mt-2 max-w-md text-ink-300">{t("notFound.description")}</p>
        <NavLink to={withLang(lang, "/")} className="btn-primary mt-8">
          <ArrowLeft size={15} />
          {t("notFound.backHome")}
        </NavLink>
      </section>
    </>
  );
}
