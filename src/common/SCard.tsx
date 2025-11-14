import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  logo: string;
  bgImage: string;
}

export default function SCard({
  quote,
  name,
  position,
  logo,
  bgImage,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white p-5 overflow-hidden rounded-md h-[250px] flex flex-col bg-no-repeat bg-[length:120px] bg-[position:100%_125%]`}
      style={{ backgroundImage: `url(${bgImage})` }}>
      <h3 className="text-[24px] text-primary font-bold font-sans">
        &quot;{quote}&quot;
      </h3>
      <div className="mt-1">
        <span className="text-[18px] text-heading font-sans">{name}</span>
        <p className="text-[12px] text-gray-600 font-sans">{position}</p>
        <Image
          src={logo}
          alt="logo"
          className="mt-5"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
