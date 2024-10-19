import Image from "next/image";
import styles from "./PixelLink.module.css";
import Link, { LinkProps } from "next/link";

interface pixelBtnProps extends LinkProps {
  children: string;
  href: string;
}

export default function PixelBtn({ children, href, ...props }: pixelBtnProps) {
  return (
    <Link className={styles.pixel_btn} href={href} {...props}>
      <Image
        className={`${styles.black_pixels} ${styles.left}`}
        src={"/black-pixels.svg"}
        alt="pixels-button"
        width={150}
        height={200}
      />
      <Image
        className={`${styles.black_pixels} ${styles.right}`}
        src={"/black-pixels.svg"}
        alt="pixels-button"
        width={150}
        height={200}
      />
      <Image
        className={`${styles.light_pixels} ${styles.left}`}
        src={"/light-pixels.svg"}
        alt="pixels-button"
        width={150}
        height={200}
      />
      <Image
        className={`${styles.light_pixels} ${styles.right}`}
        src={"/light-pixels.svg"}
        alt="pixels-button"
        width={150}
        height={200}
      />
      <p className={styles.text}>{children}</p>
    </Link>
  );
}
