import React from "react";

type PropertyCardProps = {
  title: string;
  imageUrl: string;
  className?: string;
};

function PropertyCard({ title, imageUrl, className }: PropertyCardProps) {
  return (
    <div
      className={`bg-[#F5F7F9] rounded-[30px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] md:h-[400px] h-[300px] ${className}`}
    >
      <div
        className="w-full md:h-[315px] h-[200px] rounded-[30px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundColor: "lightgray",
        }}
      ></div>

      <div className="text-black text-2xl mt-7 ml-7">{title}</div>
    </div>
  );
}

export default PropertyCard;
