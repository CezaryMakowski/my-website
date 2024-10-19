import Link from "next/link";
import styles from "./PixelBtn.module.css";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

interface pixelBtnProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
}

export default function PixelBtn({ children, ...props }: pixelBtnProps) {
  return (
    <button className={styles.pixel_btn} {...props}>
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
    </button>
  );
}
