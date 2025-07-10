import React from "react";
import PropertyOverlay from "./PropertyOverlay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LatestProperties = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        Latest Properties on the Market
      </h2>
      <p className="text-[#00000080] text-lg md:text-xl font-medium mt-5 text-center mb-5">
        Discover our most recent listings, updated in real-time to help you find
        your perfect home faster.
      </p>

      {/* btn */}
      <div className="mb-12 flex justify-between mx-auto w-[140px]">
        <span className="w-[60px] h-[60px] rounded-full bg-[#F5F7F9] hover:bg-[#eceeef] flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md">
          <ArrowLeft />
        </span>
        <span className="w-[60px] h-[60px] rounded-full bg-black hover:bg-[#000000e3] text-white flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
          <ArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-[25%_50%_25%] gap-5 mt-12">
        {/* Card 1 */}
        <div
          className="relative h-[600px] rounded-[30px] bg-cover bg-center flex justify-center items-end"
          style={{ backgroundImage: "url('/assets/images/left-card.png')" }}
        >
          <PropertyOverlay
            title="Commerical Space"
            description="Lorem ipsum dolor sit amet, consectetur"
          />
        </div>

        {/* Card 2 */}
        <div
          className="relative h-[600px] rounded-[30px] bg-cover bg-center flex justify-center items-end"
          style={{ backgroundImage: "url('/assets/images/right-card.png')" }}
        >
          {/* Badges */}
          <div className="absolute top-5 left-5 flex gap-2">
            {["Hot", "Price: $4,5000"].map((label, index) => (
              <div
                key={index}
                className="px-5 py-2.5 h-[48px] rounded-[30px] bg-black/40 backdrop-blur text-xl text-white font-semibold flex items-center"
              >
                {label}
              </div>
            ))}
          </div>

          <PropertyOverlay
            title="Modern 3-Bedroom Villa in Downtown"
            description={
              <>
                Lorem ipsum dolor sit amet, consectetur
                <br />3 Bed | 2 Baths | 1,800 Sq Ft
              </>
            }
          />
        </div>

        {/* Card 3 */}
        <div
          className="relative h-[600px] rounded-[30px] bg-cover bg-center flex justify-center items-end"
          style={{ backgroundImage: "url('/assets/images/middle-card.png')" }}
        >
          <PropertyOverlay
            title="Interior Space and Design"
            description="Lorem ipsum dolor sit amet, consectetur"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
