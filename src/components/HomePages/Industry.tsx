"use client";
import React, { useState } from "react";
import ICard from "@/common/ICard";
import { motion, AnimatePresence } from "framer-motion";
import ChartWithMilestones from "@/common/ChartWithMilestones";

interface TabProps {
  title: string;
  description: string;
}
const tabs = ["Segments", "Positions"];

const tabContent: Record<string, TabProps> = {
  Segments: {
    title: "No matter the industry, we find the talent you need.",
    description: "We don’t just promise results, we prove them.",
  },
  Positions: {
    title: "We help you grow Support Teams",
    description: "Find customer support and sales professionals.",
  },
};
const dataService = [
  {
    title: "Engineering Production",
    icon: "H",
    successRate: "88%",
    timeToFill: "2 weeks",
    backText: "Detailed insights or alternate view here!",
    category: "Segments",
  },
  {
    title: "Automotive",
    icon: "A",
    successRate: "92%",
    timeToFill: "1 week",
    backText: "Agile product experts for scalable growth.",
    category: "Segments",
  },
  {
    title: "Retail & Shop",
    icon: "R",
    successRate: "90%",
    timeToFill: "3 weeks",
    backText: "Retail & Shop",
    category: "Segments",
  },
  {
    title: "IT & Tech",
    icon: "IT",
    successRate: "89%",
    timeToFill: "2 weeks",
    backText: "Detailed insights or alternate view here!",
    category: "Segments",
  },
  {
    title: "Services",
    icon: "S",
    successRate: "94%",
    timeToFill: "2 weeks",
    backText: "Services Team",
    category: "Segments",
  },
  {
    title: "Food Production",
    icon: "UX",
    successRate: "91%",
    timeToFill: "1 week",
    backText: "Food Production Team",
    category: "Segments",
  },
  {
    title: "Construction",
    icon: "C",
    successRate: "95%",
    timeToFill: "2 weeks",
    backText: "Detailed insights or alternate view here!",
    category: "Positions",
  },
  {
    title: "Logistics & Transport",
    icon: "L",
    successRate: "91%",
    timeToFill: "1 week",
    backText: "Creative insights and collaboration tools!",
    category: "Positions",
  },
  {
    title: "Hospitality",
    icon: "AM",
    successRate: "89%",
    timeToFill: "2 weeks",
    backText: "Building a culture of innovation.",
    category: "Positions",
  },
  {
    title: "Healthcare",
    icon: "H",
    successRate: "93%",
    timeToFill: "2 weeks",
    backText: "Healthcare Team",
    category: "Positions",
  },
  {
    title: "IT Helpdesk",
    icon: "IT",
    successRate: "90%",
    timeToFill: "1 week",
    backText: "Technical support for everyday operations.",
    category: "Positions",
  },
  {
    title: "Finance Team",
    icon: "F",
    successRate: "94%",
    timeToFill: "2 weeks",
    backText: "Managing budgets and financial performance.",
    category: "Positions",
  },
];

export default function Industry() {
  const [activeTab, setActiveTab] = useState("Segments");

  const filteredData = dataService.filter(
    (item) => item.category === activeTab
  );
  const { title, description } = tabContent[activeTab];

  return (
    <section className="py-20 max-w-7xl mx-auto ">
      <div className="text-center mb-10">
        <motion.h1
          key={title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-[40px] font-bold text-heading font-sans">
          {title}
        </motion.h1>
        <motion.p
          key={description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[20px] font-normal text-heading font-sans">
          {description}
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md cursor-pointer font-semibold border ${
              activeTab === tab
                ? "bg-heading text-white"
                : "border-heading text-heading"
            } transition duration-300`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {filteredData.map(
            (
              item: {
                title: string;
                icon: string;
                successRate: string;
                timeToFill: string;
                backText: string;
              },
              index: React.Key | null | undefined
            ) => (
              <ICard
                key={index}
                title={item.title}
                icon={item.icon}
                successRate={item.successRate}
                timeToFill={item.timeToFill}
                backText={item.backText}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
      <ChartWithMilestones />
    </section>
  );
}
