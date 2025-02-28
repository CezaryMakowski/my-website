"use client";

import { Link } from "@/i18n/routing";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Navbar");
  const pixelSize = 15;
  const [pixelNumber, setPixelNumber] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPixelNumber(Math.floor(document.body.clientWidth / pixelSize));
    window.addEventListener("resize", () => {
      setPixelNumber(Math.floor(document.body.clientWidth / pixelSize));
    });
  }, []);

  return (
    <footer className={styles.footer}>
      {isClient && (
        <div className={styles.pixels_container}>
          {[...Array(pixelNumber)].map((x, i) => (
            <div
              key={`light_c:${i}`}
              style={{ width: pixelSize, minWidth: pixelSize }}
            >
              {[...Array(5)].map((x, j) => {
                const random = Math.random() * 100;
                const delay = Math.random() * 0.5;
                if (j === 0 && random > 90)
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0, delay: delay }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className={`${styles.pixel} ${styles.light}`}
                      key={`light_c:${i}_r:${j}`}
                    ></motion.div>
                  );
                if (j === 1 && random > 85)
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0, delay: delay }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className={`${styles.pixel} ${styles.light}`}
                      key={`light_c:${i}_r:${j}`}
                    ></motion.div>
                  );
                if (j === 2 && random > 80)
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0, delay: delay }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className={`${styles.pixel} ${styles.light}`}
                      key={`light_c:${i}_r:${j}`}
                    ></motion.div>
                  );
                if (j === 3 && random > 70)
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0, delay: delay }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className={`${styles.pixel} ${styles.light}`}
                      key={`light_c:${i}_r:${j}`}
                    ></motion.div>
                  );
                if (j === 4 && random > 55)
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0, delay: delay }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className={`${styles.pixel} ${styles.light}`}
                      key={`light_c:${i}_r:${j}`}
                    ></motion.div>
                  );
                return (
                  <div
                    className={styles.pixel}
                    key={`light_c:${i}_r:${j}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      <div className={styles.container}>
        {isClient && (
          <div className={styles.pixels_container}>
            {[...Array(pixelNumber)].map((x, i) => (
              <div
                key={`dark_c:${i}`}
                style={{ width: pixelSize, minWidth: pixelSize }}
              >
                {[...Array(5)].map((x, j) => {
                  const random = Math.random() * 100;
                  const delay = Math.random() * 0.5;
                  if (j === 0 && random > 55)
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0, delay: delay }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className={`${styles.pixel} ${styles.dark}`}
                        key={`dark_c:${i}_r:${j}`}
                      ></motion.div>
                    );
                  if (j === 1 && random > 70)
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0, delay: delay }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className={`${styles.pixel} ${styles.dark}`}
                        key={`dark_c:${i}_r:${j}`}
                      ></motion.div>
                    );
                  if (j === 2 && random > 80)
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0, delay: delay }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className={`${styles.pixel} ${styles.dark}`}
                        key={`dark_c:${i}_r:${j}`}
                      ></motion.div>
                    );
                  if (j === 3 && random > 85)
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0, delay: delay }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className={`${styles.pixel} ${styles.dark}`}
                        key={`dark_c:${i}_r:${j}`}
                      ></motion.div>
                    );
                  if (j === 4 && random > 90)
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0, delay: delay }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className={`${styles.pixel} ${styles.dark}`}
                        key={`dark_c:${i}_r:${j}`}
                      ></motion.div>
                    );
                  return (
                    <div
                      className={styles.pixel}
                      key={`dark_c:${i}_r:${j}`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
        <div className={styles.nav_container}>
          <Link href={"/"}>{t("Homepage")}</Link>
          <Link href={"/#o-mnie"}>{t("Aboutme")}</Link>
          <Link href={"/#kontakt"}>{t("Contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
