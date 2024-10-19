import styles from "./WebDesign.module.css";
import PixelBtn from "./utils/PixelLink";
import Matrix from "./Matrix";

export default function WebDesign() {
  return (
    <section className={styles.section} id="web-design">
      <Matrix />
      <div className={styles.container}>
        <div className={`glow ${styles.glow_container}`}>
          <h3>Projektowanie Stron Internetowych</h3>
          <p>
            Szukasz idealnej strony internetowej, która w pełni odda charakter
            Twojej firmy? Zaprojektuję dla Ciebie nowoczesną i funkcjonalną
            stronę, która nie tylko przyciągnie uwagę, ale także zrealizuje
            Twoje cele biznesowe. Jako jednoosobowa działalność oferuję Ci coś,
            czego nie znajdziesz w dużych agencjach: pełne zaangażowanie i
            indywidualne podejście do każdego projektu.
          </p>
          <h3>Dlaczego warto współpracować właśnie ze mną?</h3>
          <ol>
            <li>
              <strong>Bezpośredni kontakt</strong> - Nie przechodzisz przez
              pośredników, co oznacza, że każda Twoja sugestia trafia
              bezpośrednio do mnie. To pozwala na szybszą i bardziej efektywną
              komunikację.
            </li>
            <li>
              <strong>Indywidualny projekt</strong> - Nie korzystam z gotowych
              szablonów. Każda strona, którą tworzę, jest unikalna i dopasowana
              do Twojej wizji oraz potrzeb.
            </li>
            <li>
              <strong>Elastyczność cenowa</strong> - Jako freelancer mogę
              zaoferować bardziej konkurencyjne ceny w porównaniu do dużych
              firm, bez utraty jakości. Koszt stworzenia strony typu landing
              page zaczyna się już od 1500 zł.
            </li>
            <li>
              <strong>Indywidualne podejście do budżetu i technologii</strong> -
              Masz wybór! Oferuję dwie opcje:
              <ul>
                <li>
                  <strong>WordPress</strong> - Idealny, jeśli szukasz bardziej
                  budżetowego rozwiązania, które pozwala na łatwe zarządzanie
                  treściami. Ograniczenia personalizacji są mniejsze, ale nadal
                  uzyskasz stronę zaprojektowaną specjalnie dla Ciebie.
                </li>
                <li>
                  <strong>Dedykowany projekt</strong> - Jeśli zależy Ci na
                  maksymalnej personalizacji i optymalnej wydajności, to
                  rozwiązanie bez użycia systemu CMS będzie strzałem w
                  dziesiątkę. Wyższa cena, ale brak jakichkolwiek ograniczeń i
                  jeszcze szybsze działanie strony.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Twoja strona, Twój sukces</h3>
          <p>
            Każdy projekt traktuję z pełnym zaangażowaniem, dbając o to, aby
            efekt końcowy nie tylko spełniał Twoje oczekiwania, ale je
            przewyższał. Zaufaj mi, a zyskasz nie tylko piękną stronę, ale także
            partnera, który będzie wspierał Cię na każdym etapie jej tworzenia.
          </p>
          <p>
            Skontaktuj się ze mną i przekonaj się, jak łatwo możesz mieć stronę,
            która pracuje dla Ciebie!
          </p>
          <div className={styles.button_container}>
            <PixelBtn href="/projekty">Moje Projekty</PixelBtn>
            <PixelBtn href="/#kontakt">Poproś o Wycenę</PixelBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
