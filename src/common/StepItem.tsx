import React from "react";

type StepItemProps = {
  icon: React.ReactNode;
  step: number;
  title: string;
  subtitle: string;
};

const StepItem: React.FC<StepItemProps> = ({ icon, step, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Icon circle */}
      <div className="w-24 h-24 bg-[#f8e1d9] rounded-full flex items-center justify-center mb-4 relative">
        <div className="text-primary text-[30px]">{icon}</div>

        {/* Step badge */}
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          Step {step}
        </div>
      </div>

      {/* Title + subtitle */}
      <h3 className="font-semibold text-lg text-black">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
    </div>
  );
};

export default StepItem;
