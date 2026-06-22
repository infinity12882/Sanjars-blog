import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X, Terminal } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { withLang } from "../hooks/useLangSync";

export default function Header({ lang }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "blog", path: "/blog" },
    { key: "projects", path: "/projects" },
    { key: "contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-lg border-b border-void-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <NavLink
          to={withLang(lang, "/")}
          className="group flex items-center gap-2 font-display text-lg font-semibold text-ink-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
            <Terminal size={16} />
          </span>
          <span>
            Sanjar<span className="text-cyan-400">.</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={withLang(lang, item.path)}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 font-mono text-sm transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-ink-300 hover:text-ink-50"
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher currentLang={lang} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher currentLang={lang} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-void-border text-ink-100"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-void-border bg-void/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={withLang(lang, item.path)}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 font-mono text-sm ${
                      isActive ? "text-cyan-400" : "text-ink-300"
                    }`
                  }
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
