import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05080F",
          panel: "#0B1220",
          raised: "#101a2c",
          border: "#1c2940",
        },
        ink: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          300: "#94A3B8",
          500: "#64748B",
        },
        cyan: {
          400: "#22D3EE",
          500: "#38BDF8",
          600: "#0EA5E9",
        },
        indigo: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.15), transparent 60%)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(56,189,248,0.5)",
        "glow-indigo": "0 0 40px -10px rgba(99,102,241,0.5)",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: 1 },
          "50.01%, 100%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [typography],
};
