import Image from "next/image";
import styles from "./PointsOfInterest.module.css";
import MiddleCircuit from "./circuits/MiddleCircuit";
import Circuit from "./circuits/Circuit";
import { Link } from "@/i18n/routing";
import TypeEffect from "./utils/TypeEffect";
import PixelBtn from "./utils/PixelLink";
import { useTranslations } from "next-intl";

export default function PoiontsOfInterest() {
  const t = useTranslations("Homepage.Pointsofinterest");
  return (
    <section className={styles.section}>
      <MiddleCircuit className={styles.circuit} />
      <div className={styles.container}>
        <div className={`glow ${styles.glow_container}`}>
          <Circuit side="left" className={styles.side_circuit} />
          <Image
            className={`${styles.image} ${styles.left}`}
            src="/projekty-graficzne-grafika.png"
            alt="projekty-graficzne-cezary"
            width={750}
            height={750}
          />

          <h3>{t("Graphtitle")}</h3>
          <p>{t("GraphContent")}</p>
          <PixelBtn href="/#graphical-design">{t("Button")}</PixelBtn>
        </div>
        <Link href="/#graphical-design" className={styles.button}>
          <TypeEffect>{t("Button")}</TypeEffect>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={`glow ${styles.glow_container}`}>
          <Circuit side="right" className={styles.side_circuit} />
          <Image
            className={styles.image}
            src="/projektowanie-stron-grafika.png"
            alt="projekty-graficzne-cezary"
            width={750}
            height={750}
          />
          <h3>{t("Sitetitle")}</h3>
          <p>{t("Sitecontent")}</p>
          <PixelBtn href="/#web-design">{t("Button")}</PixelBtn>
        </div>
        <Link href={"/#web-design"} className={styles.button}>
          <TypeEffect>{t("Button")}</TypeEffect>
        </Link>
      </div>
    </section>
  );
}
