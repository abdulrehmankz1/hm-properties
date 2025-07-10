import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <h4 className="mb-5">Testimonials</h4>
      <h2 className="text-center mb-12">What Our Clients Say</h2>

      {/* 👇 Marquee Wrapper */}
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-track flex w-max gap-5">
          {[...Array(2)].flatMap((_, i) => [
            <div className="w-1/2" key={`card-1-${i}`}>
              <TestimonialCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                name="Mary Arshani"
                role="Assistant manager at Insureme"
                imageUrl="/assets/images/avatar-1.jpg"
                className="w-[630px]"
              />
            </div>,
            <div className="w-1/4" key={`card-2-${i}`}>
              <TestimonialCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                name="John Arshani"
                role="Manager"
                imageUrl="/assets/images/man-avatar.jpg"
                className="w-[310px]"
              />
            </div>,
            <div className="w-1/4" key={`card-3-${i}`}>
              <TestimonialCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                name="Mary Arshani"
                role="Manager"
                imageUrl="/assets/images/avatar-3.jpg"
                className="w-[310px]"
              />
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
