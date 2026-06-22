import { useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES, DEFAULT_LANGUAGE } from "../data/siteConfig";

const VALID_CODES = LANGUAGES.map((l) => l.code);

/**
 * Reads the :lang URL param, validates it, and keeps i18next + <html lang>
 * in sync with it. Returns { lang, isValid } — if isValid is false the
 * caller should redirect (handled centrally in LangLayout).
 */
export function useLangSync() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const isValid = VALID_CODES.includes(lang);

  useEffect(() => {
    if (isValid && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    if (isValid) {
      document.documentElement.lang = lang;
    }
  }, [lang, isValid, i18n]);

  return { lang: isValid ? lang : DEFAULT_LANGUAGE, isValid };
}

/** Builds a path prefixed with the current language, e.g. withLang('en', '/blog') -> '/en/blog' */
export function withLang(lang, path) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/** Strips the leading /xx language segment from the current pathname. */
export function useUnprefixedPath() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length && VALID_CODES.includes(parts[0])) {
    parts.shift();
  }
  return "/" + parts.join("/");
}

export { Navigate };
