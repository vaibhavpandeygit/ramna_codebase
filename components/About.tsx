"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <span className="absolute top-8 -left-4 hidden h-[calc(100%-4rem)] w-px bg-saffron lg:block" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-soft sm:aspect-[4/5]">
              <Image
                src={images.about}
                alt={t.about.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="relative lg:col-span-5 lg:col-start-8" delay={80}>
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 left-0 hidden text-[6.5rem] leading-none text-saffron/35 md:block"
          >
            “
          </span>
          <p className="eyebrow text-muted">{t.about.eyebrow}</p>
          <span className="saffron-rule mt-4" />
          <h2 className="section-title mt-6 text-balance">{t.about.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{t.about.body}</p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{t.about.body2}</p>
          <ul className="mt-8 grid gap-5 border-t border-line pt-6">
            {t.about.principles.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-base leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
