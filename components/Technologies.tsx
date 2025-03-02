"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Technologies.module.css";
import Image from "next/image";
import TypeEffect from "./utils/TypeEffect";
import { useTranslations } from "next-intl";

export default function Technologies() {
  const t = useTranslations("Homepage.Technologies");

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <TypeEffect>{t("Title")}</TypeEffect>
      </h2>
      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={3}
        speed={2000}
        breakpoints={{
          800: { spaceBetween: 40, slidesPerView: 6 },
          700: { spaceBetween: 30, slidesPerView: 5 },
          600: { spaceBetween: 20, slidesPerView: 4 },
        }}
        loop
        autoplay={{ delay: 0 }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/css.svg"}
              alt="CSS-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>CSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/figma.svg"}
              alt="figma-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>Figma</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/git.svg"}
              alt="git-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>GIT</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/html.svg"}
              alt="html-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>HTML</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/javascript.svg"}
              alt="javascript-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>JavaScript</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/nextjs.svg"}
              alt="nextjs-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>Next.js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/openAI.svg"}
              alt="openAI-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>OpenAI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/prisma.svg"}
              alt="prisma-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>Prisma</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/react.svg"}
              alt="css-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>React</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className={styles.icon}
              src={"/icons/wordpress.svg"}
              alt="wordpress-icon"
              width={100}
              height={100}
            />
            <p className={styles.subtitle}>Wordpress</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
