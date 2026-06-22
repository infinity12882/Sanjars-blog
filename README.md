# Sanjar's Blog

A premium, multilingual personal blog and portfolio site built for search engine and AI-system discoverability — designed so recruiters, clients, and universities can find and understand who Sanjar is, what he builds, and what he writes about.

**Live structure:** `/uz` (default) · `/en` · `/ru`

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v3 + `@tailwindcss/typography` |
| Routing | React Router v7 (`/:lang/...` URL structure) |
| i18n | i18next + react-i18next |
| Animation | Framer Motion |
| SEO | react-helmet-async, hand-rolled JSON-LD schema builders |
| Icons | lucide-react + react-icons (brand icons) |

---

## Project structure

```
src/
  components/        Header, Footer, SEO, cards, etc.
  layouts/            LangLayout — validates :lang param, wraps Header/Footer
  pages/              Home, About, Blog, BlogPost, Projects, ProjectDetail, Contact, NotFound
  data/               siteConfig.js (single source of truth), blogPosts.js, projects.js, categories.js
  content/blog/       Article bodies, per language, lazy-loaded via registry.js
  locales/            uz/en/ru common.json translation files
  lib/                i18n.js (i18next config), schema.js (JSON-LD builders)
  hooks/              useLangSync — keeps i18next + <html lang> in sync with the URL
scripts/
  gen-seo-files.mjs   Generates /public/sitemap.xml and /public/robots.txt
  gen-covers.mjs      Generates on-brand SVG cover images for posts/projects
public/
  images/             Generated SVG covers, avatar, OG image, favicon
  sitemap.xml         Generated — do not hand-edit, regenerate instead
  robots.txt          Generated
```

---

## Editing content

**Site-wide config (domain, name, contact info, social links, skills):**
Edit `src/data/siteConfig.js`. Everything else (sitemap, canonical URLs, JSON-LD, footer links) reads from this one file.

**Blog posts:**
1. Add metadata (title/excerpt/date/category per language) to `src/data/blogPosts.js`.
2. Add the article body as HTML-ish strings in `src/content/blog/{uz,en,ru}/<slug>.js` (export default a template string).
3. Register the new slug's lazy import in `src/content/blog/registry.js`.
4. Add the slug to `BLOG_SLUGS` in `scripts/gen-seo-files.mjs` so it's included in the sitemap.

**Projects:**
Edit `src/data/projects.js` (`PROJECTS` array) and add the slug to `PROJECT_SLUGS` in `scripts/gen-seo-files.mjs`.

**Translations (nav, buttons, page copy):**
Edit `src/locales/{uz,en,ru}/common.json`. Keep keys identical across all three files.

---

## Before going live — replace these placeholders

- **Domain:** `SITE_URL` in `src/data/siteConfig.js` is set to `https://sanjar.dev`. Update it if you use a different domain, then re-run `npm run gen:seo`.
- **Contact details:** `AUTHOR.email`, `.telegram`, `.github`, `.linkedin`, `.twitter` in `siteConfig.js` are realistic placeholders — swap in your real handles/URLs.
- **Avatar:** `public/images/sanjar-avatar.svg` is a placeholder. Replace with a real photo (`.jpg`/`.webp`) and update `AUTHOR.avatar` in `siteConfig.js`.
- **CV/Resume:** the About page links to `/sanjar-cv.pdf`, which doesn't exist yet — add your real CV PDF to `public/sanjar-cv.pdf`.
- **Project links:** GitHub/demo URLs in `src/data/projects.js` are placeholders — point them at your real repos.
- **OG image:** `public/images/og-default.svg` is a generated placeholder; consider a custom 1200×630 PNG/JPG for richer social previews (some platforms render SVG poorly in link previews).

