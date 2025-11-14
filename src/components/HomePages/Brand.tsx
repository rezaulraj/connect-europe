"use client";
import React from "react";
import Image from "next/image";
import { useInputModel } from "@/context/ModelContext";

const Images = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand5.png",
  "/brand6.png",
  "/brand7.png",
  "/brand8.png",
  "/brand9.png",
  "/brand10.png",
];
export default function Brand() {
  const { openModel } = useInputModel();
  return (
    <div className="bg-white mx-auto px-5 py-20 container max-w-7xl">
      <div className="grid grid-cols-1  justify-center gap-5 items-center md:grid-cols-4 lg:grid-cols-5">
        {Images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="logo"
            className="grayscale hover:grayscale-0 mx-auto duration-300 ease-in-out cursor-pointer"
            width={200}
            height={200}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={openModel}
          className="border border-heading text-heading hover:bg-heading hover:text-white hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans">
          I Need An Employee
        </button>
      </div>
    </div>
  );
}
