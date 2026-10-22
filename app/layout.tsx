import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramna Travels | हर सफ़र की शुरुआत भरोसे से",
  description: "A bilingual travel website for Ramna Travels, inspired by Bihar and journeys beyond.",
};

export const viewport: Viewport = {
  themeColor: "#101E30",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-lang="en"
      className={`${manrope.variable} ${noto.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">{children}</body>
    </html>
  );
}
