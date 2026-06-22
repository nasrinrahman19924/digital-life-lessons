"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

const slides = [
  {
    title: "Preserve Your Life Wisdom",

    description: "Turn your experiences into meaningful lessons.",

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    title: "Learn From Others",

    description: "Explore insights shared by people worldwide.",

    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  {
    title: "Grow Every Day",

    description: "Build your personal growth journey.",

    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
];

export default function HeroSlider() {
  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[550px] rounded-3xl bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center text-white text-center p-10">
                <h1 className="text-5xl font-bold mb-5">{slide.title}</h1>

                <p className="max-w-2xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
