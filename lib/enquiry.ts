import type { DestinationId, JourneyTypeId } from "@/lib/translations";

export const ENQUIRY_EVENT = "ramna:enquiry";

export type EnquiryDetail = {
  journeyType?: JourneyTypeId;
  destination?: DestinationId;
};

export function requestEnquiry(detail: EnquiryDetail) {
  window.dispatchEvent(new CustomEvent<EnquiryDetail>(ENQUIRY_EVENT, { detail }));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("enquiry")?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}
