"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { requestEnquiry } from "@/lib/enquiry";
import { images } from "@/lib/images";
import type { DestinationId } from "@/lib/translations";

const photo: Record<DestinationId, string> = {
  patna: images.destinations.patna,
  "bodh-gaya": images.destinations.bodhGaya,
  nalanda: images.destinations.nalanda,
  rajgir: images.destinations.rajgir,
  vaishali: images.destinations.vaishali,
  madhubani: images.destinations.madhubani,
};

export function Destinations() {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-muted">{t.destinations.eyebrow}</p>
          <span className="saffron-rule mt-4" />
          <h2 className="section-title mt-5 text-balance">{t.destinations.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{t.destinations.body}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {t.destinations.items.map((item, index) => (
            <Reveal
              key={item.id}
              className={index < 2 ? "min-[400px]:col-span-1 lg:col-span-2" : undefined}
              delay={index * 50}
            >
              <button
                type="button"
                onClick={() => requestEnquiry({ destination: item.id })}
                className="group flex h-full w-full flex-col overflow-hidden bg-white text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron"
              >
                <span className={`relative block overflow-hidden bg-navy-soft ${index < 2 ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={photo[item.id]}
                    alt={item.alt}
                    fill
                    sizes={index < 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="zoom-img object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-4 pt-10 pb-3 text-sm text-ivory">
                    {item.caption}
                  </span>
                </span>
                <span className="flex flex-1 flex-col px-4 py-5">
                  <span className="text-xl font-semibold tracking-tight text-ink">{item.name}</span>
                  <span className="mt-1 text-sm text-muted">{item.place}</span>
                  <span className="mt-3 text-base leading-relaxed text-muted">{item.body}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    {t.destinations.enquire}
                    <ArrowUpRight size={16} aria-hidden />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{t.destinations.note}</p>
      </div>
    </section>
  );
}
