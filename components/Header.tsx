"use client";

import { Link, usePathname } from "@/i18n/routing";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import TypeEffect from "./utils/TypeEffect";
import { useTranslations, useLocale } from "next-intl";
import { useNav } from "@/lib/useNav";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const nextLocale = locale === "en" ? "pl" : "en";
  const t = useTranslations("Navbar");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    function clickHandler() {
      setSidebarVisible(false);
    }

    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, []);

  return (
    <section className={styles.section}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${styles.mobile_nav_background} ${
          sidebarVisible && styles.visible
        }`}
      ></div>
      <div
        className={`${styles.mobile_nav} ${sidebarVisible && styles.visible}`}
      >
        {useNav().map((item) => (
          <Link href={item.href} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.navIconContainer}>
        <Link href={pathname} locale={nextLocale}>
          <TypeEffect>{t("locale")}</TypeEffect>
        </Link>
        <div
          className={styles.icon}
          onClick={(e) => {
            setSidebarVisible(true);
            e.stopPropagation();
          }}
        >
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
        </div>
      </div>
      <div className={styles.nav_container}>
        <Link className={styles.locale} href={pathname} locale={nextLocale}>
          <TypeEffect>{t("locale")}</TypeEffect>
        </Link>
        {useNav().map((item) => (
          <Link href={item.href} key={item.title}>
            <TypeEffect>{item.title}</TypeEffect>
          </Link>
        ))}
      </div>
    </section>
  );
}
