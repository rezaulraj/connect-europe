import Image from "next/image";
import { TestimonialCardProps } from "../types/types";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyLogo,
  quote,
  name,
  title,
  positions,
  company,
}) => {
  return (
    <div className="lg:w-full lg:min-h-[300px] md:h-auto sm:h-auto h-full md:w-full sm:w-full w-[350px] border border-primary rounded-2xl p-6 bg-white shadow-md flex flex-col gap-4">
      {/* Top section: logo + quote */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={companyLogo}
            alt={`${company} logo`}
            width={100}
            height={40}
            className="h-12 w-32 object-contain"
          />
        </div>

        {/* Quote */}
        <p className="text-sm italic text-gray-500 sm:text-right w-full break-words">
          {`"${quote}"`}
        </p>
      </div>

      {/* Name and title */}
      <div>
        <p className="font-bold text-lg text-primary">{name}</p>
        <p className="font-semibold text-sm">{title}</p>
      </div>

      {/* Positions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <p className="text-gray-500 text-sm whitespace-nowrap">
          We have also filled these positions:
        </p>
        <div className="flex flex-wrap gap-2">
          {positions.map((pos, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-primary text-sm px-3 py-1 rounded-full shadow">
              {pos}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
