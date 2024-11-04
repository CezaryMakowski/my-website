import Image from "next/image";
import styles from "./GraphicalDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import MiddleCircuit from "./circuits/MiddleCircuit";

export default function GraphicalDesign() {
  return (
    <section className={styles.section} id="graphical-design">
      <div className={`glow ${styles.container}`}>
        <MiddleCircuit className={styles.circuit} />

        <Image
          className={styles.circuit_top}
          src="/circuits/graphical-circuit-top.png"
          alt="graphical-circuit"
          width={1000}
          height={1000}
        />
        <Image
          className={styles.circuit_bottom}
          src="/circuits/graphical-circuit-bottom.png"
          alt="graphical-circuit"
          width={1000}
          height={1000}
        />
        <h3>Projektowanie Graficzne</h3>
        <p>
          Szukasz grafika, który stworzy dla Ciebie wyjątkowy projekt? Trafiłeś
          w odpowiednie miejsce! Jako doświadczony grafik oferuję szeroki zakres
          usług, w tym:
        </p>
        <ul>
          <li>
            <strong>materiały reklamowe</strong>, które pomogą ci pryciągnąć
            klientów do twojego biznesu,
          </li>
          <li>
            <strong>wizytówki</strong>, które pozostawią trwałe wrażenie,
          </li>
          <li>
            <strong>logo firmowe</strong>, które odda unikalny charakter Twojej
            marki,
          </li>
          <li>
            oraz <strong>plakaty</strong>,{" "}
            <strong>grafiki na social media</strong>,{" "}
            <strong>projekty opakowań</strong> i wiele więcej
          </li>
        </ul>
        <p>
          Jako grafik komputerowy oferuję kompleksowe tworzenie identyfikacji
          wizualnej - od logo, przez paletę kolorów, po spójne materiały
          promocyjne. Dobrze zaprojektowana identyfikacja wizualna nie tylko
          buduje rozpoznawalność marki, ale także budzi zaufanie klientów.
          Dzięki spójnej i estetycznej oprawie graficznej Twoja firma będzie
          łatwo zapamiętana, a to przełoży się na lepsze wyniki biznesowe.
          Pozwól, że pomogę Ci stworzyć wizerunek, który będzie działać na Twoją
          korzyść!
        </p>
        <h3>Dlaczego warto wybrać mnie zamiast dużej agencji?</h3>
        <ul>
          <li>
            <strong>korzystniejsze warunki cenowe</strong> - bez pośredników i
            zbędnych kosztów, dostajesz wysokiej jakości projekt w uczciwej
            cenie,
          </li>
          <li>
            <strong>bezpośrednia i płynna komunikacja</strong> - pracując ze
            mną, masz pełną kontrolę nad projektem i zawsze możesz liczyć na
            szybki kontakt,
          </li>
          <li>
            <strong>pełne zaangażowanie</strong> - każdy projekt traktuję
            indywidualnie, wkładając w niego maksimum energii i pasji. Zależy
            mi, abyś był w pełni zadowolony z efektów naszej współpracy.
          </li>
        </ul>
        <p>
          W przeciwieństwie do dużych firm, dla których jesteś tylko jednym z
          wielu klientów, u mnie Twoje potrzeby i satysfakcja są priorytetem!
        </p>
        <p>Skontaktuj się ze mną i wspólnie stwórzmy coś wyjątkowego!</p>
        <div className={styles.button_container}>
          <PixelBtn href="/cennik/#projekty-graficzne">Cennik</PixelBtn>
          <PixelBtn href="/#kontakt">Poproś o Wycenę</PixelBtn>
        </div>
        <Image
          className={styles.paint_can}
          src="/paint-can.png"
          alt="puszka-farby"
          width={500}
          height={500}
        />
        <Image
          className={styles.palette}
          src="/palette.png"
          alt="paleta-kolorów"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
