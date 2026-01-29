"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../css/swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const slider = [
  {
    id: 1,
    title: "macbook laptop",
    image: "/images/slider/laptop.jpg",
  },
  {
    id: 2,
    title: "lipton alahly club",
    image: "/images/slider/lipton.jpg",
  },
  {
    id: 3,
    title: "pampers",
    image: "/images/slider/pampers.jpg",
  },
  {
    id: 4,
    title: "iphone",
    image: "/images/slider/iphone17.jpg",
  },
];

export default function MySwiper() {
  return (
    <section className="h-[150px] md:h-[200px] lg:h-[300px] xl:h-[450px]  object-cover object-center overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              alt={item.title}
              width={2000}
              height={2000}
              className="object-cover object-top h-full w-full"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
