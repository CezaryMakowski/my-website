import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PortfolioModule from "../../components/utils/PortfolioModule";
import styles from "./page.module.css";

export default function Projekty() {
  return (
    <>
      <main>
        <Header middle darkBg />
        <h2 className={styles.title}>Projekty Stron</h2>
        <PortfolioModule src="/mutarete.png" title="mutarete.pl" link />
        <PortfolioModule
          src="/fizjotrenerka.png"
          title="fizjotrenerka.eu"
          link
        />
        <PortfolioModule
          src="/grupabezmajtoow.png"
          title="grupabezmajtoow.pl"
          link
        />
        <PortfolioModule src="/hempcapone.png" title="hempcapone.com" link />
        <h2 className={styles.title} style={{ marginBottom: -30 }}>
          Projekty Graficzne
        </h2>
        <PortfolioModule
          src="/wizytówka-fizjoT.png"
          title="wizytówka-Fizjotrenerka"
          mobileSrc="/wizytówka-fizjoT-mobile.png"
        />
        <PortfolioModule
          src="/Yamako.png"
          title="wizytówka-yamako"
          mobileSrc="/Yamako-mobile.png"
        />
        <PortfolioModule
          src="/Joanna-gabinet.png"
          title="wizytówka-mutarete"
          mobileSrc="/Joanna-gabinet-mobile.png"
        />
        <PortfolioModule
          src="/zaproszenie-wesele.png"
          title="wizytówka-na-wesele"
          mobileSrc="/zaproszenie-wesele-mobile.png"
        />
      </main>
      <Footer />
    </>
  );
}
