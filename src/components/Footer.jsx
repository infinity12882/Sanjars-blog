import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { withLang } from "../hooks/useLangSync";
import { SITE_NAME, AUTHOR, SOCIAL_LINKS, BLOG_CATEGORIES } from "../data/siteConfig";
import { CATEGORY_META } from "../data/categories";

const ICONS = { Github: FaGithub, Linkedin: FaLinkedin, Send: FaTelegram, Mail, Twitter: FaXTwitter };

export default function Footer({ lang }) {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "blog", path: "/blog" },
    { key: "projects", path: "/projects" },
    { key: "contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-void-border bg-void-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink-50">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                <Terminal size={16} />
              </span>
              <span>
                Sanjar<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-300">{t("footer.tagline")}</p>
            <p className="mt-2 font-mono text-xs text-ink-500">{AUTHOR.location[lang]}</p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={withLang(lang, item.path)}
                    className="text-sm text-ink-300 transition-colors hover:text-cyan-400"
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t("footer.categories")}</h3>
            <ul className="space-y-2.5">
              {BLOG_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <NavLink
                    to={withLang(lang, `/blog?category=${cat.slug}`)}
                    className="text-sm text-ink-300 transition-colors hover:text-cyan-400"
                  >
                    {CATEGORY_META[cat.slug][lang].name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-void-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ink-500">
            © {year} {SITE_NAME}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a
                  key={link.key}
                  href={link.url}
                  target={link.key === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.key}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-void-border text-ink-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-ink-500/70 sm:text-left">
          {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}
