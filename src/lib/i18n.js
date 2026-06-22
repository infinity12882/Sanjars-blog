import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANGUAGE, LANGUAGES } from "../data/siteConfig";

import uzCommon from "../locales/uz/common.json";
import enCommon from "../locales/en/common.json";
import ruCommon from "../locales/ru/common.json";

i18next.use(initReactI18next).init({
  resources: {
    uz: { common: uzCommon },
    en: { common: enCommon },
    ru: { common: ruCommon },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: LANGUAGES.map((l) => l.code),
  defaultNS: "common",
  ns: ["common"],
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18next;
