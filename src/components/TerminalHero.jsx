import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Signature hero element: a terminal window that "types out" a sequence of
 * commands describing Sanjar's stack, then settles into a steady blinking
 * cursor. This is the one orchestrated motion moment on the homepage —
 * everything else stays restrained by comparison.
 */
const LINES = [
  { prompt: "sanjar@dev:~$", text: "whoami" },
  { prompt: "", text: "Python & AI Developer", isOutput: true },
  { prompt: "sanjar@dev:~$", text: "cat skills.txt" },
  { prompt: "", text: "Python · Telegram Bots · AI/ML · Security · SQL", isOutput: true },
  { prompt: "sanjar@dev:~$", text: "./build --status production-ready", isFinal: true },
];

// Lazily computed once at module load on the client — avoids a state update
// purely to capture a value that's already stable for the component's life.
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export default function TerminalHero() {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || lineIndex >= LINES.length) {
      return;
    }
    const current = LINES[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), current.isOutput ? 8 : 35);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 350);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, reduceMotion]);

  // Derived rather than stored: "done" follows directly from lineIndex once
  // the sequence has run past the last line, so no extra effect/setState
  // is needed to track it.
  const sequenceFinished = reduceMotion || lineIndex >= LINES.length;
  const visibleLines = reduceMotion ? LINES : LINES.slice(0, Math.min(lineIndex + 1, LINES.length));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-panel mx-auto w-full max-w-lg overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-void-border bg-void-raised/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-xs text-ink-500">sanjar.sh</span>
      </div>
      <div className="min-h-[180px] p-5 font-mono text-sm">
        {visibleLines.map((line, i) => {
          const isCurrent = !reduceMotion && i === lineIndex && !sequenceFinished;
          const text = isCurrent ? line.text.slice(0, charIndex) : line.text;
          return (
            <div key={i} className="mb-1.5 flex flex-wrap gap-2">
              {line.prompt && <span className="text-cyan-400">{line.prompt}</span>}
              <span className={line.isOutput ? "text-ink-300" : "text-ink-50"}>
                {text}
                {isCurrent && <span className="ml-0.5 inline-block h-4 w-[2px] animate-blink bg-cyan-400 align-middle" />}
              </span>
            </div>
          );
        })}
        {sequenceFinished && (
          <span className="ml-[7.5rem] inline-block h-4 w-[2px] animate-blink bg-cyan-400 align-middle" />
        )}
      </div>
    </motion.div>
  );
}
