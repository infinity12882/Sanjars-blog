import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { LANGUAGES } from "../data/siteConfig";
import { useUnprefixedPath } from "../hooks/useLangSync";

export default function LanguageSwitcher({ currentLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const unprefixedPath = useUnprefixedPath();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  function selectLang(code) {
    setOpen(false);
    const target = `/${code}${unprefixedPath === "/" ? "" : unprefixedPath}`;
    navigate(target);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-lg border border-void-border bg-void-panel/60 px-3 py-2 font-mono text-xs text-ink-100 backdrop-blur-md transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
      >
        <Globe size={14} />
        <span>{current.short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-void-border bg-void-panel/95 py-1 shadow-glass backdrop-blur-xl"
            role="listbox"
          >
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => selectLang(l.code)}
                  role="option"
                  aria-selected={l.code === currentLang}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-ink-100 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <span>{l.label}</span>
                  {l.code === currentLang && <Check size={14} className="text-cyan-400" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
