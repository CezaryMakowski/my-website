"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styles from "./GraphProjectsShowcase.module.css";
import TypeEffect from "./utils/TypeEffect";
import GraphCard from "./utils/GraphCard";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WebProjectsShowcase() {
  const t = useTranslations("Homepage.Latestgraphdesigns");
  return (
    <section className={styles.section}>
      <h2>
        <TypeEffect>{t("Title")}</TypeEffect>
      </h2>
      <Swiper
        className={styles.swiper_container}
        effect="coverflow"
        initialSlide={2}
        allowTouchMove={false}
        spaceBetween={200}
        slideToClickedSlide
        speed={1200}
        centeredSlides
        pagination={{
          el: "#pagination",
          clickable: true,
          bulletActiveClass: styles.active,
          bulletClass: styles.pagination_bullet,
        }}
        navigation={{ nextEl: "#right", prevEl: "#left" }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <Image
            className={styles.slide_image}
            src="/jesienna-promocja.png"
            alt="otwieramy oczy hempcapone konkurs"
            width={820}
            height={460}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <GraphCard
            rewSrc="/gabinet-psychoterapia-rewers.png"
            awSrc="/gabinet-psychoterapia-awers.png"
            alt="joanna gabinet wizytówka"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <GraphCard
            rewSrc="/Yamako-rewers.png"
            awSrc="/Yamako-awers.png"
            alt="joanna gabinet wizytówka"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <GraphCard
            rewSrc="/wizytówka-fizjoT-rewers.png"
            awSrc="/wizytówka-fizjoT-awers.png"
            alt="joanna gabinet wizytówka"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <GraphCard
            rewSrc="/zaproszenie_awers.png"
            awSrc="/zaproszenie_rewers.png"
            alt="projekt zaproszenia na ślub"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <Image
            className={styles.slide_image}
            src="/Otwieramy-Oczy-HempCapone-Konkurs.png"
            alt="otwieramy oczy hempcapone konkurs"
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
      <div id="pagination" className={styles.pagination}></div>
    </section>
  );
}
