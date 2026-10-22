"use client";

import { Bus, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/translations";

const links = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#destinations", key: "routes" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-ivory text-ink shadow-[0_10px_30px_rgba(16,30,48,0.06)]" : "bg-transparent text-white"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-9 w-9 place-items-center border border-saffron text-saffron">
            <Bus size={18} strokeWidth={1.5} aria-hidden />
          </span>
          <span className="wordmark text-[1.05rem] font-semibold leading-none">
            Ramna
            <span className="mt-1 block text-[0.68rem] font-medium tracking-[0.16em] text-saffron">
              TRAVELS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium transition-colors hover:text-saffron"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle language={language} label={t.nav.language} onChange={setLanguage} />
          <a href="#enquiry" className="btn btn-saffron hidden px-4 lg:inline-flex">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">{open ? t.nav.close : t.nav.menu}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`overflow-hidden ${open ? "" : "pointer-events-none invisible"}`}>
          <nav
            className="container-page flex max-h-[calc(100svh-4.5rem)] flex-col gap-1 overflow-y-auto pb-6"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-line py-3 text-lg font-medium"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a href="#enquiry" onClick={close} className="btn btn-saffron mt-4 inline-flex w-full">
              {t.nav.cta}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function LanguageToggle({
  language,
  label,
  onChange,
}: {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold" role="group" aria-label={label}>
      <LangButton active={language === "en"} onClick={() => onChange("en")}>
        EN
      </LangButton>
      <span aria-hidden className="opacity-40">
        |
      </span>
      <LangButton active={language === "hi"} onClick={() => onChange("hi")}>
        हिंदी
      </LangButton>
    </div>
  );
}

function LangButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 px-1 ${active ? "text-saffron" : "opacity-80 hover:opacity-100"}`}
    >
      {children}
    </button>
  );
}
