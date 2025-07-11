"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    name: "Mary Arshani",
    role: "Assistant Manager at Insureme",
    imageUrl: "/assets/images/avatar-1.jpg",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "John Arshani",
    role: "Manager",
    imageUrl: "/assets/images/man-avatar.jpg",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "Mary Arshani",
    role: "Manager",
    imageUrl: "/assets/images/avatar-3.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 overflow-hidden">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-4">
            <div className="bg-[#F5F7F9] h-[290px] w-full rounded-[30px] shadow-[0_0_5px_0_rgba(0,0,0,0.25)] p-7 flex flex-col justify-between">
              <p className="text-[#7b7c7d] text-base line-clamp-4">{card.content}</p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src={card.imageUrl}
                  alt={card.name}
                  height={64}
                  width={64}
                  className="rounded-full"
                  draggable={false}
                />
                <div>
                  <div className="text-black font-semibold">{card.name}</div>
                  <div className="text-[#7b7c7d] text-sm">{card.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
