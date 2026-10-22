"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { requestEnquiry } from "@/lib/enquiry";
import { images } from "@/lib/images";
import type { ServiceId } from "@/lib/translations";

export function Services() {
  const { t } = useLanguage();
  const [first, second, third, fourth] = t.services.items;

  if (!first || !second || !third || !fourth) return null;

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-muted">{t.services.eyebrow}</p>
            <h2 className="section-title mt-4 max-w-[16ch]">{t.services.title}</h2>
          </div>
          <p className="text-muted lg:col-span-5 lg:pb-2">{t.services.intro}</p>
        </Reveal>

        <Reveal className="mt-12">
          <ServiceFeature
            index="01"
            item={first}
            src={images.services.intercity}
            learnMore={t.services.learnMore}
          />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <ServiceStack
              index="02"
              item={second}
              src={images.services.group}
              learnMore={t.services.learnMore}
              imageClass="h-64 sm:h-[420px]"
            />
          </Reveal>
          <Reveal className="md:col-span-7 md:mt-16" delay={90}>
            <ServiceStack
              index="03"
              item={third}
              src={images.services.private}
              learnMore={t.services.learnMore}
              imageClass="h-56 sm:h-[340px] md:h-[380px]"
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-line pt-12">
          <article id={`service-${fourth.id}`} className="group grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ServiceCopy index="04" item={fourth} learnMore={t.services.learnMore} />
            </div>
            <div className="relative h-[300px] overflow-hidden bg-navy-soft lg:col-span-7 lg:h-[380px]">
              <Image
                src={images.services.assistance}
                alt={fourth.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="zoom-img object-cover"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceFeature({
  index,
  item,
  src,
  learnMore,
}: {
  index: string;
  item: { id: ServiceId; title: string; body: string; alt: string };
  src: string;
  learnMore: string;
}) {
  return (
    <article id={`service-${item.id}`} className="group relative min-h-[420px] overflow-hidden bg-navy text-ivory sm:min-h-[520px]">
      <Image src={src} alt={item.alt} fill sizes="100vw" className="zoom-img object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,30,48,0.88)_0%,rgba(16,30,48,0.2)_55%,rgba(16,30,48,0.15)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 max-w-xl p-7 md:p-10">
        <ServiceCopy index={index} item={item} learnMore={learnMore} light />
      </div>
    </article>
  );
}

function ServiceStack({
  index,
  item,
  src,
  learnMore,
  imageClass,
}: {
  index: string;
  item: { id: ServiceId; title: string; body: string; alt: string };
  src: string;
  learnMore: string;
  imageClass: string;
}) {
  return (
    <article id={`service-${item.id}`} className="group">
      <div className={`relative overflow-hidden bg-navy-soft ${imageClass}`}>
        <Image src={src} alt={item.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="zoom-img object-cover" />
      </div>
      <div className="pt-6">
        <ServiceCopy index={index} item={item} learnMore={learnMore} />
      </div>
    </article>
  );
}

function ServiceCopy({
  index,
  item,
  learnMore,
  light = false,
}: {
  index: string;
  item: { id: ServiceId; title: string; body: string };
  learnMore: string;
  light?: boolean;
}) {
  return (
    <>
      <p className="text-sm font-semibold tracking-[0.16em] text-saffron">{index}</p>
      <h3 className={`mt-3 text-2xl font-semibold tracking-tight md:text-3xl ${light ? "text-ivory" : "text-ink"}`}>
        {item.title}
      </h3>
      <p className={`mt-3 max-w-md leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{item.body}</p>
      <button
        type="button"
        onClick={() =>
          requestEnquiry({
            journeyType: item.id === "assistance" ? "other" : item.id,
          })
        }
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-saffron" : "text-ink"}`}
      >
        {learnMore}
        <ArrowUpRight size={16} aria-hidden />
      </button>
    </>
  );
}
