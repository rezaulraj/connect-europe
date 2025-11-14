"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-5 max-w-7xl mx-auto mt-20">
        {/* Heading & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <h1 className="text-[55px] font-bold text-center text-white font-sans">
            About
          </h1>
          <p className="text-white font-normal text-center font-sans text-[20px] mt-2">
            Discover who we are, what drives us, and the story behind our
            journey.
          </p>
        </motion.div>

        {/* Content Block */}
        <div className="bg-white mx-auto w-full lg:p-10 md:p-5 sm:p-4 p-4 rounded-3xl mt-16">
          <div className="grid grid-cols-1 justify-center gap-5 items-center md:grid-cols-1 lg:grid-cols-12">
            {/* Text Content */}
            <motion.div
              className="lg:col-span-5 md:col-span-1 space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <h4 className="text-[24px] font-bold text-heading font-sans">
                Connect Europe: Top Talent, On Demand
              </h4>
              <p className="text-[16px] font-normal text-gray-700 font-sans mt-5">
                At Connect Europe, we specialize in finding the right people
                right when you need them. With over 10 years of experience, our
                team of seasoned industry professionals has been helping
                businesses across Europe attract exceptional talent.
              </p>
              <p className="text-[16px] font-normal text-gray-700 font-sans mt-5">
                Our expertise spans both local markets and international
                recruitment. From executive search to strategic business
                development, we bring deep insight and proven results. This
                unique blend of skills creates powerful synergies that drive
                success for our clients.
              </p>
              <span className="text-[18px] font-bold text-primary font-sans">
                - Ing. Miriam Krpelánová, Managing Director
              </span>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:col-span-7 md:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <Image
                src="/images/team.jpg"
                alt="logo"
                className="w-full h-full rounded-2xl"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
