"use client";
import React from "react";

type CardProps = {
  title: string;
  icon: string;
  successRate: string;
  timeToFill: string;
  backText: string;
};

export default function ICard({
  title,
  icon,
  successRate,
  timeToFill,
  backText,
}: CardProps) {
  return (
    <div className="card-container mx-auto w-full h-[250px] md:w-80 md:h-52 lg:w-96 lg:h-52">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-face py-10 px-4 card-front">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-primary font-bold">
              {icon}
            </div>
            <h2 className="text-[24px] text-heading font-semibold">{title}</h2>
          </div>
          <div className="flex justify-between items-end pt-2 border-t border-gray-400 mt-3">
            <div>
              <p className="text-primary text-[24px] font-bold">
                {successRate}%
              </p>
              <p className="text-xs text-gray-500">success</p>
            </div>
            <div>
              <p className="text-primary text-[24px] font-bold">{timeToFill}</p>
              <p className="text-xs text-gray-500">to fill</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face py-10 px-4 card-back border-green-500 border-1">
          <p className="text-green-700 font-semibold text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
}
