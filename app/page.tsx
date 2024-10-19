import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "../components/AboutMe";
import PoiontsOfInterest from "../components/PointsOfInterest";
import WebDesign from "../components/WebDesign";
import GraphicalDesign from "../components/GraphicalDesign";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Image
          priority
          className={styles.hero}
          src={"/forest.png"}
          alt="hero-image-cezary-makowski-web-developer"
          width={3584}
          height={2048}
        />
        <PoiontsOfInterest />
        <AboutMe />
        <WebDesign />
        <GraphicalDesign />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
