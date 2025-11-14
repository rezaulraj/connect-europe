"use client";
import React, { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

function Counter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCurrent(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [count, target]);

  return <span>{current}</span>;
}
export default function Banner() {
  return (
    <div className="bg-heading py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center gap-6">
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={10} />+
            </h4>
            <span className="text-white text-[16px]">Years of Experience</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={300} />+
            </h4>
            <span className="text-white text-[16px]">Clients</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={10050} />+
            </h4>
            <span className="text-white text-[16px]">
              Candidates in the Dataset
            </span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={92} />%
            </h4>
            <span className="text-white text-[16px]">Relevant Candidates</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={900} />+
            </h4>
            <span className="text-white text-[16px]"> Interviews Per Year</span>
          </div>
        </div>
      </div>
    </div>
  );
}
