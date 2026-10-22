"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] bg-navy text-white max-sm:min-h-[40rem]">
      <Image
        src={images.hero}
        alt={t.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_46%] sm:object-[center_30%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(16,30,48,0.86)_0%,rgba(16,30,48,0.5)_42%,rgba(16,30,48,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,30,48,0.78),rgba(16,30,48,0.12)_48%,rgba(16,30,48,0.28)_100%)]" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-end pb-0 pt-24 max-sm:min-h-[40rem]">
        <div className="max-w-3xl pb-8 md:pb-14">
          <p className="hero-rise eyebrow text-saffron">{t.hero.eyebrow}</p>
          <p className="hero-rise mt-3 text-sm font-medium text-white/80">{t.hero.region}</p>
          <h1 className="hero-rise display mt-4 max-w-[18ch] text-balance" style={{ animationDelay: "80ms" }}>
            {t.hero.title}
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.body}
          </p>
          <div
            className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#enquiry" className="btn btn-saffron inline-flex w-full sm:w-auto">
              {t.hero.primary}
            </a>
            <a href="#destinations" className="btn btn-line inline-flex w-full sm:w-auto">
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-3 border-t border-white/20">
          {t.hero.strip.map((item) => (
            <li key={item.title} className="min-w-0 border-white/15 px-1.5 py-4 first:pl-0 sm:px-6 sm:[&:not(:last-child)]:border-r">
              <p className="text-sm font-semibold leading-snug">{item.title}</p>
              <p className="mt-1 text-sm leading-snug text-white/65">{item.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
