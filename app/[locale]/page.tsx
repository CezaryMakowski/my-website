import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe";
import PoiontsOfInterest from "@/components/PointsOfInterest";
import WebDesign from "@/components/WebDesign";
import GraphicalDesign from "@/components/GraphicalDesign";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebProjectsShowcase from "@/components/WebProjectsShowcase";
import GraphProjectsShowcase from "@/components/GraphProjectsShowcase";
import FrontSlider from "@/components/FrontSlider";
import Automations from "@/components/Automations";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <FrontSlider />
        <PoiontsOfInterest />
        <AboutMe />
        <WebDesign />
        <WebProjectsShowcase />
        <Automations />
        <GraphicalDesign />
        <GraphProjectsShowcase />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
