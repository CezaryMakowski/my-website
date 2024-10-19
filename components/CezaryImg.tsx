import Image from "next/image";
import styles from "./CezaryImg.module.css";
import CircuitCezary from "./circuits/CircuitCezary";

export default function cezaryImg() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <CircuitCezary className={styles.left} />
          <div className={styles.img_container}>
            <Image
              src="/cezary-makowski-zdjęcie.png"
              alt="cezary-makowski"
              className={styles.cezary}
              width={1000}
              height={1000}
            />
            <Image
              src="/chip.png"
              alt="układ scalony"
              className={styles.chip}
              width={1000}
              height={1000}
            />
          </div>
          <CircuitCezary className={styles.right} />
        </div>
        <CircuitCezary className={styles.bottom} />
      </div>
    </div>
  );
}
