import React from "react";

type PropertyCardProps = {
  title: string;
  imageUrl: string;
  className?: string;
};

function PropertyCard({ title, imageUrl, className }: PropertyCardProps) {
  return (
    <div
      className={`bg-[#F5F7F9] rounded-[30px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] ${className}`}
    >
      {/* Image Wrapper */}
      <div className="w-full aspect-square overflow-hidden rounded-[30px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-black text-2xl p-7">{title}</div>
    </div>
  );
}

export default PropertyCard;
