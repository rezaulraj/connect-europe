"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const timeline = [
  { year: 2004, text: "Entering the market and establishing a TC..." },
  { year: 2008, text: "Change of legal form / coping with crisis" },
  { year: 2010, text: "Entry to international markets..." },
  { year: 2015, text: "The largest personnel agency..." },
  { year: 2018, text: "Significant expansion of the consultants..." },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ✅ Debug scrollYProgress (between 0 and 1)

  return (
    <div className="relative max-w-5xl mx-auto mt-10 min-h-[120vh]" ref={ref}>
      {/* Vertical Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-red-200" />

      <motion.div
        className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-red-600 z-10 -translate-x-1/2"
        style={{ y }}
      />
      {/* Timeline Items */}
      <div className="flex flex-col gap-20">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`w-full flex ${
              i % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
            }`}>
            <div className="max-w-md bg-white shadow-lg rounded-xl p-5">
              <p className="text-red-700 font-medium mb-2">{item.year}</p>
              <p className="text-red-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
