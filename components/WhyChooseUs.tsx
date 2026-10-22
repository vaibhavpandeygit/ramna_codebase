"use client";

import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-navy text-ivory">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-saffron">{t.why.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-xl text-balance">{t.why.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{t.why.intro}</p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {t.why.steps.map((item, index) => (
              <li key={item.title} className="border-t border-white/15 pt-4">
                <p className="text-sm font-semibold tracking-[0.14em] text-saffron">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/70">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
