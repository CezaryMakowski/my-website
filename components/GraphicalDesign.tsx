import Image from "next/image";
import styles from "./GraphicalDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import MiddleCircuit from "./circuits/MiddleCircuit";
import { useTranslations } from "next-intl";
import WindowXP from "./utils/WindowXP";

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
        <Image
          className={styles.paint_can}
          src="/paint-can.png"
          alt="puszka-farby"
          width={500}
          height={500}
        />
        <Image
          className={styles.palette}
          src="/palette.png"
          alt="paleta-kolorów"
          width={500}
          height={500}
        />
      </WindowXP>
    </section>
  );
}
