import Image from "next/image";
import styles from "./GraphicalDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import MiddleCircuit from "./circuits/MiddleCircuit";
import { useTranslations } from "next-intl";

export default function GraphicalDesign() {
  const t = useTranslations("Homepage.GraphDesign");
  return (
    <section className={styles.section} id="graphical-design">
      <div className={`glow ${styles.container}`}>
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
        <h3>{t("Title1")}</h3>
        <p>{t("Content1")}</p>
        <ul>
          <li>
            {t.rich("Listitem1", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
          <li>
            {t.rich("Listitem2", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
          <li>
            {t.rich("Listitem3", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
          <li>
            {t.rich("Listitem4", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
        </ul>
        <p>{t("Content2")}</p>
        <h3> {t("Title3")}</h3>
        <ul>
          <li>
            {t.rich("Listitem5", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
          <li>
            {t.rich("Listitem6", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
          <li>
            {t.rich("Listitem7", {
              strong: (content) => <strong>{content}</strong>,
            })}
          </li>
        </ul>
        <p>{t("Content3")}</p>
        <p> {t("Content4")}</p>
        <div className={styles.button_container}>
          <PixelBtn href="/cennik/#projekty-graficzne">
            {t("Buttonprice")}
          </PixelBtn>
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
      </div>
    </section>
  );
}
