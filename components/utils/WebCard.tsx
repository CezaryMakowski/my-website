import Link from "next/link";
import styles from "./WebCard.module.css";
import Image from "next/image";
import TypeEffect from "./TypeEffect";

export default function WebCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <Link href={"https://" + title} className={styles.anchor} target="_blank">
      <div className={`${"glow"} ${styles.container}`}>
        <Image src={src} alt={title} width={1350} height={810} />
        <h3 className={styles.title}>
          <TypeEffect>{title}</TypeEffect>
        </h3>
      </div>
    </Link>
  );
}
