import type { Metadata } from "next";
import { Audiowide, VT323 } from "next/font/google";
import "./globals.css";
import SocialMedia from "../components/utils/SocialMedia";
import styles from "./layout.module.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SocialMedia className={styles.social} />
      <body className={`${bungee.variable} ${vt323.variable}`}>{children}</body>
    </html>
  );
}
