import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

const HeroSection = () => {
  return (
    <section>
      <div className="hero_section pt-[30px] pb-12 relative">
        <div className="lg:w-1/2 md:w-9/12 w-4/5 mx-auto">
          <h1 className="md:mt-[190px] mt-[140px]">
            Find Your Dream Home Today
          </h1>
          <div className="text-white text-center mt-5">
            Explore the best properties in your city — for living, investing, or
            vacation.
          </div>
          <div className="flex justify-center my-12">
            <button className="hero_btn px-7 py-3.5 text-white cursor-pointer">
              Book a Free Consultation
            </button>
          </div>
          <div className="flex justify-center px-4 sm:px-6 md:px-10">
            <div className="search_box w-full max-w-6xl px-5 sm:px-7 pt-5 pb-8 rounded-[30px]">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search For Property"
                className="focus:outline-0 placeholder:text-white text-white w-full mb-7 bg-transparent border-b border-white pb-2"
              />

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
                <Button
                  variant="secondary-outline"
                  className="w-full text-base"
                >
                  Location <MapPin className="ml-2.5" />
                </Button>

                <Button
                  variant="secondary-outline"
                  className="w-full text-base"
                >
                  Type
                  <Image
                    src="/assets/images/home-icon.svg"
                    alt="Type"
                    height={30}
                    width={30}
                    className="ml-2.5"
                    draggable={false}
                  />
                </Button>

                <Button
                  variant="secondary-outline"
                  className="w-full text-base"
                >
                  Price
                  <Image
                    src="/assets/images/tag-right.svg"
                    alt="Price"
                    height={30}
                    width={30}
                    className="ml-2.5"
                    draggable={false}
                  />
                </Button>

                <Button variant="secondary" className="w-full text-base">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
