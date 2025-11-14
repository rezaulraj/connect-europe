"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SCard from "@/common/SCard";

const testimonialData = [
  {
    quote: "Trigon filled a key position for us within 2 weeks",
    name: "Ing. Maria Pepichová",
    position: "Executive Director",
    logo: "/brand1.png",
    bgImage: "/card1.webp",
  },
  {
    quote: "They understood our culture and hired fast.",
    name: "Johan Keller",
    position: "HR Manager",
    logo: "/brand2.png",
    bgImage: "/card1.webp",
  },
  {
    quote: "Reliable recruitment partner for tech teams.",
    name: "Sophia Ibrahim",
    position: "CTO",
    logo: "/brand3.png",
    bgImage: "/card1.webp",
  },
  {
    quote: "Trigon filled a key position for us within 2 weeks",
    name: "Ing. Maria Pepichová",
    position: "Executive Director",
    logo: "/brand4.png",
    bgImage: "/card1.webp",
  },
  {
    quote: "They understood our culture and hired fast.",
    name: "Johan Keller",
    position: "HR Manager",
    logo: "/brand5.png",
    bgImage: "/card1.webp",
  },
  {
    quote: "Reliable recruitment partner for tech teams.",
    name: "Sophia Ibrahim",
    position: "CTO",
    logo: "/brand6.png",
    bgImage: "/card1.webp",
  },
];
export default function Services() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };
  return (
    <section className="bg-primary py-20 px-5">
      <div className="container mx-auto">
        <div>
          <h1 className="lg:text-[48px] sm:text-[32px] text-[32px] font-bold text-center text-white font-sans  md:text-[40px]">
            Services That Drive Your Success
          </h1>
          <p className="text-[20px] text-white text-center font-sans mt-4">
            Leverage our expertise and proven strategies to build stronger teams
            across Europe.
          </p>
        </div>
        <div className="grid max-w-7xl justify-center items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div>
            <ul className="text-white text-[24px] font-sans space-y-5 upperCase text-end">
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-an-employee/#Recruiting">
                  Talent Acquisition
                </Link>
              </li>
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-an-employee/#Headhunting">Headhunting</Link>
              </li>
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-an-employee/#Interim">Interim Management</Link>
              </li>
            </ul>
          </div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <Image src="/logoshape.png" alt="logo" width={400} height={400} />
          </motion.div>
          <div>
            <ul className="text-white text-[24px] font-sans space-y-5 upperCase text-start">
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-hr-advice/#HR-consultancy">HR Marketing</Link>
              </li>
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-hr-advice/#HR-marketing"> HR Advisory</Link>
              </li>
              <li className=" uppercase hover:underline cursor-pointer">
                <Link href="/get-hr-advice/#Education">
                  Education and Training
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-20">
          <h1 className="lg:text-[48px] sm:text-[32px] text-[32px] font-bold text-center text-white font-sans  md:text-[40px]">
            Our long-term cooperation
          </h1>
          <p className="text-[20px] text-white text-center font-sans mt-4">
            What have clients said about our HR services?
          </p>

          <div className="grid max-w-7xl gap-5 justify-center items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {testimonialData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}>
                <SCard
                  quote={item.quote}
                  name={item.name}
                  position={item.position}
                  logo={item.logo}
                  bgImage={item.bgImage}
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reference"
              className="border  border-white text-white hover:bg-heading hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans mt-10">
              Other Reference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
