"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import type { default as SlickSliderType } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropertyOverlay from "./PropertyOverlay";

type Slide = {
  image: string;
  title: string;
  desc: string | any;
  tags?: string[];
};

const slides: Slide[] = [
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

const Carousel = () => {
  const sliderRef = useRef<SlickSliderType | null>(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    arrows: false,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 overflow-hidden">
      {/* Custom Slider Buttons */}
      <div className="mb-12 flex justify-between mx-auto w-[140px]">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-[60px] h-[60px] rounded-full bg-[#F5F7F9] hover:bg-[#eceeef] flex items-center justify-center cursor-pointer transition hover:scale-105 hover:shadow-md"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-[60px] h-[60px] rounded-full bg-black hover:bg-[#000000e3] text-white flex items-center justify-center cursor-pointer transition hover:scale-105 hover:shadow-lg"
        >
          <ArrowRight />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="px-4 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]"
          >
            <div
              className="relative h-[400px] rounded-[30px] bg-cover bg-center flex justify-center items-end"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {slide.tags && (
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {slide.tags.map((label: string, idx: number) => (
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
