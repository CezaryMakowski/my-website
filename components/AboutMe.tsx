import styles from "./AboutMe.module.css";
import TypeEffect from "./utils/TypeEffect";
import CezaryImg from "./CezaryImg";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("Homepage.Aboutme");
  return (
    <section className={styles.section} id="o-mnie">
      <h2 className={styles.title}>
        <TypeEffect>{t("Title")}</TypeEffect>
      </h2>
      <div className={styles.container}>
        <CezaryImg />
        <div className={`glow ${styles.glow_container}`}>
          <h3>{t("Subtitle")}</h3>
          <p>
            {t.rich("Content", {
              p: (content) => <p>{content}</p>,
              strong: (content) => <strong>{content}</strong>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
