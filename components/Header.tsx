"use client";

import { Link, usePathname } from "@/i18n/routing";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import TypeEffect from "./utils/TypeEffect";
import { useTranslations, useLocale } from "next-intl";

export default function Header({
  middle,
  darkBg,
}: {
  middle?: boolean;
  darkBg?: boolean;
}) {
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
    <section className={`${styles.section} ${darkBg && styles.dark}`}>
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
        <Link href={"/#graphical-design"}>{t("GraphDesign")}</Link>
        <Link href={"/#web-design"}>{t("WebDesign")}</Link>
        <Link href={"/#o-mnie"}>{t("Aboutme")}</Link>
        <Link href={"/#kontakt"}>{t("Contact")}</Link>
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
      <div className={`${styles.nav_container} ${middle && styles.middle}`}>
        <Link className={styles.locale} href={pathname} locale={nextLocale}>
          <TypeEffect>{t("locale")}</TypeEffect>
        </Link>
        <Link href={"/#graphical-design"}>
          <TypeEffect>{t("GraphDesign")}</TypeEffect>
        </Link>
        <Link href={"/#web-design"}>
          <TypeEffect>{t("WebDesign")}</TypeEffect>
        </Link>
        <Link href={"/#o-mnie"}>
          <TypeEffect>{t("Aboutme")}</TypeEffect>
        </Link>
        <Link href={"/#kontakt"}>
          <TypeEffect>{t("Contact")}</TypeEffect>
        </Link>
      </div>
    </section>
  );
}
