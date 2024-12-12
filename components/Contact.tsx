import styles from "./Contact.module.css";
import TypeEffect from "./utils/TypeEffect";
import CircuitContact from "./circuits/CircuitContact";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className={styles.section} id="kontakt">
      <h2 className={styles.title}>
        <TypeEffect>Zapraszam </TypeEffect>
        <TypeEffect>do </TypeEffect>
        <TypeEffect>Kontaktu</TypeEffect>
      </h2>
      <div className={styles.container}>
        <CircuitContact className={styles.left} />
        <CircuitContact className={styles.right} />
        <ContactForm />
      </div>
      <div className={styles.contactInfo}>
        <div>
          <span>Tel:</span>
          <a href="tel:48501530155">+48 501 530 155</a>
        </div>
        <div>
          <span>email:</span>
          <a href="mailto:cezary.makowski96@gmail.com">
            cezary.makowski96@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
