"use client";
import React from "react";
import { useInputModel } from "@/context/ModelContext";

interface Props {
  title: string;
  desc: string;
  btn?: boolean;
}
export default function HeroBanner({ title, desc, btn }: Props) {
  const { openModel } = useInputModel();
  return (
    <section className="bg-primary py-20">
      <div className="container px-5 max-w-7xl mx-auto mt-20">
        <h1 className="text-[55px] capitalize font-bold text-center text-white font-sans">
          {title}
        </h1>
        <p className="text-white font-normal text-center font-sans text-[20px]">
          {desc}
        </p>
        {!btn && (
          <div className="flex justify-center mt-10">
            <button
              onClick={openModel}
              className="border border-white text-white hover:bg-heading hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans">
              I’m Interested
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
