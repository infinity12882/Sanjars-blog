import { Outlet, Navigate, useParams } from "react-router-dom";
import { LANGUAGES, DEFAULT_LANGUAGE } from "../data/siteConfig";
import { useLangSync } from "../hooks/useLangSync";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VALID_CODES = LANGUAGES.map((l) => l.code);

export default function LangLayout() {
  const { lang } = useParams();

  if (!VALID_CODES.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return <ValidLangLayout />;
}

function ValidLangLayout() {
  const { lang } = useLangSync();

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
