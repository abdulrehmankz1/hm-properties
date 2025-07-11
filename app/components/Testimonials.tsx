import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto my-100">
        <h4 className="mb-5">Testimonials</h4>
        <h2 className="text-center mb-12">What Our Clients Say</h2>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
