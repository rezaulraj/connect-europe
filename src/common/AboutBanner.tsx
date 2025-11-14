import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
};
export default function AboutBanner({ image, title, subtitle, desc }: Props) {
  return (
    <div className="container ml-auto bg-heading rounded-l-2xl py-10 px-5">
      <div className="flex lg:flex-row md:flex-col flex-col items-start gap-x-10">
        <div>
          <Image
            src={image}
            alt="hero"
            width={400}
            height={400}
            className="rounded-md max-w-[350px]"
          />
        </div>
        <div className="flex flex-col max-w-2xl items-start">
          <h1 className="text-[55px] capitalize font-bold text-center text-white font-sans">
            {title}
          </h1>
          <h1 className="text-[24px] capitalize font-bold text-center text-white font-sans">
            {subtitle}
          </h1>
          <p className="text-white font-normal text-start font-sans text-[20px]">
            {desc}
          </p>
          <div className="flex justify-center mt-10">
            <Link
              href="/about"
              className="border border-white text-white hover:bg-primary hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
