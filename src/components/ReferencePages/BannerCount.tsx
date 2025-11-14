"use client";
import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 3.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCurrent(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [count, target]);

  return <span>{current}</span>;
}
export default function BannerCount() {
  return (
    <div className="bg-heading py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center">
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={21} />+
            </h4>
            <span className="text-white text-[16px]">rokov skúseností</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={455} />+
            </h4>
            <span className="text-white text-[16px]">clients</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={28200} />+
            </h4>
            <span className="text-white text-[16px]">
              candidates in the dataset
            </span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={94} />%
            </h4>
            <span className="text-white text-[16px]">relevant candidates</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              <Counter target={1600} />+
            </h4>
            <span className="text-white text-[16px]">interviews per year</span>
          </div>
        </div>
      </div>
    </div>
  );
}
