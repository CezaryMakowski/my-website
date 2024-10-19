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
            stworzyć coś wyjątkowego. Dzięki indywidualnemu podejściu i pełnemu
            zaangażowaniu w każdy etap pracy, moi klienci mogą liczyć na
            kreatywne i dopracowane rozwiązania, które spełniają ich
            oczekiwania. Moim celem jest tworzenie stron i projektów
            graficznych, które nie tylko świetnie wyglądają, ale także
            skutecznie realizują zamierzone cele
          </p>
        </div>
      </div>
    </section>
  );
}
