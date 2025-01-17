import Image from "next/image";
import styles from "./page.module.css";
import checked from "@/public/checkedmark.svg";
// import unChecked from "@/public/uncheckedmark.svg";
import PixelLink from "../../../components/utils/PixelLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypeEffect from "@/components/utils/TypeEffect";
import MiddleCircuit from "@/components/circuits/MiddleCircuit";
import Circuit from "@/components/circuits/Circuit";
import { useTranslations } from "next-intl";

const CHECKMARK_WIDTH = 20;

export default function Page() {
  const t = useTranslations("Pricing");
  const titleWeb = t("Title1").split(" ");
  const titleGraph = t("Title2").split(" ");
  return (
    <>
      <main>
        <Header middle darkBg />
        <section className={styles.section} id="strony-internetowe">
          <h2>
            <TypeEffect>{titleWeb[0] + " "} </TypeEffect>
            <TypeEffect>{titleWeb[1]}</TypeEffect>
          </h2>
        </section>
        <section
          className={`${styles.section} ${styles.double_modules_section}`}
        >
          <MiddleCircuit className={styles.circuit} />
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>{t("Landingpage.Title")}</h2>
            <div className={styles.price_container}>
              {t.rich("Landingpage.Price", {
                p: (content) => <p>{content}</p>,
                strong: (content) => <strong>{content}</strong>,
              })}
            </div>
            <p>{t("Landingpage.Content")}</p>
            <Image
              className={styles.separator}
              src="/circuit-separator.svg"
              alt="separator"
              width={400}
              height={50}
            />
            <ul className={styles.checklist}>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem1")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem2")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem3")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem4")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem5")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem6")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem7")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem8")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Landingpage.Listitem9")}</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">{t("Landingpage.Button")}</PixelLink>
          </div>
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>{t("Blog.Title")}</h2>
            <div className={styles.price_container}>
              {t.rich("Blog.Price", {
                p: (content) => <p>{content}</p>,
                strong: (content) => <strong>{content}</strong>,
              })}
            </div>
            <p>{t("Blog.Content")}</p>
            <Image
              className={styles.separator}
              src="/circuit-separator.svg"
              alt="separator"
              width={400}
              height={50}
            />
            <ul className={styles.checklist}>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem1")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem2")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem3")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem4")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem5")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem6")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem7")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem8")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem9")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Blog.Listitem10")}</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">{t("Blog.Button")}</PixelLink>
          </div>
        </section>
        <section className={`${styles.section} ${styles.eshop_section}`}>
          <div className={`glow ${styles.glow_container}`}>
            <MiddleCircuit className={styles.mobile_circuit} />
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>{t("Ecommerce.Title")}</h2>
            <div className={styles.price_container}>
              {t.rich("Ecommerce.Price", {
                p: (content) => <p>{content}</p>,
                strong: (content) => <strong>{content}</strong>,
              })}
            </div>
            <p>{t("Ecommerce.Content")}</p>
            <Image
              className={styles.separator}
              src="/circuit-separator.svg"
              alt="separator"
              width={400}
              height={50}
            />
            <ul className={styles.checklist}>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span> {t("Ecommerce.Listitem1")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem2")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem3")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem4")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem5")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem6")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem7")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem8")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem9")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem10")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem11")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem12")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem13")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("Ecommerce.Listitem14")}</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">{t("Ecommerce.Button")}</PixelLink>
          </div>
        </section>
        <section className={styles.section} id="projekty-graficzne">
          <h2>
            <TypeEffect>{titleGraph[0] + " "} </TypeEffect>
            <TypeEffect>{titleGraph[1]}</TypeEffect>
          </h2>
        </section>
        <section className={`${styles.section} ${styles.graph_section}`}>
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>{t("GraphDesign.Title")}</h2>
            <div className={styles.price_container}>
              {t.rich("GraphDesign.Price", {
                p: (content) => <p>{content}</p>,
                strong: (content) => <strong>{content}</strong>,
              })}
            </div>
            <p>{t("GraphDesign.Content")}</p>
            <Image
              className={styles.separator}
              src="/circuit-separator.svg"
              alt="separator"
              width={400}
              height={50}
            />
            <ul className={styles.checklist}>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span> {t("GraphDesign.Listitem1")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("GraphDesign.Listitem2")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("GraphDesign.Listitem3")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("GraphDesign.Listitem4")}</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>{t("GraphDesign.Listitem5")}</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">{t("GraphDesign.Button")}</PixelLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
