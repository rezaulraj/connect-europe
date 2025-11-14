"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Patner() {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 px-5 sm:grid-cols-1 grid-cols-1 justify-between items-center">
        {/* Left Person */}
        <motion.div
          className="col-span-1 flex justify-center items-end space-x-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <Image src="/manager.png" alt="logo" width={400} height={400} />
          <div className="mb-10">
            <h1 className="text-[40px] font-bold text-heading font-sans">
              Miriam Krpelánová
            </h1>
            <p className="text-[20px] font-normal text-heading font-sans">
              Managing Director
            </p>
          </div>
        </motion.div>

        {/* Right Person */}
        <motion.div
          className="col-span-1 flex justify-center items-start space-x-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="mt-10">
            <h1 className="text-[40px] font-bold text-heading font-sans">
              Miroslav Lichy
            </h1>
            <p className="text-[20px] font-normal text-heading font-sans">
              Managing Partner
            </p>
          </div>
          <Image
            src="/patner.webp"
            alt="logo"
            className="mt-5"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
