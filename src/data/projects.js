// ============================================================================
// PROJECTS — featured work, fully localized.
// ============================================================================

export const PROJECTS = [
  {
    slug: "telegram-test-bot",
    status: "completed",
    year: "2026",
    cover: "/images/projects/telegram-test-bot.svg",
    tech: ["Python", "Aiogram 3.x", "PostgreSQL", "Redis", "Docker"],
    links: { github: "https://github.com/sanjar-dev/tarixiy-tafakkur-bot", demo: "https://t.me/tarixiy_tafakkur_bot" },
    title: {
      uz: "Tarixiy Tafakkur — Telegram test boti",
      en: "Tarixiy Tafakkur — Telegram Quiz Bot",
      ru: "Tarixiy Tafakkur — Telegram-бот для тестирования",
    },
    summary: {
      uz: "O'zbek tilidagi ta'lim kanali uchun to'liq test/quiz platformasi: maxsus javob parseri, sertifikat generatsiyasi va admin panel bilan.",
      en: "A complete quiz/test platform for an Uzbek-language educational channel, featuring a custom answer parser, certificate generation, and admin tooling.",
      ru: "Полноценная платформа тестирования для образовательного канала на узбекском языке — с собственным парсером ответов, генерацией сертификатов и админ-панелью.",
    },
    challenge: {
      uz: "Ta'lim kanali minglab obunachilar uchun test o'tkazish, natijalarni avtomatik baholash va sertifikat berish jarayonini avtomatlashtirish kerak edi — qo'lda boshqarish imkonsiz bo'lib qolgan edi.",
      en: "The education channel needed to run tests for thousands of subscribers, automatically grade results, and issue certificates — manual handling had become impossible at scale.",
      ru: "Образовательному каналу нужно было проводить тесты для тысяч подписчиков, автоматически оценивать результаты и выдавать сертификаты — ручное управление стало невозможным при таком масштабе.",
    },
    solution: {
      uz: "Aiogram 3.x asosida FSM-boshqariluvchi test oqimi, foydalanuvchi javoblarini turli formatlarda tushunadigan maxsus parser va PDF sertifikat generatori qurdim. Redis FSM holatini saqlash uchun, PostgreSQL esa natijalar va foydalanuvchi profillarini saqlash uchun ishlatiladi.",
      en: "I built an FSM-driven test flow on Aiogram 3.x, a custom parser that understands user answers across multiple input formats, and a PDF certificate generator. Redis backs FSM state, PostgreSQL stores results and user profiles.",
      ru: "Я построил тестовый сценарий на FSM с использованием Aiogram 3.x, собственный парсер, понимающий ответы пользователей в разных форматах, и генератор PDF-сертификатов. Redis хранит состояние FSM, PostgreSQL — результаты и профили пользователей.",
    },
    result: {
      uz: "Bot ishlab chiqarishga joylashtirildi va minglab foydalanuvchi uchun avtomatik test va sertifikatlashtirishni ta'minlaydi, admin paneli orqali test bazasini boshqarish imkoniyati bilan.",
      en: "Deployed to production, the bot now handles automated testing and certification for thousands of users, with an admin panel for managing the question bank.",
      ru: "Бот развёрнут в продакшене и обеспечивает автоматическое тестирование и сертификацию для тысяч пользователей, с админ-панелью для управления базой вопросов.",
    },
    features: {
      uz: ["Moslashuvchan javob parseri", "Avtomatik PDF sertifikat generatsiyasi", "Admin panel orqali savol bazasini boshqarish", "Natijalar statistikasi va reytinglar"],
      en: ["Flexible answer parser", "Automatic PDF certificate generation", "Admin panel for question bank management", "Results statistics and leaderboards"],
      ru: ["Гибкий парсер ответов", "Автоматическая генерация PDF-сертификатов", "Админ-панель для управления базой вопросов", "Статистика результатов и рейтинги"],
    },
  },
  {
    slug: "ecoguardian-ai",
    status: "completed",
    year: "2026",
    cover: "/images/projects/ecoguardian-ai.svg",
    tech: ["PyTorch", "Transformers", "Kubernetes", "FastAPI", "MLOps"],
    links: { github: "https://github.com/sanjar-dev/ecoguardian-ai", demo: null },
    title: {
      uz: "EcoGuardian AI — klimat monitoring platformasi",
      en: "EcoGuardian AI — Climate Monitoring Platform",
      ru: "EcoGuardian AI — платформа мониторинга климата",
    },
    summary: {
      uz: "Dubaydagi xalqaro tanlov uchun ishlab chiqilgan korporativ darajadagi AI platforma blueprint'i: 7.2 milliard parametrli multimodal klimat transformeri, MLOps pipeline va edge deployment bilan.",
      en: "An enterprise-grade AI platform blueprint built for an international competition in Dubai, featuring a 7.2B-parameter multimodal climate transformer, full MLOps pipeline, and edge deployment.",
      ru: "Корпоративный AI-блюпринт платформы, разработанный для международного конкурса в Дубае: мультимодальный климатический трансформер на 7.2 млрд параметров, полный MLOps-пайплайн и edge-развёртывание.",
    },
    challenge: {
      uz: "Sun'iy yo'ldosh tasvirlari, sensor ma'lumotlari va matnli hisobotlarni birlashtirib, ekologik xavflarni erta aniqlaydigan, ishlab chiqarishga tayyor tizim arxitekturasini loyihalash kerak edi.",
      en: "The brief called for designing a production-grade system architecture that fuses satellite imagery, sensor data, and text reports to detect environmental risks early.",
      ru: "Требовалось спроектировать продакшен-готовую архитектуру системы, объединяющую спутниковые снимки, данные сенсоров и текстовые отчёты для раннего выявления экологических рисков.",
    },
    solution: {
      uz: "Multimodal transformer arxitekturasini loyihalashtirib, MLOps pipeline (o'qitish, validatsiya, joylashtirish), Kubernetes asosida edge deployment strategiyasi va to'liq biznes-modelni ishlab chiqdim.",
      en: "I designed the multimodal transformer architecture, the MLOps pipeline covering training, validation, and deployment, a Kubernetes-based edge deployment strategy, and the full business model.",
      ru: "Я спроектировал архитектуру мультимодального трансформера, MLOps-пайплайн (обучение, валидация, развёртывание), стратегию edge-развёртывания на Kubernetes и полную бизнес-модель.",
    },
    result: {
      uz: "Tanlov uchun to'liq texnik hujjatlar, arxitektura diagrammalari va biznes-reja taqdim etildi — korporativ darajadagi AI tizimlarini boshidan oxirigacha loyihalash qobiliyatini namoyish etdi.",
      en: "Delivered complete technical documentation, architecture diagrams, and a business plan for the competition — demonstrating end-to-end capability in designing enterprise-grade AI systems.",
      ru: "Представлена полная техническая документация, архитектурные диаграммы и бизнес-план для конкурса — продемонстрирована способность проектировать AI-системы корпоративного уровня от начала до конца.",
    },
    features: {
      uz: ["7.2B parametrli multimodal transformer", "To'liq MLOps pipeline", "Kubernetes edge deployment", "Real-time klimat xavf bashorati"],
      en: ["7.2B-parameter multimodal transformer", "Full MLOps pipeline", "Kubernetes edge deployment", "Real-time climate risk prediction"],
      ru: ["Мультимодальный трансформер на 7.2 млрд параметров", "Полный MLOps-пайплайн", "Edge-развёртывание на Kubernetes", "Прогноз климатических рисков в реальном времени"],
    },
  },
  {
    slug: "ai-medical-assistant",
    status: "in-progress",
    year: "2026",
    cover: "/images/projects/ai-medical-assistant.svg",
    tech: ["Python", "FastAPI", "Gemini AI", "PostgreSQL", "Docker"],
    links: { github: "https://github.com/sanjar-dev/ai-medical-assistant", demo: null },
    title: {
      uz: "AI Medikal Yordamchi",
      en: "AI Medical Assistant",
      ru: "AI Медицинский Ассистент",
    },
    summary: {
      uz: "Bemorlarga dastlabki simptom tahlili va shifoxonaga yo'naltirish bo'yicha yordam beruvchi, tibbiy maslahat bermaydigan, faqat ma'lumot beruvchi AI yordamchi tizim.",
      en: "An AI assistant that helps patients with preliminary symptom triage and clinic routing — strictly informational, never offering medical advice.",
      ru: "AI-ассистент, помогающий пациентам с предварительной сортировкой симптомов и направлением к нужному специалисту — строго информационный, без медицинских рекомендаций.",
    },
    challenge: {
      uz: "Foydalanuvchilar tez-tez qaysi shifokorga murojaat qilishni bilmaydi va navbatga tushishdan oldin noto'g'ri bo'limga boradi. Maqsad — javobgarlikni saqlab, yo'naltirishni soddalashtirish edi.",
      en: "Users often don't know which specialist to see and end up in the wrong department before even getting an appointment. The goal was to simplify routing while staying clearly within informational bounds.",
      ru: "Пользователи часто не знают, к какому специалисту обратиться, и попадают не в то отделение ещё до записи на приём. Задача — упростить маршрутизацию, оставаясь строго в информационных рамках.",
    },
    solution: {
      uz: "Gemini AI asosida simptomlarni tahlil qiluvchi, ehtiyot choralari va tibbiy cheklovlar bilan ishlab chiqilgan suhbat oqimini, FastAPI backend va PostgreSQL ma'lumotlar bazasini loyihalashtirdim.",
      en: "I'm building a Gemini-AI-powered symptom triage conversation flow with careful safety guardrails and medical disclaimers, backed by a FastAPI backend and PostgreSQL database.",
      ru: "Я разрабатываю диалоговый сценарий сортировки симптомов на базе Gemini AI с тщательными мерами безопасности и медицинскими предупреждениями, на FastAPI backend и базе данных PostgreSQL.",
    },
    result: {
      uz: "Hozirda faol ishlab chiqilmoqda — xavfsizlik qatlamlari va klinik yo'naltirish mantiqi ustida ishlanmoqda.",
      en: "Currently in active development — refining the safety layers and clinical routing logic.",
      ru: "Находится в активной разработке — дорабатываются слои безопасности и логика клинической маршрутизации.",
    },
    features: {
      uz: ["Simptomlarga asoslangan dastlabki tahlil", "Aniq tibbiy ogohlantirishlar", "Mutaxassis yo'naltirish mantiqi", "Suhbat tarixi va xavfsiz ma'lumot saqlash"],
      en: ["Symptom-based preliminary triage", "Explicit medical disclaimers", "Specialist routing logic", "Conversation history with secure data storage"],
      ru: ["Предварительная сортировка по симптомам", "Явные медицинские предупреждения", "Логика маршрутизации к специалистам", "История диалогов с безопасным хранением данных"],
    },
  },
];

