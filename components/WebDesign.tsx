import styles from "./WebDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import Matrix from "./Matrix";
import MiddleCircuit from "./circuits/MiddleCircuit";
import { useTranslations } from "next-intl";

export default function WebDesign() {
  const t = useTranslations("Homepage.Webdesign");
  return (
    <section className={styles.section} id="web-design">
      <Matrix />
      <div className={styles.container}>
        <MiddleCircuit className={styles.circuit} />

        <div className={`glow ${styles.glow_container}`}>
          {t.rich("content", {
            h3: (content) => <h3>{content}</h3>,
            p: (content) => <p>{content}</p>,
            ol: (content) => <ol>{content}</ol>,
            ul: (content) => <ul>{content}</ul>,
            li: (content) => <li>{content}</li>,
            strong: (content) => <strong>{content}</strong>,
          })}
          <div className={styles.button_container}>
            <PixelBtn href="/cennik/#strony-internetowe">
              {" "}
              {t("Buttonprice")}
            </PixelBtn>
            <PixelBtn href="/#kontakt"> {t("Buttoncontact")}</PixelBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
