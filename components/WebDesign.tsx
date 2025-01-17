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
          <h3>{t("Title1")}</h3>
          <p>{t("Content1")}</p>
          <h3> {t("Title2")}</h3>
          <ol>
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
              <ul>
                <li>
                  {t.rich("SubItem1", {
                    strong: (content) => <strong>{content}</strong>,
                  })}
                </li>
                <li>
                  {t.rich("SubItem2", {
                    strong: (content) => <strong>{content}</strong>,
                  })}
                </li>
              </ul>
            </li>
          </ol>
          <h3>{t("Title3")}</h3>
          <p>{t("Content2")}</p>
          <p>{t("Content3")}</p>
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
