import React from "react";
import StepItem from "@/common/StepItem";
import {
  PieChart,
  User,
  Users,
  CalendarClock,
  CheckCircle,
  Flag,
} from "lucide-react"; // Or use your icons

const steps = [
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Role Analysis",
    subtitle:
      " We start with a deep dive into the job position, responsibilities, and ideal candidate profile.",
  },
  {
    icon: <User className="w-8 h-8" />,
    title: " Talent Sourcing",
    subtitle:
      " We search across multiple channels to gather qualified candidates from our network, databases, and beyond.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Candidate Screening",
    subtitle:
      "We conduct interviews and verify each candidate’s experience, skills, and references.",
  },
  {
    icon: <CalendarClock className="w-8 h-8" />,
    title: "Client Interviews",
    subtitle:
      " We arrange meetings between you and the top candidates on-site or virtually.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Feedback Collection",
    subtitle: " You provide input, and we help you make an informed decision.",
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: "Onboarding",
    subtitle:
      " The selected candidate joins your company with our full support.",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-heading md:text-4xl font-bold text-center mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <StepItem
              key={i}
              icon={step.icon}
              step={i + 1}
              title={step.title}
              subtitle={step.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
