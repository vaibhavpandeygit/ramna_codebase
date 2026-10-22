"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

export function Inspiration() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="inspiration-title">
      <div className="container-page grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-soft sm:aspect-[16/9]">
            <Image
              src={images.inspiration}
              alt={t.inspiration.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={80}>
          <p className="eyebrow text-muted">{t.inspiration.eyebrow}</p>
          <span className="saffron-rule mt-4" />
          <h2 id="inspiration-title" className="section-title mt-5 text-balance">
            {t.inspiration.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{t.inspiration.body}</p>
          <a href="#enquiry" className="btn btn-navy mt-8 inline-flex w-full sm:w-auto">
            {t.inspiration.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
