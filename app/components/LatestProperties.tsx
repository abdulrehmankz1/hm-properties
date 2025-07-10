"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

import PropertyOverlay from "./PropertyOverlay";
import type { Swiper as SwiperClass } from "swiper";

const slides = [
  {
    image: "/assets/images/left-card.png",
    title: "Commerical Space",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    image: "/assets/images/right-card.png",
    title: "Modern 3‑Bedroom Villa in Downtown",
    desc: (
      <>
        Lorem ipsum dolor sit amet, consectetur
        <br />3 Bed | 2 Baths | 1,800 Sq Ft
      </>
    ),
    tags: ["Hot", "Price: $4,5000"],
  },
  {
    image: "/assets/images/middle-card.png",
    title: "Interior Space and Design",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    image: "/assets/images/left-card.png",
    title: "Commerical Space",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    image: "/assets/images/right-card.png",
    title: "Modern 3‑Bedroom Villa in Downtown",
    desc: (
      <>
        Lorem ipsum dolor sit amet, consectetur
        <br />3 Bed | 2 Baths | 1,800 Sq Ft
      </>
    ),
    tags: ["Hot", "Price: $4,5000"],
  },
  {
    image: "/assets/images/middle-card.png",
    title: "Interior Space and Design",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    image: "/assets/images/left-card.png",
    title: "Commerical Space",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    image: "/assets/images/right-card.png",
    title: "Modern 3‑Bedroom Villa in Downtown",
    desc: (
      <>
        Lorem ipsum dolor sit amet, consectetur
        <br />3 Bed | 2 Baths | 1,800 Sq Ft
      </>
    ),
    tags: ["Hot", "Price: $4,5000"],
  },
  {
    image: "/assets/images/middle-card.png",
    title: "Interior Space and Design",
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const LatestProperties = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  const initial = Math.floor(slides.length / 2);
  const [activeIndex, setActiveIndex] = useState(initial);

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-center">Latest Properties on the Market</h2>
        <p className="text-[#00000080] text-center my-5">
          Discover our most recent listings, updated in real-time to help you
          find your perfect home faster.
        </p>

        {/* Slider Controls */}
        <div className="mb-12 flex justify-between mx-auto w-[140px]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[60px] h-[60px] rounded-full bg-[#F5F7F9] hover:bg-[#eceeef] flex items-center justify-center cursor-pointer transition hover:scale-105 hover:shadow-md"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[60px] h-[60px] rounded-full bg-black hover:bg-[#000000e3] text-white flex items-center justify-center cursor-pointer transition hover:scale-105 hover:shadow-lg"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          centeredSlides
          initialSlide={initial}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex); // Sync on first render
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mt-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div
                className={`relative h-[600px] rounded-[30px] bg-cover bg-center flex justify-center items-end transition-all duration-300 ${
                  index === activeIndex
                    ? "w-[35vw] scale-100 z-20" // center card: 50% width
                    : "w-[25vw] scale-[0.95] z-10" // side cards: 25% width
                }`}
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                {/* Badges */}
                {slide.tags && (
                  <div className="absolute top-5 left-5 flex gap-2">
                    {slide.tags.map((label, idx) => (
                      <div
                        key={idx}
                        className="px-5 py-2.5 h-[48px] rounded-[30px] bg-black/40 backdrop-blur text-white font-semibold flex items-center"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                )}

                <PropertyOverlay title={slide.title} description={slide.desc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestProperties;
