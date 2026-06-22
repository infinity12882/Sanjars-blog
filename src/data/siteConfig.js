// ============================================================================
// SITE CONFIG — single source of truth.
// Change SITE_URL once you have your real domain wired up at your registrar
// and in your Vercel project settings. Everything else (sitemap, canonical
// URLs, hreflang, JSON-LD) reads from this file.
// ============================================================================

export const SITE_URL = "https://sanjar.dev";

export const SITE_NAME = "Sanjar's Blog";

export const AUTHOR = {
  name: "Sanjar",
  fullName: "Sanjar",
  jobTitle: {
    uz: "Python va sun'iy intellekt dasturchisi",
    en: "Python & AI Developer",
    ru: "Python и AI-разработчик",
  },
  // Replace with real values — these are realistic placeholders.
  email: "developeruz2025@gmail.com",
  telegram: "https://t.me/mr_mukhammadov",
  github: "https://github.com/infinity12882",
  linkedin: "https://www.linkedin.com/in/sanjar-muxammadov-a02a59331/",
  twitter: "https://x.com/Sanjar_dev",
  location: {
    uz: "Toshkent, O'zbekiston",
    en: "Tashkent, Uzbekistan",
    ru: "Ташкент, Узбекистан",
  },
  avatar: "/images/sanjar-photo.jpg",
};

export const LANGUAGES = [
  { code: "uz", label: "O'zbekcha", short: "UZ", htmlLang: "uz" },
  { code: "en", label: "English", short: "EN", htmlLang: "en" },
  { code: "ru", label: "Русский", short: "RU", htmlLang: "ru" },
];

export const DEFAULT_LANGUAGE = "uz";

export const BLOG_CATEGORIES = [
  { slug: "python", icon: "Code2" },
  { slug: "ai", icon: "BrainCircuit" },
  { slug: "ml", icon: "Sparkles" },
  { slug: "telegram-bots", icon: "Bot" },
  { slug: "cybersecurity", icon: "ShieldCheck" },
  { slug: "databases", icon: "Database" },
  { slug: "software-engineering", icon: "Layers" },
];

export const SKILLS = [
  { name: "Python", level: 95, group: "core" },
  { name: "Aiogram / Telegram Bots", level: 92, group: "core" },
  { name: "Artificial Intelligence", level: 85, group: "ai" },
  { name: "Machine Learning", level: 80, group: "ai" },
  { name: "Cybersecurity", level: 78, group: "security" },
  { name: "PostgreSQL / MySQL", level: 88, group: "data" },
  { name: "Redis", level: 75, group: "data" },
  { name: "Docker", level: 80, group: "infra" },
  { name: "React / Vite", level: 82, group: "frontend" },
  { name: "FastAPI / Django", level: 85, group: "core" },
];

export const SOCIAL_LINKS = [
  { key: "telegram", url: AUTHOR.telegram, icon: "Send" },
  { key: "github", url: AUTHOR.github, icon: "Github" },
  { key: "linkedin", url: AUTHOR.linkedin, icon: "Linkedin" },
  { key: "twitter", url: AUTHOR.twitter, icon: "Twitter" },
  { key: "email", url: `mailto:${AUTHOR.email}`, icon: "Mail" },
];
