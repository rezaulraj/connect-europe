"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const timeline = [
  {
    year: "2014",
    text: " Connect Europe is founded Entered the HR consulting and recruitment market with a fresh, client-centric approach ",
  },
  {
    year: "2016",
    text: "Navigated market shifts and built a strong foundation of trust with clients across Europe",
  },
  {
    year: "2018",
    text: " Expanded into international markets Enhanced recruitment methodologies and consultancy know-how",
  },
  {
    year: "2020",
    text: " Became a leading HR partner in multiple European regions Launched internal training programs to strengthen team expertise",
  },
  {
    year: "2021",
    text: "Introduced consulting services in external HR financing Developed tailor-made strategies for workforce development",
  },
  {
    year: "2022",
    text: " • Offered full-spectrum HR services: from audits to implementation Strengthened partnerships with mid-sized and large European businesses",
  },
  {
    year: "2023",
    text: " Built a stronger, multidisciplinary team of consultants Invested in systematic internal learning and development",
  },
  {
    year: "2024",
    text: "Celebrating 10 years of transforming the way Europe recruits and grows talent Looking ahead: expanding solutions, refining expertise, and growing together with our clients",
  },
];

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 10,
  });

  const dotY = useTransform(springScroll, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          10 Years of Impact Across Europe
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Connect Europe began its journey in 2014, stepping into the
          competitive world of HR consultancy and recruitment with a clear goal:
          to provide smart, people-first solutions that deliver real business
          value. From day one, we’ve combined academic insight with hands-on
          experience, translating knowledge into action.
        </p>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-6">
          Over the past decade, we’ve embraced constant learning, professional
          development, and a commitment to excellence. Here&apos;s how far we’ve
          come:
        </p>
      </div>

      {/* Timeline container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto mt-20 px-4">
        {/* Vertical Line */}
        <div className="absolute top-0 left-3 md:left-1/2 w-[2px] bg-green-500 h-full transform md:-translate-x-1/2 z-0" />

        {/* Moving red dot with pulse */}
        <motion.div
          className="absolute left-3 md:left-1/2 w-5 h-5 rounded-full bg-primary z-10 md:-translate-x-1/2"
          style={{ top: dotY }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Timeline entries */}
        <div className="relative flex flex-col gap-16 py-20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`w-full flex ${
                index % 2 === 0
                  ? "justify-start md:pr-10"
                  : "justify-start md:justify-end md:pl-10"
              }`}>
              <div className="bg-white shadow-md rounded-xl p-6 max-w-md">
                <p className="text-primary font-bold mb-2">{item.year}</p>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
