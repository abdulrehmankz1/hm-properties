import React from "react";

type ChooseUsCardProps = {
  number: number | string;
  title: string;
  description: string;
};

// function ChooseUsCard({ number, title, description }: ChooseUsCardProps) {
//   return (
//     <div className="p-7 bg-[#F5F7F9] rounded-3xl w-[100%] md:h-[245px] h-[200px] choosUsCard">
//       <div className="py-1.5 px-4 bg-white w-fit rounded-full text-2xl">
//         {number}
//       </div>
//       <div className="text-black md:mt-[70px] mt-[20px] text-2xl">{title}</div>
//       <div className="text-[#00000080] mt-1 whitespace-pre-line text-base">
//         {description}
//       </div>
//     </div>
//   );
// }
function ChooseUsCard({ number, title, description }: ChooseUsCardProps) {
  return (
    <div className="py-7 xl:px-7 lg:px-[26px] md:px-7 px-7 bg-[#F5F7F9] rounded-3xl w-full h-[200px] md:h-[245px] flex flex-col">
      {/* Number Badge */}
      <div className="py-1.5 px-4 bg-white w-fit rounded-full text-2xl">
        {number}
      </div>

      {/* Title and Description Wrapper */}
      <div className="flex-1 flex flex-col justify-end mt-[20px] md:mt-[25px]">
        <div className="text-black text-xl">{title}</div>
        <div className="text-[#00000080] mt-1 whitespace-pre-line text-base">
          {description}
        </div>
      </div>
    </div>
  );
}

export default ChooseUsCard;
