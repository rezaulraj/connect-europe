import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-5 max-w-7xl  mx-auto mt-20">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-[55px] capitalize font-bold text-center text-white font-sans">
            We’re Where You Need Us
          </h1>
          <p className="text-white   font-normal text-center font-sans text-[20px]">
            Connect Europe has you covered. Our network of experienced
            consultants spans the entire country, providing local support with
            European-level expertise.
          </p>
        </div>
        <div className="flex justify-center max-w-[700px] items-center mx-auto mt-10">
          <Image
            src="/images/contact1.png"
            alt="logo"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
