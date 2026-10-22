/**
 * Editable business details for Ramna Travels.
 *
 * DEVELOPMENT NOTE:
 * `whatsappNumber` is still the placeholder `91XXXXXXXXXX`.
 * Replace it with the real WhatsApp business number — country code plus
 * number, digits only, no plus sign or spaces (example: 919812345678).
 * The enquiry form will not open WhatsApp while this placeholder remains.
 * Never put a guessed or personal number here.
 *
 * Leave `phoneTel` empty until a real calling number is known, then set
 * both `phoneTel` (example: "+919812345678") and `phoneDisplay`.
 * Address and email stay blank until they are confirmed.
 */

export const WHATSAPP_PLACEHOLDER = "91XXXXXXXXXX";

export const siteConfig = {
  name: "Ramna Travels",
  whatsappNumber: WHATSAPP_PLACEHOLDER,
  phoneTel: "",
  phoneDisplay: "",
  address: "",
  email: "",
};

export function isWhatsappConfigured(number = siteConfig.whatsappNumber) {
  return /^\d{8,15}$/.test(number) && !number.toUpperCase().includes("X");
}

export function isPhoneConfigured(tel = siteConfig.phoneTel) {
  return /^\+?\d{8,15}$/.test(tel);
}

export function isEmailConfigured(email = siteConfig.email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function whatsappHref(message?: string) {
  if (!isWhatsappConfigured()) return null;
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
