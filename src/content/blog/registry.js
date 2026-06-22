// Lazy-loaded article body registry, keyed by [lang][slug].
// Using import() keeps each article body out of the main bundle until needed —
// this is what powers code-splitting for the blog post route.

const loaders = {
  uz: {
    "python-for-beginners": () => import("./uz/python-for-beginners.js"),
    "aiogram-telegram-bot-guide": () => import("./uz/aiogram-telegram-bot-guide.js"),
    "machine-learning-fundamentals": () => import("./uz/machine-learning-fundamentals.js"),
    "cybersecurity-basics": () => import("./uz/cybersecurity-basics.js"),
    "mysql-best-practices": () => import("./uz/mysql-best-practices.js"),
  },
  en: {
    "python-for-beginners": () => import("./en/python-for-beginners.js"),
    "aiogram-telegram-bot-guide": () => import("./en/aiogram-telegram-bot-guide.js"),
    "machine-learning-fundamentals": () => import("./en/machine-learning-fundamentals.js"),
    "cybersecurity-basics": () => import("./en/cybersecurity-basics.js"),
    "mysql-best-practices": () => import("./en/mysql-best-practices.js"),
  },
  ru: {
    "python-for-beginners": () => import("./ru/python-for-beginners.js"),
    "aiogram-telegram-bot-guide": () => import("./ru/aiogram-telegram-bot-guide.js"),
    "machine-learning-fundamentals": () => import("./ru/machine-learning-fundamentals.js"),
    "cybersecurity-basics": () => import("./ru/cybersecurity-basics.js"),
    "mysql-best-practices": () => import("./ru/mysql-best-practices.js"),
  },
};

export async function loadArticleBody(lang, slug) {
  const loader = loaders[lang]?.[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
