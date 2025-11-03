import Image from "next/image";
import styles from "./PixelLink.module.css";
import { LinkProps } from "next/link";
import { Link } from "@/i18n/routing";

interface pixelBtnProps extends LinkProps {
  children: string | string[];
  href: string;
  locale?: string | undefined;
}

export default function PixelLink({ children, href, ...props }: pixelBtnProps) {
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
      <span className={styles.text}>{children}</span>
    </Link>
  );
}
