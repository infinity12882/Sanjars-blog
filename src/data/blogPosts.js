// ============================================================================
// BLOG POST INDEX — metadata for every article, per language.
// Full article bodies (Markdown-ish HTML strings) live in
// src/content/blog/<lang>/<slug>.js and are imported lazily by slug.
// ============================================================================

export const BLOG_POSTS = [
  {
    slug: "python-for-beginners",
    category: "python",
    date: "2026-01-12",
    readTime: { uz: 9, en: 8, ru: 9 },
    cover: "/images/blog/python-for-beginners.svg",
    title: {
      uz: "Python'ni noldan o'rganish: to'liq qo'llanma",
      en: "Python for Beginners: A Complete Starting Guide",
      ru: "Python с нуля: полное руководство для начинающих",
    },
    excerpt: {
      uz: "Dasturlashni hech qachon o'rganmagan bo'lsangiz ham, Python bilan birinchi qadamlarni qanday qo'yishni bosqichma-bosqich tushuntiraman.",
      en: "Never written a line of code before? Here's a step-by-step path into Python, from setup to your first real script.",
      ru: "Никогда не писали код? Подробно разбираю первые шаги в Python — от установки до первого рабочего скрипта.",
    },
    tags: ["python", "beginner", "programming"],
  },
  {
    slug: "aiogram-telegram-bot-guide",
    category: "telegram-bots",
    date: "2026-02-03",
    readTime: { uz: 12, en: 11, ru: 12 },
    cover: "/images/blog/aiogram-guide.svg",
    title: {
      uz: "Aiogram 3.x bilan Telegram bot yaratish: amaliy qo'llanma",
      en: "Building a Telegram Bot with Aiogram 3.x: A Practical Guide",
      ru: "Создание Telegram-бота на Aiogram 3.x: практическое руководство",
    },
    excerpt: {
      uz: "Aiogram 3.x yordamida birinchi Telegram botingizni yaratish, FSM holatlari va xatoliklarni boshqarish bo'yicha amaliy darslar.",
      en: "A hands-on walkthrough for building your first Telegram bot with Aiogram 3.x, covering FSM states and error handling.",
      ru: "Практический разбор создания первого Telegram-бота на Aiogram 3.x — FSM-состояния и обработка ошибок.",
    },
    tags: ["telegram", "aiogram", "python", "bots"],
  },
  {
    slug: "machine-learning-fundamentals",
    category: "ml",
    date: "2026-03-01",
    readTime: { uz: 10, en: 10, ru: 10 },
    cover: "/images/blog/ml-fundamentals.svg",
    title: {
      uz: "Mashinali o'qitish asoslari: tushunchalar va birinchi model",
      en: "Machine Learning Fundamentals: Concepts and Your First Model",
      ru: "Основы машинного обучения: концепции и первая модель",
    },
    excerpt: {
      uz: "Nazoratli va nazoratsiz o'qitish, train/test bo'linishi va scikit-learn yordamida birinchi modelni qurish haqida.",
      en: "Supervised vs. unsupervised learning, the train/test split, and building your first model with scikit-learn.",
      ru: "Обучение с учителем и без, разбиение train/test и первая модель на scikit-learn.",
    },
    tags: ["machine-learning", "ai", "scikit-learn"],
  },
  {
    slug: "cybersecurity-basics",
    category: "cybersecurity",
    date: "2026-04-08",
    readTime: { uz: 8, en: 8, ru: 8 },
    cover: "/images/blog/cybersecurity-basics.svg",
    title: {
      uz: "Kiberxavfsizlik asoslari: har bir dasturchi bilishi kerak bo'lgan narsalar",
      en: "Cybersecurity Basics Every Developer Should Know",
      ru: "Основы кибербезопасности, которые должен знать каждый разработчик",
    },
    excerpt: {
      uz: "SQL-injection, XSS va parollarni xeshlashdan tortib, ishlab chiqarish muhitida xavfsizlikni ta'minlash bo'yicha asosiy qoidalar.",
      en: "From SQL injection and XSS to password hashing — the core security rules every backend developer needs in production.",
      ru: "От SQL-инъекций и XSS до хеширования паролей — базовые правила безопасности для продакшена.",
    },
    tags: ["cybersecurity", "security", "backend"],
  },
  {
    slug: "mysql-best-practices",
    category: "databases",
    date: "2026-05-02",
    readTime: { uz: 9, en: 9, ru: 9 },
    cover: "/images/blog/mysql-best-practices.svg",
    title: {
      uz: "MySQL bilan ishlashda eng yaxshi amaliyotlar",
      en: "MySQL Best Practices for Production Applications",
      ru: "Лучшие практики работы с MySQL в продакшене",
    },
    excerpt: {
      uz: "Indekslash, normalizatsiya, so'rovlarni optimallashtirish va ishlab chiqarish muhitida MySQL'ni xavfsiz boshqarish.",
      en: "Indexing, normalization, query optimization, and safely operating MySQL in a production environment.",
      ru: "Индексирование, нормализация, оптимизация запросов и безопасная эксплуатация MySQL в продакшене.",
    },
    tags: ["mysql", "databases", "sql"],
  },
];

export const getPostBySlug = (slug) => BLOG_POSTS.find((p) => p.slug === slug);
export const getPostsByCategory = (category) =>
  category ? BLOG_POSTS.filter((p) => p.category === category) : BLOG_POSTS;
export const getRelatedPosts = (slug, category, limit = 2) =>
  BLOG_POSTS.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
