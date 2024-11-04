"use client";

import Image from "next/image";
import styles from "./GraphCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

export default function GraphCard({
  awSrc,
  rewSrc,
  alt,
}: {
  alt: string;
  awSrc: string;
  rewSrc: string;
}) {
  return (
    <Swiper
      className={styles.container}
      effect="cards"
      slidesPerView={1}
      centeredSlides
      slideToClickedSlide
      cardsEffect={{
        perSlideOffset: 15,
        slideShadows: true,
        rotate: true,
        perSlideRotate: 10,
      }}
      modules={[EffectCards]}
    >
      <SwiperSlide className={styles.slide}>
        <Image src={awSrc} alt={`${alt} awers`} width={620} height={360} />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={rewSrc} alt={`${alt} rewers`} width={620} height={360} />
      </SwiperSlide>
    </Swiper>
  );
}
