import React from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <h4 className="mb-5">Why Choose Us</h4>
      <h2 className="text-center mb-12">Your Trusted Real Estate Partner</h2>
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
        number={1}
        title="Expert Local Agents"
        description={`Lorem ipsum dolor sit\namet,`}
      />
      <ChooseUsCard
        number={1}
        title="Full Legal Support"
        description={`Lorem ipsum dolor sit\namet,`}
      />
    </section>
  );
};

export default ChooseUs;
