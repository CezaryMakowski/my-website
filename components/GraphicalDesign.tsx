"use client";
import Image from "next/image";
import styles from "./GraphicalDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import MiddleCircuit from "./circuits/MiddleCircuit";
import { useTranslations } from "next-intl";
import WindowXP from "./utils/WindowXP";
import { motion } from "framer-motion";

export default function GraphicalDesign() {
  const t = useTranslations("Homepage.GraphDesign");
  return (
    <section className={styles.section} id="graphical-design">
      <WindowXP className={styles.container}>
        <MiddleCircuit className={styles.circuit} />

        <Image
          className={styles.circuit_top}
          src="/circuits/graphical-circuit-top.png"
          alt="graphical-circuit"
          width={1000}
          height={1000}
        />
        <Image
          className={styles.circuit_bottom}
          src="/circuits/graphical-circuit-bottom.png"
          alt="graphical-circuit"
          width={1000}
          height={1000}
        />
        {t.rich("content", {
          h3: (content) => <h3>{content}</h3>,
          p: (content) => <p>{content}</p>,
          ul: (content) => <ul>{content}</ul>,
          li: (content) => <li>{content}</li>,
          strong: (content) => <strong>{content}</strong>,
        })}
        <div className={styles.button_container}>
          {/* <PixelBtn href="/cennik">{t("Buttonprice")}</PixelBtn> */}
          <PixelBtn href="/#kontakt">{t("Buttoncontact")}</PixelBtn>
        </div>
        <motion.div
          className={styles.paint_can}
          initial={{ opacity: 0, x: 180, rotate: 90 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            mass: 0.8,
            stiffness: 100,
          }}
          viewport={{ once: true, margin: "-150px 0px -150px 0px" }}
        >
          <Image
            src="/paint-can.png"
            alt="puszka-farby"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className={styles.palette}
          initial={{ opacity: 0, x: -180, rotate: 90 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            mass: 0.8,
            stiffness: 100,
          }}
          viewport={{ once: true, margin: "-150px 0px -150px 0px" }}
        >
          <Image
            src="/palette.png"
            alt="paleta-kolorów"
            width={500}
            height={500}
          />
        </motion.div>
      </WindowXP>
    </section>
  );
}
