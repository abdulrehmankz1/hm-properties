import { ArrowUpRight } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="container mx-auto my-100 bg-[#F5F7F9] rounded-[30px] p-6 pb-12">
        <h4 className="mb-5">Newsletter</h4>
        <h2 className="text-center">Stay Ahead of the Market</h2>
        <p className="text-[#00000080] mt-5 text-center">
          Subscribe to get the latest updates on new listings and market trends.
        </p>
        <div className="flex items-center justify-center mt-12">
          <div className="relative w-[500px]">
            <input
              type="text"
              placeholder="Subscribe"
              className="w-full bg-white placeholder:text-[#7b7c7d] focus:outline-0 rounded-[30px] text-[#7b7c7d] px-5 py-3.5 pr-[70px] shadow-[0_0_5px_0_rgba(0,0,0,0.25)]"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-3 w-[40px] h-[40px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
