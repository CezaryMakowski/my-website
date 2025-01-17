"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import styles from "./WebProjectsShowcase.module.css";
import WebCard from "./utils/WebCard";
import TypeEffect from "./utils/TypeEffect";
import { useTranslations } from "next-intl";

export default function WebProjectsShowcase() {
  const t = useTranslations("Homepage.Latestwebdesigns");
  return (
    <section className={styles.section}>
      <h2>
        <TypeEffect>{t("Title1")}</TypeEffect>
        <TypeEffect>{t("Title2")}</TypeEffect>
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
        <SwiperSlide className={styles.swiper_slide}>
          <WebCard src="/fizjotrenerka.png" title="fizjotrenerka.eu" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <WebCard src="/grupabezmajtoow.png" title="grupabezmajtoow.pl" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <WebCard src="/hempcapone.png" title="hempcapone.com" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <WebCard src="/mutarete.png" title="mutarete.pl" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
