import Image from "next/image";

type TestimonialCardProps = {
  text: string;
  name: string;
  role: string;
  imageUrl: string;
  className?: string;
};

function TestimonialCard({
  text,
  name,
  role,
  imageUrl,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-[#F5F7F9] rounded-[30px] shadow-[0_0_5px_0_rgba(0,0,0,0.25)] pr-11 p-5 ${className}`}
    >
      <p className="text-[#00000080]">{text}</p>

      <div className="mt-10 flex items-center">
        <Image
          src={imageUrl}
          alt={name}
          height={100}
          width={100}
          className="mr-3 rounded-full"
          draggable={false}
        />
        <div>
          <div className="text-black">{name}</div>
          <div className="text-[#7b7c7d] text-lg -mt-1">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
