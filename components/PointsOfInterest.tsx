import Image from "next/image";
import styles from "./PointsOfInterest.module.css";
import MiddleCircuit from "./circuits/MiddleCircuit";
import Circuit from "./circuits/Circuit";
import Link from "next/link";
import TypeEffect from "./utils/TypeEffect";
import PixelBtn from "./utils/PixelLink";

export default function PoiontsOfInterest() {
  return (
    <section className={styles.section}>
      <MiddleCircuit klasa={styles.circuit} />
      <div className={styles.container}>
        <div className={`glow ${styles.glow_container}`}>
          <Circuit side="left" />
          <Image
            className={`${styles.image} ${styles.left}`}
            src="/projekty-graficzne-grafika.png"
            alt="projekty-graficzne-cezary"
            width={750}
            height={750}
          />

          <h3>Grafika Komputerowa</h3>
          <p>
            Potrzebujesz profesjonalnych materiałów graficznych, które wyróżnią
            Twoją markę? Skontaktuj się ze mną! Oferuję indywidualne podejście,
            konkurencyjne ceny i pełne zaangażowanie w Twój projekt
          </p>
          <PixelBtn href="/#graphical-design">Zobacz Więcej</PixelBtn>
        </div>
        <Link href="/#graphical-design" className={styles.button}>
          <TypeEffect>Zobacz Więcej</TypeEffect>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={`glow ${styles.glow_container}`}>
          <Circuit side="right" />
          <Image
            className={styles.image}
            src="/projektowanie-stron-grafika.png"
            alt="projekty-graficzne-cezary"
            width={750}
            height={750}
          />
          <h3>Strony Internetowe</h3>
          <p>
            Chcesz mieć stronę internetową, która przyciągnie klientów i wyróżni
            Twoją firmę? Skontaktuj się ze mną! Tworzę nowoczesne, responsywne
            strony, dopasowane do Twoich potrzeb.
          </p>
          <PixelBtn href="/#web-design">Zobacz Więcej</PixelBtn>
        </div>
        <Link href={"/#web-design"} className={styles.button}>
          <TypeEffect>Zobacz Więcej</TypeEffect>
        </Link>
      </div>
    </section>
  );
}
