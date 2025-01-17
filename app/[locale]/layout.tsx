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
  title: "WebDevelopment & Graphical Design",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as "en" | "pl")) {
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
