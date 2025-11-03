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
  const technologiesData = [
    {
      src: "/icons/css.svg",
      alt: "CSS-icon",
      subtitle: "CSS",
    },
    {
      src: "/icons/figma.svg",
      alt: "figma-icon",
      subtitle: "Figma",
    },
    {
      src: "/icons/n8n.svg",
      alt: "n8n-icon",
      subtitle: "n8n",
    },
    {
      src: "/icons/git.svg",
      alt: "git-icon",
      subtitle: "GIT",
    },
    {
      src: "/icons/html.svg",
      alt: "html-icon",
      subtitle: "HTML",
    },
    {
      src: "/icons/javascript.svg",
      alt: "javascript-icon",
      subtitle: "JavaScript",
    },
    {
      src: "/icons/nextjs.svg",
      alt: "nextjs-icon",
      subtitle: "Next.js",
    },
    {
      src: "/icons/openAI.svg",
      alt: "openAI-icon",
      subtitle: "OpenAI",
    },
    {
      src: "/icons/prisma.svg",
      alt: "prisma-icon",
      subtitle: "Prisma",
    },
    {
      src: "/icons/react.svg",
      alt: "css-icon",
      subtitle: "React",
    },
    {
      src: "/icons/wordpress.svg",
      alt: "wordpress-icon",
      subtitle: "Wordpress",
    },
  ];

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
        {technologiesData.map((technology) => (
          <SwiperSlide key={technology.subtitle}>
            <div>
              <Image
                className={styles.icon}
                src={technology.src}
                alt={technology.alt}
                width={100}
                height={100}
              />
              <p className={styles.subtitle}>{technology.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
