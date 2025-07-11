import React, { ReactNode } from "react";

interface PropertyOverlayProps {
  title: string;
  description: ReactNode;
}

const PropertyOverlay: React.FC<PropertyOverlayProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-[95%] px-5 py-5 mb-5 rounded-[30px] bg-black/40 backdrop-blur text-left">
      <h5 className="text-white font-semibold mb-1">{title}</h5>
      <div className="text-[#969696] text-base leading-[18px]">
        {description}
      </div>
    </div>
  );
};

export default PropertyOverlay;
