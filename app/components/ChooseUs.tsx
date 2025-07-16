import React from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
  return (
    <section>
      <div className="container mx-auto my-100 md:px-4 px-3">
        <h4 className="mb-5">Why Choose Us</h4>
        <h2 className="text-center md:mb-12 mb-9">
          Your Trusted Real Estate Partner
        </h2>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-12 lg:gap-5">
          {/* Left Column - Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 xl:gap-5 lg:gap-3 gap-5">
            <ChooseUsCard
              number={1}
              title="Verified Listings Only"
              description={`Lorem ipsum dolor sit\namet,`}
            />
            <ChooseUsCard
              number={2}
              title="Transparent Pricing"
              description={`Lorem ipsum dolor sit\namet,`}
            />
            <ChooseUsCard
              number={3}
              title="Expert Local Agents"
              description={`Lorem ipsum dolor sit\namet,`}
            />
            <ChooseUsCard
              number={4}
              title="Full Legal Support"
              description={`Lorem ipsum dolor sit\namet,`}
            />
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* First Image */}
            <div
              className="w-full h-[297px] rounded-[30px] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/assets/images/choose-2.png')",
                backgroundColor: "lightgray",
              }}
            ></div>

            {/* Second Image */}
            <div
              className="w-full h-[213px] rounded-[30px] bg-no-repeat bg-cover"
              style={{
                backgroundImage: "url('/assets/images/choose-1.png')",
                backgroundColor: "lightgray",
                backgroundPosition: "0px -29.058px",
                backgroundSize: "100% 165.782%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
