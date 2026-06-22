import fs from "fs";
import path from "path";

const blogCovers = [
  { file: "python-for-beginners.svg", label: "PYTHON", sub: "for_beginners.py", icon: "code" },
  { file: "aiogram-guide.svg", label: "AIOGRAM", sub: "telegram_bot.py", icon: "bot" },
  { file: "ml-fundamentals.svg", label: "ML", sub: "fundamentals.ipynb", icon: "brain" },
  { file: "cybersecurity-basics.svg", label: "SECURITY", sub: "basics.sh", icon: "shield" },
  { file: "mysql-best-practices.svg", label: "MYSQL", sub: "best_practices.sql", icon: "db" },
];

const projectCovers = [
  { file: "telegram-test-bot.svg", label: "TARIXIY TAFAKKUR", sub: "telegram_bot/", icon: "bot" },
  { file: "ecoguardian-ai.svg", label: "ECOGUARDIAN AI", sub: "climate_model/", icon: "brain" },
  { file: "ai-medical-assistant.svg", label: "AI MEDICAL", sub: "assistant/", icon: "shield" },
];

const icons = {
  code: '<path d="M-18 -6l-10 10 10 10M18 -6l10 10-10 10" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  bot: '<rect x="-16" y="-14" width="32" height="26" rx="6" stroke="#38BDF8" stroke-width="3" fill="none"/><circle cx="-7" cy="-2" r="2.6" fill="#38BDF8"/><circle cx="7" cy="-2" r="2.6" fill="#38BDF8"/><line x1="0" y1="-22" x2="0" y2="-14" stroke="#38BDF8" stroke-width="3"/><circle cx="0" cy="-24" r="2.5" fill="#38BDF8"/>',
  brain: '<path d="M-14 -10c0-7 7-10 14-10s14 3 14 10c0 4-2 6-2 10 0 6-5 10-12 10s-12-4-12-10c0-4-2-6-2-10z" stroke="#6366F1" stroke-width="3" fill="none"/><line x1="0" y1="-20" x2="0" y2="10" stroke="#6366F1" stroke-width="2"/>',
  shield: '<path d="M0 -20l16 6v10c0 10-7 17-16 20-9-3-16-10-16-20v-10z" stroke="#38BDF8" stroke-width="3" fill="none"/><path d="M-7 0l5 5 10-10" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  db: '<ellipse cx="0" cy="-12" rx="16" ry="6" stroke="#6366F1" stroke-width="3" fill="none"/><path d="M-16 -12v24c0 3 7 6 16 6s16-3 16-6v-24" stroke="#6366F1" stroke-width="3" fill="none"/><path d="M-16 0c0 3 7 6 16 6s16-3 16-6" stroke="#6366F1" stroke-width="3" fill="none"/>',
};

function buildSVG({ label, sub, icon }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1220"/>
      <stop offset="100%" stop-color="#05080F"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#38BDF8" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg)"/>
  <rect width="800" height="450" fill="url(#grid)"/>
  <rect width="800" height="450" fill="url(#glow)"/>
  <g transform="translate(400, 180)">${icons[icon]}</g>
  <text x="400" y="320" text-anchor="middle" font-family="monospace" font-size="34" font-weight="700" fill="#F8FAFC" letter-spacing="2">${label}</text>
  <text x="400" y="354" text-anchor="middle" font-family="monospace" font-size="16" fill="#64748B">${sub}</text>
  <rect x="40" y="40" width="720" height="370" rx="16" fill="none" stroke="#1c2940" stroke-width="1.5"/>
</svg>`;
}

const blogDir = path.resolve("public/images/blog");
const projDir = path.resolve("public/images/projects");

for (const c of blogCovers) {
  fs.writeFileSync(path.join(blogDir, c.file), buildSVG(c));
}
for (const c of projectCovers) {
  fs.writeFileSync(path.join(projDir, c.file), buildSVG(c));
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1220"/>
      <stop offset="100%" stop-color="#05080F"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="280" font-family="monospace" font-size="22" fill="#38BDF8">~/sanjar/portfolio</text>
  <text x="80" y="360" font-family="sans-serif" font-size="64" font-weight="700" fill="#F8FAFC">Sanjar's Blog</text>
  <text x="80" y="420" font-family="sans-serif" font-size="28" fill="#94A3B8">Python &#183; AI &#183; Telegram Bots &#183; Cybersecurity</text>
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="#1c2940" stroke-width="2"/>
</svg>`;
fs.writeFileSync(path.resolve("public/images/og-default.svg"), ogSvg);

console.log("Generated", blogCovers.length, "blog covers,", projectCovers.length, "project covers, and OG image.");
