import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section>
      <div className="container mx-auto my-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Column */}
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Your Trusted Partner in Real Estate
              </h2>
              <div className="w-full mt-[30px]">
                <Image
                  src="/assets/images/right-img.svg"
                  alt="Right Image"
                  width={632}
                  height={500}
                  draggable={false}
                  className="w-full h-[500px] object-cover rounded-[30px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="grid grid-cols-[42%_55%] gap-x-5 items-stretch">
                <div className="h-[364px]">
                  <Image
                    src="/assets/images/left-1.svg"
                    alt="Left Image"
                    width={267}
                    height={380}
                    className="w-full h-full object-cover rounded-[30px]"
                    draggable={false}
                  />
                </div>
                <div className="h-[364px]">
                  <Image
                    src="/assets/images/left-2.svg"
                    alt="Right Image"
                    width={338}
                    height={380}
                    className="w-full h-full object-cover rounded-[30px]"
                    draggable={false}
                  />
                </div>
              </div>

              <p className="text-[#00000080] mt-[75px] mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h2 className="text-2xl font-semibold">
                Over a Decade of Real Estate Excellence
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
