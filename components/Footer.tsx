"use client";

import { Bus } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  isEmailConfigured,
  isPhoneConfigured,
  isWhatsappConfigured,
  siteConfig,
  whatsappHref,
} from "@/lib/site-config";

export function Footer() {
  const { t } = useLanguage();
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);
  const whatsapp = isWhatsappConfigured() ? whatsappHref(t.footer.whatsappHello) : null;

  return (
    <footer className="bg-navy text-ivory">
      <div className="container-page grid gap-12 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-saffron text-saffron">
              <Bus size={18} strokeWidth={1.5} aria-hidden />
            </span>
            <span className="wordmark text-lg font-semibold">
              Ramna <span className="text-saffron">Travels</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{t.footer.descriptionEn}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{t.footer.descriptionHi}</p>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <p className="text-sm font-semibold text-saffron">{t.footer.navigate}</p>
          <ul className="mt-4 grid text-base text-white/75">
            <li><a className="inline-flex min-h-11 items-center hover:text-white" href="#home">{t.nav.home}</a></li>
            <li><a className="inline-flex min-h-11 items-center hover:text-white" href="#about">{t.nav.about}</a></li>
            <li><a className="inline-flex min-h-11 items-center hover:text-white" href="#services">{t.nav.services}</a></li>
            <li><a className="inline-flex min-h-11 items-center hover:text-white" href="#destinations">{t.nav.routes}</a></li>
            <li><a className="inline-flex min-h-11 items-center hover:text-white" href="#contact">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-saffron">{t.footer.services}</p>
          <ul className="mt-4 grid text-base text-white/75">
            {t.services.items.map((item) => (
              <li key={item.id}>
                <a className="inline-flex min-h-11 items-center hover:text-white" href={`#service-${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-saffron">{t.footer.contact}</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            <li>{siteConfig.address || t.footer.addressPending}</li>
            <li>
              {isEmailConfigured() ? (
                <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              ) : (
                t.footer.emailPending
              )}
            </li>
            <li>
              {isPhoneConfigured() ? (
                <a className="hover:text-white" href={`tel:${siteConfig.phoneTel}`}>
                  {siteConfig.phoneDisplay || siteConfig.phoneTel}
                </a>
              ) : (
                t.footer.phonePending
              )}
            </li>
            <li>
              {whatsapp ? (
                <a className="hover:text-white" href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              ) : (
                t.footer.whatsappPending
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <span ref={yearRef} /> {siteConfig.name}. {t.footer.rights}
        </p>
        <p>{t.footer.closing}</p>
      </div>
    </footer>
  );
}
