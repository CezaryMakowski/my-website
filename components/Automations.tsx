import styles from "./Automations.module.css";
import Circuit from "./circuits/Circuit";
import MiddleCircuit from "./circuits/MiddleCircuit";
import PixelLink from "./utils/PixelLink";
import { useTranslations } from "next-intl";
import WindowXP from "./utils/WindowXP";

export default function Automations() {
  const t = useTranslations("Homepage.Automations");
  return (
    <section className={styles.section} id="automatyzacje">
      <WindowXP className={styles.glow_container}>
        <MiddleCircuit className={styles.mobile_circuit} />
        <Circuit side="left" className={styles.side_circuit} />
        <Circuit side="right" className={styles.side_circuit} />
        {t.rich("content", {
          h3: (content) => <h3>{content}</h3>,
          p: (content) => <p>{content}</p>,
          strong: (content) => <strong>{content}</strong>,
        })}
        <div className={styles.highlight}>
          {t.rich("highlightedtext", {
            h3: (content) => <h3>{content}</h3>,
            p: (content) => <p>{content}</p>,
            strong: (content) => <strong>{content}</strong>,
          })}
        </div>
        <div className={styles.buttonWrapper}>
          <PixelLink href="#kontakt">{t("Buttoncontact")}</PixelLink>
          {/* <PixelLink href="#kontakt">{t("Buttonprice")}</PixelLink> */}
        </div>
      </WindowXP>
    </section>
  );
}
