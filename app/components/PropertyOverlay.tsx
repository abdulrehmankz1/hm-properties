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
      <h5 className="text-xl text-white font-semibold mb-1">{title}</h5>
      <p className="text-white/50 text-base font-medium leading-[18px]">
        {description}
      </p>
    </div>
  );
};

export default PropertyOverlay;
