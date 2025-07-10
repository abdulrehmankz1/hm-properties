import React from "react";
import Navbar from "./Navbar";
import { HousePlus, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

const HeroSection = () => {
  return (
    <div className="hero_section pt-[30px] pb-12">
      <Navbar />
      <h1>
        Find Your Dream
        <br />
        Home Today
      </h1>
      <div className="text-xl text-white font-medium text-center mt-5">
        Explore the best properties in your city — for living, investing, or
        vacation.
      </div>
      <div className="flex justify-center my-12">
        <button className="hero_btn px-7 py-3.5 text-xl text-white cursor-pointer">
          Book a Free Consultation
        </button>
      </div>
      <div className="flex justify-center">
        <div className="search_box px-7 pt-5 pb-8">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search For Property"
            className="placeholder:text-xl placeholder:text-white placeholder:font-medium text-white text-xl font-medium mb-7"
          />

          <div className="flex flex-wrap gap-4 lg:gap-[50px] xl:gap-[50px]">
            <Button variant="secondary-outline">
              Location <MapPin className="ml-2.5" />
            </Button>

            <Button variant="secondary-outline">
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

            <Button variant="secondary-outline">
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

            <Button variant="secondary">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
