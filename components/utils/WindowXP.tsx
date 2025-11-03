import { ReactNode } from "react";
import styles from "./WindowXP.module.css";
import Image from "next/image";

type WindowXPProps = React.ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function WindowXP({
  children,
  className,
  ...props
}: WindowXPProps) {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={styles.windowsIcons}>
        <Image
          src="/minimalize.svg"
          alt="ikona zminimalizuj okna windows"
          width={30}
          height={30}
        />
        <Image
          src="/expand.svg"
          alt="ikona rozszerz okna windows"
          width={30}
          height={30}
        />
        <Image
          src="/x.svg"
          alt="ikona zamknij okna windows"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
