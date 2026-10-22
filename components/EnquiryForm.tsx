"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { ENQUIRY_EVENT, type EnquiryDetail } from "@/lib/enquiry";
import {
  isPhoneConfigured,
  isWhatsappConfigured,
  siteConfig,
  whatsappHref,
} from "@/lib/site-config";
import type { DestinationId, JourneyTypeId } from "@/lib/translations";

type Fields = {
  name: string;
  phone: string;
  startCity: string;
  destination: DestinationId | "other" | "";
  destinationOther: string;
  date: string;
  passengers: string;
  journeyType: JourneyTypeId | "";
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  phone: "",
  startCity: "",
  destination: "",
  destinationOther: "",
  date: "",
  passengers: "",
  journeyType: "",
  notes: "",
};

function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 12 && digits.startsWith("91")) return /^91[6-9]\d{9}$/.test(digits);
  return false;
}

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function EnquiryForm() {
  const { language, t } = useLanguage();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [errorLang, setErrorLang] = useState(language);
  const [notice, setNotice] = useState("");
  const [noticeLang, setNoticeLang] = useState(language);
  const [draft, setDraft] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayIso();
  }, []);

  useEffect(() => {
    const onEnquiry = (event: Event) => {
      const detail = (event as CustomEvent<EnquiryDetail>).detail;
      if (!detail) return;
      setFields((current) => {
        const next = { ...current };
        if (detail.journeyType) next.journeyType = detail.journeyType;
        if (detail.destination) {
          next.destination = detail.destination;
          next.destinationOther = "";
        }
        return next;
      });
      setErrors((current) => ({
        ...current,
        journeyType: detail.journeyType ? undefined : current.journeyType,
        destination: detail.destination ? undefined : current.destination,
      }));
    };
    window.addEventListener(ENQUIRY_EVENT, onEnquiry);
    return () => window.removeEventListener(ENQUIRY_EVENT, onEnquiry);
  }, []);

  const visibleErrors = errorLang === language ? errors : {};
  const visibleNotice = noticeLang === language ? notice : "";

  const destinationLabel = (value: Fields) => {
    if (value.destination === "other") return value.destinationOther.trim();
    return t.destinations.items.find((item) => item.id === value.destination)?.name ?? "";
  };

  const journeyLabel = (id: string) => t.form.journeyTypes.find((item) => item.id === id)?.label ?? "";

  const buildMessage = (value: Fields) => {
    const lines = [
      "Ramna Travels enquiry",
      `${t.form.name}: ${value.name.trim()}`,
      `${t.form.phone}: ${value.phone.trim()}`,
    ];
    if (value.startCity.trim()) lines.push(`${t.form.startCity}: ${value.startCity.trim()}`);
    lines.push(`${t.form.destination}: ${destinationLabel(value)}`);
    if (value.date) lines.push(`${t.form.date}: ${value.date}`);
    if (value.passengers.trim()) lines.push(`${t.form.passengers}: ${value.passengers.trim()}`);
    lines.push(`${t.form.journeyType}: ${journeyLabel(value.journeyType)}`);
    if (value.notes.trim()) lines.push(`${t.form.notes}: ${value.notes.trim()}`);
    return lines.join("\n");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (fields.name.trim().length < 2) nextErrors.name = t.form.errors.name;
    if (!validPhone(fields.phone)) nextErrors.phone = t.form.errors.phone;
    if (!fields.destination) nextErrors.destination = t.form.errors.destination;
    if (fields.destination === "other" && fields.destinationOther.trim().length < 2) {
      nextErrors.destinationOther = t.form.errors.destinationOther;
    }
    if (!fields.journeyType) nextErrors.journeyType = t.form.errors.journeyType;
    if (fields.passengers.trim()) {
      const count = Number(fields.passengers);
      if (!Number.isInteger(count) || count < 1 || count > 60) {
        nextErrors.passengers = t.form.errors.passengers;
      }
    }
    if (fields.date && fields.date < todayIso()) nextErrors.date = t.form.errors.date;

    setErrors(nextErrors);
    setErrorLang(language);
    setLink(null);

    if (Object.keys(nextErrors).length > 0) {
      setNotice("");
      setDraft("");
      return;
    }

    const message = buildMessage(fields);

    if (!isWhatsappConfigured()) {
      setDraft(message);
      setNotice(t.form.notConfigured);
      setNoticeLang(language);
      return;
    }

    const href = whatsappHref(message);
    setDraft("");
    if (href) {
      const opened = window.open(href, "_blank", "noopener,noreferrer");
      setLink(href);
      setNotice(opened ? t.form.opened : `${t.form.opened} ${t.form.popup}`);
      setNoticeLang(language);
    }
  };

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setErrorLang(language);
  };

  const phone = isPhoneConfigured()
    ? { href: `tel:${siteConfig.phoneTel}`, text: `${t.form.call} ${siteConfig.phoneDisplay || siteConfig.phoneTel}` }
    : { href: null, text: t.footer.phonePending };

  return (
    <form id="enquiry" onSubmit={onSubmit} noValidate className="scroll-mt-28 bg-white p-5 text-ink sm:p-8">
      <p className="eyebrow text-muted">{t.form.eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-balance">{t.form.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted">{t.form.intro}</p>

      <div className="mt-7 grid gap-4">
        <Field
          id="enquiry-name"
          label={t.form.name}
          error={visibleErrors.name}
          value={fields.name}
          placeholder={t.form.namePlaceholder}
          autoComplete="name"
          required
          onChange={(value) => update("name", value)}
        />
        <Field
          id="enquiry-phone"
          label={t.form.phone}
          error={visibleErrors.phone}
          value={fields.phone}
          placeholder={t.form.phonePlaceholder}
          autoComplete="tel"
          inputMode="tel"
          required
          onChange={(value) => update("phone", value)}
        />
        <Field
          id="enquiry-start"
          label={t.form.startCity}
          value={fields.startCity}
          placeholder={t.form.startPlaceholder}
          autoComplete="address-level2"
          onChange={(value) => update("startCity", value)}
        />
        <SelectField
          id="enquiry-destination"
          label={t.form.destination}
          value={fields.destination}
          error={visibleErrors.destination}
          required
          placeholder={t.form.destinationPlaceholder}
          onChange={(value) => update("destination", value as Fields["destination"])}
          options={[
            ...t.destinations.items.map((item) => ({ id: item.id, label: item.name })),
            { id: "other", label: t.destinations.other },
          ]}
        />
        {fields.destination === "other" ? (
          <Field
            id="enquiry-destination-other"
            label={t.form.destination}
            error={visibleErrors.destinationOther}
            value={fields.destinationOther}
            placeholder={t.form.otherPlaceholder}
            required
            onChange={(value) => update("destinationOther", value)}
          />
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium" htmlFor="enquiry-date">
            {t.form.date}
            <input
              ref={dateRef}
              id="enquiry-date"
              type="date"
              className="field"
              value={fields.date}
              onChange={(event) => update("date", event.target.value)}
              aria-invalid={Boolean(visibleErrors.date)}
              aria-describedby={visibleErrors.date ? "enquiry-date-error" : undefined}
            />
            {visibleErrors.date ? (
              <span id="enquiry-date-error" className="text-sm font-normal text-[#8d3b32]">
                {visibleErrors.date}
              </span>
            ) : null}
          </label>
          <Field
            id="enquiry-passengers"
            label={t.form.passengers}
            error={visibleErrors.passengers}
            value={fields.passengers}
            placeholder={t.form.passengersPlaceholder}
            inputMode="numeric"
            onChange={(value) => update("passengers", value.replace(/[^\d]/g, ""))}
          />
        </div>
        <SelectField
          id="enquiry-journey"
          label={t.form.journeyType}
          value={fields.journeyType}
          error={visibleErrors.journeyType}
          required
          placeholder={t.form.journeyPlaceholder}
          onChange={(value) => update("journeyType", value as Fields["journeyType"])}
          options={t.form.journeyTypes}
        />
        <label className="grid gap-2 text-sm font-medium" htmlFor="enquiry-notes">
          {t.form.notes}
          <textarea
            id="enquiry-notes"
            className="field min-h-32 resize-y"
            value={fields.notes}
            placeholder={t.form.notesPlaceholder}
            onChange={(event) => update("notes", event.target.value)}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-saffron mt-6 inline-flex w-full">
        {t.form.submit}
      </button>

      {phone.href ? (
        <a href={phone.href} className="mt-4 inline-flex min-h-11 items-center text-base font-semibold text-navy">
          {phone.text}
        </a>
      ) : (
        <p className="mt-4 text-base text-muted">{phone.text}</p>
      )}

      {visibleNotice ? <p className="mt-4 text-base leading-relaxed text-ink">{visibleNotice}</p> : null}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center text-base font-semibold text-navy underline"
        >
          {t.form.openLink}
        </a>
      ) : null}
      {draft ? (
        <div className="mt-4 border border-line bg-ivory p-4">
          <p className="text-sm font-semibold text-muted">{t.form.draftLabel}</p>
          <pre className="mt-2 font-sans text-base leading-relaxed whitespace-pre-wrap text-ink">{draft}</pre>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  value,
  placeholder,
  autoComplete,
  inputMode,
  required,
  onChange,
}: {
  id: string;
  label: string;
  error?: string;
  value: string;
  placeholder: string;
  autoComplete?: string;
  inputMode?: "tel" | "numeric";
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium" htmlFor={id}>
      {label}
      <input
        id={id}
        className="field"
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <span id={`${id}-error`} className="text-sm font-normal text-[#8d3b32]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function SelectField({
  id,
  label,
  value,
  error,
  required,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  placeholder: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium" htmlFor={id}>
      {label}
      <select
        id={id}
        className="field"
        value={value}
        required={required}
        aria-required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <span id={`${id}-error`} className="text-sm font-normal text-[#8d3b32]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
