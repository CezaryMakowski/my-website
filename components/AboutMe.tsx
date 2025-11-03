import styles from "./AboutMe.module.css";
import TypeEffect from "./utils/TypeEffect";
import CezaryImg from "./CezaryImg";
import { useTranslations } from "next-intl";
import WindowXP from "./utils/WindowXP";

export default function AboutMe() {
  const t = useTranslations("Homepage.Aboutme");
  return (
    <section className={styles.section} id="o-mnie">
      <h2 className={styles.title}>
        <TypeEffect>{t("Title")}</TypeEffect>
      </h2>
      <div className={styles.container}>
        <CezaryImg />
        <WindowXP className={styles.glow_container}>
          <h3>{t("Subtitle")}</h3>
          {t.rich("Content", {
            p: (content) => <p>{content}</p>,
            strong: (content) => <strong>{content}</strong>,
          })}
        </WindowXP>
      </div>
    </section>
  );
}
