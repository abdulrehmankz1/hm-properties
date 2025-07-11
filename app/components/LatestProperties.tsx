"use client";

import React from "react";
import Carousel from "./Carousel";

const LatestProperties = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="w-full md:w-[90%] mx-auto">
          <h2 className="text-center">Latest Properties on the Market</h2>
          <p className="text-[#00000080] text-center my-5">
            Discover our most recent listings, updated in real-time to help you
            find your perfect home faster.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default LatestProperties;
