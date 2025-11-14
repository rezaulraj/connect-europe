"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { year: 2004, value: 20, text: "Started journey" },
  { year: 2008, value: 25, text: "Small growth phase" },
  { year: 2010, value: 28, text: "New team onboarded" },
  { year: 2015, value: 32, text: "Rebrand & hiring" },
  { year: 2018, value: 40, text: "Significant expansion of consultants" },
  { year: 2020, value: 45, text: "Entered global markets" },
  { year: 2021, value: 50, text: "Customer success doubled" },
  { year: 2022, value: 48, text: "Internal restructuring" },
  { year: 2023, value: 52, text: "Automation introduced" },
  { year: 2024, value: 58, text: "Steady growth projected" },
];

export default function ChartWithMilestones() {
  const [activeIndex, setActiveIndex] = useState(4); // Default: 2018

  const activeData = data[activeIndex];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-5">
      <h1 className="text-center text-4xl font-bold text-heading mb-6">
        We are better every day
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeData.year}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8">
          <div className="inline-block bg-white shadow-md px-6 py-3 rounded-xl text-sm text-primary font-medium">
            {activeData.text}
          </div>
        </motion.div>
      </AnimatePresence>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          onMouseMove={(e) => {
            if (
              e &&
              typeof e.activeTooltipIndex === "number" &&
              e.activeTooltipIndex !== activeIndex
            ) {
              setActiveIndex(e.activeTooltipIndex);
            }
          }}
          onMouseLeave={() => setActiveIndex(4)} // reset to default
        >
          <defs>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d97706" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="year"
            tick={{ fill: "#eab308", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip contentStyle={{ display: "none" }} />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#f59e0b"
            fill="url(#colorGrowth)"
            strokeWidth={2}
          />

          {/* Highlight active dot */}
          {data.map((entry, index) => (
            <ReferenceDot
              key={entry.year}
              x={entry.year}
              y={entry.value}
              r={index === activeIndex ? 5 : 4}
              fill={index === activeIndex ? "#b91c1c" : "#fcd34d"}
              stroke="none"
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