export const FUTURE_PROJECTS = [
  {
    title: { uz: "AI Life OS — mahsuldorlik boti", en: "AI Life OS — Productivity Bot", ru: "AI Life OS — бот продуктивности" },
    description: {
      uz: "Vazifa, odat va maqsadlarni kuzatuvchi, Pomodoro va Gemini AI integratsiyasiga ega katta hajmdagi Telegram mahsuldorlik boti.",
      en: "A large-scale Telegram productivity bot with task, habit, and goal tracking, Pomodoro sessions, and Gemini AI integration.",
      ru: "Крупный Telegram-бот продуктивности с трекингом задач, привычек и целей, Pomodoro-сессиями и интеграцией Gemini AI.",
    },
  },
  {
    title: { uz: "LinguaMind AI — nutq tahlili ilovasi", en: "LinguaMind AI — Speech Analysis App", ru: "LinguaMind AI — приложение анализа речи" },
    description: {
      uz: "O'zbek, rus va ingliz tillarini qo'llab-quvvatlovchi, Gemini 1.5 Flash asosidagi AI nutq tahlili Flutter mobil ilovasi.",
      en: "A Flutter mobile app for AI-powered speech analysis across Uzbek, Russian, and English, built on Gemini 1.5 Flash.",
      ru: "Мобильное приложение на Flutter для AI-анализа речи на узбекском, русском и английском языках на базе Gemini 1.5 Flash.",
    },
  },
  {
    title: { uz: "Kiberxavfsizlik audit vositasi", en: "Cybersecurity Audit Tool", ru: "Инструмент аудита кибербезопасности" },
    description: {
      uz: "Kichik va o'rta loyihalar uchun avtomatlashtirilgan xavfsizlik tekshiruvi va zaifliklarni aniqlash vositasi.",
      en: "An automated security scanning and vulnerability detection tool for small and mid-sized projects.",
      ru: "Инструмент автоматического сканирования безопасности и обнаружения уязвимостей для небольших и средних проектов.",
    },
  },
];

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