---

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` — it redirects to `/uz` automatically.

## Building for production

```bash
npm run build
```

This runs `scripts/gen-seo-files.mjs` first (via the `prebuild` hook) to regenerate `sitemap.xml`/`robots.txt`, then builds to `dist/`.

```bash
npm run preview   # serve the production build locally
```

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel: **New Project → Import** your repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` · Output directory: `dist` (both auto-detected).
5. Deploy. `vercel.json` is already configured with SPA rewrites (so `/en/blog/some-post` works on a hard refresh) and long-term caching headers for `/assets` and `/images`.
6. Once you have a custom domain, add it in **Project Settings → Domains** and update `SITE_URL` in `siteConfig.js` to match exactly (including `https://`), then redeploy.

## Deploying elsewhere (Netlify, Cloudflare Pages, static host)

Any static host works as long as it serves `dist/` and rewrites all non-file paths to `/index.html` for client-side routing:

- **Netlify:** add a `public/_redirects` file containing `/*  /index.html  200`.
- **Cloudflare Pages:** SPA fallback is supported via project settings — set the "Single Page Application" mode, or add an equivalent `_redirects` file.

---

## SEO checklist (already implemented)

- ✅ Per-language routes (`/uz`, `/en`, `/ru`) with a header language switcher
- ✅ `hreflang` alternates + `x-default` on every page
- ✅ Canonical URLs per language
- ✅ Dynamic `<title>` / meta description per page
- ✅ Open Graph + Twitter Card tags
- ✅ JSON-LD: `Person`, `WebSite`, `BlogPosting`, `BreadcrumbList`, `CreativeWork`, `ProfilePage`
- ✅ Multilingual `sitemap.xml` (with hreflang annotations) + `robots.txt`
- ✅ Route-level + article-level code splitting (lazy loading)
- ✅ Semantic HTML headings, descriptive alt text, accessible focus states

After deploying, submit `https://yourdomain.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools, and verify rich-result rendering with Google's Rich Results Test.

---

## Performance notes

- Pages and article bodies are code-split — each route loads only what it needs.
- Vendor libraries (`react`, `react-router-dom`, `framer-motion`, `i18next`) are split into separate cacheable chunks in `vite.config.js`.
- Images currently ship as inline-friendly SVGs (tiny file size, infinitely scalable, zero layout shift). Swap to optimized JPG/WebP for real photography and keep `loading="lazy"` on below-the-fold images (already applied throughout).
- Reduced-motion is respected: animations are skipped for users with `prefers-reduced-motion: reduce`.

---

## Important: this is a client-rendered SPA — plan for prerendering

This site is a single-page app: the server sends one HTML shell, and React renders everything (including all the SEO meta tags and JSON-LD) in the browser via JavaScript. Modern Googlebot executes JavaScript and generally indexes SPAs like this correctly — but:

- **Not all crawlers execute JavaScript.** Some AI systems, social-media link unfurlers, and older/simpler bots only read the raw HTML response, which means they'd see the generic shell title/description from `index.html` rather than each page's specific content.
- **Initial content is invisible until JS loads**, which can matter for crawl budget on very large sites (not a concern at this size, but worth knowing).

For maximum discoverability — especially since a stated goal here is being understood by AI systems that may not run JavaScript — consider one of these upgrades once the content is finalized:

1. **Prerendering** (recommended, least invasive): use a tool like `vite-plugin-prerender` or run a script with Puppeteer/Playwright at build time to snapshot each of the ~39 routes into static HTML with the correct `<title>`, meta tags, and JSON-LD already baked in, while keeping the rest of the app as-is.
2. **Migrate to a meta-framework** (more work, more power): Next.js or Astro would give you true server-side rendering or static generation per route, which is the most robust long-term answer if the blog grows significantly.
3. **Ship as-is** if your primary audience is human visitors arriving via direct links, social shares, and JS-executing search engines — this covers the large majority of real-world traffic today.

If you'd like, this can be added as a follow-up — prerendering ~39 known routes at build time is a contained, well-scoped addition to this codebase.
#   S a n j a r s - b l o g  
 