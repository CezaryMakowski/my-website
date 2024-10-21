import styles from "./AboutMe.module.css";
import TypeEffect from "./utils/TypeEffect";
import CezaryImg from "./CezaryImg";

export default function AboutMe() {
  return (
    <section className={styles.section} id="o-mnie">
      <h2 className={styles.title}>
        <TypeEffect>O mnie</TypeEffect>
      </h2>
      <div className={styles.container}>
        <CezaryImg />
        <div className={`glow ${styles.glow_container}`}>
          <h3>Cześć, jestem Czarek</h3>
          <p>
            Jestem webdeveloperem i grafikiem komputerowym z prawdziwą pasją do
            tego, co robię. Każdy projekt to dla mnie nowe wyzwanie i okazja, by
            stworzyć coś wyjątkowego. Stale poszerzam swoją wiedzę, aby być na
            bieżąco z najnowszymi technologiami, które dynamicznie się
            rozwijają. W swojej pracy wykorzystuję również sztuczną
            inteligencję, która pozwala mi na jeszcze bardziej efektywne
            tworzenie innowacyjnych projektów i usprawnienie procesu
            kreatywnego. Moje wieloletnie doświadczenie sprawia, że potrafię
            tworzyć rozwiązania, które są zarówno estetyczne, jak i
            funkcjonalne, a jednocześnie dostosowane do indywidualnych potrzeb
            każdego klienta.
          </p>
        </div>
      </div>
    </section>
  );
}
