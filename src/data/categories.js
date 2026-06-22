// Localized blog category metadata used across the blog listing, filters,
// per-article tags, and category-specific SEO copy.
export const CATEGORY_META = {
  python: {
    uz: { name: "Python", description: "Python tili, kutubxonalar va backend dasturlash bo'yicha maqolalar." },
    en: { name: "Python", description: "Articles on the Python language, libraries, and backend development." },
    ru: { name: "Python", description: "Статьи о языке Python, библиотеках и backend-разработке." },
  },
  ai: {
    uz: { name: "Sun'iy intellekt", description: "Sun'iy intellekt tizimlari, LLM va AI integratsiyasi haqida." },
    en: { name: "Artificial Intelligence", description: "On AI systems, LLMs, and integrating intelligence into products." },
    ru: { name: "Искусственный интеллект", description: "Об AI-системах, LLM и интеграции интеллекта в продукты." },
  },
  ml: {
    uz: { name: "Mashinali o'qitish", description: "Mashinali o'qitish algoritmlari va modellarni o'qitish bo'yicha." },
    en: { name: "Machine Learning", description: "On machine learning algorithms, training, and evaluation." },
    ru: { name: "Машинное обучение", description: "Об алгоритмах машинного обучения, обучении и оценке моделей." },
  },
  "telegram-bots": {
    uz: { name: "Telegram botlar", description: "Aiogram va Telegram Bot API yordamida bot yaratish bo'yicha qo'llanmalar." },
    en: { name: "Telegram Bots", description: "Guides on building bots with Aiogram and the Telegram Bot API." },
    ru: { name: "Telegram-боты", description: "Руководства по созданию ботов с Aiogram и Telegram Bot API." },
  },
  cybersecurity: {
    uz: { name: "Kiberxavfsizlik", description: "Ilovalar va tizimlarni himoyalash bo'yicha amaliy maslahatlar." },
    en: { name: "Cybersecurity", description: "Practical guidance on securing applications and systems." },
    ru: { name: "Кибербезопасность", description: "Практические советы по защите приложений и систем." },
  },
  databases: {
    uz: { name: "Ma'lumotlar bazasi", description: "PostgreSQL, MySQL va Redis bilan ishlash bo'yicha." },
    en: { name: "Databases", description: "Working with PostgreSQL, MySQL, and Redis." },
    ru: { name: "Базы данных", description: "Работа с PostgreSQL, MySQL и Redis." },
  },
  "software-engineering": {
    uz: { name: "Dasturiy ta'minot muhandisligi", description: "Arxitektura, kod sifati va ishlab chiqarish amaliyotlari." },
    en: { name: "Software Engineering", description: "Architecture, code quality, and production engineering practices." },
    ru: { name: "Программная инженерия", description: "Архитектура, качество кода и практики промышленной разработки." },
  },
};

export const CATEGORY_SLUGS = Object.keys(CATEGORY_META);
