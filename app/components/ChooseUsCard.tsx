import React from "react";

type ChooseUsCardProps = {
  number: number | string;
  title: string;
  description: string;
};

function ChooseUsCard({ number, title, description }: ChooseUsCardProps) {
  return (
    <div className="p-7 bg-[#F5F7F9] rounded-3xl w-[265px] h-[245px] mb-5 choosUsCard">
      <div className="py-1.5 px-4 bg-white text-xl font-medium w-fit rounded-full">
        {number}
      </div>
      <div className="text-xl font-medium text-black mt-[70px]">{title}</div>
      <div className="text-[#00000080] mt-1 whitespace-pre-line">
        {description}
      </div>
    </div>
  );
}

export default ChooseUsCard;
