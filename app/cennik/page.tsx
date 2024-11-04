import Image from "next/image";
import styles from "./page.module.css";
import checked from "@/public/checkedmark.svg";
// import unChecked from "@/public/uncheckedmark.svg";
import PixelLink from "../../components/utils/PixelLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypeEffect from "@/components/utils/TypeEffect";
import MiddleCircuit from "@/components/circuits/MiddleCircuit";
import Circuit from "@/components/circuits/Circuit";

const CHECKMARK_WIDTH = 20;

export default function Page() {
  return (
    <>
      <main>
        <Header middle darkBg />
        <section className={styles.section} id="strony-internetowe">
          <h2>
            <TypeEffect>Strony </TypeEffect>
            <TypeEffect>Internetowe</TypeEffect>
          </h2>
        </section>
        <section
          className={`${styles.section} ${styles.double_modules_section}`}
        >
          <MiddleCircuit className={styles.circuit} />
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>Landing Page/Wizytówka</h2>
            <div className={styles.price_container}>
              <p>od</p>
              <strong>950</strong>
              <p>zł</p>
            </div>
            <p>
              Prosta strona internetowa, która pomoże ci zaistnieć w internecie
              oraz zareklamować oferowane usługi. Idealna do prowadzenia kampani
              reklamowej w Google lub Facebook
            </p>
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
                <span>Roczna gwarancja</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Szybki kontakt</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Do 3 zakładek</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>2 zmiany projektu</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Slider na zdjęcia</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Formularz kontaktowy</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Mapa google</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Google Analytics</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Integracja z social media</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">Wyślij Zapytanie</PixelLink>
          </div>
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>Blog</h2>
            <div className={styles.price_container}>
              <p>od</p>
              <strong>2450</strong>
              <p>zł</p>
            </div>
            <p>
              Podczas tworzenia bloga skupiam się przede wszystkim na jego
              intuicyjnej nawigacji oraz na szybkości działania. Dzięki temu
              czytelnicy zostają na takiej stronie na dłużej i zdecydowanie
              chętniej na nią wracają
            </p>
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
                <span>Roczna gwarancja</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Szybki kontakt</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Do 6 zakładek</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>3 zmiany projektu</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Czytelny design</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Slider z artykułami</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Inteligentne sugestie artykułów</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Intuicyjność obsługi</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Formularz kontaktowy</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Google Analytics</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">Wyślij Zapytanie</PixelLink>
          </div>
        </section>
        <section className={`${styles.section} ${styles.eshop_section}`}>
          <div className={`glow ${styles.glow_container}`}>
            <MiddleCircuit className={styles.mobile_circuit} />
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>Sklep Internetowy</h2>
            <div className={styles.price_container}>
              <p>od</p>
              <strong>5000</strong>
              <p>zł</p>
            </div>
            <p>
              Sklep Internetowy podobnie jak blog powinien być przede wszystkim
              szybki oraz prosty w obsłudze. Zmniejszenie ilości kroków
              niezbędnych do zakupu oraz zwiększenie ich intuicyjności zapewni
              więcej konwersji
            </p>
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
                <span>Roczna gwarancja</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Szybki kontakt</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Nielimitowane zakładki</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>3 zmiany projektu</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Czytelny design</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Slider z produktami</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Inteligentne sugestie produktów</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Intuicyjność obsługi</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Rozbudowany formularz kontaktowy</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Upselling</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Crosselling</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Program Lojalnościowy</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Linki Referencyjne dla Promotorów</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Google Analytics</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">Wyślij Zapytanie</PixelLink>
          </div>
        </section>
        <section className={styles.section} id="projekty-graficzne">
          <h2>
            <TypeEffect>Projkty </TypeEffect>
            <TypeEffect>Graficzne</TypeEffect>
          </h2>
        </section>
        <section className={`${styles.section} ${styles.graph_section}`}>
          <div className={`glow ${styles.glow_container}`}>
            <Circuit side="left" className={styles.side_circuit} />
            <Circuit side="right" className={styles.side_circuit} />
            <h2 className={styles.container_title}>
              Logo, Wizytówka, Ulotka, Zaproszenie itd.
            </h2>
            <div className={styles.price_container}>
              <p>od</p>
              <strong>450</strong>
              <p>zł</p>
            </div>
            <p>
              W dzisiejszych czasach reklamy są wszechobecne i bez przerwy
              jesteśmy bombardowani różnymi treściami. Dlatego właśnie staram
              się, aby moje projekty jak najbardziej wyróżniały się na tle
              pozostałych oraz przyciągały uwagę
            </p>
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
                <span>Szybki kontakt</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Szybka realizacja</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>3 zmiany projektu</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Niestandardowy design</span>
              </li>
              <li>
                <Image
                  src={checked}
                  alt="checkmark"
                  width={CHECKMARK_WIDTH}
                  height={CHECKMARK_WIDTH}
                ></Image>
                <span>Staranność wykonania</span>
              </li>
            </ul>
            <PixelLink href="/#kontakt">Wyślij Zapytanie</PixelLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
