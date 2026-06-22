import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { AUTHOR, SOCIAL_LINKS, SITE_URL } from "../data/siteConfig";
import { breadcrumbSchema } from "../lib/schema";

const ICONS = { Github: FaGithub, Linkedin: FaLinkedin, Send: FaTelegram, Mail, Twitter: FaXTwitter };

export default function Contact({ lang }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // No backend wired up — opens the user's mail client with the message
    // pre-filled as a reliable fallback that works on any static host.
    try {
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      const subject = encodeURIComponent(form.subject || "Website contact form");
      window.location.href = `mailto:${AUTHOR.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO
        lang={lang}
        title={t("contact.title")}
        description={t("contact.subtitle")}
        path="/contact"
        jsonLd={breadcrumbSchema([
          { name: t("nav.home"), url: `${SITE_URL}/${lang}` },
          { name: t("nav.contact"), url: `${SITE_URL}/${lang}/contact` },
        ])}
      />

      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-3">{t("contact.eyebrow")}</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{t("contact.title")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-300">{t("contact.subtitle")}</p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="glass-panel p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">{t("contact.formTitle")}</h2>
              <p className="mt-1 text-sm text-ink-300">{t("contact.formSubtitle")}</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="rounded-lg border border-void-border bg-void-raised/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-cyan-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPlaceholder")}
                    className="rounded-lg border border-void-border bg-void-raised/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="w-full rounded-lg border border-void-border bg-void-raised/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-cyan-500 focus:outline-none"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full resize-none rounded-lg border border-void-border bg-void-raised/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-cyan-500 focus:outline-none"
                />

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
                  {status === "sending" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {t("common.send")}
                </button>

                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 size={16} />
                    {t("contact.successMessage")}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">{t("contact.errorMessage")}</p>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Direct contact + socials */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="glass-panel p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">{t("contact.directContact")}</h2>

              <a
                href={`mailto:${AUTHOR.email}`}
                className="mt-5 flex items-center gap-3 rounded-lg border border-void-border bg-void-raised/40 p-4 text-sm text-ink-100 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <Mail size={18} className="text-cyan-400" />
                {AUTHOR.email}
              </a>

              <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="text-sm font-medium text-emerald-400">{t("contact.availability")}</p>
                <p className="mt-1 text-xs text-ink-500">{t("contact.responseTime")}</p>
              </div>

              <h3 className="mt-8 mb-3 font-mono text-sm text-ink-500">{t("contact.socialTitle")}</h3>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = ICONS[link.icon];
                  return (
                    <a
                      key={link.key}
                      href={link.url}
                      target={link.key === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-void-border bg-void-raised/40 px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                    >
                      <Icon size={15} />
                      <span className="capitalize">{link.key}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
