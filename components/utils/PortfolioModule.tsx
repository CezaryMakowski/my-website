import Image from "next/image";
import styles from "./PortfolioModule.module.css";
import Circuit from "../circuits/Circuit";
import TypeEffect from "./TypeEffect";
import Link from "next/link";

export default function PortfolioModule({
  src,
  title,
  link,
  mobileSrc,
}: {
  src: string;
  title: string;
  link?: boolean;
  mobileSrc?: string;
}) {
  return (
    <section className={styles.section}>
      {link && (
        <Link href={"https://" + title} target="_blank">
          <div className={styles.container}>
            <div className={`${"glow"} ${styles.img_container}`}>
              <Circuit side="left" className={styles.circuit} />
              <Circuit side="right" className={styles.circuit} />
              <Image
                src={src}
                alt={title}
                width={1350}
                height={810}
                className={styles.webpage}
              />
            </div>
            <h3 className={styles.title}>
              <TypeEffect>{title}</TypeEffect>
            </h3>
          </div>
        </Link>
      )}
      {!link && (
        <div className={styles.container}>
          <div className={`${"glow"} ${styles.img_container}`}>
            <Circuit side="left" className={styles.circuit} />
            <Circuit side="right" className={styles.circuit} />
            <Image
              src={src}
              alt={title}
              width={1350}
              height={810}
              className={styles.desktop}
            />
            {mobileSrc && (
              <Image
                src={mobileSrc}
                alt={title}
                width={900}
                height={1125}
                className={styles.mobile}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
