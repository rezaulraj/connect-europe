"use client";
import React from "react";
import { useInputModel } from "@/context/ModelContext";
export default function Hero() {
  const { openModel } = useInputModel();

  return (
    <section className="bg-primary py-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            loop
            src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1751958617/Connect_Europe_for_website_1_qvivhk.mp4"></video>
        </div>
        <div className="mt-5">
          <h1 className="text-[55px] font-bold text-center text-white font-sans">
            Smart Hiring. Real Results. Europe-Wide.
          </h1>
          <p className="text-white font-normal text-center font-sans text-[20px]">
            At Connect Europe, we don’t just fill roles we find game-changers.
            Fast, efficient, and tailored to your business goals.
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={openModel}
              className="border border-white text-white hover:bg-heading hover:border-heading cursor-pointer duration-200 uppercase px-10 py-3 font-semibold rounded font-sans">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
