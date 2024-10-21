"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import TypeEffect from "./utils/TypeEffect";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header({
  middle,
  darkBg,
}: {
  middle?: boolean;
  darkBg?: boolean;
}) {
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
      <motion.div
        className={styles.github}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <Link href="https://github.com/CezaryMakowski" target="_blank">
          <Image
            src={"/icons/github.svg"}
            alt="github-profile"
            width={50}
            height={50}
          />
        </Link>
      </motion.div>
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
        <Link href={"/"}>Strona Główna</Link>
        <Link href={"/#o-mnie"}>O Mnie</Link>
        <Link href={"/projekty"}>Moje Prace</Link>
        <Link href={"/#kontakt"}>Kontakt</Link>
      </div>
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
      <div className={`${styles.nav_container} ${middle && styles.middle}`}>
        <Link href={"/"}>
          <TypeEffect>Strona Główna</TypeEffect>
        </Link>
        <Link href={"/#o-mnie"}>
          <TypeEffect>O Mnie</TypeEffect>
        </Link>
        <Link href={"/projekty"}>
          <TypeEffect>Moje Prace</TypeEffect>
        </Link>
        <Link href={"/#kontakt"}>
          <TypeEffect>Kontakt</TypeEffect>
        </Link>
      </div>
    </section>
  );
}
