"use client";
import React from "react";
import { useInputModel } from "@/context/ModelContext";
import { motion, Variants } from "framer-motion";

interface Datatype {
  title: string;
  desc: string;
}

const data: Datatype[] = [
  {
    title: "Where It All Began",
    desc: "In 2014, Connect Europe stepped into the HR consultancy and recruitment space with a bold vision: to combine academic insight with real-world solutions. From our earliest days, we’ve been driven by a passion for connecting the right people with the right opportunities. Continuous learning and professional growth have guided us ever since.",
  },
  {
    title: "Growing Through Challenges",
    desc: "By 2016, we had officially registered as a limited liability company and were already facing one of the toughest economic periods for recruitment across Europe. Despite the challenges, we adapted quickly and emerged stronger, laying the foundation for future success.",
  },
  {
    title: "Going Global",
    desc: "2018 marked our entry into the international recruitment market. We expanded our services beyond borders, refined our processes, and built a strong headhunting division for specialist and executive roles. Today, our cross-border recruitment experience is one of our key strengths.",
  },
  {
    title: "Earning Trust, Delivering Results",
    desc: "Thanks to our client-first approach, consistent results, and proven processes, we quickly became a trusted name in the regions we serve. Our reputation is built on quality, transparency, and long-term partnerships and that’s why our clients stay with us.",
  },
  {
    title: "Local Presence, European Reach",
    desc: "We introduced a network of experienced external consultants to bring our services closer to clients. This scalable model allows us to meet recruitment needs across multiple European countries, ensuring both flexibility and proximity.",
  },
  {
    title: "We’re Closer Than You Think",
    desc: "Our growing network of senior consultants spans major cities and regions across Europe. From our base to your business, we combine deep industry insight with local knowledge to deliver tailored recruitment solutions no matter your sector or location.",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Ourway() {
  const { openModel } = useInputModel();

  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-heading mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          Our Journey at Connect Europe
        </motion.h1>

        {/* Timeline blocks */}
        <motion.div
          className=""
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="max-w-3xl mx-auto mt-16">
              <h5 className="text-primary text-2xl font-bold">{item.title}</h5>
              <p className="text-gray-600 text-start mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Final Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          We are close to you
        </motion.h1>

        <motion.p
          className="text-gray-600 text-center font-bold mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          Need an Employee?
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          <p className="text-gray-600 text-start mt-3">
            We’ll help you find the right fit fast. Connect Europe delivers
            expert recruitment services across Europe, backed by a decade of
            hands-on experience and a passion for people.
          </p>
          <p className="text-gray-600 text-start mt-3">
            Your new employees are closer than you think!
          </p>
          <div className="text-center">
            <motion.button
              onClick={openModel}
              className="border border-heading text-heading hover:bg-heading hover:text-white hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans mt-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              I need an employee
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
