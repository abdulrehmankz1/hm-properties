import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <h4 className="mb-5">Testimonials</h4>
      <h2 className="text-center mb-12">What Our Clients Say</h2>
      <div className="flex w-full gap-5">
        {/* First Column: 50% */}
        <div className="w-1/2">
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
            name="Mary Arshani"
            role="Assistant manager at Insureme"
            imageUrl="/assets/images/avatar-1.jpg"
          />
        </div>

        {/* Second Column: 25% */}
        <div className="w-1/4">
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            name="John Arshani"
            role="Manager"
            imageUrl="/assets/images/man-avatar.jpg"
          />
        </div>

        {/* Third Column: 25% */}
        <div className="w-1/4">
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            name="Mary Arshani"
            role="Manager"
            imageUrl="/assets/images/avatar-3.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
