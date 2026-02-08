import type { Metadata } from "next";
import { Audiowide, VT323 } from "next/font/google";
import "./globals.css";
import SocialMedia from "../../components/utils/SocialMedia";
import styles from "./layout.module.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const bungee = Audiowide({
  variable: "--orbitron",
  weight: "400",
  subsets: ["latin"],
});
const vt323 = VT323({
  variable: "--vt323",
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "WebDevelopment & Graphical Design | designandweb.dev",
    template: "%s | designandweb.dev",
  },
  description:
    "Nowoczesny web development i oryginalny design graficzny — portfolio Cezarego Makowskiego. Tworzę strony www, projektuję logotypy, identyfikację wizualną oraz grafikę na potrzeby internetu i druku.",
  keywords: [
    "web development",
    "grafika komputerowa",
    "projektowanie stron www",
    "designandweb.dev",
    "portfolio",
    "strony internetowe",
    "projekty graficzne",
    "logo",
    "identyfikacja wizualna",
    "design",
    "agencja kreatywna",
    "UI",
    "UX",
    "Front-end",
    "Next.js",
  ],
  creator: "Cezary Makowski",
  openGraph: {
    title: "WebDevelopment & Graphical Design | designandweb.dev",
    description:
      "Portfolio Cezarego Makowskiego - nowoczesny web development i unikalny design graficzny. Sprawdź moje realizacje: strony internetowe, logo, grafika do druku i internetu.",
    url: "https://designandweb.dev",
    siteName: "Cezary Makowski",
    type: "website",
    images: [
      {
        url: "https://designandweb.dev/projekty-graficzne-grafika.png",
        width: 1200,
        height: 630,
        alt: "Cezary Makowski - WebDevelopment & Graphic Design",
      },
    ],
    locale: "pl_PL",
  },
  alternates: {
    canonical: "https://designandweb.dev",
    languages: {
      pl: "https://designandweb.dev/pl",
      en: "https://designandweb.dev/en",
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes((await locale) as "en" | "pl")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${bungee.variable} ${vt323.variable}`}>
        <SocialMedia className={styles.social} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-J59QCYVWFJ" />
      <GoogleTagManager gtmId="AW-10937908128" />
      <GoogleTagManager gtmId="GTM-T656GCJ6" />
    </html>
  );
}
