"use client";

import Arrow from "@/public/arrow";
import styles from "./FrontSlider.module.css";
import WindowXP from "./utils/WindowXP";
import { useEffect, useState, useRef } from "react";
import TypeEffect from "./utils/TypeEffect";
import PixelLink from "./utils/PixelLink";
import { useTranslations } from "next-intl";

type itemsProps = {
  title: string;
  content: string;
  href: string;
};

export default function () {
  const [itemNumber, setItemNumber] = useState(0);
  const isHovered = useRef(false);
  const t = useTranslations("Homepage.Frontslider");

  function NextHandler() {
    setItemNumber((prevNumber) => {
      if (prevNumber >= items.length - 1) {
        return 0;
      }
      return prevNumber + 1;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered.current && window.innerWidth > 900) {
        NextHandler();
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const items: itemsProps[] = t.raw("Slider");

  return (
    <section
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
      className={styles.section}
    >
      <Arrow
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => {
          setItemNumber((prevNumber) => {
            if (prevNumber <= 0) {
              return items.length - 1;
            }
            return prevNumber - 1;
          });
        }}
      />
      <WindowXP className={styles.window}>
        <h3>
          <TypeEffect>{items[itemNumber].title}</TypeEffect>
        </h3>
        <p className={styles.content}>
          <TypeEffect>{items[itemNumber].content}</TypeEffect>
        </p>
        <PixelLink href={items[itemNumber].href}>{t("Button")}</PixelLink>
      </WindowXP>
      <Arrow className={styles.arrow} onClick={NextHandler} />
    </section>
  );
}
