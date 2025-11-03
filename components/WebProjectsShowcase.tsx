"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import styles from "./WebProjectsShowcase.module.css";
import WebCard from "./utils/WebCard";
import TypeEffect from "./utils/TypeEffect";
import { useTranslations } from "next-intl";

export default function WebProjectsShowcase() {
  const t = useTranslations("Homepage.Latestwebdesigns");
  const slidesData = [
    {
      src: "/fizjotrenerka.png",
      title: "fizjotrenerka.eu",
    },
    {
      src: "/hempcapone.png",
      title: "hempcapone.com",
    },
    {
      src: "/mutarete.png",
      title: "mutarete.pl",
    },
    {
      src: "/yamako_website.png",
      title: "yamakoterapie.pl",
    },
  ];
  return (
    <section className={styles.section}>
      <h2>
        <TypeEffect>{t("Title")}</TypeEffect>
      </h2>
      <Swiper
        className={styles.swiper_container}
        effect="coverflow"
        loop
        spaceBetween={40}
        speed={3000}
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 80,
          depth: 200,
          modifier: 1,
          scale: 0.6,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide className={styles.swiper_slide} key={slide.title}>
            <WebCard src={slide.src} title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
